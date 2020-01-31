import React from "react";
import Card from "../Card";
import bigquery1 from "../../../../img/bigquery.png";
import bigquery2 from "../../../../img/bigquery2.png";
import bigquery3 from "../../../../img/bigquery3.png";

const Bigquery = () => (
  <Card
    title="Bigquery Web Apps (Team)"
    desc="pada website ini menggunakan bootstrap, metronics sebgai css framwrok dan
              template pada halam admin"
    poto1={{
      alt: "Photo 1",
      src: bigquery1
    }}
    poto2={{
      alt: "Photo 2",
      src: bigquery2
    }}
    poto3={{
      alt: "Photo 3",
      src: bigquery3
    }}
    descTag="Teknologi yang di gunakan : Zend Framework, bootstrap, metronics, jquery, google
              recaptcha, google analytics, datatables, dll"
    date="July 2019"
  />
);

export default Bigquery;
