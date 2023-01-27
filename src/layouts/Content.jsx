import Title from "../components/Title";
import { useState } from "react";

const data = [
  { prenom: "Fabien", nom: "CANU" },
  { prenom: "Paul", nom: "Allen" },
  { prenom: "Christian", nom: "D'ior" },
  { prenom: "Fabien", nom: "CANU" },
  { prenom: "Fabien", nom: "CANU" },
  { prenom: "Fabien", nom: "CANU" },
];

const Content = ({ title }) => {
  const [currentEdit, setCurrentEdit] = useState(null);

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
      <div class="container px-4">
        <div class="row gx-4 justify-content-center">
          <div class="col-lg-8">
            <Title level={2} title={title} />

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
