import { Fragment, useState } from "react";

import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import welcome from "../../image/heritage.png";

import classes from "./WhoWeAre.module.css";
import Header from "../Layout/Header";
import CustomButton from "../UI/Button";
import AboutUsModal from "../Modals/AboutUsModal";

function OurHeritage() {
  const theme = useSelector((state) => state.theme.themeValue);
  const [contactIsShown, setContactIsShown] = useState(false);

  const showCartHandler = () => {
    setContactIsShown(true);
  };
  const hideCartHandler = () => {
    setContactIsShown(false);
  };

  return (
    <>
      {theme && (
        <>
          {contactIsShown && <AboutUsModal onClose={hideCartHandler} />}
          <div className={classes.frame}>
            <Header></Header>
            <div className={classes.cover}></div>
            <div
              className={classes.position}
              /* style={{ backgroundImage: `url(${image2})` }} */
            >
              <div
                className={classes.blockLeft}
                style={{ backgroundImage: `url(${welcome})` }}
              ></div>
              <div className={classes.blockRight}>
                <div className={classes.Naslov}>
                  <h1>Our heritage?</h1>
                </div>
                <div className={classes.borderDemo}>
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classical Latin literature
                  from 45 BC, making it over 2000 years old. Richard McClintock,
                  a Latin professor at Hampden-Sydney College in Virginia,
                  looked up one of the more obscure Latin words, consectetur,
                  from a Lorem Ipsum passage, and going through the cites of the
                  word in classical literature, discovered the undoubtable
                  source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of
                  "de Finibus Bonorum et Malorum" (The Extremes of Good and
                  Evil) by Cicero, written in 45 BC. This book is a treatise on
                  the theory of ethics, very popular during the Renaissance. The
                  first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..",
                  comes from a line in section 1.10.32.
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      {!theme && (
        <>
          {contactIsShown && <AboutUsModal onClose={hideCartHandler} />}
          <div className={classes.frameL}>
            <Header></Header>
            <div className={classes.cover}></div>
            <div
              className={classes.positionL}
              /* style={{ backgroundImage: `url(${image2})` }} */
            >
              <div
                className={classes.blockLeft}
                style={{ backgroundImage: `url(${welcome})` }}
              ></div>
              <div className={classes.blockRight}>
                <div className={classes.NaslovL}>
                  <h1>Our heritage?</h1>
                </div>
                <div className={classes.borderDemoL}>
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classical Latin literature
                  from 45 BC, making it over 2000 years old. Richard McClintock,
                  a Latin professor at Hampden-Sydney College in Virginia,
                  looked up one of the more obscure Latin words, consectetur,
                  from a Lorem Ipsum passage, and going through the cites of the
                  word in classical literature, discovered the undoubtable
                  source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of
                  "de Finibus Bonorum et Malorum" (The Extremes of Good and
                  Evil) by Cicero, written in 45 BC. This book is a treatise on
                  the theory of ethics, very popular during the Renaissance. The
                  first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..",
                  comes from a line in section 1.10.32.
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default OurHeritage;
