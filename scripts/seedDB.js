const mongoose = require('mongoose');
const db = require('../models');
mongoose.Promise = global.Promise;

// =============================================================
// This file empties the collection and inserts the below
mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/my_db',
  {}
  );
const podcastSeed = [
{
  podcast: "Freakonomics", 
  link: "https://www.stitcher.com/podcast/wnyc/freakonomics-radio",
  pid: +new Date() + Math.floor(Math.random()* 1000),
  img: "https://secureimg.stitcher.com/feedimagesplain328/11394.jpg"
},
{
  podcast: "Planet Money", 
  link: "https://www.stitcher.com/podcast/national-public-radio/npr-planet-money-podcast",
  pid: +new Date() + Math.floor(Math.random()* 1000),
  img: "https://secureimg.stitcher.com/feedimagesplain328/7668.jpg"
},
{
  podcast: "Radiolab", 
  link: "https://www.stitcher.com/podcast/wnycs-radiolab",
  pid: +new Date() + Math.floor(Math.random()* 1000),
  img: "https://www.stitcher.com/podcast/wnycs-radiolab/e/54176196"
},
{
  podcast: "Greater Than Code", 
  link: "https://www.stitcher.com/podcast/therubyrep/greater-than-code",
  pid: +new Date() + Math.floor(Math.random()* 1000),
  img: "https://secureimg.stitcher.com/feedimagesplain328/124034.jpg"
},
{
  podcast: "More Perfect", 
  link: "https://www.stitcher.com/podcast/radiolab-presents-more-perfect",
  pid: +new Date() + Math.floor(Math.random()* 1000),
  img: "https://secureimg.stitcher.com/feedimagesplain328/91288.jpg"
},
{
  podcast: "Front End Happy Hour", 
  link: "https://www.stitcher.com/podcast/front-end-happy-hour",
  pid: +new Date() + Math.floor(Math.random()* 1000),
  img: "https://secureimg.stitcher.com/feedimagesplain328/84725.jpg"
},
{
  podcast: "Hidden Brain", 
  link: "https://www.stitcher.com/podcast/national-public-radio/hidden-brain",
  pid: +new Date() + Math.floor(Math.random()* 1000),
  img: "https://secureimg.stitcher.com/feedimagesplain328/71231.jpg"
},
{
  podcast: "99 Percent Invisible", 
  link: "https://www.stitcher.com/podcast/prx/99-invisible",
  pid: +new Date() + Math.floor(Math.random()* 1000),
  img: "https://secureimg.stitcher.com/feedimagesplain328/16374.jpg"
},
{
  podcast: "Reply All", 
  link: "https://www.stitcher.com/podcast/gimlet/reply-all",
  pid: +new Date() + Math.floor(Math.random()* 1000),
  img: "https://secureimg.stitcher.com/feedimagesplain328/56516.jpg"
},
{
  podcast: "a16z", 
  link: "https://www.stitcher.com/podcast/a16z-podcast",
  pid: +new Date() + Math.floor(Math.random()* 1000),
  img: "https://secureimg.stitcher.com/feedimagesplain328/50475.jpg"
},
{
  podcast: "Too Embarassed", 
  link: "https://www.stitcher.com/podcast/vox/too-embarrassed-to-ask",
  pid: +new Date() + Math.floor(Math.random()* 1000),
  img: "https://secureimg.stitcher.com/feedimagesplain328/81305.jpg"
},
{
  podcast: "That Button", 
  link: "https://www.stitcher.com/podcast/vox/whyd-you-push-that-button",
  pid: +new Date() + Math.floor(Math.random()* 1000),
  img: "https://secureimg.stitcher.com/feedimagesplain328/154009.jpg"
}
]

const episodeSeed = [
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

// db.Episode
// .remove({})
// .then(() => db.Episode.collection.insertMany(episodeSeed))
// .then(data => {
//   console.log(data);
//   process.exit(0);
  
// })
// .catch(err => {
//   console.error(err);
//   process.exit(1);
// });

console.log(podcastSeed);

db.Podcast
.remove({})
.then(() => db.Podcast.collection.insertMany(podcastSeed))
.then(data => {
  console.log(data);
  process.exit(0);
})
.catch(err => {
  console.error(err);
  process.exit(1);
});
