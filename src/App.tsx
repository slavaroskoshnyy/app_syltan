import React, { useEffect, useMemo, useState } from "react";
import prodycts from "./prodyct.json";
import Footer from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import MyTitle from "./components/title/MyTitle";
import Categories from "./components/Categories/Categories";

import ProdyctList from "./components/ProdyctList";
import PriceFilter from "./components/priceFilter/PriceFilter";
import ManufacturerFilter from "./components/ManufacturerFilter/ManufacturerFilter";

function App() {
  interface IItem {
    id: number;
    img: string;
    img2: string;
    name: string;
    sizeType: string;
    size: number;
    barcode: number;
    generator: string;
    brand: string;
    description: string;
    const: string;
    categories: string;
    [key: string]: string | number;
  }

  const [items, setItems] = useState<IItem[]>([]);
  const [selectedSort, setSelectedSort] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    localStorage.setItem("prodycts", JSON.stringify(prodycts));
  }, [items]);

  useEffect(() => {
    const prodyct = JSON.parse(localStorage.getItem("prodycts") || "{}");
    if (prodyct) {
      setItems(prodyct);
    }
  }, []);

  const sortedItems = useMemo(() => {
    if (selectedSort) {
      return [...items].sort((a: any, b: any) =>
        a[selectedSort].localeCompare(b[selectedSort])
      );
    }
    return items;
  }, [selectedSort, items]);

  const sortedAndSearchedItems = useMemo(() => {
    return sortedItems.filter((item) =>
      item.brand.toLowerCase().includes(searchQuery)
    );
  }, [searchQuery, sortedItems]);

  const sortPosts = (sort: string) => {
    setSelectedSort(sort);

    //  setItems(
    //    [...items].sort((a: any, b: any) => a[sort].localeCompare(b[sort]))
    //  );
  };

  // ⬆️⬆️⬇️
  return (
    // <BrowserRouter>
    // 	<AppRouter/>
    // </BrowserRouter>

    <div className="wrapper">
      <div className="content">
        <Navbar />
        <Header />
        <MyTitle
          title={"Косметика и гигиена"}
          sortPosts={sortPosts}
          selectedSort={selectedSort}
        />
        <div className="container">
          <Categories />
          <div className="content__row">
            <div className="options">
              <h3 className="title__filter">ПОДБОР ПО ПАРАМЕТРАМ</h3>
              <PriceFilter />
              <ManufacturerFilter
                setSearchQuery={setSearchQuery}
                searchQuery={searchQuery}
              />
            </div>
            <ProdyctList items={sortedAndSearchedItems} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
