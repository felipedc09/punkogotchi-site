import { FC, ReactElement } from 'react';
import MainTemplate from '@/components/templates/Main/MainTemplate';
import Article from '@/components/organisms/Article/Article';
import { Columns, Container, Section } from '@/components/organisms/Article/article.styles';

const About: FC = (): ReactElement => (
  <MainTemplate page="About">
    <Container>
      <Article>
        <h1>New Festival Town</h1>
        <Section>
          <p>
            Turn your crypto-art into a virtual pet to take care of and explore New Festival Town, a place where your
            NFTs can live and interact with others.
          </p>
          <p>
            Banana peppers pesto sausage hawaiian sausage green bell peppers bacon & tomato chicken wing pork meat
            lovers bbq sauce. Anchovies pork garlic sauce peppers, pepperoni meatball buffalo sauce lasagna hand tossed
            string cheese.
          </p>
        </Section>
        <br />
        <br />
        <Columns columnsCount={4}>
          <img src="/static/images/about/about-in-game-01.png" alt="In game 01" />
          <img src="/static/images/about/about-in-game-02.png" alt="In game 02" />
          <img src="/static/images/about/about-in-game-03.png" alt="In game 03" />
          <img src="/static/images/about/about-in-game-04.png" alt="In game 04" />
        </Columns>
        <h1>Da house</h1>
        <Section>
          <p>
            This will be the place where your Chimpoko will live. That ticket you buy to transmute your cryptoart
            includes the passage to the island we’ve created for your new “pet” and a terrific house for it to live
            until the town is built.
          </p>
          <p>
            Parmesan mozzarella string cheese philly chicken pork bbq rib bianca marinara. Bacon & tomato broccoli
            parmesan meatball chicken NY style personal platter white garlic burnt mouth banana peppers buffalo sauce
            green bell peppers.
          </p>
        </Section>
        <br />
        <br />
        <img src="/static/images/about/about-house-1.png" alt="House" />
        <br />
        <br />
        <h1>About the team</h1>
        <Section>
          <p>
            Our team is formed by a producer, two programmers, and an anrtist-programmer, all from Latin America 〈(
            ^.^)ノ.
          </p>
          <p>
            Mushrooms garlic parmesan meatball pepperoni, bacon & tomato pepperoni burnt mouth Chicago style white pizza
            pan parmesan thin crust. Hand tossed ham chicken wing white pizza thin crust. Garlic sauce mayo stuffed
            crust spinach NY style platter peppers pepperoni onions pesto beef sausage black olives melted cheese.
          </p>
          <p>〈( click on each character to know more about us )ノ</p>
        </Section>
        <br />
        <br />
        <img src="/static/images/about/about-characters-1.png" alt="Characters" />
        <br />
        <br />
        <h1>FAQ</h1>
        <Section>
          <Columns columnsCount={2}>
            <span>
              <h3>WTF is a NFT?</h3>
              <p>
                We don’t know what a NFT is, but we know it gives a lot of money... and we live for making money,
                doesn’t everyone does?
              </p>
            </span>
            <span>
              <h3>WTF is CryptoArt?</h3>
              <p>It is art in the blockchain.</p>
            </span>
          </Columns>
        </Section>
      </Article>
    </Container>
  </MainTemplate>
);
export default About;
