const mongoose = require('mongoose');
const db = require('../models');
mongoose.Promise = global.Promise;

// =============================================================
// This file empties the collection and inserts the below
mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/my_db',
  { 
    useMongoClient: true
  }
);

const podcastSeed = [
  {
    podcast: 'This Is Product Management',
    episode: 'Creative Thinking is Product Management',
    link: 'https://www.stitcher.com/podcast/alpha-ux/this-is-product-management/e/53067961',
    duration: '29 mins',
    eid: Math.floor(Math.random()*10000),
    pulled: new Date(Date.now())
  },{
    podcast: 'IRL',
    episode: 'Social Bubble Bath',
    link: 'https://www.stitcher.com/podcast/pacific-content/irl-online-life-is-real-life/e/53756212',
    duration: '27 mins',
    eid: Math.floor(Math.random()*10000),
    pulled: new Date(Date.now())
  },{
    podcast: 'School of Greatness',
    episode: 'Love Everyone Always',
    link: 'https://www.stitcher.com/podcast/the-school-of-greatness/e/53935762',
    duration: '1 hour 14 mins',
    eid: Math.floor(Math.random()*10000),
    pulled: new Date(Date.now())
  },{
    podcast: 'Beyond the To Do List',
    episode: 'Timing: Daniel Pink on Optimizing Your Day',
    link: 'https://www.stitcher.com/podcast/the-ramen-noodle/beyond-the-to-do-list-personal-productivity-perspectives/e/53336375',
    duration: '1 hour 14 mins',
    eid: Math.floor(Math.random()*10000),
    pulled: new Date(Date.now())
  },{
    podcast: 'Art of Charm',
    episode: 'Jon Acuff The Gift of Done',
    link: 'https://www.stitcher.com/podcast/art-of-charm/the-art-of-charm/e/52166236',
    duration: '1 hour 6 mins',
    eid: Math.floor(Math.random()*10000),
    pulled: new Date(Date.now())
  },{
    podcast: 'Invisibilia',
    episode: 'Bubble Hopping',
    link: 'https://www.stitcher.com/podcast/national-public-radio/invisibilia/e/51451135',
    duration: '30 mins',
    eid: Math.floor(Math.random()*10000),
    pulled: new Date(Date.now())
  },{
    podcast: 'Parttime Genius',
    episode: 'What Makes Waffle House Such a Brilliant Business?',
    link: 'https://www.stitcher.com/podcast/how-stuff-works/parttime-genius/e/53970065',
    duration: '33 mins',
    eid: Math.floor(Math.random()*10000),
    pulled: new Date(Date.now())
  }
  ];

db.Podcast
  .remove({})
  .then(() => db.Podcast.collection.insertMany(podcastSeed))
  .then(data => {
    console.log(data.insertedIds.length + ' records inserted!');
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
