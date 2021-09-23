import { FC, ReactElement } from 'react';
import AboutTemplate from '@/components/templates/About/AboutTemplate';

const content = {
  project: {
    title: 'New Festival Town',
    description: {
      p1: 'Turn your crypto-art into a virtual pet to take care of and explore New Festival Town, a place where your NFTs can live and interact with others.',
      p2: 'Banana peppers pesto sausage hawaiian sausage green bell peppers bacon & tomato chicken wing pork meat lovers bbq sauce. Anchovies pork garlic sauce peppers, pepperoni meatball buffalo sauce lasagna hand tossed string cheese.',
    },
  },
  house: {
    title: 'Da house',
    description: {
      p1: 'This will be the place where your Chimpoko will live. That ticket you buy to transmute your cryptoart includes the passage to the island we’ve created for your new “pet” and a terrific house for it to live until the town is built.',
      p2: '  Parmesan mozzarella string cheese philly chicken pork bbq rib bianca marinara. Bacon & tomato broccoli parmesan meatball chicken NY style personal platter white garlic burnt mouth banana peppers buffalo sauce green bell peppers.',
    },
  },
  team: {
    title: 'About the team',
    description: {
      p1: 'Our team is formed by a producer, two programmers, and an anrtist-programmer, all from Latin America 〈(^.^)ノ.',
      p2: 'Mushrooms garlic parmesan meatball pepperoni, bacon & tomato pepperoni burnt mouth Chicago style white pizza pan parmesan thin crust. Hand tossed ham chicken wing white pizza thin crust. Garlic sauce mayo stuffed crust spinach NY style platter peppers pepperoni onions pesto beef sausage black olives melted cheese.',
      p3: '〈( click on each character to know more about us )ノ',
    },
    characters: [
      {
        name: 'agar3s',
        fullName: 'Giovanni Beltrán',
        rol: 'co-founder',
        shortDescription: 'game developer',
        socialNetworks: [
          { name: 'Twitter', link: '#' },
          { name: 'GitHub', link: '#' },
          { name: 'Itch.io', link: '#' },
        ],
        description:
          'Creator of the famous Evil Glitch. He has a lot of years of experience as a Web developer and gameplay programmer.',
      },
      {
        name: 'maikel',
        fullName: 'Maikel',
        rol: 'co-founder',
        shortDescription: 'blockchain developer',
        socialNetworks: [
          { name: 'Twitter', link: '#' },
          { name: 'GitHub', link: '#' },
        ],
        description: '??',
      },
      {
        name: 'yuel',
        fullName: 'Andres Rodriguez',
        rol: 'co-founder',
        shortDescription: 'project leader',
        socialNetworks: [
          { name: 'Twitter', link: '#' },
          { name: 'Twitch', link: '#' },
        ],
        description: 'Le lidero el proyecto',
      },
      {
        name: 'carenalga',
        fullName: 'Mateo',
        rol: 'co-founder',
        shortDescription: 'game developer',
        socialNetworks: [
          { name: 'Twitter', link: '#' },
          { name: 'Behance', link: '#' },
          { name: 'Itch.io', link: '#' },
        ],
        description: 'Le pego al pixelart',
      },
    ],
  },
  faq: {
    title: 'FAQ',
    description: [
      {
        title: 'WTF is a NFT?',
        description:
          'We don’t know what a NFT is, but we know it gives a lot of money... and we live for making money, doesn’t everyone does?',
      },
      {
        title: 'WTF is CryptoArt?',
        description: 'It is art in the blockchain.',
      },
    ],
  },
  partners:{
    title: 'Partners'
  }
};

const About: FC = (): ReactElement => <AboutTemplate content={content} />;
export default About;
