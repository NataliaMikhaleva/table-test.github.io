import React from "react";
import Loader from "./components/Loader";
import Table from "./components/Table";
import RawInfo from "./components/RowInfo";

function App() {
  // создаем стейт загрузки данных (загрузились/не загрузились)
  const [loading, setLoading] = React.useState([]);
  //  создаем стейт для отображения информации о ряде
  const [isRowSelected, setIsRowSelected] = React.useState(null);

  //обработчик события onClick на ряду
function updateRowSelected(item) {
  setIsRowSelected(item);
}

  React.useEffect(() => {
    async function getData() {
      const response = await fetch(
        ` http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}`
      );
      const data = await response.json();
      // обновляем стейт загрузки данных (помещаем в него данные)
      setLoading([...loading, ...data]);
      // обновляем стейт информации о выбранном пользователе
     
      
    }
    
    getData();
  }, []);
  return (
    <div className="container">
      {loading === [] ? (
        <Loader />
      ) : (
        <Table data={loading} handleRowClick={updateRowSelected} />
      )}
      {isRowSelected ? <RawInfo person={isRowSelected} /> : null}
   
    </div>
  );
}

export default App;
