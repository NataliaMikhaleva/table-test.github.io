import React from "react";
import { Link } from "react-router-dom";

function Main(props) {
  //константы
  const SMALL_URL =
     process.env.NODE_ENV === "production"
      ? `https://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}`
      : `http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}`;
  const BIG_URL =
    process.env.NODE_ENV === "production"
      ? `https://www.filltext.com/?rows=1000&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32`
      : `http://www.filltext.com/?rows=1000&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32`;
  // const smallUrl = `http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}`;
  // const bigUrl = `http://www.filltext.com/?rows=1000&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32`;
  return (
    <div
      style={{ display: "flex", justifyContent: "center", padding: "50px 0" }}
    >
      <Link to="/table">
        <button
          type="button"
          className="btn btn-outline-secondary"
          // 
          onClick={() => props.handleBtnClick(SMALL_URL)}
        >
          Вывести малый массив данных
        </button>
      </Link>
      <Link to="/table">
        <button
          type="button"
          className="btn btn-outline-secondary"
          // 
          onClick={() => props.handleBtnClick(BIG_URL)}
        >
          Вывести большой массив данных
        </button>
      </Link>
    </div>
  );
}

export default Main;
