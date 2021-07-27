import React, { Component } from "react";
import Modal from "../modal/Modal";
import Searchbar from "../searchbar/Searchbar";
import ImageGallery from "../imageGallery/ImageGallery";
import { getImages } from "../services/Api";
import css from "./App.module.css";

class App extends Component {
  state = {
    images: [],
    page: 1,
    // query: "",
  };

  // async componentDidMount() {
  //   this.searchImages();
  // }

  onSubmit = (searchQuery) => {
    getImages(searchQuery).then((data) =>
      this.setState({ images: [...data.hits], page: 2 })
    );
  };

  render() {
    return (
      <>
        <Searchbar onSubmit={this.onSubmit} />
        <ImageGallery images={this.state.images} />

        <Modal />
      </>
    );
  }
}

export default App;
