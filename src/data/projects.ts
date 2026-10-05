import type { Project } from '@/types'

const images = import.meta.glob<string>('../assets/images/portfolio/*.jpg', {
  eager: true,
  import: 'default',
})

function projectImage(index: number): string {
  const src = images[`../assets/images/portfolio/project-${index}.jpg`]
  if (!src) throw new Error(`Missing portfolio image: project-${index}.jpg`)
  return src
}

export const projects: readonly Project[] = [
  {
    title: 'Fendos',
    url: 'https://netfmovies.netlify.app',
    image: projectImage(1),
    featured: true,
    summary:
      'True movie lovers hardly ever get satisfied with just watching a film. They want to know all the details related to the movie, details like the cast, inspiration behind a story, fresh news about it and even more.',
    details:
      'Fortunately, the Web era allows us to know a lot about a favourite movie. And film and trivia websites help us with it.',
  },
  {
    title: 'Manual',
    url: 'https://themanual.netlify.app',
    image: projectImage(2),
    featured: true,
    summary:
      'Manual.app is the largest, most widely visited, independent medicine information website available on the Internet. Our aim is to be the Internet’s most trusted resource for drug and related health information.',
    details:
      'We will achieve this aim by presenting independent, objective, comprehensive and up-to-date information in a clear and concise format for both consumers and healthcare professionals.',
  },
  {
    title: 'Bayer',
    url: 'https://thebayer.netlify.app/',
    image: projectImage(3),
    featured: true,
    summary:
      'When we sell our own products, we get excited about individual product features and specifications. We live and breathe our company, our website, and our products.',
  },
  {
    title: 'Yoga',
    url: 'https://yoga11.netlify.app',
    image: projectImage(4),
    featured: true,
    summary:
      'Power Yoga is an online yoga service. They have a variety of different courses on offer, which are available as recurring classes or single sessions.',
    details:
      'These courses are themed around different aspects of yoga, including lower and upper back, core yoga, morning yoga practice, and more.',
  },
  {
    title: 'Travel World',
    url: 'https://travel-over.netlify.app',
    image: projectImage(5),
    summary:
      'For decades travellers have reached for Lonely Planet books when looking to plan and execute their perfect trip, but now, they can also let Lonely Planet Experiences lead the way.',
  },
  {
    title: 'Game Mp',
    url: 'https://game-mp.netlify.app',
    image: projectImage(6),
    summary:
      'Just as we need daily news, gamers need game updates. Many info portals were created to keep gamers up to date in the video game world. There you’ll find news about the latest games, events for gamers.',
  },
  {
    title: 'Wet Online',
    url: 'https://webclinicks.netlify.app',
    image: projectImage(7),
    summary:
      'You and your pet have a lot of services for the diagnosis, prevention of diseases, treatment and care of your animals.',
  },
  {
    title: 'Pokemons',
    url: 'https://pokemons1.netlify.app',
    image: projectImage(8),
    summary:
      'Pokémon, electronic game series from Nintendo that debuted in Japan in February 1996 as Pokémon Green and Pokémon Red. The franchise later became wildly popular in the United States and around the world.',
  },
  {
    title: 'Flash',
    url: 'https://moviesweb1.netlify.app',
    image: projectImage(9),
    summary:
      'Most movie websites rely heavily on Flash for a dynamic and interactive experience. The audience of these websites typically expects to be entertained, so bells and whistles take priority.',
  },
  {
    title: 'To Do',
    url: 'https://todolist14.netlify.app',
    image: projectImage(10),
    summary:
      'One of the most important reasons you should use a to do list is that it will help you stay organised. When you write all your tasks in a list, they seem more manageable.',
  },
  {
    title: 'Namanganliklar24',
    url: 'https://namanganlikla24.netlify.app',
    image: projectImage(11),
    summary:
      'Namangan is a city in eastern Uzbekistan. It is the administrative, economic, and cultural center of Namangan Region.',
  },
  {
    title: 'Online Shop',
    url: 'https://shops-online.netlify.app/',
    image: projectImage(12),
    summary:
      'Shop the latest on trend women’s fashion online. With over 150 new products hitting our shelves every week, check out our new collections.',
  },
  {
    title: 'Yusuf Coffee',
    url: 'https://yusufcoffe.netlify.app',
    image: projectImage(13),
    summary:
      'Coffee is darkly colored, bitter, slightly acidic and has a stimulating effect in humans, primarily due to its caffeine content.',
  },
  {
    title: 'Royil Park',
    url: 'https://royilpark.netlify.app',
    image: projectImage(14),
    summary:
      'Put simply, an online booking system is a software solution used for reservation management. Before such systems were available, it was hard to track bookings and manage inventory.',
  },
  {
    title: 'Namoz Time',
    url: 'https://namoz-vaqt.netlify.app/',
    image: projectImage(15),
    summary:
      'Salaah or namaz is an obligatory prayer performed by a practising Muslim five times a day: early in the morning, afternoon, evening, near sunset and late evening.',
  },
  {
    title: 'Omega',
    url: 'https://elegant-gates-022f4c.netlify.app/',
    image: projectImage(16),
    summary:
      'Create custom landing pages with Omega that convert more visitors than any website. With lots of unique blocks, you can easily build a page without coding.',
  },
  {
    title: 'Teach Me',
    url: 'https://elegant-gates-022f4c.netlify.app/',
    image: projectImage(17),
    summary:
      'Create custom landing pages with Omega that convert more visitors than any website. With lots of unique blocks, you can easily build a page without coding.',
  },
  {
    title: 'Enjoy With Us',
    url: 'https://enjoy-withus.netlify.app',
    image: projectImage(18),
    summary:
      'Product descriptions are a key part of running a successful eCommerce business and a good description is your chance to overcome any misgivings your customers may have.',
  },
  {
    title: 'Books',
    url: 'https://buy-book-shop.netlify.app',
    image: projectImage(19),
    summary:
      'A good book description is detailed, descriptive copy that is good for public display, used for your book marketing, book discovery, and for sales purposes.',
  },
  {
    title: '3D Card',
    url: 'https://3dcardd.netlify.app',
    image: projectImage(20),
    summary:
      '3D video adds stereoscopic vision, meaning that two separate images are shown simultaneously — one to each eye.',
  },
]
