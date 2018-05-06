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
  savePodcast: function(podcastData) {
    return axios.post('/api/podcast', podcastData);
  },
  
  // **************************************************************/
  // Saved Episodes

  getEpisodes: function() {
    return axios.get('/api/episode');
  },
  // Gets the episode with the given id
  getSingleEpisode: function(id) {
    return axios.get('/api/episode/' + id);
  },
  // Gets the episode with the given eid
  getSingleEID: function(eid) {
    return axios.get('/api/episode/eid/' + eid);
  },
  // Deletes the episode with the given id
  deletePodcast: function(id) {
    return axios.delete('/api/episode/' + id);
  },
  // Saves a scraped podcast to the database
  savePodcast: function(episodeData) {
    return axios.post('/api/episode', episodeData);
  }

};
