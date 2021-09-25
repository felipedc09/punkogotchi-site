import { FC, ReactElement } from 'react';
import AboutTemplate from '@/components/templates/About/AboutTemplate';

const content = {
  project: {
    title: 'New Festival Town',
    description: {
      p1: 'Turn your crypto-art into a virtual pet to take care of and explore New Festival Town, a place where your NFTs can live and interact with others.',
      p2: 'We created a path to walk from the classic tamagotchi to the cosy life sim, looking for an accessible experience similar to games such as Stardew Valley and Animal Crossing.',
    },
  },
  house: {
    title: 'Da house',
    description: {
      p1: 'This will be the place where your NFT will live. That ticket you buy to transmute your cryptoart includes the passage to the island we’ve created for your new “pet” and a comfy house for it to live in until the town is built.',
      p2: 'Our play-to-earn system is under development. We want you to enjoy your new home, as well as new places. Come to visit and explore.',
    },
  },
  team: {
    title: 'THE TEAM',
    description: {
      p1: 'Our team is made up of people who have worked in the video game industry for several years in addition to having working experience in start-ups such as Miroculus, Workera, Globant, Torre, and more.',
      p2: 'We are creating New Festival Town because we found in blockchain and NFTs a unique opportunity to take video games to a new level, one where the power of the developer is decentralized and built together with the community. We want to build a whole metaverse close at hand with you, the players.',
      p3: '〈( click on each character to know more about us )ノ',
    },
    characters: [
      {
        name: 'agar3s',
        fullName: 'Giovanni',
        rol: 'co-founder',
        shortDescription: 'game developer',
        socialNetworks: [
          { name: 'Twitter', link: 'https://twitter.com/agar3s' },
          { name: 'GitHub', link: 'https://github.com/agar3s' },
          { name: 'Itch.io', link: 'https://agar3s.itch.io/' },
          { name: 'Linkedin', link: 'https://www.linkedin.com/in/agares/' },
        ],
        description:
          'Software engineer and indie game developer, like making games for the sake of art.',
      },
      {
        name: 'maikel',
        fullName: 'Maikel',
        rol: 'co-founder',
        shortDescription: 'blockchain developer',
        socialNetworks: [
          { name: 'Twitter', link: 'https://twitter.com/lekiamx' },
          { name: 'GitHub', link: 'https://www.linkedin.com/in/maikel-navarro-diaz-695659114/' },
        ],
        description: 'Full stack software engineer. Almost 12 years of experience in software development and like 3 years since I started to play with solidity. Love to start the weekend with a Coronita beer.',
      },
      {
        name: 'yuel',
        fullName: 'Andres Rodriguez',
        rol: 'co-founder',
        shortDescription: 'project leader',
        socialNetworks: [
          { name: 'Twitter', link: 'https://twitter.com/yuelwolf' },
          { name: 'Twitch', link: 'https://www.twitch.tv/yuelwolf' },
          { name: 'Linkedin', link: 'https://www.linkedin.com/in/andresfrodriguezr/' },
        ],
        description: 'Guild Master at Chrysalis Guild, CEO of Ashara Studios and Kimochi Games, Software Engineer. Passionate about Complexity Science, lover of Game Design and occasional tester.',
      },
      {
        name: 'carenalga',
        fullName: 'Mateo',
        rol: 'co-founder',
        shortDescription: 'game developer',
        socialNetworks: [
          { name: 'Twitter', link: 'https://twitter.com/mapedorr' },
          { name: 'Behance', link: 'https://www.behance.net/mapedorr859a' },
          { name: 'Itch.io', link: 'https://mapedorr.itch.io/' },
          { name: 'Linkedin', link: 'https://www.linkedin.com/in/mapedorr/' },
        ],
        description: 'Game developer, pixel artist, and co-founder of Perro Viejo games. Loves game design, pizza and drinking alone.',
      },
    ],
  },
  faq: {
    title: '',
    description: [],
  },
  partners: {
    title: 'PARTNERS',
  },
};

const About: FC = (): ReactElement => <AboutTemplate content={content} />;
export default About;
