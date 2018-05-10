const cheerio = require("cheerio");
const rp = require("request-promise");
const async = require("asyncawait/async");
const await = require("asyncawait/await");
const db = require("../models");


module.exports = {

  // =============================================================
  // Doing web crawl of all saved podcasts

  scrapeAll: async (function(req, res){

    const scrapePodcasts = async (function(uri, podname = ""){
      let scraped = [];
      const options = {
        uri,
        transform: (body) => cheerio.load(body)
      };

      const allPodcasts = await (rp(options)
        .then($ => {
          $("#episodes li").each((it, el)=>{
            scraped.push({
              // _id: $(el).find(".title").attr("href").match(/.\/(.*?)$/gim),
              pid: $(el).find(".stitcher-ll").attr("data-fid"),
              eid: $(el).find(".stitcher-ll").attr("data-eid"),
              podcast: $("h1.showName").text().trim() || podname,
              episode: $(el).find("a.title").text(),
              link: "https://www.stitcher.com" + $(el).find(".title").attr("href"),
              duration: $(el).find(".duration").text(),
              img: $("#albumArt > img").attr("src")
            })
          });

          Promise.resolve();

        }));

      return Promise.resolve(scraped);
    });

    db.Podcast.find()
    .sort({ date: -1 })
    .then(podcasts => Promise.all( 
          podcasts.map( podcast => scrapePodcasts(podcast.link, podcast.podcast)) 
        )
    )
    .then( values => values.reduce((a, i) => [...a, ...i], []) )
    .then( values => res.json(values) )
    .catch( err => res.status(422).json(err) );

  }), 

  // =============================================================
  // Doing web crawl of all a single link

  scrapeOne: function(req, res){
    if(!(req.params && req.params.link)){
      return res.status(400);
    }
    
    const options = {
      uri: req.params.link,
      transform: (body) => cheerio.load(body)
    };

    rp(options).then($ => {
      console.log('testing', req.params);
      // console.log(decodeURIComponent(req.params)[0])
      // console.log(Object.keys(decodeURIComponent(req.params)));
      let pod = {link: req.params.link};
      pod.podcast = $("#podcast h1.showName").text();
      pod.pid = $("#listenLater").attr("data-fid");
      pod.about = $("#podcast p.about").text();
      pod.img = $("#podcast #albumArt img").attr("src");

      console.log('inside await podcast', pod);

      return Promise.resolve(pod);
    })
    .then( podcast => res.json(podcast))
    .catch( err => res.status(422).json(err) );

  }
}