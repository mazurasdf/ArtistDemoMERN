const Artist = require('../models/artist.model');
 
module.exports.findAllArtists = (req, res) => {
    Artist.find()
        .then(allArtists => res.json({ artists: allArtists }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}
 
module.exports.findOneSingleArtist = (req, res) => {
    Artist.findOne({ _id: req.params.id })
        .then(oneSingleArtist => res.json({ artist: oneSingleArtist }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}
 
module.exports.createNewArtist = (req, res) => {
    Artist.create(req.body)
        .then(newlyCreatedArtist => res.json({ artist: newlyCreatedArtist }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}
 
module.exports.updateExistingArtist = (req, res) => {
    Artist.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedArtist => res.json({ artist: updatedArtist }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}
 
module.exports.deleteAnExistingArtist = (req, res) => {
    Artist.deleteOne({ _id: req.params.id })
        .then(result => res.json({ result: result }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}