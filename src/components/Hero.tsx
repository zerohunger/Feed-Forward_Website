import {
  createStyles,
  Image,
  Container,
  Title,
  Button,
  Text,
} from "@mantine/core";
import { url } from "inspector";

const useStyles = createStyles((theme) => ({
  inner: {
    display: "flex",
    justifyContent: "space-evenly",

    padding: theme.spacing.xl * 4,

    [theme.fn.smallerThan("sm")]: {
      paddingTop: theme.spacing.xl * 2,
      paddingBottom: theme.spacing.xl * 2,
      paddingLeft: theme.spacing.lg,
      paddingRight: theme.spacing.lg,
    },
  },

  content: {
    [theme.fn.largerThan("lg")]: {
      maxWidth: 600,
      minWidth: 500,
    },

    [theme.fn.smallerThan("lg")]: {
      maxWidth: "60%",
      minWidth: "60%",
    },

    [theme.fn.smallerThan("sm")]: {
      maxWidth: "100%",
      minWidth: "100%",
    },
  },

  title: {
    color: theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: 62,
    lineHeight: "75px",
    fontWeight: 900,

    [theme.fn.smallerThan("lg")]: {
      fontSize: 32,
      lineHeight: "45px",
      fontWeight: 900,
    },
  },

  image: {
    maxWidth: 700,
    minWidth: 700,
    maxHeight: 460,
    backgroundColor: theme.colors.red[5],
    borderRadius: 18,
    marginLeft: 50,
    [theme.fn.smallerThan("lg")]: {
      maxWidth: 300,
      minWidth: 300,
      maxHeight: 300,
    },

    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  highlight: {
    position: "relative",
    borderRadius: theme.radius.sm,
    color: "#3174F3",

    [theme.fn.smallerThan("lg")]: {
      fontSize: 32,
    },
  },

  requestDemoButton: {
    marginTop: 30,
    width: "70%",
    
    backgroundColor: theme.primaryColor,
  },

  description: {
    fontSize: 20,
    lineHeight: "30px",
    fontWeight: 400,
    paddingTop: 10,

    [theme.fn.smallerThan("lg")]: {
      fontSize: 15,
      lineHeight: "25px",
      paddingTop: 2,
    },
  },
}));

export function Hero() {
  const { classes } = useStyles();
  return (
    <div>
      <Container fluid={true}>
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title}>
              Make your School <br></br>
              <span className={classes.highlight}>SMARTER</span>
            </Title>
            <Text color="dimmed" mt="md" className={classes.description}>
              Vignam help schools to transform their classroom teaching, set up
              their practical labs infrastructure and help school’s to digitise
              their existing management practices
            </Text>

            <Button radius="md" size="xl" className={classes.requestDemoButton}>
              Request Demo
            </Button>
          </div>
          <Image
            src={require("https://imgur.com/a/2T9OwwI")}
            className={classes.image}
          />
        </div>
      </Container>
    </div>
  );
}
