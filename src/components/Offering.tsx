import { Container, createStyles, Title, Image } from "@mantine/core";
import { useEffect } from "react";
import { AnalyticsEvent, SectionType } from "../helpers/MixpanelEvents.d";
import { Mixpanel } from "../helpers/MixpanelHelper";
import { useVisibility } from "../helpers/useVisiblity";

import { OfferingImagesInfinteScroll } from "./OfferingImagesInfinteScroll";

const useStyles = createStyles((theme) => ({
  wrapper: {
    alignItems: "center",
    justifyItems: "center",
    justifyContent: "center",
    backgroundColor: theme.colors.gray[1],

    [theme.fn.largerThan("md")]: {
      paddingTop: theme.spacing.xl * 2,
      paddingBottom: theme.spacing.md,
    },

    [theme.fn.smallerThan("md")]: {
      padding: 10,
    },
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 500,
    marginBottom: theme.spacing.xl,
    textAlign: "center",
    fontSize: 17,
    marginTop: theme.spacing.xl,
    color: "#3174F3",

    [theme.fn.largerThan("md")]: {
      fontSize: 20,
      lineHeight: "24px",
      letterSpacing: "10%",
    },
  },

  subtitle: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 600,
    textAlign: "center",
    fontSize: 25,
    lineHeight: "24px",
    letterSpacing: "10%",
    [theme.fn.largerThan("md")]: {
      fontSize: 36,
    },
  },
}));

export function Offering() {
  const { classes, theme } = useStyles();
  const [isVisible, visibleRef] = useVisibility(0);
  useEffect(() => {
    if (isVisible) {
      Mixpanel.track(AnalyticsEvent.UserScolled, {
        section: SectionType.offering,
      });
    }
  }, [isVisible]);
  return (
    <Container ref={visibleRef as any} fluid={true} className={classes.wrapper}>
      <Title className={classes.title}>WHAT DOES VIGNAM OFFER?</Title>
      <Title className={classes.subtitle}>
        Digital solutions that run in any hardware at your school
      </Title>
      <OfferingImagesInfinteScroll />
    </Container>
  );
}
