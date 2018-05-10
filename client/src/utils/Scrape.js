import axios from 'axios';
import cheerio from 'cheerio';
import request from 'request';

export default {

  // **************************************************************/
  // Scraped Data

  getPodData: async function(link) {
    // $.getJSON('http://anyorigin.com/go?url=https%3A//www.stitcher.com/podcast/this-is-love&callback=?', function(data){
    //   $('#output').html(data.contents);
    // });
    // const url = "http://allorigins.me/get?method=raw&?url=" + encodeURIComponent(link) + "&callback=?";
    // const url2 = "//anyorigin.com/go?url=" + encodeURIComponent(link) + "&callback=?";
    // const url3 = "//anyorigin.com/go?url=" + encodeURIComponent(link) + "&callback=?";

    // const body = await axios.get(url);

    // axios.get('http://allorigins.me/get?url=' + encodeURIComponent('http://google.com') + '&callback=?', function(data){
    //   alert(data.contents);
    // });
    // return body;

    return request.get("http://allorigins.me/get?method=raw&?url=" + encodeURIComponent(link) + "&callback=?", function (err, res, body) {
      console.log(err, res, body);
    });

    /*const $ = cheerio.load(body);
    const podData = {link};

    podData.podcast = $("#podcast h1.showName").text();
    podData.pid = $("#listenLater").attr("data-fid");
    podData.about = $("#podcast p.about").text();
    podData.img = $("#podcast #albumArt img").attr("src");

    return podData;*/
  }
};
