import React from "react";
import "./WidgetContent.css";

function WidgetContent() {
  return (
    <div className="widget__contents">
      <div className="widget__content">
        <img
          src="https://qphs.fs.quoracdn.net/main-thumb-ti-1737435-100-jxcfmjdvwvpkcketifttdmeeimxcatua.jpeg"
          alt=""
        />
        <div className="widget__contentTitle">
          <h5>Mobile App Programmer</h5>
          <p>The best Mobile App Development Company</p>
        </div>
      </div>
      <div className="widget__content">
        <img
          src="https://wallpapercave.com/wp/wp2244215.jpg"
          alt=""
        />
        <div className="widget__contentTitle">
          <h5>Quota of Quotes</h5>
          <p>Daily dosage of unforgettable lines from ...</p>
        </div>
      </div>
      <div className="widget__content">
        <img
          src="https://wallpapercave.com/wp/wp2244215.jpg"
          alt=""
        />
        <div className="widget__contentTitle">
          <h5>Art & Artist</h5>
          <p>A Space retated to creating, practicing an...</p>
        </div>
      </div>
      <div className="widget__content">
        <img
          src="https://wallpapercave.com/wp/wp2244215.jpg"
          alt=""
        />
        <div className="widget__contentTitle">
          <h5>Friedrich Nietzche</h5>
          <p>A Space dedicated to  work of Friedrich</p>
        </div>
      </div>
    
    </div>
  );
}

export default WidgetContent;