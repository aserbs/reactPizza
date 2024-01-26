import React from "react";
import styles from "./NotFoundBlock.module.scss";

function NotFoundBlock() {
  return (
    <h1 className={styles.root}>
      <span>:(</span> <br />
      not found
    </h1>
  );
}

export default NotFoundBlock;
