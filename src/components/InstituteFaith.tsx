import {
  Container,
  createStyles,
  Title,
  Text,
  Group,
  Space,
  Image,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { useEffect } from "react";
import { AnalyticsEvent, SectionType } from "../helpers/MixpanelEvents.d";
import { Mixpanel } from "../helpers/MixpanelHelper";
import { useVisibility } from "../helpers/useVisiblity";

const useStyles = createStyles((theme) => ({
  wrapper: {
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
    marginBottom: theme.spacing.xl * 2,
    textAlign: "left",
    fontSize: 28,
    [theme.fn.largerThan("md")]: {
      fontSize: 36,
      textAlign: "center",
    },
  },

  description: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 400,
    textAlign: "left",
    fontSize: 20,
    marginBottom: theme.spacing.xl * 2,
    [theme.fn.largerThan("md")]: {
      fontSize: 24,
    },
  },

  highlight: {
    color: "#3174F3",
  },

  highlightBlack: {
    color: theme.black,
    fontWeight: 700,
  },

  highlightOrange: {
    color: "#FF7A00",
    fontWeight: 700,
  },
}));

export function InstitueFaith() {
  const { classes, theme } = useStyles();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm}px)`);
  const [isVisible, visibleRef] = useVisibility(0);
  useEffect(() => {
    if (isVisible) {
      Mixpanel.track(AnalyticsEvent.UserScolled, {
        section: SectionType.institues,
      });
    }
  }, [isVisible]);

  return (
    <Container ref={visibleRef as any} fluid={true} className={classes.wrapper}>
      <Title className={classes.title}>
        Premium institutions of India have{" "}
        <span className={classes.highlight}>FAITH</span> in us
      </Title>

      <Text className={classes.description}>
        We are backed by <span className={classes.highlightBlack}>i</span>
        <span className={classes.highlightOrange}>Hub</span>
        <span className={classes.highlightBlack}>Divya</span>
        <span className={classes.highlightOrange}>Sampark</span> - A joint
        initiative of the{" "}
        <span className={classes.highlightBlack}>Government of India’s</span>{" "}
        Department of Science & Technology (DST) and{" "}
        <span className={classes.highlightBlack}>
          Indian Institute of Technology,Roorkee.
        </span>
      </Text>
      <Group position={mobile ? "center" : "apart"}>
        <Space></Space>
        <Group>
          <Image
            src={require("../assets/images/iHUB.png")}
            withPlaceholder
            height={120}
            width={120}
          />
          <Image
            src={require("../assets/images/IITR.png")}
            withPlaceholder
            height={120}
            width={120}
          />
        </Group>
      </Group>
    </Container>
  );
}
