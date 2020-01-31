import React from "react";
import Card from "../Card2";

import cyberStore from "../../../../img/com1.png";
import cyberStore2 from "../../../../img/com2.png";
import cyberStore3 from "../../../../img/com3.png";

const CyberStore = () => (
  <Card
    title="CyberStore"
    desc="CyberStore merupakan aplikasi toko online yang berfokus untuk menjual berbagai macam sepatu dan fashion lainnya"
    poto1={{
      alt: "Photo 1",
      src: cyberStore
    }}
    poto2={{
      alt: "Photo 2",
      src: cyberStore2
    }}
    poto3={{
      alt: "Photo 3",
      src: cyberStore3
    }}
    descTag="teknologi: react native, adonisjs, mysql, redux, raja ongkir, dll"
    date="April 2019"
  />
);

export default CyberStore;
