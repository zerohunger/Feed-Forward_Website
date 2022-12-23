import {
  createStyles,
  Header,
  Container,
  Group,
  Burger,
  Paper,
  Transition,
  Title,
  Button,
  Image,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

const HEADER_HEIGHT = 60;

const useStyles = createStyles((theme) => ({
  root: {
    position: "relative",
    zIndex: 1,

    [theme.fn.largerThan("sm")]: {
      paddingLeft: 50,
      paddingRight: 50,
    },
  },

  dropdown: {
    position: "absolute",
    top: HEADER_HEIGHT,
    left: 0,
    right: 0,
    zIndex: 0,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    borderTopWidth: 0,
    overflow: "hidden",

    display: "flex",
    flexDirection: "column",
    padding: 20,

    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100%",
  },

  headerInnerContainer: {
    display: "flex",
    justifyContent: "space-between",
  },

  links: {
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  burger: {
    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },

  link: {
    display: "block",
    lineHeight: 1,
    padding: "8px 12px",
    borderRadius: theme.radius.sm,
    textDecoration: "none",
    color: theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    "&:hover": {
      backgroundColor: theme.colors.gray[0],
    },

    [theme.fn.smallerThan("sm")]: {
      borderRadius: 0,
      padding: theme.spacing.md,
    },
  },

  optionButton: {
    color: theme.colors.dark[3],
  },

  demoButton: {
    color: theme.white,
    borderRadius: 8,
    minHeight: "46px",
    textAlign: "center",
    backgroundColor: "#3174F3",
  },
}));

export function AppHeader() {
  const [opened, { toggle, close }] = useDisclosure(false);

  const options: { label: string; isDemoButton: boolean }[] = [
    {
      label: "About Us",
      isDemoButton: false,
    },
    {
      label: "Student",
      isDemoButton: false,
    },
    {
      label: "Request Demo",
      isDemoButton: true,
    },
  ];

  const { classes, cx } = useStyles();

  const items = options.map((link) => (
    <div>
      {link.isDemoButton === true && (
        <Button className={classes.demoButton}> Request Demo </Button>
      )}{" "}
      {link.isDemoButton === false && (
        <a
          key={link.label}
          // href={link.link}
          className={classes.link}
          onClick={(event) => {
            event.preventDefault();
          }}
        >
          {link.label}
        </a>
      )}
    </div>
  ));

  return (
    <Header height={HEADER_HEIGHT} className={classes.root}>
      <Container
        size="xl"
        fluid={true}
        className={classes.headerInnerContainer}
      >
        <Group>
          <Image
            height={40}
            width={40}
            src={require("../assets/images/LOGO.png")}
          ></Image>
          <Title>Vignam</Title>
        </Group>

        <Group position="apart">
          <Group spacing={5} className={classes.links}>
            {items}
          </Group>
        </Group>
        <Burger
          opened={opened}
          onClick={toggle}
          className={classes.burger}
          size="sm"
        />

        <Transition transition="scale-y" duration={200} mounted={opened}>
          {(styles) => (
            <Paper
              className={classes.dropdown}
              withBorder
              shadow="xl"
              style={styles}
            >
              {items}
            </Paper>
          )}
        </Transition>
      </Container>
    </Header>
  );
}
