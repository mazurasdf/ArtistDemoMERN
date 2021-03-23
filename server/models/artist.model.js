const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ArtistSchema = new mongoose.Schema({
    name:{
        type: String,
        required:[true, "Name is required!!!"],
        minlength: [2, "Need at least 2 characters for the artist"]
    },
    genre:{
        type: String,
        required: [true, "Genre is required!"],
        validate:{
            validator: function(genreName){
                let copy = genreName.toLowerCase();
                if(copy == "metal") return false;
                else return true;
            },
            message: genreName => `${genreName.value} is simply not acceptible!`
        }
    },
    albums: [String]
})

const Artist = mongoose.model("Artist", ArtistSchema);

module.exports = Artist;