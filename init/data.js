const sampleListings = [
  {
    title: "Cozy Beachfront Cottage",
    description:
      "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
    image:{
     filename:"listingimage",
     url:"https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
    },
    price: 1500,
    location: "Malibu",
    country: "United States",
    category: "Domes"
  },
  {
    title: "Modern Loft in Downtown",
    description:
      "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
    image:{
     filename:"listingimage",
     url:"https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
    },
    
    price: 1200,
    location: "New York City",
    country: "United States",
     category: "Mountains"
  },
  {
    title: "Mountain Retreat",
    description:
      "Unplug and unwind in this peaceful mountain cabin. Surrounded by nature, it's a perfect place to recharge.",
    image:{
     filename:"listingimage",
     url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
    },
    
    price: 1000,
    location: "Aspen",
    country: "United States",
     category: "Mountains"
  },
  {
    title: "Historic Villa in Tuscany",
    description:
      "Experience the charm of Tuscany in this beautifully restored villa. Explore the rolling hills and vineyards.",
    image:
       {
     filename:"listingimage",
     url:"https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
       },
    
    price: 2500,
    location: "Florence",
    country: "Italy",
     category: "Rooms"
  },
  {
    title: "Secluded Treehouse Getaway",
    description:
      "Live among the treetops in this unique treehouse retreat. A true nature lover's paradise.",
    image:{
     filename:"listingimage",
     url:  "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
    },
    
    price: 800,
    location: "Portland",
    country: "United States",
    category: "Rooms"
  },
  {
    title: "Beachfront Paradise",
    description:
      "Step out of your door onto the sandy beach. This beachfront condo offers the ultimate relaxation.",
    image:{
     filename:"listingimage",
     url:"https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
    },
    price: 2000,
    location: "Cancun",
    country: "Mexico",
    category: "Domes"
  },
  {
    title: "Rustic Cabin by the Lake",
    description:
      "Spend your days fishing and kayaking on the serene lake. This cozy cabin is perfect for outdoor enthusiasts.",
    image:{
     filename:"listingimage",
     url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
    },
    
    price: 900,
    location: "Lake Tahoe",
    country: "United States",
    category: "Rooms"
  },
  {
    title: "Luxury Penthouse with City Views",
    description:
      "Indulge in luxury living with panoramic city views from this stunning penthouse apartment.",
    image: {
     filename:"listingimage",
     url:"https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
    },
    
    price: 3500,
    location: "Los Angeles",
    country: "United States",
    category: "Arctic"
  },
  {
    title: "Ski-In/Ski-Out Chalet",
    description:
      "Hit the slopes right from your doorstep in this ski-in/ski-out chalet in the Swiss Alps.",
    image: {
     filename:"listingimage",
     url:"https://images.unsplash.com/photo-1502784444187-359ac186c5bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
    },
    
    price: 3000,
    location: "Verbier",
    country: "Switzerland",
     category: "Iconiccity"
  },
  {
    title: "Safari Lodge in the Serengeti",
    description:
      "Experience the thrill of the wild in a comfortable safari lodge. Witness the Great Migration up close.",
    image:{
     filename:"listingimage",
     url:"https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
    },
    price: 4000,
    location: "Serengeti National Park",
    country: "Tanzania",
     category: "Iconiccity"
  },
  {
    title: "Historic Canal House",
    description:
      "Stay in a piece of history in this beautifully preserved canal house in Amsterdam's iconic district.",
    image:{
     filename:"listingimage",
     url:  "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FtcGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
    },
    
    price: 1800,
    location: "Amsterdam",
    country: "Netherlands",
     category: "Iconiccity"
  },
  {
    title: "Private Island Retreat",
    description:
      "Have an entire island to yourself for a truly exclusive and unforgettable vacation experience.",
    image: 
       {
     filename:"listingimage",
     url:"https://images.unsplash.com/photo-1618140052121-39fc6db33972?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bG9kZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
       },

    price: 10000,
    location: "Fiji",
    country: "Fiji",
     category: "Iconiccity"
  },
  {
    title: "Charming Cottage in the Cotswolds",
    description:
      "Escape to the picturesque Cotswolds in this quaint and charming cottage with a thatched roof.",
    image:
      {
     filename:"listingimage",
     url:"https://images.unsplash.com/photo-1602088113235-229c19758e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmVhY2glMjB2YWNhdGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
      },
    
    price: 1200,
    location: "Cotswolds",
    country: "United Kingdom",
    category: "Trending"
  },
  {
    title: "Historic Brownstone in Boston",
    description:
      "Step back in time in this elegant historic brownstone located in the heart of Boston.",
    image: {
     filename:"listingimage",
     url:"https://images.unsplash.com/photo-1533619239233-6280475a633a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
    },
    
    price: 2200,
    location: "Boston",
    country: "United States",
    category: "Trending"
  },
  {
    title: "Beachfront Bungalow in Bali",
    description:
      "Relax on the sandy shores of Bali in this beautiful beachfront bungalow with a private pool.",
    image:{
     filename:"listingimage",
     url: "https://images.unsplash.com/photo-1602391833977-358a52198938?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
    },
    price: 1800,
    location: "Bali",
    country: "Indonesia",
    category: "Trending"
  },
  {
    title: "Mountain View Cabin in Banff",
    description:
      "Enjoy breathtaking mountain views from this cozy cabin in the Canadian Rockies.",
    image:{
     filename:"listingimage",
     url: "https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"},
    
    price: 1500,
    location: "Banff",
    country: "Canada",
     category: "Castle"
  },
  {
    title: "Art Deco Apartment in Miami",
    description:
      "Step into the glamour of the 1920s in this stylish Art Deco apartment in South Beach.",
    image:{
     filename:"listingimage",
     url:  "https://plus.unsplash.com/premium_photo-1670963964797-942df1804579?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
    },
    
    price: 1600,
    location: "Miami",
    country: "United States",
    category: "Castle"
  },
  {
    title: "Tropical Villa in Phuket",
    description:
      "Escape to a tropical paradise in this luxurious villa with a private infinity pool in Phuket.",
    image:{
     filename:"listingimage",
     url: "https://images.unsplash.com/photo-1470165301023-58dab8118cc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
    },
    
    price: 3000,
    location: "Phuket",
    country: "Thailand",
    category: "Castle"
  },
  {
    title: "Historic Castle in Scotland",
    description:
      "Live like royalty in this historic castle in the Scottish Highlands. Explore the rugged beauty of the area.",
    image:{
     filename:"listingimage",
     url: "https://images.unsplash.com/photo-1585543805890-6051f7829f98?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJlYWNoJTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
    },
    price: 4000,
    location: "Scottish Highlands",
    country: "United Kingdom",
    category: "Castle"
  },
  {
    title: "Desert Oasis in Dubai",
    description:
      "Experience luxury in the middle of the desert in this opulent oasis in Dubai with a private pool.",
    image:{
     filename:"listingimage",
     url: "https://images.unsplash.com/photo-1518684079-3c830dcef090?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHViYWl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
    },
    price: 5000,
    location: "Dubai",
    country: "United Arab Emirates",
    category: "Pools"
  },
  {
    title: "Rustic Log Cabin in Montana",
    description:
      "Unplug and unwind in this cozy log cabin surrounded by the natural beauty of Montana.",
    image:{
     filename:"listingimage",
     url:"https://images.unsplash.com/photo-1586375300773-8384e3e4916f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
    },
    
    price: 1100,
    location: "Montana",
    country: "United States",
    category: "Pools"
  },
  {
    title: "Beachfront Villa in Greece",
    description:
      "Enjoy the crystal-clear waters of the Mediterranean in this beautiful beachfront villa on a Greek island.",
    image:{
     filename:"listingimage",
     url:"https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dmlsbGF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
    },
    
    price: 2500,
    location: "Mykonos",
    country: "Greece",
    category: "Pools"
  },
  {
    title: "Eco-Friendly Treehouse Retreat",
    description:
      "Stay in an eco-friendly treehouse nestled in the forest. It's the perfect escape for nature lovers.",
    image:{
     filename:"listingimage",
     url:"https://images.unsplash.com/photo-1488462237308-ecaa28b729d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
    },
    
    price: 750,
    location: "Costa Rica",
    country: "Costa Rica",
    category: "Pools"
  },
  {
    title: "Historic Cottage in Charleston",
    description:
      "Experience the charm of historic Charleston in this beautifully restored cottage with a private garden.",
    image:{
     filename:"listingimage",
     url: "https://images.unsplash.com/photo-1587381420270-3e1a5b9e6904?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
    },
    
    price: 1600,
    location: "Charleston",
    country: "United States",
    category: "Pools"
  },
  {
    title: "Modern Apartment in Tokyo",
    description:
      "Explore the vibrant city of Tokyo from this modern and centrally located apartment.",
    image:{
     filename:"listingimage",
     url:  "https://images.unsplash.com/photo-1480796927426-f609979314bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHRva3lvfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
    },
    
    price: 2000,
    location: "Tokyo",
    country: "Japan",
    category: "Camping"
  },
  {
    title: "Lakefront Cabin in New Hampshire",
    description:
      "Spend your days by the lake in this cozy cabin in the scenic White Mountains of New Hampshire.",
    image:{
     filename:"listingimage",
     url: "https://images.unsplash.com/photo-1578645510447-e20b4311e3ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
    },
    
    price: 1200,
    location: "New Hampshire",
    country: "United States",
    category: "Camping"
  },
  {
    title: "Luxury Villa in the Maldives",
    description:
      "Indulge in luxury in this overwater villa in the Maldives with stunning views of the Indian Ocean.",
    image:{
     filename:"listingimage",
     url: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGFrZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
    },
    
    price: 6000,
    location: "Maldives",
    country: "Maldives",
    category: "Camping"
  },
  {
    title: "Ski Chalet in Aspen",
    description:
      "Hit the slopes in style with this luxurious ski chalet in the world-famous Aspen ski resort.",
    image:{
     filename:"listingimage",
     url: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGxha2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
    },
    
    price: 4000,
    location: "Aspen",
    country: "United States",
    category: "Camping"
  },
  {
    title: "Secluded Beach House in Costa Rica",
    description:
      "Escape to a secluded beach house on the Pacific coast of Costa Rica. Surf, relax, and unwind.",
    image:{
     filename:"listingimage",
     url:"https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2glMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
    },
    
    price: 1800,
    location: "Costa Rica",
    country: "Costa Rica",
    category: "Farms"
  },
  
  {
    title: "Luxury Mountain Dome",
    description:
      "Enjoy a peaceful stay in this beautiful mountain dome surrounded by nature and fresh air.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=60"
    },
    price: 2200,
    location: "Aspen",
    country: "United States",
    category: "Domes"
  },

  {
    title: "Forest Glass Dome",
    description:
      "A cozy glass dome in the middle of the forest with stunning night sky views.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=60"
    },
    price: 1800,
    location: "Vancouver",
    country: "Canada",
    category: "Domes"
  },

  {
    title: "Desert Dome Retreat",
    description:
      "Relax in this modern desert dome with breathtaking sunset views.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=800&q=60"
    },
    price: 2500,
    location: "Dubai",
    country: "UAE",
    category: "Domes"
  },

  {
    title: "Snowy Dome Cabin",
    description:
      "Experience snowfall and cozy interiors in this beautiful snowy dome cabin.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=60"
    },
    price: 2100,
    location: "Zurich",
    country: "Switzerland",
    category: "Domes"
  },

  {
    title: "Lake View Dome",
    description:
      "A peaceful dome stay with a stunning lake view and relaxing atmosphere.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=60"
    },
    price: 1700,
    location: "Ontario",
    country: "Canada",
    category: "Domes"
  },

  {
    title: "Tropical Dome House",
    description:
      "Enjoy tropical vibes and greenery in this stylish dome house.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=60"
    },
    price: 2600,
    location: "Bali",
    country: "Indonesia",
    category: "Domes"
  },

  {
    title: "Eco Nature Dome",
    description:
      "Stay close to nature in this eco-friendly dome with modern facilities.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=800&q=60"
    },
    price: 1900,
    location: "Kerala",
    country: "India",
    category: "Domes"
  },

  {
    title: "Romantic Dome Escape",
    description:
      "Perfect romantic getaway dome with candlelight ambiance and scenic beauty.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1505692952047-1a78307da8f2?auto=format&fit=crop&w=800&q=60"
    },
    price: 3000,
    location: "Paris",
    country: "France",
    category: "Domes"
  },

  {
    title: "Island Dome Villa",
    description:
      "Beautiful island dome villa with beach access and luxurious interiors.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=800&q=60"
    },
    price: 3500,
    location: "Maldives",
    country: "Maldives",
    category: "Domes"
  },

  {
    title: "Sunset Dome Camp",
    description:
      "Enjoy mesmerizing sunset views from this stylish dome camp.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=60"
    },
    price: 1600,
    location: "Goa",
    country: "India",
    category: "Domes"
  },
  {
    title: "Snowy Mountain Cabin",
    description:
      "Enjoy breathtaking snowy mountain views in this cozy wooden cabin retreat.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=60"
    },
    price: 2200,
    location: "Aspen",
    country: "United States",
    category: "Mountains"
  },

  {
    title: "Luxury Mountain Resort",
    description:
      "A luxurious mountain resort surrounded by peaceful forests and fresh air.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=60"
    },
    price: 3200,
    location: "Swiss Alps",
    country: "Switzerland",
    category: "Mountains"
  },

  {
    title: "Hilltop Wooden Cottage",
    description:
      "Relax in this charming hilltop cottage with panoramic mountain scenery.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=60"
    },
    price: 1800,
    location: "Manali",
    country: "India",
    category: "Mountains"
  },

  {
    title: "Adventure Mountain Camp",
    description:
      "Perfect place for trekking lovers and adventure seekers in the mountains.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=60"
    },
    price: 1500,
    location: "Leh",
    country: "India",
    category: "Mountains"
  },

  {
    title: "Peaceful Mountain Escape",
    description:
      "Escape city life and enjoy peace in this beautiful mountain stay.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=800&q=60"
    },
    price: 1700,
    location: "Banff",
    country: "Canada",
    category: "Mountains"
  },

  {
    title: "Forest Mountain Villa",
    description:
      "A modern villa hidden between mountains and lush green forests.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=800&q=60"
    },
    price: 2800,
    location: "Shimla",
    country: "India",
    category: "Mountains"
  },

  {
    title: "Sunrise Peak Cabin",
    description:
      "Wake up to stunning sunrise views over the mountain peaks.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=60"
    },
    price: 2400,
    location: "Colorado",
    country: "United States",
    category: "Mountains"
  },

  {
    title: "Luxury Hillside Retreat",
    description:
      "Stylish hillside retreat with breathtaking mountain landscapes.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=60"
    },
    price: 2600,
    location: "Queenstown",
    country: "New Zealand",
    category: "Mountains"
  },

  {
    title: "Nature Mountain Lodge",
    description:
      "Enjoy a nature-filled getaway in this peaceful mountain lodge.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=800&q=60"
    },
    price: 2100,
    location: "Kathmandu",
    country: "Nepal",
    category: "Mountains"
  },

  {
    title: "Rocky Mountain Chalet",
    description:
      "A cozy chalet surrounded by rocky mountains and pine forests.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=800&q=60"
    },
    price: 2900,
    location: "Denver",
    country: "United States",
    category: "Mountains"
  },

  {
    title: "Misty Mountain House",
    description:
      "Stay above the clouds in this misty mountain house.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?auto=format&fit=crop&w=800&q=60"
    },
    price: 2000,
    location: "Darjeeling",
    country: "India",
    category: "Mountains"
  },

  {
    title: "Mountain View Apartment",
    description:
      "Modern apartment with large windows overlooking beautiful mountains.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=60"
    },
    price: 1900,
    location: "Innsbruck",
    country: "Austria",
    category: "Mountains"
  },

  {
    title: "Hidden Valley Cabin",
    description:
      "A hidden mountain cabin perfect for a peaceful vacation.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=800&q=60"
    },
    price: 1750,
    location: "Nainital",
    country: "India",
    category: "Mountains"
  },

  {
    title: "Luxury Snow Chalet",
    description:
      "Premium snow chalet with fireplace and mountain adventures nearby.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=60"
    },
    price: 3500,
    location: "Zermatt",
    country: "Switzerland",
    category: "Mountains"
  },

  {
    title: "Green Hills Retreat",
    description:
      "Relax among green hills and cool mountain breezes.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=800&q=60"
    },
    price: 1600,
    location: "Ooty",
    country: "India",
    category: "Mountains"
  },

  {
    title: "Wild Mountain Camp",
    description:
      "Experience thrilling outdoor adventures in the wild mountains.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=800&q=60"
    },
    price: 1450,
    location: "Sikkim",
    country: "India",
    category: "Mountains"
  },

  {
    title: "Mountain Lake Retreat",
    description:
      "Beautiful retreat beside a crystal-clear mountain lake.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&w=800&q=60"
    },
    price: 2700,
    location: "Lake Tahoe",
    country: "United States",
    category: "Mountains"
  },

  {
    title: "Rustic Hill Cabin",
    description:
      "A rustic cabin surrounded by peaceful mountain hills.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=800&q=60"
    },
    price: 1850,
    location: "Mussoorie",
    country: "India",
    category: "Mountains"
  },

  {
    title: "Cloud Mountain Resort",
    description:
      "Enjoy luxury living high above the clouds in this mountain resort.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1505692952047-1a78307da8f2?auto=format&fit=crop&w=800&q=60"
    },
    price: 3300,
    location: "Bhutan",
    country: "Bhutan",
    category: "Mountains"
  },

  {
    title: "Mountain Paradise Villa",
    description:
      "A paradise villa offering unmatched mountain beauty and comfort.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=800&q=60"
    },
    price: 3100,
    location: "Alaska",
    country: "United States",
    category: "Mountains"
  },
   {
    title: "Luxury Hotel Room",
    description:
      "Enjoy a comfortable and luxurious stay in this modern hotel room with city views.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=60"
    },
    price: 2200,
    location: "Dubai",
    country: "UAE",
    category: "Rooms"
  },

  {
    title: "Cozy Guest Room",
    description:
      "Relax in this cozy guest room with elegant interiors and modern amenities.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=60"
    },
    price: 1400,
    location: "Delhi",
    country: "India",
    category: "Rooms"
  },

  {
    title: "Modern Studio Room",
    description:
      "A stylish studio room perfect for business and vacation travelers.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=60"
    },
    price: 1800,
    location: "New York",
    country: "United States",
    category: "Rooms"
  },

  {
    title: "Beachside Hotel Room",
    description:
      "Wake up to beautiful ocean views in this relaxing beachside room.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?auto=format&fit=crop&w=800&q=60"
    },
    price: 2600,
    location: "Goa",
    country: "India",
    category: "Rooms"
  },

  {
    title: "Premium King Room",
    description:
      "Spacious king-size room with luxury furniture and premium facilities.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=60"
    },
    price: 2400,
    location: "London",
    country: "United Kingdom",
    category: "Rooms"
  },

  {
    title: "Mountain View Room",
    description:
      "Beautiful room with breathtaking mountain scenery and peaceful vibes.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=60"
    },
    price: 2100,
    location: "Manali",
    country: "India",
    category: "Rooms"
  },

  {
    title: "Luxury Suite Room",
    description:
      "Experience ultimate comfort in this premium luxury suite room.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1505692952047-1a78307da8f2?auto=format&fit=crop&w=800&q=60"
    },
    price: 3500,
    location: "Paris",
    country: "France",
    category: "Rooms"
  },

  {
    title: "Classic Hotel Room",
    description:
      "A classic hotel room with elegant decor and relaxing ambiance.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=800&q=60"
    },
    price: 1700,
    location: "Rome",
    country: "Italy",
    category: "Rooms"
  },

  {
    title: "City Lights Room",
    description:
      "Modern room with amazing city skyline views during the night.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=800&q=60"
    },
    price: 2800,
    location: "Tokyo",
    country: "Japan",
    category: "Rooms"
  },

  {
    title: "Elegant Double Room",
    description:
      "An elegant double room designed for comfort and convenience.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=60"
    },
    price: 1600,
    location: "Bangkok",
    country: "Thailand",
    category: "Rooms"
  },

  {
    title: "Nature Resort Room",
    description:
      "Peaceful room surrounded by greenery and fresh natural air.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=800&q=60"
    },
    price: 2300,
    location: "Kerala",
    country: "India",
    category: "Rooms"
  },

  {
    title: "Luxury Penthouse Room",
    description:
      "A stylish penthouse room with premium modern interiors.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=800&q=60"
    },
    price: 4200,
    location: "Singapore",
    country: "Singapore",
    category: "Rooms"
  },

  {
    title: "Minimal White Room",
    description:
      "Simple and modern white-themed room with a peaceful atmosphere.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=800&q=60"
    },
    price: 1900,
    location: "Seoul",
    country: "South Korea",
    category: "Rooms"
  },

  {
    title: "Royal Heritage Room",
    description:
      "Stay in a heritage-style room with royal interiors and comfort.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=800&q=60"
    },
    price: 3100,
    location: "Jaipur",
    country: "India",
    category: "Rooms"
  },

  {
    title: "Poolside Resort Room",
    description:
      "Enjoy a refreshing stay in this beautiful poolside room.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=800&q=60"
    },
    price: 2600,
    location: "Bali",
    country: "Indonesia",
    category: "Rooms"
  },

  {
    title: "Romantic Couple Room",
    description:
      "Perfect romantic room setup for couples with luxury comfort.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1505692952047-1a78307da8f2?auto=format&fit=crop&w=800&q=60"
    },
    price: 2700,
    location: "Venice",
    country: "Italy",
    category: "Rooms"
  },

  {
    title: "Budget Comfort Room",
    description:
      "Affordable and comfortable room for budget-friendly travelers.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1464890100898-a385f744067f?auto=format&fit=crop&w=800&q=60"
    },
    price: 1200,
    location: "Mumbai",
    country: "India",
    category: "Rooms"
  },

  {
    title: "Luxury Business Room",
    description:
      "Modern business room with workspace and premium facilities.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=60"
    },
    price: 3000,
    location: "Hong Kong",
    country: "China",
    category: "Rooms"
  },

  {
    title: "Garden View Room",
    description:
      "Relax with beautiful garden views and peaceful surroundings.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&w=800&q=60"
    },
    price: 2000,
    location: "Sydney",
    country: "Australia",
    category: "Rooms"
  },

  {
    title: "Ocean Luxury Room",
    description:
      "Luxury room with direct ocean views and elegant interiors.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=60"
    },
    price: 3900,
    location: "Maldives",
    country: "Maldives",
    category: "Rooms"
  },
  {
    title: "Snowy Arctic Cabin",
    description:
      "Experience the beauty of the Arctic in this cozy snowy cabin surrounded by ice mountains.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?auto=format&fit=crop&w=800&q=60"
    },
    price: 3200,
    location: "Reykjavik",
    country: "Iceland",
    category: "Arctic"
  },

  {
    title: "Frozen Igloo Retreat",
    description:
      "Stay in a luxury igloo with breathtaking northern lights views.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1517821365201-7734f463f2d1?auto=format&fit=crop&w=800&q=60"
    },
    price: 4100,
    location: "Lapland",
    country: "Finland",
    category: "Arctic"
  },

  {
    title: "Luxury Ice Hotel",
    description:
      "Enjoy a unique stay inside this beautifully designed ice hotel.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=60"
    },
    price: 5000,
    location: "Quebec",
    country: "Canada",
    category: "Arctic"
  },

  {
    title: "Northern Lights Cabin",
    description:
      "Watch the northern lights from this warm and modern Arctic cabin.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=800&q=60"
    },
    price: 3600,
    location: "Tromsø",
    country: "Norway",
    category: "Arctic"
  },

  {
    title: "Arctic Snow Resort",
    description:
      "Luxury snow resort offering unforgettable Arctic adventures.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=60"
    },
    price: 4500,
    location: "Alaska",
    country: "United States",
    category: "Arctic"
  },

  {
    title: "Ice Dome Stay",
    description:
      "A modern ice dome with stunning frozen landscape views.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=60"
    },
    price: 3900,
    location: "Greenland",
    country: "Denmark",
    category: "Arctic"
  },

  {
    title: "Polar Mountain Lodge",
    description:
      "Enjoy peaceful Arctic mountain views from this luxury lodge.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=60"
    },
    price: 3400,
    location: "Svalbard",
    country: "Norway",
    category: "Arctic"
  },

  {
    title: "Frozen Lake Cabin",
    description:
      "Relax beside a frozen Arctic lake in this charming wooden cabin.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=60"
    },
    price: 3100,
    location: "Yukon",
    country: "Canada",
    category: "Arctic"
  },

  {
    title: "Snow Adventure Camp",
    description:
      "Perfect Arctic destination for snow adventure lovers.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=800&q=60"
    },
    price: 2700,
    location: "Fairbanks",
    country: "United States",
    category: "Arctic"
  },

  {
    title: "Luxury Polar Villa",
    description:
      "Experience ultimate luxury living in the heart of the Arctic.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=800&q=60"
    },
    price: 6000,
    location: "Nuuk",
    country: "Greenland",
    category: "Arctic"
  },

  {
    title: "Snow Peak Chalet",
    description:
      "Beautiful chalet surrounded by snowy Arctic mountain peaks.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=60"
    },
    price: 3500,
    location: "Kiruna",
    country: "Sweden",
    category: "Arctic"
  },

  {
    title: "Aurora Sky Cabin",
    description:
      "Enjoy magical aurora views from this peaceful Arctic cabin.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&w=800&q=60"
    },
    price: 4200,
    location: "Rovaniemi",
    country: "Finland",
    category: "Arctic"
  },

  {
    title: "Arctic Glass House",
    description:
      "Modern glass house with panoramic snowy landscape views.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=60"
    },
    price: 5300,
    location: "Iqaluit",
    country: "Canada",
    category: "Arctic"
  },

  {
    title: "Snow Forest Retreat",
    description:
      "A peaceful retreat hidden inside the Arctic snow forests.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=800&q=60"
    },
    price: 3000,
    location: "Murmansk",
    country: "Russia",
    category: "Arctic"
  },

  {
    title: "Luxury Ice Cabin",
    description:
      "Stay warm and cozy in this beautifully designed Arctic ice cabin.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=800&q=60"
    },
    price: 4700,
    location: "Longyearbyen",
    country: "Norway",
    category: "Arctic"
  },

  {
    title: "Frozen Ocean Retreat",
    description:
      "Luxury retreat offering stunning views of the frozen Arctic ocean.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=60"
    },
    price: 4900,
    location: "Baffin Island",
    country: "Canada",
    category: "Arctic"
  },

  {
    title: "Snow Valley Lodge",
    description:
      "Comfortable lodge located in a beautiful Arctic snow valley.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=800&q=60"
    },
    price: 2800,
    location: "Anchorage",
    country: "United States",
    category: "Arctic"
  },

  {
    title: "Arctic Explorer Camp",
    description:
      "Perfect place for Arctic exploration and winter adventures.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=800&q=60"
    },
    price: 2600,
    location: "Whitehorse",
    country: "Canada",
    category: "Arctic"
  },

  {
    title: "Frozen Paradise Villa",
    description:
      "Luxury villa surrounded by snow-covered Arctic landscapes.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=800&q=60"
    },
    price: 5800,
    location: "Hammerfest",
    country: "Norway",
    category: "Arctic"
  },

  {
    title: "Crystal Ice Resort",
    description:
      "Premium Arctic resort with crystal ice architecture and luxury comfort.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1505692952047-1a78307da8f2?auto=format&fit=crop&w=800&q=60"
    },
    price: 6200,
    location: "Helsinki",
    country: "Finland",
    category: "Arctic"
  },
  {
    title: "Luxury City Penthouse",
    description:
      "Enjoy breathtaking skyline views from this modern luxury penthouse in the heart of the city.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?auto=format&fit=crop&w=800&q=60"
    },
    price: 4200,
    location: "New York",
    country: "United States",
    category: "Iconiccity"
  },

  {
    title: "Downtown Skyline Apartment",
    description:
      "Modern apartment with stunning skyline views and premium interiors.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=800&q=60"
    },
    price: 3100,
    location: "Dubai",
    country: "UAE",
    category: "Iconiccity"
  },

  {
    title: "Luxury City Hotel Suite",
    description:
      "Elegant hotel suite located near iconic city landmarks and attractions.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=60"
    },
    price: 3600,
    location: "Paris",
    country: "France",
    category: "Iconiccity"
  },

  {
    title: "Modern Urban Loft",
    description:
      "Stay in this stylish urban loft surrounded by famous city attractions.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=60"
    },
    price: 2800,
    location: "Tokyo",
    country: "Japan",
    category: "Iconiccity"
  },

  {
    title: "Skyline Glass Apartment",
    description:
      "Beautiful glass apartment with amazing city night views.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=60"
    },
    price: 3900,
    location: "Singapore",
    country: "Singapore",
    category: "Iconiccity"
  },

  {
    title: "Historic City Villa",
    description:
      "A charming villa located in the center of an iconic historic city.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=800&q=60"
    },
    price: 3300,
    location: "Rome",
    country: "Italy",
    category: "Iconiccity"
  },

  {
    title: "Luxury Rooftop Stay",
    description:
      "Enjoy rooftop dining and luxury comfort in this iconic city stay.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=60"
    },
    price: 4500,
    location: "Hong Kong",
    country: "China",
    category: "Iconiccity"
  },

  {
    title: "City Lights Studio",
    description:
      "Modern studio apartment surrounded by vibrant city nightlife.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=60"
    },
    price: 2500,
    location: "Bangkok",
    country: "Thailand",
    category: "Iconiccity"
  },

  {
    title: "Urban Designer Apartment",
    description:
      "Stylish designer apartment in one of the world’s most iconic cities.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=800&q=60"
    },
    price: 3700,
    location: "London",
    country: "United Kingdom",
    category: "Iconiccity"
  },

  {
    title: "Luxury Marina View Room",
    description:
      "Relax with stunning marina and skyline views from this premium room.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?auto=format&fit=crop&w=800&q=60"
    },
    price: 3400,
    location: "Sydney",
    country: "Australia",
    category: "Iconiccity"
  },

  {
    title: "Modern City Residence",
    description:
      "Experience luxury city living in this elegant modern residence.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1505692952047-1a78307da8f2?auto=format&fit=crop&w=800&q=60"
    },
    price: 4100,
    location: "Los Angeles",
    country: "United States",
    category: "Iconiccity"
  },

  {
    title: "Luxury Skyline Condo",
    description:
      "Premium condo offering panoramic skyline views and modern comfort.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=60"
    },
    price: 4300,
    location: "Chicago",
    country: "United States",
    category: "Iconiccity"
  },

  {
    title: "Elegant City Apartment",
    description:
      "Elegant apartment located near famous iconic city landmarks.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=60"
    },
    price: 2900,
    location: "Barcelona",
    country: "Spain",
    category: "Iconiccity"
  },

  {
    title: "Luxury Urban Retreat",
    description:
      "A peaceful luxury retreat in the center of a busy iconic city.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=800&q=60"
    },
    price: 3500,
    location: "Berlin",
    country: "Germany",
    category: "Iconiccity"
  },

  {
    title: "Sky Tower Apartment",
    description:
      "Stay high above the city in this premium sky tower apartment.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=800&q=60"
    },
    price: 4700,
    location: "Shanghai",
    country: "China",
    category: "Iconiccity"
  },

  {
    title: "City View Luxury Room",
    description:
      "Beautiful luxury room with amazing panoramic city views.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=800&q=60"
    },
    price: 3000,
    location: "Toronto",
    country: "Canada",
    category: "Iconiccity"
  },

  {
    title: "Modern Business Suite",
    description:
      "Perfect business suite located in a world-famous iconic city.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=800&q=60"
    },
    price: 3200,
    location: "Mumbai",
    country: "India",
    category: "Iconiccity"
  },

  {
    title: "Luxury Metropolitan Stay",
    description:
      "Enjoy modern luxury and comfort in this metropolitan apartment.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=800&q=60"
    },
    price: 4600,
    location: "Seoul",
    country: "South Korea",
    category: "Iconiccity"
  },

  {
    title: "Royal City Penthouse",
    description:
      "Elegant penthouse with premium city views and modern interiors.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=60"
    },
    price: 5200,
    location: "Moscow",
    country: "Russia",
    category: "Iconiccity"
  },

  {
    title: "Luxury Downtown Condo",
    description:
      "Modern downtown condo located near iconic shopping and attractions.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&w=800&q=60"
    },
    price: 3800,
    location: "Istanbul",
    country: "Turkey",
    category: "Iconiccity"
  },
  {
    title: "Luxury Beach Cottage",
    description:
      "Relax in this charming beach cottage with stunning ocean views and peaceful surroundings.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1602088113235-229c19758e9f?auto=format&fit=crop&w=800&q=60"
    },
    price: 2400,
    location: "Malibu",
    country: "United States",
    category: "Trending"
  },

  {
    title: "Modern City Apartment",
    description:
      "Stay in this stylish city apartment located near famous attractions and nightlife.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=60"
    },
    price: 2100,
    location: "New York",
    country: "United States",
    category: "Trending"
  },

  {
    title: "Luxury Pool Villa",
    description:
      "Enjoy luxury living with a private pool and tropical surroundings.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=800&q=60"
    },
    price: 4200,
    location: "Bali",
    country: "Indonesia",
    category: "Trending"
  },

  {
    title: "Mountain Escape Cabin",
    description:
      "Peaceful mountain cabin perfect for nature lovers and adventure seekers.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=60"
    },
    price: 1800,
    location: "Manali",
    country: "India",
    category: "Trending"
  },

  {
    title: "Luxury Hotel Suite",
    description:
      "Elegant luxury suite with premium interiors and modern comfort.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=60"
    },
    price: 3500,
    location: "Dubai",
    country: "UAE",
    category: "Trending"
  },

  {
    title: "Oceanfront Villa",
    description:
      "Wake up to breathtaking ocean views in this modern beachfront villa.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=60"
    },
    price: 3900,
    location: "Maldives",
    country: "Maldives",
    category: "Trending"
  },

  {
    title: "Historic Countryside Cottage",
    description:
      "A charming countryside cottage with beautiful green landscapes.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=800&q=60"
    },
    price: 1700,
    location: "Tuscany",
    country: "Italy",
    category: "Trending"
  },

  {
    title: "Luxury Rooftop Penthouse",
    description:
      "Enjoy luxury city living with rooftop skyline views.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1505692952047-1a78307da8f2?auto=format&fit=crop&w=800&q=60"
    },
    price: 5000,
    location: "Los Angeles",
    country: "United States",
    category: "Trending"
  },

  {
    title: "Tropical Jungle Retreat",
    description:
      "A hidden tropical retreat surrounded by lush green forests.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=800&q=60"
    },
    price: 2600,
    location: "Phuket",
    country: "Thailand",
    category: "Trending"
  },

  {
    title: "Modern Glass House",
    description:
      "Beautiful modern glass house with stunning architecture and views.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=60"
    },
    price: 3300,
    location: "Toronto",
    country: "Canada",
    category: "Trending"
  },

  {
    title: "Luxury Lake House",
    description:
      "Peaceful lake house perfect for a relaxing family vacation.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&w=800&q=60"
    },
    price: 2900,
    location: "Lake Tahoe",
    country: "United States",
    category: "Trending"
  },

  {
    title: "Snowy Winter Chalet",
    description:
      "Cozy winter chalet surrounded by snowy mountain peaks.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=60"
    },
    price: 3100,
    location: "Swiss Alps",
    country: "Switzerland",
    category: "Trending"
  },

  {
    title: "Luxury Marina Apartment",
    description:
      "Stylish apartment with beautiful marina and city skyline views.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?auto=format&fit=crop&w=800&q=60"
    },
    price: 3400,
    location: "Sydney",
    country: "Australia",
    category: "Trending"
  },

  {
    title: "Royal Heritage Villa",
    description:
      "Experience royal comfort in this heritage-style luxury villa.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=800&q=60"
    },
    price: 2800,
    location: "Jaipur",
    country: "India",
    category: "Trending"
  },

  {
    title: "Luxury Urban Loft",
    description:
      "Modern urban loft designed with stylish interiors and comfort.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=800&q=60"
    },
    price: 2600,
    location: "Tokyo",
    country: "Japan",
    category: "Trending"
  },

  {
    title: "Desert Luxury Camp",
    description:
      "Unique luxury desert camp experience under the stars.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=60"
    },
    price: 2700,
    location: "Dubai",
    country: "UAE",
    category: "Trending"
  },

  {
    title: "Minimal White Apartment",
    description:
      "Simple and elegant apartment with a clean modern aesthetic.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=800&q=60"
    },
    price: 2200,
    location: "Seoul",
    country: "South Korea",
    category: "Trending"
  },

  {
    title: "Luxury Forest Lodge",
    description:
      "Beautiful forest lodge surrounded by nature and fresh air.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=800&q=60"
    },
    price: 2500,
    location: "Vancouver",
    country: "Canada",
    category: "Trending"
  },

  {
    title: "Skyline Business Suite",
    description:
      "Premium business suite with panoramic skyline views.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=800&q=60"
    },
    price: 3600,
    location: "Singapore",
    country: "Singapore",
    category: "Trending"
  },

  {
    title: "Luxury Island Resort",
    description:
      "Exclusive island resort with crystal-clear water and luxury comfort.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=60"
    },
    price: 4800,
    location: "Bora Bora",
    country: "French Polynesia",
    category: "Trending"
  },
  {
    title: "Royal Stone Castle",
    description:
      "Experience royal living in this beautiful stone castle surrounded by mountains.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb?auto=format&fit=crop&w=800&q=60"
    },
    price: 4200,
    location: "Edinburgh",
    country: "Scotland",
    category: "Castle"
  },

  {
    title: "Historic Mountain Castle",
    description:
      "A charming historic castle with breathtaking mountain surroundings.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=60"
    },
    price: 3600,
    location: "Banff",
    country: "Canada",
    category: "Castle"
  },

  {
    title: "Luxury Royal Fortress",
    description:
      "Enjoy luxury comfort in this grand royal fortress-style castle.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=800&q=60"
    },
    price: 5000,
    location: "Bavaria",
    country: "Germany",
    category: "Castle"
  },

  {
    title: "Ancient Hilltop Castle",
    description:
      "Stay in an ancient castle located on a peaceful hilltop.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=60"
    },
    price: 3100,
    location: "Tuscany",
    country: "Italy",
    category: "Castle"
  },

  {
    title: "Luxury Lake Castle",
    description:
      "Beautiful castle beside a crystal-clear lake with luxury interiors.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&w=800&q=60"
    },
    price: 4700,
    location: "Lucerne",
    country: "Switzerland",
    category: "Castle"
  },

  {
    title: "Snowy Winter Castle",
    description:
      "A magical winter castle surrounded by snowy mountains and forests.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=60"
    },
    price: 3900,
    location: "Oslo",
    country: "Norway",
    category: "Castle"
  },

  {
    title: "Royal Heritage Palace",
    description:
      "Live like royalty in this heritage palace-style castle.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=800&q=60"
    },
    price: 5300,
    location: "Jaipur",
    country: "India",
    category: "Castle"
  },

  {
    title: "Forest Castle Retreat",
    description:
      "Peaceful castle hidden inside lush green forests.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=800&q=60"
    },
    price: 3400,
    location: "Vancouver",
    country: "Canada",
    category: "Castle"
  },

  {
    title: "Ocean View Castle",
    description:
      "Luxury castle offering breathtaking ocean and sunset views.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=60"
    },
    price: 6200,
    location: "Santorini",
    country: "Greece",
    category: "Castle"
  },

  {
    title: "Vintage Royal Castle",
    description:
      "A beautifully restored vintage castle with royal interiors.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=800&q=60"
    },
    price: 4100,
    location: "Prague",
    country: "Czech Republic",
    category: "Castle"
  },

  {
    title: "Castle in the Alps",
    description:
      "Enjoy mountain adventures while staying in this luxury alpine castle.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=60"
    },
    price: 4500,
    location: "Zurich",
    country: "Switzerland",
    category: "Castle"
  },

  {
    title: "Grand Medieval Castle",
    description:
      "Experience the charm of medieval architecture and royal comfort.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1505692952047-1a78307da8f2?auto=format&fit=crop&w=800&q=60"
    },
    price: 5200,
    location: "Dublin",
    country: "Ireland",
    category: "Castle"
  },

  {
    title: "Luxury Castle Resort",
    description:
      "A modern luxury resort designed in classic castle architecture.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=60"
    },
    price: 6100,
    location: "Paris",
    country: "France",
    category: "Castle"
  },

  {
    title: "Royal Garden Castle",
    description:
      "Beautiful castle surrounded by royal gardens and fountains.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?auto=format&fit=crop&w=800&q=60"
    },
    price: 3800,
    location: "Vienna",
    country: "Austria",
    category: "Castle"
  },

  {
    title: "Hidden Valley Castle",
    description:
      "A peaceful castle hidden deep inside a scenic valley.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=800&q=60"
    },
    price: 3300,
    location: "Colorado",
    country: "United States",
    category: "Castle"
  },

  {
    title: "Golden Royal Palace",
    description:
      "Luxury golden palace with elegant architecture and royal ambiance.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=800&q=60"
    },
    price: 7000,
    location: "Abu Dhabi",
    country: "UAE",
    category: "Castle"
  },

  {
    title: "Luxury Riverside Castle",
    description:
      "Relax beside a peaceful river in this beautiful castle retreat.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=60"
    },
    price: 4300,
    location: "Amsterdam",
    country: "Netherlands",
    category: "Castle"
  },

  {
    title: "Classic European Castle",
    description:
      "Traditional European castle with luxurious vintage interiors.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=800&q=60"
    },
    price: 3900,
    location: "Budapest",
    country: "Hungary",
    category: "Castle"
  },

  {
    title: "Luxury Sunset Castle",
    description:
      "Watch magical sunsets from this elegant hilltop castle.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=60"
    },
    price: 4800,
    location: "Lisbon",
    country: "Portugal",
    category: "Castle"
  },

  {
    title: "Royal Snow Palace",
    description:
      "A luxurious snow palace surrounded by icy mountain landscapes.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=800&q=60"
    },
    price: 5600,
    location: "Reykjavik",
    country: "Iceland",
    category: "Castle"
  },
  {
    title: "Luxury Infinity Pool Villa",
    description:
      "Relax in this stunning villa featuring a private infinity pool and modern luxury interiors.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=800&q=60"
    },
    price: 5200,
    location: "Dubai",
    country: "United Arab Emirates",
    category: "Pools"
  },

  {
    title: "Tropical Pool Resort",
    description:
      "Enjoy a tropical escape with a large outdoor swimming pool and palm trees.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=60"
    },
    price: 4100,
    location: "Bali",
    country: "Indonesia",
    category: "Pools"
  },

  {
    title: "Luxury Poolside Apartment",
    description:
      "Modern apartment with direct access to a luxury rooftop swimming pool.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=60"
    },
    price: 3300,
    location: "Miami",
    country: "United States",
    category: "Pools"
  },

  {
    title: "Ocean View Pool Villa",
    description:
      "Beautiful villa with ocean views and a relaxing private pool area.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=800&q=60"
    },
    price: 6100,
    location: "Maldives",
    country: "Maldives",
    category: "Pools"
  },

  {
    title: "Luxury Desert Pool Camp",
    description:
      "Unique desert camp with luxury pool facilities and sunset views.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=60"
    },
    price: 4500,
    location: "Riyadh",
    country: "Saudi Arabia",
    category: "Pools"
  },

  {
    title: "Private Pool Cottage",
    description:
      "Cozy cottage featuring a peaceful private pool and green surroundings.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=800&q=60"
    },
    price: 2900,
    location: "Kerala",
    country: "India",
    category: "Pools"
  },

  {
    title: "Luxury Rooftop Pool Suite",
    description:
      "Elegant rooftop suite with panoramic skyline and pool views.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=800&q=60"
    },
    price: 5600,
    location: "Singapore",
    country: "Singapore",
    category: "Pools"
  },

  {
    title: "Poolside Beach House",
    description:
      "Beautiful beach house with a relaxing outdoor swimming pool.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?auto=format&fit=crop&w=800&q=60"
    },
    price: 4800,
    location: "Goa",
    country: "India",
    category: "Pools"
  },

  {
    title: "Modern Pool Penthouse",
    description:
      "Luxury penthouse with private rooftop pool and modern interiors.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1505692952047-1a78307da8f2?auto=format&fit=crop&w=800&q=60"
    },
    price: 6700,
    location: "Los Angeles",
    country: "United States",
    category: "Pools"
  },

  {
    title: "Luxury Garden Pool Villa",
    description:
      "A peaceful villa surrounded by gardens and a crystal-clear pool.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=60"
    },
    price: 4300,
    location: "Phuket",
    country: "Thailand",
    category: "Pools"
  },

  {
    title: "Infinity Pool Resort",
    description:
      "Premium infinity pool resort with breathtaking sunset views.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&w=800&q=60"
    },
    price: 6200,
    location: "Santorini",
    country: "Greece",
    category: "Pools"
  },

  {
    title: "Luxury Family Pool House",
    description:
      "Perfect family getaway home with a spacious outdoor swimming pool.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=60"
    },
    price: 3900,
    location: "Sydney",
    country: "Australia",
    category: "Pools"
  },

  {
    title: "Poolside Jungle Retreat",
    description:
      "Relax in a tropical jungle retreat with a refreshing swimming pool.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=800&q=60"
    },
    price: 3700,
    location: "Costa Rica",
    country: "Costa Rica",
    category: "Pools"
  },

  {
    title: "Royal Pool Palace",
    description:
      "Experience royal luxury with grand poolside architecture and comfort.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=800&q=60"
    },
    price: 7100,
    location: "Jaipur",
    country: "India",
    category: "Pools"
  },

  {
    title: "Luxury Pool Resort Room",
    description:
      "Elegant resort room with direct access to a large outdoor pool.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=60"
    },
    price: 3500,
    location: "Bangkok",
    country: "Thailand",
    category: "Pools"
  },

  {
    title: "Modern Glass Pool House",
    description:
      "Beautiful glass-designed house with a stylish swimming pool.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=800&q=60"
    },
    price: 4700,
    location: "Toronto",
    country: "Canada",
    category: "Pools"
  },

  {
    title: "Luxury Cliffside Pool Villa",
    description:
      "Enjoy breathtaking cliffside ocean views and a private pool.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=60"
    },
    price: 6900,
    location: "Amalfi Coast",
    country: "Italy",
    category: "Pools"
  },

  {
    title: "Skyline Pool Apartment",
    description:
      "Modern apartment with skyline views and rooftop pool access.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=800&q=60"
    },
    price: 3600,
    location: "Tokyo",
    country: "Japan",
    category: "Pools"
  },

  {
    title: "Luxury Pool Cabin",
    description:
      "Cozy luxury cabin featuring a heated outdoor swimming pool.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=800&q=60"
    },
    price: 3400,
    location: "Aspen",
    country: "United States",
    category: "Pools"
  },

  {
    title: "Private Island Pool Resort",
    description:
      "Exclusive private island resort with luxury pool villas and beach access.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=60"
    },
    price: 8500,
    location: "Bora Bora",
    country: "French Polynesia",
    category: "Pools"
  },
  {
    title: "Forest Camping Retreat",
    description:
      "Enjoy peaceful forest camping surrounded by tall trees and fresh mountain air.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1480796927426-f609979314bd?auto=format&fit=crop&w=800&q=60"
    },
    price: 1800,
    location: "Kyoto",
    country: "Japan",
    category: "Camping"
  },

  {
    title: "Luxury Camping Tent",
    description:
      "Experience luxury camping with modern facilities and beautiful natural surroundings.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=60"
    },
    price: 2400,
    location: "Colorado",
    country: "United States",
    category: "Camping"
  },

  {
    title: "Mountain Camping Cabin",
    description:
      "Cozy mountain cabin perfect for adventure lovers and camping enthusiasts.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=60"
    },
    price: 2100,
    location: "Manali",
    country: "India",
    category: "Camping"
  },

  {
    title: "Lakeside Camping Spot",
    description:
      "Relax beside a peaceful lake while enjoying a modern camping experience.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&w=800&q=60"
    },
    price: 1900,
    location: "Lake Tahoe",
    country: "United States",
    category: "Camping"
  },

  {
    title: "Desert Camping Camp",
    description:
      "Unique desert camping experience under the stars with luxury tents.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=800&q=60"
    },
    price: 2600,
    location: "Dubai",
    country: "United Arab Emirates",
    category: "Camping"
  },

  {
    title: "Beach Camping Retreat",
    description:
      "Enjoy beachside camping with ocean views and relaxing vibes.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=60"
    },
    price: 2300,
    location: "Goa",
    country: "India",
    category: "Camping"
  },

  {
    title: "Snow Camping Lodge",
    description:
      "Experience snowy adventures in this luxury winter camping lodge.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=60"
    },
    price: 3100,
    location: "Swiss Alps",
    country: "Switzerland",
    category: "Camping"
  },

  {
    title: "Jungle Camping Villa",
    description:
      "Stay close to nature in this jungle-themed luxury camping villa.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=800&q=60"
    },
    price: 2700,
    location: "Bali",
    country: "Indonesia",
    category: "Camping"
  },

  {
    title: "Adventure Camping Dome",
    description:
      "Perfect camping dome for outdoor adventures and trekking activities.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=800&q=60"
    },
    price: 2200,
    location: "Leh",
    country: "India",
    category: "Camping"
  },

  {
    title: "Luxury Riverside Camp",
    description:
      "Beautiful riverside camping stay with peaceful natural scenery.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=800&q=60"
    },
    price: 2500,
    location: "Vancouver",
    country: "Canada",
    category: "Camping"
  },

  {
    title: "Camping Cabin in Woods",
    description:
      "Rustic wooden cabin located deep inside peaceful forests.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=800&q=60"
    },
    price: 2000,
    location: "Oregon",
    country: "United States",
    category: "Camping"
  },

  {
    title: "Luxury Safari Camp",
    description:
      "Enjoy a premium safari camping experience with wildlife views.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=60"
    },
    price: 3400,
    location: "Nairobi",
    country: "Kenya",
    category: "Camping"
  },

  {
    title: "Hilltop Camping Tent",
    description:
      "Watch breathtaking sunsets from this hilltop camping retreat.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1505692952047-1a78307da8f2?auto=format&fit=crop&w=800&q=60"
    },
    price: 2100,
    location: "Shimla",
    country: "India",
    category: "Camping"
  },

  {
    title: "Modern Glamping Resort",
    description:
      "Modern glamping resort with luxury interiors and outdoor adventures.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=60"
    },
    price: 3600,
    location: "Queensland",
    country: "Australia",
    category: "Camping"
  },

  {
    title: "Camping Paradise Retreat",
    description:
      "A peaceful camping paradise surrounded by beautiful landscapes.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=60"
    },
    price: 2800,
    location: "Reykjavik",
    country: "Iceland",
    category: "Camping"
  },

  {
    title: "Luxury Camping Villa",
    description:
      "Elegant camping villa offering comfort and adventure together.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=800&q=60"
    },
    price: 3900,
    location: "Cape Town",
    country: "South Africa",
    category: "Camping"
  },

  {
    title: "Island Camping Resort",
    description:
      "Beautiful island camping resort with beach access and luxury tents.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?auto=format&fit=crop&w=800&q=60"
    },
    price: 3300,
    location: "Phuket",
    country: "Thailand",
    category: "Camping"
  },

  {
    title: "Luxury Forest Camp",
    description:
      "Premium camping experience surrounded by green forests and rivers.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=800&q=60"
    },
    price: 2900,
    location: "Kerala",
    country: "India",
    category: "Camping"
  },

  {
    title: "Snow Valley Camping",
    description:
      "Stay warm and cozy in this snowy valley camping lodge.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=60"
    },
    price: 3200,
    location: "Alaska",
    country: "United States",
    category: "Camping"
  },

  {
    title: "Luxury Camping Resort",
    description:
      "Enjoy luxury outdoor living in this premium camping resort.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?auto=format&fit=crop&w=800&q=60"
    },
    price: 4100,
    location: "Santorini",
    country: "Greece",
    category: "Camping"
  },
  {
    title: "Green Valley Farm House",
    description:
      "Enjoy a peaceful countryside stay surrounded by green farms and fresh air.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=800&q=60"
    },
    price: 2200,
    location: "Punjab",
    country: "India",
    category: "Farms"
  },

  {
    title: "Luxury Farm Villa",
    description:
      "Modern farm villa with beautiful landscapes and relaxing surroundings.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=60"
    },
    price: 3400,
    location: "Texas",
    country: "United States",
    category: "Farms"
  },

  {
    title: "Organic Farm Retreat",
    description:
      "Stay close to nature in this peaceful organic farm retreat.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=800&q=60"
    },
    price: 2100,
    location: "Kerala",
    country: "India",
    category: "Farms"
  },

  {
    title: "Mountain Farm Cottage",
    description:
      "Beautiful farm cottage surrounded by hills and green fields.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=60"
    },
    price: 2600,
    location: "Manali",
    country: "India",
    category: "Farms"
  },

  {
    title: "Luxury Countryside Farm",
    description:
      "Relax in this luxury countryside farm with scenic natural views.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=800&q=60"
    },
    price: 3200,
    location: "Tuscany",
    country: "Italy",
    category: "Farms"
  },

  {
    title: "Sunflower Farm Stay",
    description:
      "Experience peaceful mornings surrounded by sunflower fields.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=60"
    },
    price: 1800,
    location: "Kansas",
    country: "United States",
    category: "Farms"
  },

  {
    title: "Luxury Farm Resort",
    description:
      "A premium farm resort offering comfort and countryside adventures.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1505692952047-1a78307da8f2?auto=format&fit=crop&w=800&q=60"
    },
    price: 3900,
    location: "Queensland",
    country: "Australia",
    category: "Farms"
  },

  {
    title: "Riverside Farm House",
    description:
      "Beautiful farmhouse located beside a peaceful flowing river.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?auto=format&fit=crop&w=800&q=60"
    },
    price: 2400,
    location: "Ontario",
    country: "Canada",
    category: "Farms"
  },

  {
    title: "Rustic Farm Cabin",
    description:
      "Traditional rustic farm cabin with wooden interiors and open fields.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=60"
    },
    price: 2000,
    location: "Colorado",
    country: "United States",
    category: "Farms"
  },

  {
    title: "Luxury Vineyard Farm",
    description:
      "Enjoy vineyard views and countryside luxury in this beautiful farm stay.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=800&q=60"
    },
    price: 3600,
    location: "Napa Valley",
    country: "United States",
    category: "Farms"
  },

  {
    title: "Peaceful Dairy Farm",
    description:
      "Relax and enjoy village life at this charming dairy farm retreat.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=60"
    },
    price: 1700,
    location: "Utrecht",
    country: "Netherlands",
    category: "Farms"
  },

  {
    title: "Luxury Farm Villa Retreat",
    description:
      "Modern luxury villa located in the middle of scenic farmland.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=800&q=60"
    },
    price: 4100,
    location: "California",
    country: "United States",
    category: "Farms"
  },

  {
    title: "Village Farm Stay",
    description:
      "Experience traditional village life with comfort and natural beauty.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=800&q=60"
    },
    price: 1600,
    location: "Rajasthan",
    country: "India",
    category: "Farms"
  },

  {
    title: "Farm House with Lake View",
    description:
      "Beautiful farmhouse with peaceful lake views and open green fields.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&w=800&q=60"
    },
    price: 2800,
    location: "Zurich",
    country: "Switzerland",
    category: "Farms"
  },

  {
    title: "Luxury Apple Farm Retreat",
    description:
      "Stay in a peaceful apple farm surrounded by fresh mountain air.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=800&q=60"
    },
    price: 2500,
    location: "Himachal Pradesh",
    country: "India",
    category: "Farms"
  },

  {
    title: "Modern Eco Farm House",
    description:
      "Eco-friendly farmhouse with modern comfort and green landscapes.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=800&q=60"
    },
    price: 3100,
    location: "Bali",
    country: "Indonesia",
    category: "Farms"
  },

  {
    title: "Luxury Tea Farm Retreat",
    description:
      "Enjoy beautiful tea plantations and peaceful natural surroundings.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?auto=format&fit=crop&w=800&q=60"
    },
    price: 2700,
    location: "Darjeeling",
    country: "India",
    category: "Farms"
  },

  {
    title: "Classic Countryside Farm",
    description:
      "Traditional countryside farmhouse perfect for a relaxing vacation.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=60"
    },
    price: 2300,
    location: "Bordeaux",
    country: "France",
    category: "Farms"
  },

  {
    title: "Luxury Farm Mansion",
    description:
      "Spacious farm mansion offering luxury living and countryside beauty.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=60"
    },
    price: 5200,
    location: "Melbourne",
    country: "Australia",
    category: "Farms"
  },

  {
    title: "Peaceful Nature Farm",
    description:
      "Reconnect with nature in this peaceful farm surrounded by greenery.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=800&q=60"
    },
    price: 1900,
    location: "Vancouver",
    country: "Canada",
    category: "Farms"
  }

];

module.exports = { data: sampleListings };