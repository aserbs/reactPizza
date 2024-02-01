import Categories from "../components/Categories";
import Sort from "../components/Sort";
import PizzaBlock from "../components/PizzaBlock";
import SkeletonLoader from "../components/SkeletonLoader";
import { useState, useEffect } from "react";

function Home() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [categoryId, setCategoryId] = useState(0);
  const [sortType, setSortType] = useState({
    name: "популярности",
    sortProp: "rating",
  });

  useEffect(() => {
    const category = categoryId > 0 ? `category=${categoryId}` : "";
    const order = sortType.sortProp.includes("-") ? "asc" : "desc";
    const sortBy = sortType.sortProp.replace("-", "");
    setIsLoading(true);
    fetch(
      `https://65b3c69e770d43aba47a6817.mockapi.io/items?${category}&sortBy=${sortBy}&order=${order}`
    )
      .then((res) => {
        return res.json();
      })
      .then((arr) => {
        setItems(arr);
        setIsLoading(false);
      });
    window.scrollTo(0, 0);
  }, [categoryId, sortType]);

  return (
    <div className="container">
      <div className="content__top">
        <Categories value={categoryId} onClickCategory={setCategoryId} />
        <Sort value={sortType} onClickSort={setSortType} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(9)].map((_, index) => <SkeletonLoader key={index} />)
          : items.map((pizza, index) => <PizzaBlock {...pizza} key={index} />)}
      </div>
    </div>
  );
}

export default Home;
