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

function Main() {
  const [cartIsShown, setCartIsShown] = useState(false);
  const [usersListIsShown, setUsersListIsShown] = useState(false);
  const [userSearchIsShown, setUserSearchIsShown] = useState(false);

  const [reservationListIsShown, setReservationListIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };
  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  const showUsersListHandler = () => {
    setUsersListIsShown(true);
  };
  const hideUsersListHandler = () => {
    setUsersListIsShown(false);
  };

  const showUserSearchListHandler = () => {
    setUserSearchIsShown(true);
  };
  const hideUserSearchListHandler = () => {
    setUserSearchIsShown(false);
  };

  const showReservationListHandler = () => {
    setReservationListIsShown(true);
  };
  const hideReservationListHandler = () => {
    setReservationListIsShown(false);
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
        console.log("post", res.data.data.users);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        setError(true);
      });
  }, []);

  const usersList = post.map((user, index) => {
    return user ? (
      <li key={index} className={classes.frame}>
        <div className={classes.AllUsers}>
          <div className={classes.id}>ID:{user.id}</div>

          <div className={classes.name}>Name:{user.name}</div>

          <div className={classes.email}>Email:{user.email}</div>
        </div>
      </li>
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
        console.log("treatments", res2.data.data.treatments);
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
        // log the data
        console.log("Reservation", res3);
        setLoading2(false);
      })
      .catch((error) => {
        /* setLoading(false);
        setError(true); */
        setLoading3(false);
        setErrorMsg(true);
      });
  }, []);

  const ReservationsList = treatmentPost.map((reservations, index) => {
    return reservations ? (
      <li key={index} className={classes.frame}>
        <div className={classes.AllReservations}>
          <div className={classes.reservations}>ID:{reservations.id}</div>

          <div className={classes.reservations}>Price:{reservations.price}</div>

          <div className={classes.reservations}>
            Duration:{reservations.Duration}
          </div>
          <div className={classes.reservations}>
            Description:{reservations.Description}
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
        console.log("Therapists", res4.data.data.therapists);
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
        {usersListIsShown && <UsersList onClose={hideUsersListHandler} />}
        {userSearchIsShown && (
          <UserSearch onClose={hideUserSearchListHandler} />
        )}
        {reservationListIsShown && (
          <ReservationList onClose={hideReservationListHandler} />
        )}

        <Header onShowCart={showCartHandler}></Header>
        <div className={classes.cover}></div>

        <section className={classes.treatments}>
          <div className={classes.mainFrame}>
            <div className={classes.CardFrame}>
              <Card>
                <div className={classes.frame}>
                  <CustomButton
                    label="User list"
                    className={classes.button}
                    onClick={showUsersListHandler}
                  ></CustomButton>
                  <CustomButton
                    label="Reservations"
                    className={classes.button}
                    onClick={showReservationListHandler}
                  ></CustomButton>
                  <CustomButton
                    label="User search"
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
                <div className={classes.UsersList}>{usersList}</div>
              </Card>
            </div>
            <div className={classes.CardFrame2}>
              <Card>
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
                <div className={classes.UsersList}>{TreatmentsList}</div>
              </Card>
            </div>
            <div className={classes.CardFrame3}>
              <Card>
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
                {
                  <div className={classes.main}>
                    {errorMsg && <h1>There are no reservations</h1>}
                    {/*   {!errorMsg && { ReservationsList }} */}
                  </div>
                }
              </Card>
            </div>
            <div className={classes.CardFrame2}>
              <Card>
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
                <div className={classes.TherapistsList}>{TherapistsList}</div>
              </Card>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Main;
