import { Fragment, useState } from "react";

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

  return (
    <Fragment>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      {usersListIsShown && <UsersList onClose={hideUsersListHandler} />}
      {userSearchIsShown && <UserSearch onClose={hideUserSearchListHandler} />}
      {reservationListIsShown && (
        <ReservationList onClose={hideReservationListHandler} />
      )}

      <Header onShowCart={showCartHandler}></Header>
      <div className={classes.cover}></div>

      <section className={classes.treatments}>
        <Card>
          <div className={classes.frame}>
            <button className={classes.button} onClick={showUsersListHandler}>
              Users list
            </button>
            <button
              className={classes.button}
              onClick={showReservationListHandler}
            >
              Reservations
            </button>
            <button
              className={classes.button}
              onClick={showUserSearchListHandler}
            >
              User search
            </button>
          </div>
        </Card>
      </section>
    </Fragment>
  );
}

export default Main;
