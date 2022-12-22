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
    [theme.fn.smallerThan("sm")]: {
      fontSize: 28,
      textAlign: "left",
    },
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
}));

export function Offering() {
  const { classes, theme } = useStyles();
  return (
    <Container fluid={true} className={classes.wrapper}>
      <Title className={classes.title}>WHAT DOES VIGNAM OFFER?</Title>
      <Title className={classes.subtitle}>
        Digital solutions that run in any hardware at your school
      </Title>
      <Image
        style={{ backgroundColor: "turquoise", minHeight: "70vh", margin: 20 }}
      ></Image>
    </Container>
  );
}
