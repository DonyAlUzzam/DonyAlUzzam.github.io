import React from "react";
import Card from "./Card";
import Bigquery from "./bigquery/Bigquery";
import Pariwisata from "./pariwisata/Pariwisata";
import Bigcommerce from "./bigcommerce/Bigcommerce";
import Inventory from "./inventory/Inventory";
import CyberStore from "./cyberstore/Cyberstore";
import Pokedumb from "./pokedumb/Pokedumb";

const Project = () => (
  <div id="project" className="tmclassName">
    <div className="timeline">
      <ul>
        <li>
          <Pokedumb />
        </li>
        <li>
          <Pariwisata />
        </li>
        <li>
         <CyberStore />
        </li>
        <li>
          <Inventory />
        </li>
        <li>
          <Bigcommerce />
        </li>
        <li>
          <Bigquery />
        </li>
      </ul>
    </div>
  </div>
);

export default Project;
