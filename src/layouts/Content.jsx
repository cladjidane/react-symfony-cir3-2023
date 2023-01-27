import { useEffect, useState } from "react";

import Title from "../components/Title";

const data = [
  { prenom: "Fabien", nom: "CANU" },
  { prenom: "Paul", nom: "Allen" },
  { prenom: "Christian", nom: "D'ior" },
  { prenom: "Fabien", nom: "CANU" },
  { prenom: "Fabien", nom: "CANU" },
  { prenom: "Fabien", nom: "CANU" },
];

const Content = ({ title, idProduct }) => {
  const [currentEdit, setCurrentEdit] = useState(null);
  const [res, setRes] = useState();

  useEffect(() => {
    fetch('https://dummyjson.com/products/' + idProduct)
    .then(res => res.json())
    .then(json => setRes(json))
  }, [idProduct]);

  const renderData = (res) => {
    return (
      <div className="res">
        <h2>{res.title}</h2> 
        <p>{res.description}</p> 
        <p>PRIX : {res.price} $</p> 
        <div className="debug">
          <b>DEBUG</b><pre>{JSON.stringify(res, null, 2)}</pre></div>
      </div>
    )
  }

  const renderUser = () =>
    data.map((user, i) => (
      <p class={`${currentEdit === i ? "red" : ""}`}>
        {user.prenom} {user.nom} -
        <span
          onClick={() => {
            setCurrentEdit(i);
          }}
        >
          edit
        </span>
      </p>
    ));

  return (
    <section id="about" className="col-8">
      <div className="container px-4">
        <div className="row gx-4 justify-content-center">
          <div className="col-lg-8">
            <Title level={2} title={title} />
            
            {res && renderData(res)}

            {renderUser()}

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
              facilis perspiciatis id facere est asperiores libero soluta
              assumenda deserunt suscipit recusandae mollitia pariatur quidem
              fugit doloribus, ea optio molestiae dicta?
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Provident pariatur animi ratione odio hic quam quia inventore.
              Totam dolorem recusandae voluptatem nobis. Illum nemo officiis,
              deleniti esse mollitia assumenda beatae.
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod
              laboriosam maxime optio hic quos fuga maiores, nemo dolore qui
              beatae ullam! Tempore odio repudiandae vero id mollitia laudantium
              veniam maiores?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Content;
