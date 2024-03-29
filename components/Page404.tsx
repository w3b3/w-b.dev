import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import theme from "../styles/theme";

const _styles = makeStyles({
  root: {
    backgroundImage: "linear-gradient(to top, #fff 0%, #5a687f 100%)",
    border: "10px solid red",
    padding: theme.spacing(10),
  },
});

const Page404 = () => {
  const styles = _styles();

  return (
    <span className={styles.root}>
      Nothing <span>here</span> <span>yet!</span>
    </span>
  );
};

export default Page404;
