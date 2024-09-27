import React from "react";
import style from "./Loadmore.module.css";

const Loadmore = ({ updatePage }) => (
  <button className={style.loadmore} onClick={updatePage}>
    Load more
  </button>
);

export default Loadmore;
