import React, { useState } from "react";
import Homes from "./Components/Homes";
import { latest, recommended, upcome } from "./dummyData";
import Upcomming from "./Components/Upcomming/Upcomming";
import Trending from "./Components/Trending/Trending";

const HomePage = () => {
  const [items, setItems] = useState(upcome);
  const [item, setItem] = useState(latest);
  const [rec, setRec] = useState(recommended);
  return (
    <>
      <Homes />
      <Upcomming items={items} title="Upcomming Movies" />
      <Upcomming items={item} title="Latest Movies" />
      <Trending />
      <Upcomming items={rec} title="Recommended Movies" />
    </>
  );
};

export default HomePage;
