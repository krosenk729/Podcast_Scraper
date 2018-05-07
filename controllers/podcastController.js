const cheerio = require("cheerio");
const request = require("request");
const db = require("../models");

// =============================================================
// Defining CRUD methods

module.exports = {
  findAll: function(req, res) {
    db.Podcast
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Podcast
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findByPid: function(req, res) {
    db.Podcast
      .findOne({pid: req.params.id})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  create: function(req, res) {
    if(!req.link){
      res.status(400).json(err)
    }

    // scrape from req.url
    request(req.link, function(req_err, req_res, data){
      const $ = cheerio.load(data);
      const podcast = {link};

      podData.podcast = $("#podcast h1.showName").text();
      podData.pid = $("#listenLater").attr("data-fid");
      podData.about = $("#podcast p.about").text();
      podData.img = $("#podcast #albumArt img").attr("src");

      return podData;
    })
    // then save to db
    .then(podcast =>{
      db.Podcast
        .create(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    });
  },


  update: function(req, res) {
    db.Podcast
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Podcast
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
