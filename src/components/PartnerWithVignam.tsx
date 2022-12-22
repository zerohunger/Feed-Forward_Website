import { Container, createStyles, Title, Text } from "@mantine/core";
import { Widget } from "@typeform/embed-react";

const useStyles = createStyles((theme) => ({
  wrapper: {
    backgroundColor: theme.colors.blue[0],
    paddingRight: theme.spacing.xl * 2,
    paddingLeft: theme.spacing.xl * 2,
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,

    [theme.fn.largerThan("md")]: {
      paddingRight: theme.spacing.xl * 5,
      paddingLeft: theme.spacing.xl * 5,
      paddingTop: theme.spacing.xl * 4,
      paddingBottom: theme.spacing.xl * 4,
    },
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 600,
    letterSpacing: "-2.5%",
    lineHeight: "60px",
    fontSize: 28,
    textAlign: "left",

    [theme.fn.largerThan("md")]: {
      fontSize: 48,
      textAlign: "center",
    },
  },

  subtitle: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 400,
    fontSize: 22,
    textAlign: "left",
    [theme.fn.largerThan("md")]: {
      textAlign: "center",
      fontSize: 28,
      marginTop: 20,
      lineHeight: "42px",
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

      <Widget
        id="W2tLHm8d"
        inlineOnMobile={true}
        style={{ minHeight: "60vh", height: "80vh", marginTop: 20 }}
      />
    </Container>
  );
}
