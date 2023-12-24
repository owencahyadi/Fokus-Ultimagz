import React from "react";
import "./stylepage1.css";
import daun from "../../assets/gambar6.png";
import kaki from "../../assets/gambar1.png";
import tas from "../../assets/gambar2.png";
import kain from "../../assets/gambar3.png";
import batik from "../../assets/gambar4.png";

function page1() {
  return (
    <div className="boxx">
      <div className="gambar1">
        <img src={daun} alt="IMG1" />
      </div>
      <div className="gambar2">
        <img src={kaki} alt="IMG2" />
      </div>
      <div className="gambar3">
        <img src={tas} alt="IMG3" />
      </div>
      <div className="gambar4">
        <img src={kain} alt="IMG4" />
      </div>
      <div className="gambar5">
        <img src={batik} alt="IMG5" />
      </div>
    </div>
  );
}

export default page1;
