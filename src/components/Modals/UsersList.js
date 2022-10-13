import { Fragment } from "react";
import axios from "axios";
import Modal from "../UI/Modal";
import { Link } from "react-router-dom";
import classes from "./UsersList.module.css";
import { useState, useEffect } from "react";
import Card from "../UI/Card";

const baseURL = "http://127.0.0.1:8000/api/allUser";

const UsersList = (props) => {
  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

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

  console.log(error, "hgajghajgahj");

  const usersList = post.map((user, index) => {
    return user ? (
      <li key={index} className={classes.frame}>
        <div>
          <h3>{user.name}</h3>
          <div className={classes.name}>{user.id}</div>
          <div className={classes.email}>{user.email}</div>
        </div>
      </li>
    ) : null;
  });

  return (
    <Modal>
      {loading ? (
        "loading"
      ) : (
        <>
          <div className={classes.main}>
            {error ? "error" : <ul className={classes.list}>{usersList}</ul>}
          </div>
          <button className={classes.button} onClick={props.onClose}>
            Close
          </button>
        </>
      )}
    </Modal>
  );
};

export default UsersList;
