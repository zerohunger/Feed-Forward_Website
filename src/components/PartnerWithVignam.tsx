import { Container, createStyles, Title, Text } from "@mantine/core";
import { Widget } from "@typeform/embed-react";
import { useEffect } from "react";
import { AnalyticsEvent, SectionType } from "../helpers/MixpanelEvents.d";
import { Mixpanel } from "../helpers/MixpanelHelper";
import { useVisibility } from "../helpers/useVisiblity";
import { Hero1 } from "./PannelForHero";

const useStyles = createStyles((theme) => ({
  wrapper: {
    backgroundColor: theme.colors.blue[0],
    paddingRight: theme.spacing.xl ,
    paddingLeft: theme.spacing.xl ,
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,

    [theme.fn.largerThan("md")]: {
      paddingRight: theme.spacing.xl * 5,
      paddingLeft: theme.spacing.xl * 5,
      paddingTop: theme.spacing.xl * 4,
      paddingBottom: theme.spacing.xl * 4,
      [theme.fn.smallerThan("md")]:{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }
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
    fontWeight: 900,
  },
  forpannel:{
   
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    [theme.fn.largerThan("md")]:{
    paddingLeft:"31%",paddingRight:"31%",paddingTop:"4%",paddingBottom:"2%"
    },
    [theme.fn.smallerThan("md")]:{
      paddingTop:"4%",paddingBottom:"2%"

    }

  },
}));

export function PartnerWithVignam() {
 const { classes, theme } = useStyles();
  const [isVisible, visibleRef] = useVisibility(0);
  useEffect(() => {
    if (isVisible) {
      Mixpanel.track(AnalyticsEvent.UserScolled, {
        section: SectionType.whyPartner,
      });
    }
  }, [isVisible]);
  return (
    <Container ref={visibleRef as any} fluid={true} className={classes.wrapper}>
        <Title className={classes.title}>
        Partner with <span className={classes.highlight}>VIGNAM</span>
      </Title>
      <Text className={classes.subtitle}>
        Fill the form below and our team will contact you for the demo
      </Text>
      <div className={classes.forpannel}>
      <Hero1
       onSubmitClick={() => {
        Mixpanel.track(AnalyticsEvent.DemoFormSubmitted);
      }}/>
      </div>
  

     
    </Container>
  );
}
