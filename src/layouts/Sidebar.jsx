import { useEffect, useState } from "react";

const Sidebar = ({ changeTitle, changeProduct }) => {
  const [resList, setResList] = useState();

  useEffect(() => {
    fetch("https://dummyjson.com/products/")
      .then((res) => res.json())
      .then((json) => setResList(json));
  }, []);

  const renderList = (resList) => {
    return resList.products.map(item => {
      return <li onClick={() => changeProduct(item.id)}>{item.title}</li>
    })
  }

  return (
    <div className="col bg-warning">
      {resList && renderList(resList)}
    </div>
  );
};

export default Sidebar;
