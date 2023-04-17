import {
  Image,
  Container,
  Title,
  Text,
  createStyles,
  Group,
} from "@mantine/core";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion"


const useStyles = createStyles((theme) => ({
  inner: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    padding: theme.spacing.xl * 4,
  },
  content: {
    maxWidth: 600,
    minWidth: 500,
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  title: {
    color: "rgb(105, 43, 104)",
    fontFamily: "Greycliff CF, " + theme.fontFamily,
    fontSize: 62,
    lineHeight: "75px",
    fontWeight: 900,
    marginBottom: theme.spacing.xl,
  },
  highlight: {
    position: "relative",
    color: "#00008B",
    fontSize: 50,
    lineHeight: "75px",
    fontWeight: 900,
    display: "inline-block",
    padding: `${theme.spacing.xs}px ${theme.spacing.md}px`,
    background: theme.colors.white,
    boxShadow: theme.shadows.md,
  },
  description: {
    fontSize: 20,
    lineHeight: "30px",
    fontWeight: 400,
    paddingTop: theme.spacing.md,
    color: "black",
    maxWidth: 400,
  },
  imageContainer: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: theme.radius.lg,
    overflow: "hidden",
    boxShadow: theme.shadows.md,
    width: 700,
    height: 500,
  },
  image: {
    maxWidth: "100%",
    height: "auto",
    background: "red",
    objectFit: "cover",
    padding:"10px"
  },
}));

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 1.5,
      staggerChildren: 0.3,
      delayChildren: 0.5,
    },
  },
};

const titleVariants = {
  hidden: {
    y: -50,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
};

const highlightVariants = {
  hidden: {
    scale: 0,
    opacity: 0,
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const descriptionVariants = {
  hidden: {
    y: 50,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
};

const imageContainerVariants = {
  hidden: {
    x: "-100%",
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
  exit: {
    x: "100%",
    opacity: 0,
    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
};

export function Heroo() {
  const { classes } = useStyles();
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  const words = ["FOOD AND GROCERIES", "ESSENTIAL ITEMS", "MEDICINES"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    if (!domLoaded) return;

    const intervalId = setInterval(() => {
      setCurrentWordIndex((prevIndex) =>
        prevIndex < words.length - 1 ? prevIndex + 1 : 0
      );
    }, 2000);

    return () => clearInterval(intervalId);
  }, [domLoaded, words.length]);

  const images = [
    { src: require("../assets/images/LOGO4.png"), alt: "Donation Box" },
    { src: require("../assets/images/LOGO10.png"), alt: "Another image" },
    { src: require("../assets/images/LOGO11.png"), alt: "Yet another image" },
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (!domLoaded) return;

    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex < images.length - 1 ? prevIndex + 1 : 0
      );
    }, 5000);

    return () => clearInterval(intervalId);
  }, [domLoaded, images.length]);

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate={domLoaded ? "visible" : "hidden"}
    >
      <Container fluid={true}>
        <h1 style={{display: "flex", alignItems:"center", justifyContent:"center", fontSize:"50px", color:"purple"}}>SYSTEMS THINKING AND ITS APPLICATION IN OUR PROJECT.</h1>
        <Group className={classes.inner}>
          <motion.div className={classes.content} variants={titleVariants}>
            <Title className={classes.title}>
              Help the Society by donating{" "}
              <AnimatePresence>
                <motion.span
                  key={words[currentWordIndex]}
                  className={classes.highlight}
                  variants={highlightVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                >
                  {words[currentWordIndex]}
                </motion.span>
              </AnimatePresence>
            </Title>
            <motion.div
              className={classes.description}
              variants={descriptionVariants}
            >
              During these difficult times, many families are struggling to
              make ends meet. By donating food, essential items, or medicines,
              you can make a difference in the lives of those who are in need.
            </motion.div>
          </motion.div>
          <motion.div
            className={classes.imageContainer}
            variants={imageContainerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <AnimatePresence>
            <motion.img
  key={currentImageIndex}
  className={classes.image}
  src={images[currentImageIndex].src}
  alt={images[currentImageIndex].alt}
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  exit={{ opacity: 0 }}
  transition={{ duration: 1, type: "crossfade" }}
/>
            </AnimatePresence>
          </motion.div>
        </Group>
      </Container>
    </motion.div>
  );
}