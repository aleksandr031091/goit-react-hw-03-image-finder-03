import React, { Component } from "react";
import { getImages } from "../services/Api";

import Searchbar from "../searchbar/Searchbar";
import ImageGallery from "../imageGallery/ImageGallery";
import Button from "../button/Button";
import Modal from "../modal/Modal";

import css from "./App.module.css";

class App extends Component {
  state = {
    images: [],
    page: 1,
    query: "",
    isOpenModal: false,
    isLoading: false,
  };

  componentDidUpdate(prevProps, prevState) {
    const { images, page, query } = this.state;

    if (prevState.query !== query) {
      this.fatchImages(query);
      return;
    }

    if (prevState.page !== page) {
      this.fatchImages(query, page);
    }
  }

  fatchImages = (query, page = 1) => {
    getImages(query, page).then((data) =>
      page === 1
        ? this.setState({
            images: data.hits,
            page: 1,
          })
        : this.setState((prevState) => ({
            images: [...prevState.images, ...data.hits],
          }))
    );
  };

  onSubmit = (searchQuery) => {
    this.setState({ query: searchQuery });
  };

  onHandleClickLoadMore = () => {
    this.setState((prev) => ({ page: prev.page + 1 }));
  };

  render() {
    return (
      <div className={css.App}>
        <Searchbar onSubmit={this.onSubmit} />
        <ImageGallery images={this.state.images} />
        <Button onHandleClickLoadMore={this.onHandleClickLoadMore} />
        <Modal />
      </div>
    );
  }
}

export default App;
