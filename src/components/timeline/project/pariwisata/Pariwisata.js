import React from "react";
import Card2 from "../Card2";

import pariwisata1 from "../../../../img/pariwisata.png";
import pariwisata2 from "../../../../img/pariwisata2.png";
import pariwisata3 from "../../../../img/pariwisata3.png";

const Pariwisata = () => (
  <Card2
    title="PariwisataEnim"
    desc="Projek ini bertujuan untuk pembelajaran saya,di mana dalam
    projek menyediakan tempat-tempat wisata yang cocok untuk di kunjungi"
    poto1={{
      alt: "Photo 1",
      src: pariwisata1
    }}
    poto2={{
      alt: "Photo 2",
      src: pariwisata2
    }}
    poto3={{
      alt: "Photo 3",
      src: pariwisata3
    }}
    descTag="Teknologi yang digunakan: Android Java, Firebase"
    date="September 2019"
  />
);

export default Pariwisata;
