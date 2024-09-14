import { v4 } from 'uuid';
const main_nav_items = [{ path: '/about', title: 'About', id: v4() }];
const hero_carousel_items = [
  {
    id: v4(),
    title: '"Find Your Next Destination with Globethrough"',
    img: '',
  },
  {
    id: v4(),
    title: 'Where Will Your Next Adventure Take You?',
    img: 'https://img.freepik.com/free-photo/female-tourists-spread-their-arms-held-their-wings_1150-7456.jpg?ga=GA1.1.324249858.1698056196&semt=ais_hybrid',
  },
  {
    id: v4(),
    title: 'Travel Beyond Limits with Globethrough',
    img: '',
  },
];

export { main_nav_items, hero_carousel_items };
