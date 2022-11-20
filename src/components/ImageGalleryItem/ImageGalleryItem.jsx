import { GalleryItem } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ picture, onClick }) => {
  const { id, webformatURL, largeImageURL } = picture;
  return (
    <>
      <GalleryItem key={id}>
        <img
          src={webformatURL}
          alt="content by search"
          onClick={() => onClick(largeImageURL)}
        />
      </GalleryItem>
    </>
  );
};
