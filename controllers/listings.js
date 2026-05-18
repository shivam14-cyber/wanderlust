const Listing = require("../model/listing");
const maptiler = require("@maptiler/client");
maptiler.config.apiKey = process.env.MAPTOKEN;

//index router
module.exports.index=async (req, res) => {
  const allListings = await Listing.find({});
  res.render("listings/index.ejs", { allListings });
};

//new route
module.exports.renderNewForm=(req, res) => {
  res.render("listings/new.ejs");
};

//show router
module.exports.showRoute=async (req, res) => {
  let listing = await Listing.findById(req.params.id)
    .populate({path:"reviews",populate:{path:'author'}})
    .populate("owner");
    const result = await maptiler.geocoding.forward(
    listing.location
    );
     let coordinates =
    result.features[0].geometry.coordinates;
  if (!listing) {
    req.flash("error", "Listing not found");
    return res.redirect("/listings");
  }
  res.render("listings/show.ejs", { listing,mapToken: process.env.MAPTOKEN,coordinates });
};

//create router
module.exports.postRoute=async (req, res) => {
  let url=req.file.path;
  let filename=req.file.filename;
  let listing = new Listing(req.body.listing);
  listing.owner = req.user._id;
  listing.image={url,filename};
  await listing.save();
  res.redirect("/listings");
};

//edit router
module.exports.editRouter = async (req, res) => {
  let listing = await Listing.findById(req.params.id);
  if (!listing) {
    req.flash("error", "Listing not found");
    return res.redirect("/listings");
  }
  let originalImage = listing.image.url;
  originalImage = originalImage.replace(
    "/upload",
    "/upload/h_300,w_300"
  );
  res.render("listings/edit.ejs", {
    listing,
    originalImage
  });
};

//updateRouter
module.exports.updateRouter=async (req, res) => {
    let { id } = req.params;
    let listing= await Listing.findByIdAndUpdate(id, req.body.listing);
    if(typeof req.file !=="undefined"){
    let url=req.file.path;
    let filename=req.file.filename;
    listing.image={url,filename};
    await listing.save();
    }
    res.redirect(`/listings/${id}`);
  };

  //deleter router
module.exports.deleteRouter=async (req, res) => {
    let { id } = req.params;
    await Listing.findByIdAndDelete(id);
    res.redirect("/listings");
  };