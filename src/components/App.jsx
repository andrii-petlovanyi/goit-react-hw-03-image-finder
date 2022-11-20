import { Component } from 'react';
import { searchPictures } from 'services/api';
import { Box } from './Box';
import { Button } from './Button/Button';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Modal } from './Modal/Modal';
import { Searchbar } from './Searchbar/Searchbar';

export class App extends Component {
  state = {
    pictures: [],
    searchQ: '',
    page: 1,
    modalImg: '',
  };

  searchImg = async searchQuerry => {
    this.setState({ searchQ: searchQuerry, page: 1, pictures: [] });
    this.addMoreImg();
  };

  addMoreImg = async () => {
    try {
      const { searchQ, page } = this.state;
      const data = await searchPictures(searchQ, page);
      this.setState(prevState => ({
        pictures: [...prevState.pictures, ...data.hits],
      }));
      return;
    } catch (error) {
      console.log(error);
    }
  };

  onClick = () => {
    this.setState({ page: this.state.page + 1 });
    this.addMoreImg();
  };

  onModalOpen = url => {
    this.setState({ modalImg: url });
  };

  onModalClose = () => {
    this.setState({
      modalImg: '',
    });
  };

  render() {
    return (
      <>
        <Searchbar onSubmit={this.searchImg} />
        <Box as="main">
          <ImageGallery
            pictures={this.state.pictures}
            onClick={this.onModalOpen}
          />
          {this.state.pictures.length > 0 && <Button onClick={this.onClick} />}
        </Box>
        {this.state.modalImg && (
          <Modal closeModal={this.onModalClose} url={this.state.modalImg} />
        )}
      </>
    );
  }
}
