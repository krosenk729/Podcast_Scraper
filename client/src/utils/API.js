import axios from 'axios';
export default {

  // **************************************************************/
  // Scraped Data

  getScrapes: function() {
    return axios.get('/api/scrapes');
  },
  
  // **************************************************************/
  // Podcasts 

  getPodcasts: function() {
    return axios.get('/api/podcast');
  },
  deletePodcast: function(id) {
    return axios.delete('/api/podcast/' + id);
  },
  savePodcast: function(link) {
    return axios.post('/api/podcast', link);
  },
  
  // **************************************************************/
  // Saved Episodes

  getEpisodes: function() {
    return axios.get('/api/episode');
  },
  getSingleEpisode: function(id) {
    return axios.get('/api/episode/' + id);
  },
  getSingleEID: function(eid) {
    return axios.get('/api/episode/eid/' + eid);
  },
  deleteEpisode: function(id) {
    return axios.delete('/api/episode/' + id);
  },
  saveEpisode: function(episodeData) {
    return axios.post('/api/episode', episodeData);
  }

};
