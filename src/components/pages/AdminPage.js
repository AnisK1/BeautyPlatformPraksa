import { Fragment, useState } from "react";

import classes from "./AdminPage.module.css";
import Card from "../UI/Card";
import Header from "../Layout/Header";
import Treatments from "../Treatments/Treatments";
import Cart from "../Cart/Cart";
import DateTime from "./DateTime";
import AddTreatment from "./AddTreatment";
import UsersList from "../Modals/UsersList";

function Main() {
  const [cartIsShown, setCartIsShown] = useState(false);
  const [usersListIsShown, setUsersListIsShown] = useState(false);

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

  return (
    <Fragment>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      {usersListIsShown && <UsersList onClose={hideUsersListHandler} />}

      <Header onShowCart={showCartHandler}></Header>

      <section className={classes.treatments}>
        <Card>
          <div className={classes.frame}>
            <button className={classes.button} onClick={showUsersListHandler}>
              Users list
            </button>
            <button className={classes.button}>??</button>
            <button className={classes.button}>??</button>
          </div>
        </Card>
      </section>
    </Fragment>
  );
}

export default Main;
