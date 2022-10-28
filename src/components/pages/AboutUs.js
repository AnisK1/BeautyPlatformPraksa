import { Fragment, useState } from "react";

import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import image1 from "../../image/AboutUsDark.png";
import image2 from "../../image/AboutUsLight.png";

import classes from "./AboutUs.module.css";
import Header from "../Layout/Header";
import CustomButton from "../UI/Button";
import AboutUsModal from "../Modals/AboutUsModal";

function AboutUs() {
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
              style={{ backgroundImage: `url(${image1})` }}
            >
              <div className={classes.blockLeft}></div>
              <div className={classes.blockRight}>
                <div className={classes.block}>
                  <div className={classes.innerBlock}>
                    <div className={classes.naslov}>
                      <h1>Who we are?</h1>
                    </div>

                    <div className={classes.tekst}>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </div>
                    <div>
                      <Link className={classes.Link} to="/WhoWeAre">
                        <CustomButton
                          label="See more..."
                          className={classes.blockBTNI}
                        ></CustomButton>
                      </Link>
                    </div>
                  </div>
                  <div className={classes.innerBlock}>
                    <div className={classes.naslov}>
                      <h1>Our heritage</h1>
                    </div>

                    <div className={classes.tekst}>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </div>
                    <div>
                      <Link className={classes.Link} to="/OurHeritage">
                        <CustomButton
                          label="See more..."
                          className={classes.blockBTNI}
                        ></CustomButton>
                      </Link>
                    </div>
                  </div>
                  <div className={classes.innerBlock}>
                    <div className={classes.naslov}>
                      <h1>Our staff</h1>
                    </div>

                    <div className={classes.tekst}>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </div>
                    <div>
                      <Link className={classes.Link} to="/Staff">
                        <CustomButton
                          label="See more..."
                          className={classes.blockBTNI}
                        ></CustomButton>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className={classes.blockBTN}>
                  <CustomButton
                    label="Contact info."
                    onClick={showCartHandler}
                    className={classes.blockBTNI}
                  ></CustomButton>
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
              className={classes.position}
              style={{ backgroundImage: `url(${image2})` }}
            >
              <div className={classes.blockLeft}></div>
              <div className={classes.blockRight}>
                <div className={classes.block}>
                  <div className={classes.innerBlockL}>
                    <div className={classes.naslov}>
                      <h1>Who we are?</h1>
                    </div>

                    <div className={classes.tekst}>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </div>
                    <div>
                      <Link className={classes.Link} to="/WhoWeAre">
                        <CustomButton
                          label="See more..."
                          className={classes.blockBTNI}
                        ></CustomButton>
                      </Link>
                    </div>
                  </div>
                  <div className={classes.innerBlockL}>
                    <div className={classes.naslov}>
                      <h1>Our heritage</h1>
                    </div>

                    <div className={classes.tekst}>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </div>
                    <div>
                      <Link className={classes.Link} to="/OurHeritage">
                        <CustomButton
                          label="See more..."
                          className={classes.blockBTNI}
                        ></CustomButton>
                      </Link>
                    </div>
                  </div>
                  <div className={classes.innerBlockL}>
                    <div className={classes.naslov}>
                      <h1>Our staff</h1>
                    </div>

                    <div className={classes.tekst}>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </div>
                    <div>
                      <Link className={classes.Link} to="/Staff">
                        <CustomButton
                          label="See more..."
                          className={classes.blockBTNI}
                        ></CustomButton>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className={classes.blockBTN}>
                  <CustomButton
                    className={classes.blockBTNI}
                    label="Contact info."
                    onClick={showCartHandler}
                  ></CustomButton>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default AboutUs;
