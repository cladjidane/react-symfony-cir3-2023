import { useEffect, useState } from "react";

import Title from "../components/Title";

const Content = ({ title, idProduct }) => {
  const [res, setRes] = useState();

  useEffect(() => {
    fetch("https://dummyjson.com/products/" + idProduct)
      .then((res) => res.json())
      .then((json) => setRes(json));
  }, [idProduct]);

  const renderData = (res) => {
    return (
      <div className="res">
        <h2>{res.title}</h2>
        <p>{res.description}</p>
        <p>PRIX : {res.price} $</p>
        {res.images.map((image) => <img class="img" src={image} alt="" />)}
        <div className="debug">
          <b>DEBUG</b>
          <pre>{JSON.stringify(res, null, 2)}</pre>
        </div>
      </div>
    );
  };

  return (
    <section id="about" className="col-8">
      <div className="container px-4">
        <Title level={2} title={title} />
        {res && renderData(res)}
      </div>
    </section>
  );
};

export default Content;
