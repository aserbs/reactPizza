import Categories from "../components/Categories";
import Sort from "../components/Sort";
import PizzaBlock from "../components/PizzaBlock";
import SkeletonLoader from "../components/SkeletonLoader";
import { useState, useEffect } from "react";

function Home() {
  useEffect(() => {
    fetch("https://65b3c69e770d43aba47a6817.mockapi.io/items")
      .then((res) => {
        return res.json();
      })
      .then((arr) => {
        setItems(arr);
        setIsLoading(false);
      });
  }, []);

  const [items, setItems] = useState([]);
  const [count, setCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  return (
    <>
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(9)].map((_, index) => <SkeletonLoader key={index} />)
          : items.map((pizza, index) => <PizzaBlock {...pizza} key={index} />)}
      </div>
    </>
  );
}

export default Home;
