import { useState } from "react";
import Title from "./Title";
import data from "./data";
import Menu from "./Menu";
import Buttons from "./Buttons";

// const tempCategories = data.map((item) => item.category);
// console.log(tempCategories);

// const tempSet = new Set(tempCategories);
// console.log(tempSet);

// const tempItems = ["all", ...tempSet];
// console.log(tempItems);

const App = () => {
  const allCategories = ["all", ...new Set(data.map((item) => item.category))];

  const [menu, setMenu] = useState(data);
  const [categories, setCategories] = useState(allCategories);
  const filterItems = (category) => {
    if (category === "all") {
      setMenu(data);
      return;
    }

    console.log(category);
    const newItems = data.filter((item) => item.category === category);
    setMenu(newItems);
  };
  return (
    <>
      <Title title="menu" />;
      <Buttons categories={categories} filterItems={filterItems} />
      <Menu data={menu} />
    </>
  );
};
export default App;
