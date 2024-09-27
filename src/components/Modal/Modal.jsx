import React from "react";
import style from "./Modal.module.css";

class Modal extends React.Component {
  componentDidMount() {
    window.addEventListener("keydown", this.handleEscapePress);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleEscapePress);
  }

  handleEscapePress = (e) => {
    if (e.code === "Escape") {
      this.props.closeModal();
    }
  };

  handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      this.props.closeModal();
    }
  };

  render() {
    const { path, desc } = this.props;
    return (
      <div className={style.overlay} onClick={this.handleBackdropClick}>
        <div className={style.modal}>
          <img className={style.image} src={path} alt={desc} />
        </div>
      </div>
    );
  }
}

export default Modal;
