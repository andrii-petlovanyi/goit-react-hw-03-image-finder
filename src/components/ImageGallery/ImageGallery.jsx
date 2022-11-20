import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { GalleryList } from './ImageGallery.styled';

export const ImageGallery = ({ pictures, onClick }) => {
  return (
    <>
      <GalleryList>
        {pictures.map(picture => (
          <ImageGalleryItem
            key={picture.id}
            picture={picture}
            onClick={onClick}
          />
        ))}
      </GalleryList>
    </>
  );
};
