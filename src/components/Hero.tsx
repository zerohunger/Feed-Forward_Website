import {
  createStyles,
  Image,
  Container,
  Title,
  Button,
  Group,
  Text,
  List,
  ThemeIcon,
} from "@mantine/core";
import { IconCheck } from "@tabler/icons";

const useStyles = createStyles((theme) => ({
  inner: {
    display: "flex",
    justifyContent: "space-evenly",
    paddingTop: theme.spacing.xl * 4,
    paddingBottom: theme.spacing.xl * 4,
  },

  content: {
    maxWidth: 600,
    minWidth: 500,

    [theme.fn.smallerThan("md")]: {
      maxWidth: "100%",
      marginRight: 0,
    },
  },

  title: {
    color: theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: 62,
    lineHeight: "75px",
    fontWeight: 900,

    [theme.fn.smallerThan("xs")]: {
      fontSize: 28,
    },
  },

  image: {
    maxWidth: 700,
    minWidth: 700,
    maxHeight: 460,
    backgroundColor: theme.colors.red[5],
    borderRadius: 18,
    [theme.fn.smallerThan("md")]: {
      display: "none",
    },
  },

  highlight: {
    position: "relative",
    borderRadius: theme.radius.sm,
    color: "#3174F3",
  },

  requestDemoButton: {
    marginTop: 30,
    backgroundColor: theme.primaryColor,
  },
}));

export function Hero() {
  const { classes } = useStyles();
  return (
    <div>
      <Container size="xl" fluid={true} style={{}}>
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title}>
              Make your School <br></br>
              <span className={classes.highlight}>SMARTER</span>
            </Title>
            <Text
              color="dimmed"
              mt="md"
              style={{
                fontSize: 20,
                lineHeight: "30px",
                fontWeight: 400,
                paddingTop: 10,
              }}
            >
              Vignam help schools to transform their classroom teaching, set up
              their practical labs infrastructure and help school’s to digitise
              their existing management practices
            </Text>

            <Button radius="md" size="xl" className={classes.requestDemoButton}>
              Request Demo
            </Button>
          </div>
          <Image className={classes.image} />
        </div>
      </Container>
    </div>
  );
}
