import { Component } from "react";
import Loadmore from "./components/Loadmore/Loadmore";
import Modal from "./components/Modal/Modal";
import Searchbar from "./components/Searchbar/Searchbar";
import "./index.css";
import ImageGallery from "./components/ImageGallery/ImageGallery";

class App extends Component {
  state = {
    images: [],
    searchValue: "",
    lastPage: 0,
    selectedImgObj: { path: false, desc: "" },
    loadedMore: false,
  };

  componentDidMount() {
    if (this.state.lastPage === 0) this.loadImages(1);
    document.addEventListener("keydown", this.handleEscapePress);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleEscapePress);
  }

  handleEscapePress = (e) => {
    if (e.code.toUpperCase() === "ESCAPE" && this.state.selectedImgObj.path) {
      this.closeModal();
    }
  };

  loadImages = async (type) => {
    const resp = await fetch(
      `https://pixabay.com/api/?q=${this.state.searchValue}&page=${
        this.state.lastPage + 1
      }&key=43133786-570f6afe2f69578830eb496c7&image_type=photo&orientation=horizontal&per_page=12`
    );
    const result = await resp.json();

    if (type === 2) {
      const allImages = [...this.state.images, ...result.hits];
      this.setState({ images: allImages, lastPage: this.state.lastPage + 1 });
    } else {
      this.setState({ images: result.hits, lastPage: 1 });
    }
  };

  updatePage = () => {
    this.loadImages(2);
  };

  openModal = (e) => {
    const imgEl = e.target.src ? e.target : e.target.querySelector("img");
    if (imgEl) {
      this.setState({
        selectedImgObj: { path: imgEl.dataset.src, desc: imgEl.alt },
      });
    }
  };

  closeModal = () => {
    this.setState({ selectedImgObj: {} });
  };

  handleSearch = (searchValue) => {
    this.setState({ searchValue, images: [], lastPage: 0 }, () => {
      this.loadImages(1);
    });
  };

  render() {
    return (
      <div className="App">
        <Searchbar onSubmit={this.handleSearch} />
        <ImageGallery images={this.state.images} openModal={this.openModal} />
        {this.state.selectedImgObj.path && (
          <Modal
            closeModal={this.closeModal}
            path={this.state.selectedImgObj.path}
            desc={this.state.selectedImgObj.desc}
          />
        )}
        {this.state.images.length > 0 && (
          <Loadmore updatePage={this.updatePage} />
        )}
      </div>
    );
  }
}

export default App;
