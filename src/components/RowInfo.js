import React from "react";

function RowInfo(props) {
  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th scope="col">Выбран пользователь</th>
          <th scope="col">Описание</th>
          <th scope="col">Адрес проживания</th>
          <th scope="col">Город</th>
          <th scope="col">Провинция/штат</th>
          <th scope="col">Индекс</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{props.person.firstName + " " + props.person.lastName}</td>
          <td>{props.person.description}</td>
          <td>{props.person.address.streetAddress}</td>
          <td>{props.person.address.city}</td>
          <td>{props.person.address.state}</td>
          <td>{props.person.address.zip}</td>
        </tr>
      </tbody>
    </table>
  );
}

export default RowInfo;
