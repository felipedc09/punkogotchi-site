import { FC, ReactElement, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import MediaButton from '@/components/atoms/MediaButton/MediaButton';
import { Columns } from '@/components/organisms/Article/article.styles';
import { SocialNetworks, CharacterImage, CharacterDescription, Character } from './characters.styles';

export type CharacterType = {
  name: string;
  fullName: string;
  rol: string;
  shortDescription: string;
  socialNetworks: { name: string; link: string }[];
  description: string;
};

type Props = {
  characters: CharacterType[];
};

const Characters: FC<Props> = (props): ReactElement => {
  const { characters } = props;
  const [selectedCharacter, setSelectedCharacter] = useState<CharacterType>();

  const setImage = (character: CharacterType): string => {
    if (selectedCharacter === character) {
      return `/static/images/about/team/about-${character.name}Outline.png`;
    }
    return `/static/images/about/team/about-${character.name}.png`;
  };

  return (
    <>
      <Columns columnsCount={4}>
        {characters.map((character) => (
          <Character
            key={uuidv4()}
            onMouseOver={() => setSelectedCharacter(character)}
            onFocus={() => setSelectedCharacter(character)}
          >
            <CharacterImage src={setImage(character)} />
            <h2>{character.name}</h2>
            {character.rol}
            <br />
            {character.shortDescription}
            <SocialNetworks>
              {character.socialNetworks.map((socialNetwork) => (
                <MediaButton
                  key={uuidv4()}
                  name={socialNetwork.name}
                  imagePath={`/static/images/about/team/media/${socialNetwork.name}.svg`}
                  href={socialNetwork.link}
                />
              ))}
            </SocialNetworks>
          </Character>
        ))}
      </Columns>
      {selectedCharacter ? (
        <Columns columnsCount={1}>
          <CharacterDescription>
            <h3>{selectedCharacter.fullName}</h3>
            <p>{selectedCharacter.description}</p>
          </CharacterDescription>
        </Columns>
      ) : (
        <></>
      )}
    </>
  );
};

export default Characters;
