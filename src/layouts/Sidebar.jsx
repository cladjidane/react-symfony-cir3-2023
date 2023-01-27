import { useEffect } from "react";
import { useState } from "react";

const Sidebar = ({ changeTitle }) => {
  const [dog, setDog] = useState();
  const [up, setUp] = useState();

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => res.json())
      .then((res) => setDog(res));
  }, [up]);

  return (
    <div className="col bg-warning">
      <input type="text" onChange={(e) => changeTitle(e.target.value)} />

      {dog && <img src={dog.message} />}
    </div>
  );
};

export default Sidebar;
