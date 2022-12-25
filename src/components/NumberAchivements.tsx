import { Container, createStyles, Group, Title } from "@mantine/core";

import CountUp from "react-countup";
import { useEffect } from "react";
import { AnalyticsEvent, SectionType } from "../helpers/MixpanelEvents.d";
import { Mixpanel } from "../helpers/MixpanelHelper";
import { useVisibility } from "../helpers/useVisiblity";

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

function Achivement(props: {
  count: number;
  suffix: string;
  subtitle: string;
}) {
  const { classes } = useStyles();

  return (
    <Container className={classes.achivementCard}>
      <Title className={classes.title}>
        <CountUp
          suffix={props.suffix}
          delay={1}
          duration={1.5}
          end={props.count}
        />
        {/* {({ countUpRef }) => (
            <div>
              <span ref={countUpRef} />
            </div>
          )}
        </CountUp> */}
      </Title>
      <Title className={classes.subtitle}>{props.subtitle}</Title>
    </Container>
  );
}

export function NumberAchivements() {
  const { classes, theme } = useStyles();
  const [isVisible, visibleRef] = useVisibility(0);
  useEffect(() => {
    if (isVisible) {
      Mixpanel.track(AnalyticsEvent.UserScolled, {
        section: SectionType.numbers,
      });
    }
  }, [isVisible]);

  return (
    <Container ref={visibleRef as any} fluid={true} className={classes.wrapper}>
      <Container fluid={true} className={classes.innerContainer}>
        <Group style={{ minWidth: "100%" }} position="apart">
          <Achivement count={1400} suffix="+" subtitle="Satisfied users" />
          <Achivement count={1000} suffix="+" subtitle="Topics Covered" />
          <Achivement
            count={50}
            suffix="%"
            subtitle="Increase in School’s Efficiency"
          />
        </Group>
      </Container>
    </Container>
  );
}
