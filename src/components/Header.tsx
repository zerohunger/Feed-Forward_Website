import {
  createStyles,
  Header,
  Container,
  Group,
  Burger,
  Paper,
  Transition,
  Title,
  Image,
  Button,
  Space,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

const HEADER_HEIGHT = 60;

const useStyles = createStyles((theme) => ({
  root: {
    position: "relative",
    zIndex: 1,
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
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    },

    [theme.fn.smallerThan("sm")]: {
      borderRadius: 0,
      padding: theme.spacing.md,
    },
  },

  linkActive: {
    "&, &:hover": {
      backgroundColor: theme.fn.variant({
        variant: "light",
        color: theme.primaryColor,
      }).background,
      color: theme.fn.variant({ variant: "light", color: theme.primaryColor })
        .color,
    },
  },

  optionButton: {
    color: theme.colors.dark[3],
  },
  demoButton: {
    color: theme.white,
    borderRadius: 8,
    minHeight: "46px",
    backgroundColor: "#3174F3",
  },
}));

interface HeaderResponsiveProps {
  links: { link: string; label: string }[];
}

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
    <Button
      variant={link.isDemoButton ? "filled" : "subtle"}
      className={link.isDemoButton ? classes.demoButton : classes.optionButton}
    >
      {link.label}
    </Button>
  ));

  return (
    <Header height={HEADER_HEIGHT} className={classes.root}>
      <Container size="xl">
        {/* <MantineLogo size={28} /> */}

        <Group position="apart">
          <Title>Vignam</Title>

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

        <Transition transition="pop-top-right" duration={200} mounted={opened}>
          {(styles) => (
            <Paper className={classes.dropdown} withBorder style={styles}>
              {items}
            </Paper>
          )}
        </Transition>
      </Container>
    </Header>
  );
}
