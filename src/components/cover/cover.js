import React from "react";
import "./stylecover.css";
import coverbg from "../../assets/cover_bg.png";

function cover() {
  return (
    <div className="box">
      <div className="baris1 baris">
        <div className="telisik5">
          <h1>TELISIK 5 WARISAN</h1>
        </div>
        <div className="budaya">
          <h1>BUDAYA</h1>
        </div>
      </div>
      <div className="baris2 baris">
        <div className="batik1"></div>
        <div className="benda">
          <h1>BENDA & TAK BENDA</h1>
        </div>
      </div>
      <div className="baris3 baris">
        <div className="indonesia">
          <h1>INDONESIA</h1>
        </div>
        <div className="untuk">
          <h1>UNTUK</h1>
        </div>
      </div>
      <div className="baris4 baris">
        <div className="batik2"></div>
        <div className="kehidupan">
          <h1>KEHIDUPAN SEHARI-HARI</h1>
        </div>
      </div>
    </div>
  );
}

export default cover;
