import { Container, createStyles, Title, Image } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  wrapper: {
    paddingRight: theme.spacing.xl * 5,
    paddingLeft: theme.spacing.xl * 5,
    paddingTop: theme.spacing.xl * 4,
    paddingBottom: theme.spacing.md,
    alignItems: "center",
    justifyItems: "center",
    justifyContent: "center",
    backgroundColor: theme.colors.gray[1],

    [theme.fn.smallerThan("md")]: {
      padding: 30,
    },
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 500,
    marginBottom: theme.spacing.xl,
    textAlign: "center",
    fontSize: 20,
    lineHeight: "24px",
    letterSpacing: "10%",
    color: "#3174F3",
  },

  subtitle: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 600,
    textAlign: "center",
    fontSize: 36,
    [theme.fn.smallerThan("sm")]: {
      fontSize: 28,
      textAlign: "center",
    },
  },

  carousel: {
    backgroundColor: "turquoise",
    minHeight: "70vh",
    margin: 20,
    [theme.fn.smallerThan("sm")]: {
      minHeight: "50vh",
      margin: 10,
    },
  },
}));

export function Offering() {
  const { classes, theme } = useStyles();
  return (
    <Container fluid={true} className={classes.wrapper}>
      <Title className={classes.title}>WHAT DOES VIGNAM OFFER?</Title>
      <Title className={classes.subtitle}>
        Digital solutions that run in any hardware at your school
      </Title>
      <Image className={classes.carousel}></Image>
    </Container>
  );
}
