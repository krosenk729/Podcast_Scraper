const cheerio = require("cheerio");
const rp = require("request-promise");
const async = require("asyncawait/async");
const await = require("asyncawait/await");
const db = require("../models");

// =============================================================
// Doing Web Crawl


module.exports = {
  scrapeAll: async (function(req, res){

    const scrapePodcasts = async (function(uri, podname){
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
    .then(podcasts => Promise
        .all( Object.keys(podcasts)
        .map( podcast => scrapePodcasts(podcasts[podcast], podcast)) )
    )
    .then( values => values.reduce((a, i) => [...a, ...i], []) )
    .then( values => res.json(values) )
    .catch( err => res.status(422).json(err) );

  })
}