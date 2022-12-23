import { createStyles, Image } from "@mantine/core";
import "../App.css";

const useStyles = createStyles((theme) => ({
  wrapper: {
    display: "flex",
    alignItems: "center",
    width: "100vw",
    overflow: "hidden",
  },

  scrollParent: {
    position: "relative",
    width: "100vw",
    height: "60vh",
    overflowX: "hidden",
  },

  scrollElementPrimary: {
    width: "inherit",
    height: "inherit",
    position: "absolute",
    left: "0%",
    top: "0%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    animation: "primary 10s linear infinite",
  },

  scrollElementSecondary: {
    width: "inherit",
    height: "inherit",
    position: "absolute",
    left: "0%",
    top: "0%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    animation: "secondary 10s linear infinite",
  },
}));
export function OfferingImagesInfinteScroll() {
  const { classes, theme } = useStyles();
  return (
    <div className={classes.wrapper}>
      <div className={classes.scrollParent}>
        <div className={classes.scrollElementPrimary}>
          <Image
            src={require("../assets/images/Desktop.png")}
            width={"80%"}
          ></Image>
          <Image
            src={require("../assets/images/Mobile.png")}
            width={"55%"}
          ></Image>
          <Image
            src={require("../assets/images/Desktop.png")}
            width={"80%"}
          ></Image>
        </div>
        <div className={classes.scrollElementSecondary}>
          <Image
            src={require("../assets/images/Desktop.png")}
            width={"80%"}
          ></Image>
          <Image
            src={require("../assets/images/Mobile.png")}
            width={"55%"}
          ></Image>
          <Image
            src={require("../assets/images/Desktop.png")}
            width={"80%"}
          ></Image>
        </div>
      </div>
    </div>
  );
}
