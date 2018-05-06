import axios from 'axios';
import cheerio from "cheerio";

export default {

  // **************************************************************/
  // Scraped Data
  scrapeStitch: function(link) {
    return axios.get(link).then(res => {
      const $ = cheerio.load(res);
      const podData = {link};

      podData.podcast = $("#podcast h1.showName").text();
      podData.pid = $("#listenLater").attr("data-fid");
      podData.about = $("#podcast p.about").text();
      podData.img = $("#podcast #albumArt img").attr("src");

      return podData;
    });
  }
};
