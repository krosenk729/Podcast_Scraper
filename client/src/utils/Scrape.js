import axios from 'axios';
import cheerio from 'cheerio';

export default {

  // **************************************************************/
  // Scraped Data

  getPodData: async function(link) {
    // $.getJSON('http://anyorigin.com/go?url=https%3A//www.stitcher.com/podcast/this-is-love&callback=?', function(data){
    //   $('#output').html(data.contents);
    // });
    const url = "http://anyorigin.com/go?url=" + encodeURIComponent(link) + "&callback=?";
    const body = await axios.get(url);
    const $ = cheerio.load(body);
    const podData = {link};

    podData.podcast = $("#podcast h1.showName").text();
    podData.pid = $("#listenLater").attr("data-fid");
    podData.about = $("#podcast p.about").text();
    podData.img = $("#podcast #albumArt img").attr("src");

    return podData;
  }
};
