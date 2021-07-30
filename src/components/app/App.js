import React, { Component } from "react";
import { getImages } from "../services/Api";

import SearchBar from "../searchBar/SearchBar";
import ImageGallery from "../imageGallery/ImageGallery";
import Button from "../button/Button";
import LoaderSpinner from "../loader/Loader";
import Modal from "../modal/Modal";

import css from "./App.module.css";

class App extends Component {
  state = {
    images: [],
    page: 1,
    query: "",
    isLoading: false,
    isOpenModal: false,
  };

  componentDidUpdate(prevProps, prevState) {
    const { images, page, query } = this.state;

    if (prevState.query !== query) {
      this.fatchImages(query);
      return;
    }

    if (prevState.page !== page) {
      this.fatchImages(query, page);
      return;
    }

    if (prevState.images !== images && prevState.images.length > 1) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
      });
    }
  }

  fatchImages = (query, page = 1) => {
    this.setState({ isLoading: true });
    getImages(query, page)
      .then((data) =>
        page === 1
          ? this.setState({
              images: data.hits,
              page: 1,
            })
          : this.setState((prevState) => ({
              images: [...prevState.images, ...data.hits],
            }))
      )
      .finally(() => this.setState({ isLoading: false }));
  };

  onSubmit = (searchQuery) => {
    this.setState({ query: searchQuery });
  };

  onHandleClickLoadMore = () => {
    this.setState((prev) => ({ page: prev.page + 1 }));
  };

  openModal = (largeImage, alt) => {
    this.setState({ isOpenModal: true, largeImage, alt });
    window.addEventListener("keydown", this.closeModal);
  };

  closeModal = (e) => {
    if (e.target === e.currentTarget || e.key === "Escape") {
      this.setState({ isOpenModal: false });
      window.removeEventListener("keydown", this.closeModal);
    }
  };

  render() {
    const { images, isLoading, largeImage, alt, isOpenModal } = this.state;

    return (
      <div className={css.App}>
        <SearchBar onSubmit={this.onSubmit} />
        <ImageGallery images={images} openModal={this.openModal} />

        {isLoading && <LoaderSpinner />}

        {images.length !== 0 && (
          <Button onHandleClickLoadMore={this.onHandleClickLoadMore} />
        )}

        {isOpenModal && (
          <Modal
            largeImage={largeImage}
            alt={alt}
            closeModal={this.closeModal}
          />
        )}
      </div>
    );
  }
}

export default App;
