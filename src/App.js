import React from "react";
import Loader from "./components/Loader";
import Table from "./components/Table";
import RawInfo from "./components/RowInfo";
import Main from "./components/Main";

import { Route, Switch } from "react-router-dom";

function App() {
  // создаем стейт загрузки данных (загрузились/не загрузились)
  const [loading, setLoading] = React.useState([]);
  //  создаем стейт для отображения информации о ряде
  const [isRowSelected, setIsRowSelected] = React.useState(null);
  //создаем стейт для url
  const [isUrlSelected, setIsUrlSelected] = React.useState(null);

  //обработчик события onClick на ряду
  function updateRowSelected(item) {
    setIsRowSelected(item);
  }

  //обработчик события onClick на кнопках компонента Main
  function updateisUrlSelected(url) {
    setIsUrlSelected(url);
    console.log(isUrlSelected);
  }

  React.useEffect(() => {
    async function getData() {
      console.log(isUrlSelected);
      const response = await fetch(
        isUrlSelected
      // `${isUrlSelected}`
        // ` http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}`
      );
      const data = await response.json();
      // обновляем стейт загрузки данных (помещаем в него данные)
      setLoading([...loading, ...data]);
      // обновляем стейт информации о выбранном пользователе
    }
  // React.useEffect(() => {
  //   async function getData() {
  //     //console.log(isUrlSelected);
  //     const response = await fetch(
  //      // isUrlSelected
  //     // `${isUrlSelected}`
  //        ` http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}`
  //     );
  //     console.log(await response);
  //     // console.log(await response.json());
  //     const data = await response.json();
  //     // обновляем стейт загрузки данных (помещаем в него данные)
  //     setLoading([...loading, ...data]);
  //     // обновляем стейт информации о выбранном пользователе
  //   }
    getData();
  }, [isUrlSelected]);
  return (
    <div className="container">
      <Switch>
        <Route path="/table">
          {loading === [] ? (
            <Loader />
          ) : (
            <Table data={loading} handleRowClick={updateRowSelected} />
          )}
          {isRowSelected ? <RawInfo person={isRowSelected} /> : null}
        </Route>
        <Route path="/">
          <Main handleBtnClick={updateisUrlSelected} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
