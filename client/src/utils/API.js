import axios from 'axios';
const temp = 'https://reactcast.herokuapp.com';
export default {

  // **************************************************************/
  // Scraped Data

  getScrapes: function() {
    return axios.get( temp + '/api/scrapes');
  },
  
  // **************************************************************/
  // Podcasts 

  getPodcasts: function() {
    return axios.get( temp + '/api/podcast');
  },
  deletePodcast: function(id) {
    return axios.delete( temp + '/api/podcast/' + id);
  },
  savePodcast: function(link) {
    return axios.post( temp + '/api/podcast', link);
  },
  
  // **************************************************************/
  // Saved Episodes

  getEpisodes: function() {
    return axios.get( temp + '/api/episode');
  },
  getSingleEpisode: function(id) {
    return axios.get( temp + '/api/episode/' + id);
  },
  getSingleEID: function(eid) {
    return axios.get( temp + '/api/episode/eid/' + eid);
  },
  deleteEpisode: function(id) {
    return axios.delete( temp + '/api/episode/' + id);
  },
  saveEpisode: function(episodeData) {
    return axios.post( temp + '/api/episode', episodeData);
  }

};
