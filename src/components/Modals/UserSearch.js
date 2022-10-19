import { Fragment } from "react";
import axios from "axios";
import Modal from "../UI/Modal";
import { Link } from "react-router-dom";
import classes from "./UserSearch.module.css";
import { useState, useEffect, useRef } from "react";
import Card from "../UI/Card";
import ClipLoader from "react-spinners/ClipLoader";
import Button from "../UI/Button";

const baseURL = "http://127.0.0.1:8000/api/search/{name}";

const UserSearch = (props) => {
  const nameInputRef = useRef();

  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const submitHandler = (event) => {
    const enteredName = nameInputRef.current.value;

    setLoading(true);
    axios
      .get(baseURL, { name: enteredName })
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
  };

  return (
    <Modal>
      <div className={classes.frame}>
        <form onSubmit={submitHandler} className={classes.form}>
          <div className={classes.frame}>
            <div className={classes.positionLBL}>
              <label>
                <b>Name</b>
              </label>
            </div>
            <div className={classes.positionINP}>
              <input
                type="text"
                required
                className={classes.name}
                ref={nameInputRef}
              ></input>
            </div>

            <div className={classes.FP}>
              <Button className={classes.buttonCSS} type="submit">
                Search
              </Button>
            </div>
          </div>
        </form>

        <button className={classes.button} onClick={props.onClose}>
          Close
        </button>
      </div>
    </Modal>
  );
};

export default UserSearch;
