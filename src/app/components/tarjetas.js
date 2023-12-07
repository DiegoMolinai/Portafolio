import React from "react";
import "../estilos/tarjetas.css";

const tarjetas = () => {
  return (
    <div className="box-container">
      <div className="box-item">
        <div className="flip-box">
          <div
            className="flip-box-front text-center"
            style={{
              backgroundImage:
                "url('https://s25.postimg.cc/frbd9towf/cta-2.png')",
            }}
          >
            <div className="inner color-white">
              <h3 className="flip-box-header">Proyecto 1</h3>
              <p>Springboot</p>
              <img
                src="https://s25.postimg.cc/65hsttv9b/cta-arrow.png"
                alt=""
                className="flip-box-img"
              />
            </div>
          </div>
          <div
            className="flip-box-back text-center"
            style={{
              backgroundImage:
                "url('https://s25.postimg.cc/frbd9towf/cta-2.png')",
            }}
          >
            <div className="inner color-white">
              <h3 className="flip-box-header">Custom Domains</h3>
              <p>A short sentence describing this callout is.</p>
              <button className="flip-box-button">Learn More</button>
            </div>
          </div>
        </div>
      </div>
      <div className="box-item">
        <div className="flip-box">
          <div
            className="flip-box-front text-center"
            style={{
              backgroundImage:
                "url(https://media.wallpaperchill.com/1080x1920-wallpapers/1080x1920-background-hd-wallpaper-s403.jpg')",
            }}
          >
            <div className="inner color-white">
              <h3 className="flip-box-header">Never Sleeps</h3>
              <p>A short sentence describing this callout is.</p>
              <img
                src="https://s25.postimg.cc/65hsttv9b/cta-arrow.png"
                alt=""
                className="flip-box-img"
              />
            </div>
          </div>
          <div
            className="flip-box-back text-center"
            style={{
              backgroundImage:
                "url('https://media.wallpaperchill.com/1080x1920-wallpapers/1080x1920-background-hd-wallpaper-s403.jpg')",
            }}
          >
            <div className="inner color-white">
              <h3 className="flip-box-header">Never Sleeps</h3>
              <p>A short sentence describing this callout is.</p>
              <button className="flip-box-button">Learn More</button>
            </div>
          </div>
        </div>
      </div>
      <div className="box-item">
        <div className="flip-box">
          <div
            className="flip-box-front text-center filter-"
            style={{
              backgroundImage:
                "url('https://wallpapers.com/images/featured/1080x1920-background-15zjbw309roobdua.jpg')",
            }}
          >
            <div className="inner color-white">
              <h3 className="flip-box-header">Dedicated</h3>
              <p>A short sentence describing this callout is.</p>
              <img
                src="https://s25.postimg.cc/65hsttv9b/cta-arrow.png"
                alt=""
                className="flip-box-img"
              />
            </div>
          </div>
          <div
            className="flip-box-back text-center"
            style={{
              backgroundImage:
                "url('https://wallpapers.com/images/featured/1080x1920-background-15zjbw309roobdua.jpg')",
            }}
          >
            <div className="inner color-white">
              <h3 className="flip-box-header">Dedicated</h3>
              <p>A short sentence describing this callout is.</p>
              <button className="flip-box-button">Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default tarjetas;
