import React from "react";
import Loader from "./components/Loader";
import Table from "./components/Table";
import RawInfo from "./components/RowInfo";
import Main from "./components/Main";
import TableSearch from "./components/TableSearch";

import { Route, Switch } from "react-router-dom";

function App() {
  // создаем стейт загрузки данных (загрузились/не загрузились)
  const [loading, setLoading] = React.useState(null);

  //  создаем стейт для отображения информации о ряде
  const [isRowSelected, setIsRowSelected] = React.useState(null);

  //обработчик события onClick на ряду
  function updateRowSelected(item) {
    setIsRowSelected(item);
  }
  //создаем стейт для url
  const [isUrlSelected, setIsUrlSelected] = React.useState(null);
  //обработчик события onClick на кнопках компонента Main
  function updateisUrlSelected(url) {
    setIsUrlSelected(url);
  }

  // создаем стейт для строки, по которой ищут пользователя,
  const [value, setValue] = React.useState("");
  //обработчик события onChange в строке поиска
  function updateValue(e) {
    setValue(e.target.value);
    console.log(value);
  }

  React.useEffect(() => {
    async function getData() {
      console.log(isUrlSelected);
      const response = await fetch(isUrlSelected);
      const data = await response.json();
      // обновляем стейт загрузки данных (помещаем в него данные)
      setLoading([...data]);
    }
    getData();
  }, [isUrlSelected]);
  return (
    <div className="container">
      <Switch>
        <Route path="/table">
          {loading === null ? (
            <Loader />
          ) : (
            <>
              <TableSearch value={value} handleInput={updateValue}/>
              <Table data={loading} handleRowClick={updateRowSelected} searchString={value}/>
            </>
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
