import { Fragment, useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import image1 from "../../image/HairCutDark.png";
import image2 from "../../image/HairCut.png";
import { ClipLoader } from "react-spinners";

import axios from "axios";

import classes from "./Treatments.module.css";
import Header from "../Layout/Header";

const baseURL = "http://127.0.0.1:8000/api/allTreatments";

function Main() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [treatmentPost, setTreatmentPost] = useState([]);

  const theme = useSelector((state) => state.theme.themeValue);

  useEffect(() => {
    setLoading(true);
    axios
      .get(baseURL)
      .then((res) => {
        // check status for response and set data accordingly
        //setPost(res.data.data.users);
        // log the data
        setTreatmentPost(res.data.data.treatments);
        console.log("post", res);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        setError(true);
      });
  }, []);
  const TreatmentsList = treatmentPost.map((treatment, index) => {
    return treatment ? (
      <div className={classes.okvir}>
        <div className={classes.AllTreatments}>
          <div className={classes.treatment}>
            <img className={classes.image} src={image1}></img>
          </div>
          <div className={classes.treatment}>ID:{treatment.id}</div>

          <div className={classes.treatment}>Price:{treatment.price}</div>

          <div className={classes.treatment}>Duration:{treatment.Duration}</div>
          <div className={classes.treatment}>
            Description:{treatment.Description}
          </div>
        </div>
      </div>
    ) : null;
  });
  const TreatmentsListL = treatmentPost.map((treatment, index) => {
    return treatment ? (
      <div className={classes.okvirL}>
        <div className={classes.AllTreatmentsL}>
          <div className={classes.treatment}>
            <img className={classes.image} src={image2}></img>
          </div>
          <div className={classes.treatment}>ID:{treatment.id}</div>

          <div className={classes.treatment}>Price:{treatment.price}</div>

          <div className={classes.treatment}>Duration:{treatment.Duration}</div>
          <div className={classes.treatment}>
            Description:{treatment.Description}
          </div>
        </div>
      </div>
    ) : null;
  });

  return (
    <>
      {loading && (
        <div className={classes.loader}>
          <ClipLoader
            className={classes.spiner}
            loading={loading}
            size={60}
            aria-label="Loading Spinner"
            data-testid="FadeLoader"
          />
        </div>
      )}
      {theme && (
        <>
          <div className={classes.frame}>
            <Header></Header>
            <div className={classes.position}>{TreatmentsList}</div>
          </div>
          <div className={classes.cover}></div>
        </>
      )}
      {!theme && (
        <div className={classes.frameL}>
          <Header></Header>
          <div className={classes.position}>{TreatmentsListL}</div>
          <div className={classes.cover}></div>
        </div>
      )}
    </>
  );
}

export default Main;
