const cheerio = require("cheerio");
const rp = require("request-promise");
const async = require("asyncawait/async");
const await = require("asyncawait/await");
const podcasts = {
  "Freakonomics": "https://www.stitcher.com/podcast/wnyc/freakonomics-radio",
  "Planet Money": "https://www.stitcher.com/podcast/national-public-radio/npr-planet-money-podcast",
  "Radiolab": "https://www.stitcher.com/podcast/wnycs-radiolab",
  "Greater Than Code": "https://www.stitcher.com/podcast/therubyrep/greater-than-code",
  "More Perfect": "https://www.stitcher.com/podcast/radiolab-presents-more-perfect",
  "Front End Happy Hour": "https://www.stitcher.com/podcast/front-end-happy-hour",
  "Hidden Brain": "https://www.stitcher.com/podcast/national-public-radio/hidden-brain",
  "99 Percent Invisible": "https://www.stitcher.com/podcast/prx/99-invisible",
  "Reply All": "https://www.stitcher.com/podcast/gimlet/reply-all",
  "a16z": "https://www.stitcher.com/podcast/a16z-podcast",
  "Too Embarassed": "https://www.stitcher.com/podcast/vox/too-embarrassed-to-ask",
  "That Button": "https://www.stitcher.com/podcast/vox/whyd-you-push-that-button"
};

// =============================================================
// Doing Web Crawl

module.exports = {
  scrapeAll: async (function(req, res){
    const getPodcasts = async (function(uri, podname){
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

    Promise.all( Object.keys(podcasts).map( podcast => getPodcasts(podcasts[podcast], podcast)) )
    .then( values => values.reduce((a, i) => [...a, ...i], []) )
    .then( values => res.json(values) )
    .catch( err => res.status(422).json(err) );

  })
}