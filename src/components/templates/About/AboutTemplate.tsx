import { FC, ReactElement } from 'react';
import { v4 as uuidv4 } from 'uuid';
import MainTemplate from '@/components/templates/Main/MainTemplate';
import Article from '@/components/organisms/Article/Article';
import Characters, { CharacterType } from '@/components/organisms/Characters/Characters';
import { Columns, Container, Paragraph } from '@/components/organisms/Article/article.styles';

type Props = {
  content: {
    project: { title: string; description: { p1: string; p2: string } };
    house: { title: string; description: { p1: string; p2: string } };
    team: {
      title: string;
      description: {
        p1: string;
        p2: string;
        p3: string;
      };
      characters: CharacterType[];
    };
    faq: {
      title: string;
      description: {
        title: string;
        description: string;
      }[];
    };
    partners: {
      title: string;
    };
  };
};

const AboutTemplate: FC<Props> = ({ content }): ReactElement => (
  <MainTemplate page="About">
    <Container>
      <Article>
        <h2>{content.project.title}</h2>
        <Paragraph>
          <p>{content.project.description.p1}</p>
          <p>{content.project.description.p2}</p>
        </Paragraph>
        <br />
        <br />
        <Columns columnsCount={4}>
          <img src="/static/images/about/about-in-game-01.png" alt="In game 01" />
          <img src="/static/images/about/about-in-game-02.png" alt="In game 02" />
          <img src="/static/images/about/about-in-game-03.png" alt="In game 03" />
          <img src="/static/images/about/about-in-game-04.png" alt="In game 04" />
        </Columns>
        <h2>{content.house.title}</h2>
        <Paragraph>
          <p>{content.house.description.p1}</p>
          <p>{content.house.description.p2}</p>
        </Paragraph>
        <br />
        <br />
        <img src="/static/images/about/about-house-1.png" alt="House" />
        <br />
        <br />
        <h2>{content.team.title}</h2>
        <Paragraph>
          <p>{content.team.description.p1}</p>
          <p>{content.team.description.p2}</p>
          <p>{content.team.description.p3}</p>
        </Paragraph>
        <br />
        <br />
        <Characters characters={content.team.characters} />
        <br />
        <br />
        <h2>{content.partners.title}</h2>
        <Paragraph>
          <Columns columnsCount={2}>
            <a href='https://chrysalisguild.gg/' target='_blank' rel='noreferrer'>
              <img src="/static/images/about/partners/aboutChrysalis_guild.png" alt="Chrysalis guild" />
            </a>
            <a href='https://www.perroviejogames.com/' target='_blank' rel='noreferrer'>
              <img src="/static/images/about/partners/aboutPerro_viejo.png" alt="Perro Viejo" />
            </a>
          </Columns>
        </Paragraph>
        <br />
        <br />
        <h2>{content.faq.title}</h2>
        <Paragraph>
          <Columns columnsCount={2}>
            {content.faq.description.map((column) => (
              <span key={uuidv4()}>
                <h3>{column.title}</h3>
                <p>{column.description}</p>
              </span>
            ))}
          </Columns>
        </Paragraph>
        <br />
        <br />
      </Article>
    </Container>
  </MainTemplate>
);

export default AboutTemplate;
