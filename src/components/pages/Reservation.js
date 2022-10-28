import { Fragment, useState, useEffect, useRef } from "react";

import classes from "./Reservation.module.css";
import Header from "../Layout/Header";
import Treatments from "../Treatments/Treatments";
import Cart from "../Cart/Cart";
import DateTime from "./DateTime";
import AddTreatment from "./AddTreatment";
import FooterB from "../Layout/Footer";
import axios from "axios";
import Calendar from "react-calendar";
import "./DateTimeCalendar.css";

import { Link } from "react-router-dom";

import { useSelector } from "react-redux";
import CustomButton from "../UI/Button";

const TherapistOptions = [
  {
    label: "Therapist1",
    value: "1",
  },
  {
    label: "Therapist2",
    value: "2",
  },
  {
    label: "Therapist3",
    value: "3",
  },
  {
    label: "Therapist4",
    value: "4",
  },
];

const options = [
  {
    label: "10.00",
    value: "10.00",
  },
  {
    label: "10:30",
    value: "10:30",
  },
  {
    label: "11:00",
    value: "11:00",
  },
  {
    label: "11:30",
    value: "11:30",
  },
];

function Reservation() {
  const [dateState, setDateState] = useState(new Date());
  const changeDate = (e) => {
    setDateState(e);
  };

  const baseURL = "http://127.0.0.1:8000/api/therapistByTreatment/";

  const ReservationURL = "http://127.0.0.1:8000/api/submitReservation";

  const [cartIsShown, setCartIsShown] = useState(false);
  const [dateIsShown, setDateIsShown] = useState(false);
  const [modalIsShown, setModalIsShown] = useState(false);

  const [adminControl, setAdminControl] = useState(false);

  const theme = useSelector((state) => state.theme.themeValue);

  const [value, onChange] = useState(new Date());

  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [idValue, setIdValue] = useState();
  const SearchName = useRef();
  const [therapistValue, setTherapistValue] = useState();

  const submitReservationHandler = () => {
    const Date = dateState.toISOString().split("T")[0];
    const TreatmentTherapistID = therapistValue;

    console.log("provjer1", Date);
    console.log("provjera2", TreatmentTherapistID);

    console.log("izvrsava submitHandler", idValue);
    setLoading(true);
    axios
      .post(ReservationURL, {
        DateTime: Date,
        treatmenttherapistID: TreatmentTherapistID,
      })
      .then((res) => {
        // check status for response and set data accordingly
        //setPost(res.data.data.therapists);
        // log the data
        console.log("Reservation", res);

        setLoading(false);
      })
      .catch((error) => {
        /* setLoading(false);
          setError(true); */
      });
  };

  const submitHandler = () => {
    console.log("izvrsava submitHandler", idValue);
    setLoading(true);
    axios
      .get(baseURL + idValue)
      .then((res) => {
        // check status for response and set data accordingly
        setPost(res.data.data.therapists);
        // log the data
        console.log("submitHandler res", res.data.data.TherapistID);

        /*  console.log("submitHandler1 res", res.data.data.therapists.id); */
        setTherapistValue(res.data.data.TherapistID);

        // console.log("Name", post.name);
        setLoading(false);
      })
      .catch((error) => {
        /* setLoading(false);
          setError(true); */
      });
  };

  useEffect(() => {
    idValue && submitHandler();
  }, [idValue]);

  console.log("theapistVALUE", therapistValue);

  /* const Therapists = post.map((therapist, index) => {
    return therapist ? (
      <div key={index} className={classes.okvir}>
        <div className={classes.AllTreatments}>
          <div className={classes.treatment}>ID:{therapist.id}</div>
        </div>
      </div>
    ) : null;
  });  */

  const showAdminHandler = () => {
    setAdminControl(true);
  };
  const hideAdminHandler = () => {
    setAdminControl(false);
  };
  /*  console.log(adminControl); */

  const showCartHandler = () => {
    setCartIsShown(true);
  };
  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  const showDateHandler = () => {
    setDateIsShown(true);
  };
  const hideDateHandler = () => {
    setDateIsShown(false);
  };

  const showModalHandler = (btnID) => {
    setModalIsShown(true);
    setIdValue(btnID);
    /*  console.log("TreatmentID", btnID); */
  };
  const hideModalHandler = () => {
    setModalIsShown(false);
  };

  const [treatmentPost, setTreatmentPost] = useState([]);
  const [loading2, setLoading2] = useState(false);

  const baseURL2 = "http://127.0.0.1:8000/api/allTreatments";
  useEffect(() => {
    setLoading2(true);
    axios
      .get(baseURL2)
      .then((res2) => {
        // check status for response and set data accordingly
        setTreatmentPost(res2.data.data.treatments);
        /*  console.log(res2); */
        /* console.log("aaa", treatmentPost); */
        // log the data

        setLoading2(false);
      })
      .catch((error) => {
        /* setLoading(false);
        setError(true); */
      });
  }, []);

  const TreatmentsList = treatmentPost.map((treatment, index) => {
    return treatment ? (
      <li key={index} className={classes.okvir}>
        <div className={classes.AllTreatments}>
          <div className={classes.treatment}>Price:{treatment.price}</div>

          <div className={classes.treatment}>Duration:{treatment.Duration}</div>
          <div className={classes.treatment}>
            Description:{treatment.Description}
          </div>
          <div className={classes.treatmentBTN}>
            <CustomButton
              label="Add"
              onClick={() => {
                showModalHandler(treatment.id);
                // submitHandler();
              }}
              className={classes.deleteBtn}
            ></CustomButton>
          </div>
        </div>
      </li>
    ) : null;
  });
  const TreatmentsListL = treatmentPost.map((treatment, index) => {
    return treatment ? (
      <li key={index} className={classes.okvirL}>
        <div className={classes.AllTreatmentsL}>
          <div className={classes.treatment}>Price:{treatment.price}</div>

          <div className={classes.treatment}>Duration:{treatment.Duration}</div>
          <div className={classes.treatment}>
            Description:{treatment.Description}
          </div>
          <div className={classes.treatmentBTN}>
            <CustomButton
              label="Add"
              onClick={() => {
                showModalHandler(treatment.id);
                // submitHandler();
              }}
              className={classes.deleteBtn}
            ></CustomButton>
          </div>
        </div>
      </li>
    ) : null;
  });

  return (
    <>
      {theme && (
        <div className={classes.frame}>
          {cartIsShown && <Cart onClose={hideCartHandler} />}
          {/* {dateIsShown && <DateTime onClose={hideDateHandler} />} */}

          {adminControl && <AddTreatment onClose={hideAdminHandler} />}
          <div className={classes.cover}></div>

          <Header onShowCart={showCartHandler}></Header>

          <div className={classes.result}>{TreatmentsList}</div>

          {/* <Treatments
              onShowDate={showDateHandler}
              onShowAdmin={showAdminHandler}
            ></Treatments> */}

          {/* <div className={classes.addButton}>
              <Link to="/AdminPage">
                <button className={classes.button}>ADMIN PANEL</button>
              </Link>
            </div> */}

          {/*  --------------------------------------------------------- */}

          {modalIsShown && (
            <>
              <div className={classes.darkBG} onClick={hideModalHandler} />
              <div className={classes.centered}>
                <div className={classes.modal}>
                  <div className={classes.modalHeader}>
                    <h5 className={classes.heading}>Make reservation</h5>
                  </div>

                  <div className={classes.modalContent}>
                    <div className={classes.main}>
                      <Calendar
                        value={dateState}
                        onChange={changeDate}
                        minDate={new Date()}
                      />
                      <select
                        onChange={(event) => {
                          console.log("event", event.target.value);
                          setTherapistValue(event.target.value);
                        }}
                        className={classes.selectContainer}
                      >
                        {post.length > 0 ? (
                          post.map((therapist) => (
                            <option value={therapist.TherapistID}>
                              {therapist.FirstName}
                            </option>
                          ))
                        ) : (
                          <option>No therapist</option>
                        )}
                      </select>
                      <div className={classes.payment}>
                        <input
                          className={classes.InputPay}
                          placeholder="FirstName"
                        ></input>
                        <input
                          className={classes.InputPay}
                          placeholder="LastName"
                        ></input>
                      </div>
                      <div className={classes.payment}>
                        <input
                          className={classes.InputPayment}
                          placeholder="CardNumber"
                        ></input>
                        <input
                          className={classes.InputPayment2}
                          placeholder="CW"
                        ></input>
                        <input
                          className={classes.InputPayment2}
                          placeholder="MM/YY"
                        ></input>
                      </div>
                    </div>
                  </div>
                  <div className={classes.modalActions}>
                    <div className={classes.actionsContainer}>
                      <CustomButton
                        label="Close"
                        className={classes.deleteBtn}
                        onClick={hideModalHandler}
                      ></CustomButton>

                      <CustomButton
                        disabled={post.length > 0 ? false : true}
                        label="Make reservation"
                        onClick={submitReservationHandler}
                        className={classes.deleteBtn}
                      ></CustomButton>
                    </div>
                  </div>
                </div>
              </div>{" "}
              *
            </>
          )}
          {/* ----------------------------------------------------------------- */}
        </div>
      )}
      {!theme && (
        <div className={classes.frameL}>
          {cartIsShown && <Cart onClose={hideCartHandler} />}
          {/*  {dateIsShown && <DateTime onClose={hideDateHandler} />} */}
          {adminControl && <AddTreatment onClose={hideAdminHandler} />}
          <div className={classes.cover}></div>

          <Header onShowCart={showCartHandler}></Header>

          <div className={classes.result}>{TreatmentsListL}</div>

          {/* <Treatments
  onShowDate={showDateHandler}
  onShowAdmin={showAdminHandler}
></Treatments> */}

          {/* <div className={classes.addButton}>
  <Link to="/AdminPage">
    <button className={classes.button}>ADMIN PANEL</button>
  </Link>
</div> */}

          {/*  --------------------------------------------------------- */}
          {modalIsShown && (
            <>
              <div className={classes.darkBG} onClick={hideModalHandler} />
              <div className={classes.centered}>
                <div className={classes.modal}>
                  <div className={classes.modalHeader}>
                    <h5 className={classes.heading}>Make reservation</h5>
                  </div>

                  <div className={classes.modalContent}>
                    <div className={classes.main}>
                      <Calendar
                        value={dateState}
                        onChange={changeDate}
                        minDate={new Date()}
                      />
                      <select
                        onChange={(event) => {
                          console.log("event", event.target.value);
                          setTherapistValue(event.target.value);
                        }}
                        className={classes.selectContainer}
                      >
                        {post.length > 0 ? (
                          post.map((therapist) => (
                            <option value={therapist.TherapistID}>
                              {therapist.FirstName}
                            </option>
                          ))
                        ) : (
                          <option>No therapist</option>
                        )}
                      </select>
                      <div className={classes.payment}>
                        <input
                          className={classes.InputPay}
                          placeholder="FirstName"
                        ></input>
                        <input
                          className={classes.InputPay}
                          placeholder="LastName"
                        ></input>
                      </div>
                      <div className={classes.payment}>
                        <input
                          className={classes.InputPayment}
                          placeholder="CardNumber"
                        ></input>
                        <input
                          className={classes.InputPayment2}
                          placeholder="CW"
                        ></input>
                        <input
                          className={classes.InputPayment2}
                          placeholder="MM/YY"
                        ></input>
                      </div>
                    </div>
                  </div>
                  <div className={classes.modalActions}>
                    <div className={classes.actionsContainer}>
                      <CustomButton
                        label="Close"
                        className={classes.deleteBtn}
                        onClick={hideModalHandler}
                      ></CustomButton>

                      <CustomButton
                        disabled={post.length > 0 ? false : true}
                        label="Make reservation"
                        onClick={submitReservationHandler}
                        className={classes.deleteBtn}
                      ></CustomButton>
                    </div>
                  </div>
                </div>
              </div>{" "}
              *
            </>
          )}
          {/* ----------------------------------------------------------------- */}
        </div>
      )}
    </>
  );
}

export default Reservation;
