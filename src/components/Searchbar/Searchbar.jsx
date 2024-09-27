import { Component } from "react";
import style from "./Searchbar.module.css";

class Searchbar extends Component {
  state = {
    searchValue: "",
  };

  handleChange = (e) => {
    this.setState({ searchValue: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.searchValue);
  };

  render() {
    return (
      <header className={style.searchbar}>
        <form className={style.form} onSubmit={this.handleSubmit}>
          <button type="submit" className={style.button}>
            <span className={style.buttonLabel}>Search</span>
          </button>
          <input
            className={style.input}
            type="text"
            value={this.state.searchValue}
            onChange={this.handleChange}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
