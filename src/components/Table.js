import React from "react";

function Table(props) {
  // сохраняем передаваемый массив данных в переменную
  const data = props.data;
  //создаем стейт для сортируемого поля
  const [sortConfig, setSortConfig] = React.useState({
    key: "",
    direction: "",
  });

  // получаем sortedData - отсортированный массив
  const sortedData = React.useMemo(() => {
    let sortableData = [...data];
    if (sortConfig !== null) {
      sortableData.sort((a, b) => {
        
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === "increase" ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          
          return sortConfig.direction === "increase" ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableData;
  }, [data, sortConfig]);

  const requestSort = (key) => {
    let direction = "increase";
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === "increase"
    ) {
      direction = "decrease";
    }
    setSortConfig({ key, direction });
  };


  //функция, передающая item в App.js для изменения стейта isRowSelected
  // function handleClick(item) {
  //   props.handleRowClick(item)
  // }

  return (
    <table className="table table-striped table-bordered">
      <thead>
        <tr>
          <th onClick={() => requestSort("id")} scope="col">
            id
          </th>
          <th onClick={() => requestSort("firstName")} scope="col">
            First Name
          </th>
          <th onClick={() => requestSort("lastName")} scope="col">
            Last Name
          </th>
          <th onClick={() => requestSort("email")} scope="col">
            email
          </th>
          <th onClick={() => requestSort("phone")} scope="col">
            phone
          </th>
        </tr>
      </thead>
      <tbody>
        {sortedData.map((item) => (
          <tr key={item.id + item.phone} onClick={() => props.handleRowClick(item)}>
            <td>{item.id}</td>
            <td>{item.firstName}</td>
            <td>{item.lastName}</td>
            <td>{item.email}</td>
            <td>{item.phone}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
