const express = require("express");
const app = express();
const cors = require('cors');

app.use(cors());
    
require("./server/config/mongoose.config");
    
app.use(express.json(), express.urlencoded({ extended: true }));
    
const AllMyArtistRoutes = require("./server/routes/artist.routes");
AllMyArtistRoutes(app);
    
app.listen(8000, () => console.log("The server is all fired up on port 8000"));

//install for backend:
//express
//mongoose
//cors
//npm install express mongoose cors