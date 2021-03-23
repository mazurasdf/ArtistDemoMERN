const ArtistController = require('../controllers/artist.controller');
 
module.exports = app => {
    app.get('/api/artists', ArtistController.findAllArtists);
    app.get('/api/artists/:id', ArtistController.findOneSingleArtist);
    app.put('/api/artists/:id', ArtistController.updateExistingArtist);
    app.post('/api/artists/new', ArtistController.createNewArtist);
    app.delete('/api/artists/:id', ArtistController.deleteAnExistingArtist);
}