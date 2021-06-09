import React from "react";
import Loader from "./components/Loader";
import Table from "./components/Table";

function App() {
  const [loading, setLoading] = React.useState([]);

  React.useEffect(() => {
    async function getData() {
      const response = await fetch(
        ` http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}`
      );
      const data = await response.json();
      console.log(data);
      setLoading([...loading, ...data]);
      console.log(loading);
    }
    console.log("dfs");
    getData();
  }, []);
  return (
    <div className="container">
      {loading === [] ? <Loader /> : <Table data={loading} />}
    </div>
  );
}

export default App;
