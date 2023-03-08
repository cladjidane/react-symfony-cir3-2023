import { useEffect, useState } from "react";

const Sidebar = ({ changeTitle, changeProduct }) => {
  const [resList, setResList] = useState(0);

  useEffect(() => {
    fetch("https://dummyjson.com/products/")
      .then((res) => res.json())
      .then((json) => setResList(json));
  }, []);

  const renderList = (resList) => {
    return resList.products.map((item, i) => {
      return <p key={`k-${i}`} onClick={() => changeProduct(item.id)}>{item.title}</p>
    })
  }

  return (
    <div className="col-4 bg-warning p-3 sidebar">
      <h3>Tous nos produits</h3>
      {resList && renderList(resList)}

      <div className="debug">
        <b>DEBUG</b><pre>{JSON.stringify(resList, null, 2)}</pre>
      </div>
    </div>
  );
};

export default Sidebar;
