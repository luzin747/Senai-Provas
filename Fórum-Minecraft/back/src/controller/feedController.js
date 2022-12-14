const conDB = require('../dao/dbForum');
const Feed = require('../models/feed')

function listarFeed(req, res) {
    conDB.query(Feed.toReadAll(), (err, result) => {
        if (err == null) {
            res.json(result).status(200).end();
        } else {
            res.json(err).status(400).end();
        }
    })
};
function listarFeedID(req, res) {
    conDB.query(Feed.toRead(req.params), (err, result) => {
        if (err == null) {
            res.json(result).status(200).end();
        } else {
            res.json(err).status(400).end();
        }
    })
};

function listarTema(req, res) {
    conDB.query(Feed.toTema(req.params), (err, result) => {
        if (err == null) {
            res.json(result).status(200).end();
        } else {
            res.json(err).status(400).end();
        }
    })
};

module.exports = {
    listarFeed,
    listarFeedID,
    listarTema
}