import { Container, createStyles, Title, Text } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  wrapper: {
    paddingRight: theme.spacing.xl * 5,
    paddingLeft: theme.spacing.xl * 5,
    paddingTop: theme.spacing.xl * 4,
    paddingBottom: theme.spacing.xl * 4,
    backgroundColor: theme.colors.blue[0],
    alignItems: "center",
    justifyItems: "center",
    justifyContent: "center",
    [theme.fn.smallerThan("md")]: {
      paddingRight: theme.spacing.xl * 2,
      paddingLeft: theme.spacing.xl * 2,
      paddingTop: theme.spacing.xl,
      paddingBottom: theme.spacing.xl,
    },
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 600,
    letterSpacing: "-2.5%",
    lineHeight: "60px",
    textAlign: "center",
    fontSize: 48,
    [theme.fn.smallerThan("sm")]: {
      fontSize: 28,
      textAlign: "left",
    },
  },

  subtitle: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 400,
    textAlign: "center",
    fontSize: 28,
    marginTop: 20,
    lineHeight: "42px",
    [theme.fn.smallerThan("sm")]: {
      fontSize: 28,
      textAlign: "left",
    },
  },

  highlight: {
    color: "#3174F3",
  },
}));

export function PartnerWithVignam() {
  const { classes, theme } = useStyles();
  return (
    <Container fluid={true} className={classes.wrapper}>
      <Title className={classes.title}>
        Partner with <span className={classes.highlight}>VIGNAM</span>
      </Title>
      <Text className={classes.subtitle}>
        Fill the form below and our team will contact you for the demo
      </Text>
      <Container
        style={{
          backgroundColor: "royalblue",
          minHeight: "60vh",
          minWidth: "90%",
          marginTop: 14,
          marginBottom: 14,
        }}
      ></Container>
    </Container>
  );
}
