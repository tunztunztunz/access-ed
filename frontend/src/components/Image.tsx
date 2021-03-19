import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import ImageObjectInterface from './types/imageObject';

export const Image = ({ imageObject }: { imageObject: ImageObjectInterface }) => {
  const returnedImage =
    imageObject?.url?.slice(-3) === 'svg' ? imageObject.url : getImage(imageObject.gatsbyImageData);

  if (typeof returnedImage !== 'string' && returnedImage !== undefined) {
    return <GatsbyImage image={returnedImage} alt={'section image'} />;
  }
  if (typeof returnedImage === 'string') {
    return <img src={returnedImage} alt={'section image'} style={{ width: '100%' }} />;
  }
  return null;
};
