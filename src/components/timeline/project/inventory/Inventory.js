import React from "react";
import Card from "../Card";
import invent from "../../../../img/inventory.png";
import invent2 from "../../../../img/inventory2.png";

const Inventory = () => (
  <Card
    title="Aplikasi Inventory"
    desc="Projek ini menggunakan Codeigniter dan Mysql, jquery, bootstrap"
    poto1={{
      alt: "Photo 1",
      src: invent
    }}
    poto2={{
      alt: "Photo 2",
      src: invent2
    }}
    poto3={{
      alt: "Photo 3",
      // src: absen003
    }}
    descTag="Teknologi yang di gunakan : android java, javascript, react,
                semantic ui, firebase database, firebase storage, firabase
                authentication"
    date="November 2019"
  />
);

export default Inventory;
