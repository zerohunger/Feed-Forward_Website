import classes from "*.module.css";
import {
  Center,
  Container,
  createStyles,
  Group,
  Stack,
  Title,
} from "@mantine/core";

const useStyles = createStyles((theme) => ({
  wrapper: {
    display: "flex",
    backgroundColor: theme.colors.blue[0],
    padding: 0,
    alignContent: "center",
    paddingTop: theme.spacing.xl * 2,
    paddingBottom: theme.spacing.xl * 2,
    [theme.fn.largerThan("md")]: {
      padding: 0,
      margin: 0,
      minHeight: "300px",
    },
  },

  innerContainer: {
    minWidth: "100%",
    display: "flex",
    justifyContent: "space-evenly",
    alignContent: "stretch",

    [theme.fn.largerThan("lg")]: {
      paddingLeft: 120,
      paddingRight: 120,
    },

    [theme.fn.smallerThan("lg")]: {
      paddingLeft: 60,
      paddingRight: 60,
    },

    [theme.fn.smallerThan("sm")]: {
      paddingLeft: 0,
      paddingRight: 0,
    },
  },

  title: {
    fontWeight: 800,
    fontSize: 72,
    lineHeight: "108px",
    textAlign: "center",
    color: "#0850FD",
  },

  subtitle: {
    fontWeight: 500,
    fontSize: 20,
    lineHeight: "30px",
    textAlign: "center",
  },

  achivementCard: {
    marginBottom: theme.spacing.xl * 2,
    [theme.fn.largerThan("md")]: {
      padding: 0,
      margin: 0,
    },
  },
}));

function Achivement(props: { title: string; subtitle: string }) {
  const { classes } = useStyles();
  return (
    <Container className={classes.achivementCard}>
      <Title className={classes.title}>{props.title}</Title>
      <Title className={classes.subtitle}>{props.subtitle}</Title>
    </Container>
  );
}

export function NumberAchivements() {
  const { classes } = useStyles();
  return (
    <Container fluid={true} className={classes.wrapper}>
      <Container fluid={true} className={classes.innerContainer}>
        <Group style={{ minWidth: "100%" }} position="apart">
          <Achivement title="1400+" subtitle="Satisfied users" />
          <Achivement title="1000+" subtitle="Topics Covered" />
          <Achivement title="50%" subtitle="Increase in School’s Efficiency" />
        </Group>
      </Container>
    </Container>
  );
}
