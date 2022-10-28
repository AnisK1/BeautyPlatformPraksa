import { Fragment, useState, useEffect } from "react";
import axios from "axios";

import ModalOne from "../UI/ModalOne";
import ClipLoader from "react-spinners/ClipLoader";
import classes from "./AdminPage.module.css";
import Card from "../UI/Card";
import Header from "../Layout/Header";
import Treatments from "../Treatments/Treatments";
import Cart from "../Cart/Cart";
import DateTime from "./DateTime";
import AddTreatment from "./AddTreatment";
import UsersList from "../Modals/UsersList";
import ReservationList from "../Modals/ReservationList";
import UserSearch from "../Modals/UserSearch";
import CustomButton from "../UI/Button";
import UserSearchID from "../Modals/UserSearchID";
import DeleteUser from "../Modals/DeleteUser";
import DeleteReservation from "../Modals/DeleteReservation";
import UpdateTherapist from "../Modals/UpdateTherapist";
import UpdateTreatment from "../Modals/UpdateTreatment";

function Main() {
  const [cartIsShown, setCartIsShown] = useState(false);
  const [userDeleteIsShown, setUserDeleteIsShown] = useState(false);
  const [userSearchIsShown, setUserSearchIsShown] = useState(false);
  const [reservationDeleteIsShown, setReservationDeleteIsShown] =
    useState(false);
  const [updateTherapist, setUpdateTherapist] = useState(false);
  const [updateTreatment, setUpdateTreatment] = useState(false);

  const [IdSearchIsShown, setIdSearchIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };
  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  const showUserDeleteHandler = () => {
    setUserDeleteIsShown(true);
  };
  const hideUserDeleteHandler = () => {
    setUserDeleteIsShown(false);
  };

  const showUserSearchListHandler = () => {
    setUserSearchIsShown(true);
  };
  const hideUserSearchListHandler = () => {
    setUserSearchIsShown(false);
  };

  const showIdSearchHandler = () => {
    setIdSearchIsShown(true);
  };
  const hideIdSearchHandler = () => {
    setIdSearchIsShown(false);
  };
  const showDeleteReservationHandler = () => {
    setReservationDeleteIsShown(true);
  };
  const hideDeleteReservationhHandler = () => {
    setReservationDeleteIsShown(false);
  };
  const showUpdateTherapistHandler = () => {
    setUpdateTherapist(true);
  };
  const hideUpdateTherapistHandler = () => {
    setUpdateTherapist(false);
  };
  const showUpdateTreatmentHandler = () => {
    setUpdateTreatment(true);
  };
  const hideUpdateTreatmentHandler = () => {
    setUpdateTreatment(false);
  };
  /*  ------------------------------------------------ */

  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const baseURL = "http://127.0.0.1:8000/api/allUser";

  useEffect(() => {
    setLoading(true);
    axios
      .get(baseURL)
      .then((res) => {
        // check status for response and set data accordingly
        setPost(res.data.data.users);
        // log the data

        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        setError(true);
      });
  }, []);

  const usersList = post.map((user, index) => {
    return user ? (
      <div key={index} className={classes.frame}>
        <div className={classes.AllUsers}>
          <div className={classes.id}>ID:{user.id}</div>

          <div className={classes.name}>Name:{user.name}</div>

          <div className={classes.email}>Email:{user.email}</div>
        </div>
      </div>
    ) : null;
  });
  /*  ------------------------------------------------ */

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
        // log the data
        console.log("LISTA Tretmana", res2);

        setLoading2(false);
      })
      .catch((error) => {
        /* setLoading(false);
        setError(true); */
      });
  }, []);

  const TreatmentsList = treatmentPost.map((treatment, index) => {
    return treatment ? (
      <li key={index} className={classes.frame}>
        <div className={classes.AllTreatments}>
          <div className={classes.treatment}>ID:{treatment.id}</div>

          <div className={classes.treatment}>Price:{treatment.price}</div>

          <div className={classes.treatment}>Duration:{treatment.Duration}</div>
          <div className={classes.treatment}>
            Description:{treatment.Description}
          </div>
        </div>
      </li>
    ) : null;
  });
  /*  ------------------------------------------------ */

  const [reservationPost, setReservationPost] = useState([]);
  const [loading3, setLoading3] = useState(false);
  const [errorMsg, setErrorMsg] = useState(false);

  const baseURL3 = "http://127.0.0.1:8000/api/allReservation";

  useEffect(() => {
    setLoading3(true);
    axios
      .get(baseURL3)
      .then((res3) => {
        // check status for response and set data accordingly
        setReservationPost(res3.data.data.reservations);
        console.log("LISTA REZERVACIJA", res3.data.data.reservations);
        // log the data

        setLoading2(false);
      })
      .catch((error) => {
        /* setLoading(false);
        setError(true); */
        setLoading3(false);
        setErrorMsg(true);
      });
  }, []);

  let ReservationsList = "no results N";

  ReservationsList = reservationPost.map((reservations, index) => {
    const date = new Date(reservations.updated_at);
    const date1 = new Date(reservations.DateTime);

    console.log("date", date.toLocaleString("de-De"));
    return reservations ? (
      <li key={index} className={classes.frame}>
        <div className={classes.AllReservations}>
          <div className={classes.reservations}>User:{reservations.UserID}</div>
          <div className={classes.innerReservation}>
            <div className={classes.reservations}>
              Date and Time:{date1.toLocaleString("de-DE")}
            </div>

            <div className={classes.reservations}>
              Terapeut:{reservations.treatmenttherapistID}
            </div>

            <div className={classes.reservations}>
              Day of reservation: {date.toLocaleString("de-De")}
            </div>
          </div>
        </div>
      </li>
    ) : null;
  });

  /*  ------------------------------------------------ */

  const [therapistPost, setTherapistPost] = useState([]);
  const [loading4, setLoading4] = useState(false);
  const [errorMsg4, setErrorMsg4] = useState(false);
  const [erroarMsg4, setErrorMasg4] = useState("ds");

  const baseURL4 = "http://127.0.0.1:8000/api/allTherapist";

  useEffect(() => {
    setLoading4(true);
    axios
      .get(baseURL4)
      .then((res4) => {
        // check status for response and set data accordingly
        setTherapistPost(res4.data.data.therapists);
        // log the data

        setLoading4(false);
      })
      .catch((error) => {
        /* setLoading(false);
        setError(true); */
        /* setLoading3(false);
        setErrorMsg(true); */
      });
  }, []);
  const TherapistsList = therapistPost.map((therapists, index) => {
    return therapists ? (
      <li key={index} className={classes.frame}>
        <div className={classes.AllTherapists}>
          <div className={classes.therapists}>ID:{therapists.id}</div>

          <div className={classes.therapists}>
            First name:{therapists.FirstName}
          </div>

          <div className={classes.therapists}>
            Last name:{therapists.LastName}
          </div>
        </div>
      </li>
    ) : null;
  });

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className={classes.mainDiv}>
        {cartIsShown && <Cart onClose={hideCartHandler} />}
        {userDeleteIsShown && <DeleteUser onClose={hideUserDeleteHandler} />}
        {userSearchIsShown && (
          <UserSearch onClose={hideUserSearchListHandler} />
        )}
        {IdSearchIsShown && <UserSearchID onClose={hideIdSearchHandler} />}
        {reservationDeleteIsShown && (
          <DeleteReservation onClose={hideDeleteReservationhHandler} />
        )}
        {updateTherapist && (
          <UpdateTherapist onClose={hideUpdateTherapistHandler} />
        )}
        {updateTreatment && (
          <UpdateTreatment onClose={hideUpdateTreatmentHandler} />
        )}

        <Header onShowCart={showCartHandler}></Header>
        {/* <div className={classes.cover}></div> */}

        <section className={classes.treatments}>
          <div className={classes.mainFrame}>
            <div className={classes.CardFrame}>
              <Card>
                <div className={classes.innerFrame2}>
                  <div className={classes.title}>
                    <h1>Users</h1>
                  </div>
                  <div className={classes.TreatmentList}>
                    <div className={classes.frame}>
                      <CustomButton
                        label="Delete user by ID"
                        className={classes.button}
                        onClick={showUserDeleteHandler}
                      ></CustomButton>
                      <CustomButton
                        label="User search by ID"
                        className={classes.button}
                        onClick={showIdSearchHandler}
                      ></CustomButton>
                      <CustomButton
                        label="User search by name"
                        className={classes.button}
                        onClick={showUserSearchListHandler}
                      ></CustomButton>
                    </div>

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
                  </div>
                  <div className={classes.UsersList}>{usersList}</div>
                </div>
              </Card>
            </div>
            <div className={classes.CardFrame2}>
              <Card>
                <div className={classes.innerFrame2}>
                  <div className={classes.title}>
                    <h1>Treatments</h1>
                  </div>
                  <div className={classes.TreatmentList}>
                    <div className={classes.frame}>
                      <CustomButton
                        label="Update treatment"
                        className={classes.button}
                        onClick={showUpdateTreatmentHandler}
                      ></CustomButton>
                    </div>
                    {loading2 && (
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
                  </div>
                  <div className={classes.UsersList}>{TreatmentsList}</div>
                </div>
              </Card>
            </div>
            <div className={classes.CardFrame3}>
              <Card>
                <div className={classes.card}>
                  <div className={classes.title}>
                    <h1>Reservations</h1>
                  </div>

                  <div>
                    <CustomButton
                      label="Delete reservation by ID"
                      className={classes.button}
                      onClick={showDeleteReservationHandler}
                    ></CustomButton>
                  </div>

                  {loading3 && (
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
                  {<div className={classes.UsersList}>{ReservationsList}</div>}
                </div>
              </Card>
            </div>
            <div className={classes.CardFrame2}>
              <Card>
                <div className={classes.innerFrame2}>
                  <div className={classes.title}>
                    <h1>Therapists</h1>
                  </div>
                  <div>
                    <CustomButton
                      label="Update therapist"
                      className={classes.button}
                      onClick={showUpdateTherapistHandler}
                    ></CustomButton>
                  </div>
                  <div className={classes.TherapistsList}>
                    {loading4 && (
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
                  </div>
                  <div className={classes.TherapistsListContainer}>
                    <div className={classes.TherapistsList}>
                      {TherapistsList}
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Main;
