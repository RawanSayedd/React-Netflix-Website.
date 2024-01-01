import React, { useState } from "react";
import { trending } from "../../dummyData";
import "./Trending.css";
import Home from "../Home";

function Trending() {
  const [items, setItems] = useState(trending);
  return (
    <div>
      <section className="trending">
        <Home items={items} />
      </section>
    </div>
  );
}

export default Trending;
