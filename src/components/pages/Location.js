import { Fragment, useState } from "react";
import React from "react";

import classes from "./Location.module.css";
import Header from "../Layout/Header";

import Cart from "../Cart/Cart";

import GoogleMapReact from "google-map-react";

import { Link } from "react-router-dom";

import { useSelector } from "react-redux";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

function Location() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const [mostar, setMostar] = useState(true);
  const [sarajevo, setSarajevo] = useState(false);
  const [siroki, setSiroki] = useState(false);

  const theme = useSelector((state) => state.theme.themeValue);

  const showCartHandler = () => {
    setCartIsShown(true);
  };
  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  const showMostarHandler = () => {
    setMostar(true);
    setSarajevo(false);
    setSiroki(false);
  };
  const showSarajevoHandler = () => {
    setMostar(false);
    setSarajevo(true);
    setSiroki(false);
  };
  const showSirokiHandler = () => {
    setMostar(false);
    setSarajevo(false);
    setSiroki(true);
  };

  const mostarProps = {
    center: {
      lat: 43.343033,
      lng: 17.807894,
    },
    zoom: 11,
  };
  const sarajevoProps = {
    center: {
      lat: 43.85643,
      lng: 18.413029,
    },
    zoom: 11,
  };
  const sirokiProps = {
    center: {
      lat: 43.383142,
      lng: 17.592739,
    },
    zoom: 11,
  };
  console.log("theme", theme);

  return (
    <>
      {theme && (
        <div className={classes.frame}>
          {cartIsShown && <Cart onClose={hideCartHandler} />}
          <div className={classes.cover}></div>
          <Header onShowCart={showCartHandler}></Header>
          <div className={classes.locationBTNS}>
            <button className={classes.BTN2} onClick={showMostarHandler}>
              Mostar
            </button>
            <button className={classes.BTN2} onClick={showSarajevoHandler}>
              Sarajevo
            </button>
            <button className={classes.BTN2} onClick={showSirokiHandler}>
              Široki brijeg
            </button>
          </div>
          <div className={classes.Mapframe}>
            {mostar && (
              <GoogleMapReact
                bootstrapURLKeys={{ key: "" }}
                defaultCenter={mostarProps.center}
                defaultZoom={mostarProps.zoom}
              >
                <AnyReactComponent lat={43.34} lng={17.8} text="Beauty" />
              </GoogleMapReact>
            )}
            {sarajevo && (
              <GoogleMapReact
                bootstrapURLKeys={{ key: "" }}
                defaultCenter={sarajevoProps.center}
                defaultZoom={sarajevoProps.zoom}
              >
                <AnyReactComponent lat={43.85} lng={18.41} text="Beauty" />
              </GoogleMapReact>
            )}
            {siroki && (
              <GoogleMapReact
                bootstrapURLKeys={{ key: "" }}
                defaultCenter={sirokiProps.center}
                defaultZoom={sirokiProps.zoom}
              >
                <AnyReactComponent lat={43.38} lng={17.59} text="Beauty" />
              </GoogleMapReact>
            )}
          </div>
          <div className={classes.footer}></div>
        </div>
      )}
      {/* --------------------------------------------------------------------- */}
      {!theme && (
        <div className={classes.frameL}>
          {cartIsShown && <Cart onClose={hideCartHandler} />}
          <div className={classes.cover}></div>
          <Header onShowCart={showCartHandler}></Header>
          <div className={classes.locationBTNS}>
            <button className={classes.BTN2L} onClick={showMostarHandler}>
              Mostar
            </button>
            <button className={classes.BTN2L} onClick={showSarajevoHandler}>
              Sarajevo
            </button>
            <button className={classes.BTN2L} onClick={showSirokiHandler}>
              Široki brijeg
            </button>
          </div>
          <div className={classes.Mapframe}>
            {mostar && (
              <GoogleMapReact
                bootstrapURLKeys={{ key: "" }}
                defaultCenter={mostarProps.center}
                defaultZoom={mostarProps.zoom}
              >
                <AnyReactComponent lat={43.34} lng={17.8} text="Beauty" />
              </GoogleMapReact>
            )}
            {sarajevo && (
              <GoogleMapReact
                bootstrapURLKeys={{ key: "" }}
                defaultCenter={sarajevoProps.center}
                defaultZoom={sarajevoProps.zoom}
              >
                <AnyReactComponent lat={43.85} lng={18.41} text="Beauty" />
              </GoogleMapReact>
            )}
            {siroki && (
              <GoogleMapReact
                bootstrapURLKeys={{ key: "" }}
                defaultCenter={sirokiProps.center}
                defaultZoom={sirokiProps.zoom}
              >
                <AnyReactComponent lat={43.38} lng={17.59} text="Beauty" />
              </GoogleMapReact>
            )}
          </div>
          <div className={classes.footerL}></div>
        </div>
      )}
    </>
  );
}

export default Location;
