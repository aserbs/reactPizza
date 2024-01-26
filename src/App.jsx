import { useState, useEffect } from "react";
import "./App.css";
import "./scss/app.scss";
import Header from "./components/Header";
import Categories from "./components/Categories";
import Sort from "./components/Sort";
import PizzaBlock from "./components/PizzaBlock";
import SkeletonLoader from "./components/SkeletonLoader";

function App() {
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
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {isLoading
              ? [...new Array(9)].map((_, index) => (
                  <SkeletonLoader key={index} />
                ))
              : items.map((pizza, index) => (
                  <PizzaBlock {...pizza} key={index} />
                ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
