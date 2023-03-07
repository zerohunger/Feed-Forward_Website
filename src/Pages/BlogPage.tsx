import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getBlogsById } from "../features/getBlogsSlice";
import { createStyles, Image, Paper } from "@mantine/core";
import { ClassNames } from "@emotion/react";
import { BlogHeader } from "../components/BlogCard/BlogHeader";
import { useNavigate } from "react-router";
import styles from "./BlogPage.module.css";

interface Blog {
  _id: string;
  Title: string;
  description: string;
  subTitle: string;
  blogImageUrl: string;
}
const useStyles = createStyles((theme) => ({  
  CompleteTitle: {
    font: "Popins",
    fontWeight: 400,
    fontSize: "45px",
    marginTop: theme.spacing.xs,

    textAlign: "center",
    color: "#3174F3",
    paddingTop: "1%",
    paddingBottom: "2%",

    [theme.fn.smallerThan("sm")]: {
      fontWeight: 200,
      fontSize: 25,
      paddingTop: 5,
      paddingBottom: 5,
    },
  },

  SubTitle: {
    font: "Popins",
    fontWeight: 300,
    fontSize: "25px",
    marginTop: theme.spacing.xs,

    textAlign: "center",
    color: "grey",
    paddingTop: "1%",

    [theme.fn.smallerThan("sm")]: {
      fontWeight: 200,
      fontSize: 15,
      paddingTop: 5,
      paddingBottom: 5,
    },
  },
  Description: {
    font: "Popins",
    fontWeight: 300,
    fontSize: "25px",
    marginTop: theme.spacing.xs,

    textAlign: "center",
    color: "black",

    [theme.fn.smallerThan("sm")]: {
      fontWeight: 200,
      fontSize: 15,
      paddingTop: 0,
      paddingBottom: 5,
    },
  },
  image: {
    [theme.fn.largerThan("lg")]: {
      width: "800px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      margin: "10px"
    },
  },
  layout: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",

    justifyContent: "center",
  },
  LargerDisplay: {
    [theme.fn.smallerThan("lg")]: { display: "none" },
  },
  SmallerDisplay: {
    paddingTop: 5,
    paddingBottom: 5,
    [theme.fn.largerThan("lg")]: { display: "none" },
  },
  MediumDisplay: {
    paddingTop: 5,
    paddingBottom: 5,
    [theme.fn.largerThan("lg")]: { display: "none" },
    [theme.fn.smallerThan("md")]: { display: "none" },
  },
}));

export function BlogPage() {
  const { classes } = useStyles();

  const navigate = useNavigate();
  const id = useParams().id;

  const [blog, setBlog] = useState<Blog>();

  useEffect(() => {
    getBlogsById({
      id,
    }).then((result) => setBlog(result as Blog));
  }, []);

  return (
    <>
      <BlogHeader
        onHomeClick={() => {
          navigate("/");
        }}
      />

      <div>
        <div className={classes.CompleteTitle}>{blog?.Title}</div>
        <div className={classes.LargerDisplay}>
          <div className={styles.container}>
            <img src={blog?.blogImageUrl} className={styles.img} />
           

            <div className={styles.text}>
              {blog?.subTitle}

              <p >{blog?.description}</p>
            </div>
          </div>
        </div>
        <div className={classes.SmallerDisplay}>
          <img src={blog?.blogImageUrl} height="200px" />
          <div className={classes.SubTitle}>{blog?.subTitle}</div>
          <div className={classes.Description}>{blog?.description}</div>
        </div>
      </div>
    </>
  );
}
