import axios from 'axios';

export default {
  
  // Gets all scraped data
  getScrapes: function() {
    return axios.get('/api/scrapes');
  },
  // Gets all podcasts
  getPodcasts: function() {
    return axios.get('/api/podcast');
  },
  // Gets the podcast with the given id
  getSinglePodcast: function(id) {
    return axios.get('/api/podcast/' + id);
  },
  // Gets the podcast with the given id
  getSingleEpisode: function(eid) {
    return axios.get('/api/podcast/eid/' + eid);
  },
  // Deletes the podcast with the given id
  deletePodcast: function(id) {
    return axios.delete('/api/podcast/' + id);
  },
  // Saves a scraped podcast to the database
  savePodcast: function(podcastData) {
    return axios.post('/api/podcast', podcastData);
  }

};
