import { useDispatch, useSelector } from "react-redux";
import classes from "./Settings.module.css";
import { useNavigate } from "react-router-dom";

import Modal from "../UI/Modal";
import { dark } from "../../store/Theme-slice";

const Welcome = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const themeD = useSelector((state) => state.theme.themeValue);

  const NavigateTo = () => {
    navigate("/AdminPage");
  };

  const dispatchHandlerD = async (event) => {
    event.preventDefault();

    dispatch(dark(true));
    console.log("themeD", themeD);
  };
  const dispatchHandlerL = async (event) => {
    event.preventDefault();

    dispatch(dark(false));
  };

  return (
    <Modal>
      <div className={classes.main}>
        <div className={classes.left}>
          <button onClick={dispatchHandlerL}>Light mode</button>
          <button onClick={dispatchHandlerD}>Dark mode</button>
        </div>
        <div className={classes.right}>
          <button onClick={NavigateTo}>Admin panel</button>
        </div>
      </div>
      <div className={classes.close}>
        <button onClick={props.onClose}>CLOSE</button>
      </div>
    </Modal>
  );
};

export default Welcome;
