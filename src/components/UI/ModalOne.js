import React from "react";
import styles from "./ModalOne.module.css";
import CustomButton from "./Button";

const ModalOne = ({ setIsOpen }) => {
  return (
    <>
      <div className={styles.darkBG} onClick={() => setIsOpen(false)} />
      <div className={styles.centered}>
        <div className={styles.modal}>
          <div className={styles.modalHeader}>
            <h5 className={styles.heading}>Dialog</h5>
          </div>
          <CustomButton
            className={styles.closeBtn}
            onClick={() => setIsOpen(false)}
          ></CustomButton>
          <div className={styles.modalContent}>
            Are you sure you want to delete the item?
          </div>
          <div className={styles.modalActions}>
            <div className={styles.actionsContainer}>
              <CustomButton
                className={styles.deleteBtn}
                onClick={() => setIsOpen(false)}
              >
                Delete
              </CustomButton>
              <CustomButton
                className={styles.cancelBtn}
                onClick={() => setIsOpen(false)}
              >
                Cancel
              </CustomButton>
            </div>
          </div>
        </div>
      </div>{" "}
      *
    </>
  );
};

export default ModalOne;
