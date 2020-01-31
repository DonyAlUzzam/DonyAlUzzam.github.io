import React from "react";
import Card from "../Card";
import bigcommerce1 from "../../../../img/bigcommerce1.png";
import bigcommerce2 from "../../../../img/bigcommerce2.png";
import bigcommerce3 from "../../../../img/bigcommerce3.png";

const Bigcommerce = () => (
  <Card
    title="Bigcommerce Apps"
    desc="Project ini merupakan platform untuk menyajikan dari dari hasil crawling, sehingga dapat di analisa sesuai kebutuhan"
    poto1={{
      alt: "Photo 1",
      src: bigcommerce1
    }}
    poto2={{
      alt: "Photo 2",
      src: bigcommerce2
    }}
    poto3={{
      alt: "Photo 3",
      src: bigcommerce3
    }}
    descTag="Teknologi yang di gunakan : Zend framework, javascript, jquery,
    metronics, leafletjs, apache solr, google maps, dll"
    date="November 2018"
  />
);

export default Bigcommerce;
