import {
  Container,
  createStyles,
  Title,
  Text,
  Group,
  Space,
  Image,
} from "@mantine/core";

const useStyles = createStyles((theme) => ({
  wrapper: {
    paddingRight: theme.spacing.xl * 5,
    paddingLeft: theme.spacing.xl * 5,
    paddingTop: theme.spacing.xl * 4,
    paddingBottom: theme.spacing.xl * 4,
    alignItems: "center",
    justifyItems: "center",
    justifyContent: "center",
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 600,
    marginBottom: theme.spacing.xl * 2,
    textAlign: "center",
    fontSize: 36,
    [theme.fn.smallerThan("sm")]: {
      fontSize: 28,
      textAlign: "left",
    },
  },

  description: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 400,
    textAlign: "left",
    fontSize: 24,
    [theme.fn.smallerThan("sm")]: {
      fontSize: 28,
      textAlign: "left",
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
  return (
    <Container fluid={true} className={classes.wrapper}>
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
      <Group position="apart">
        <Space></Space>
        <Group>
          <Image
            src={"/assets/images/IITR.png"}
            height={150}
            width={150}
            withPlaceholder
            style={{ backgroundColor: "floralwhite" }}
          />
          <Image
            src={"/assets/images/iHUB.png"}
            height={150}
            width={150}
            withPlaceholder
            style={{ backgroundColor: "palegoldenrod" }}
          />
        </Group>
      </Group>
    </Container>
  );
}
