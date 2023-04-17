import { createStyles, Header, Container, Group, Title, Button, Image, Input, Text, Popover } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useState } from "react";

const HEADER_HEIGHT = 100;

const useStyles = createStyles((theme) => ({
  root: {
    backgroundColor: "#ADD8E6",
  },
  header: {
    display: "flex",
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
  image2: {
    borderRadius: "50%",
    height: "100px",
    width: "100px",
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
    minHeight: "50px",
    textAlign: "center",
    backgroundColor: "#9F2B68",
    fontWeight: 900,
  },
  highlight: {
    fontWeight: 700,
    color: "#D16587",
    "&:hover": {
      color: "#D16587",
      backgroundColor: "transparent",
    },
  },
  searchBar: {
    width: "200px",
    marginRight: "10px",
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },
}));

function SearchBar() {
  const { classes } = useStyles();
  return (
    <Input
      className={classes.searchBar}
      placeholder="Search"
      variant="filled"
      color="gray"
    />
  );
}

export function AppHeader(props: { onDemoButtonClick: () => void }) {
  const [opened, setOpened] = useState(false);

  const options: { label: string; isDemoButton: boolean }[] = [
    {
      label: "Option 1",
      isDemoButton: false,
    },
    {
      label: "Option 2",
      isDemoButton: false,
    },
    {
      label: "Request Demo",
      isDemoButton: true,
    },
  ];

  const { classes, cx } = useStyles();

  function Items() {
    return (
      <>
        <SearchBar />
        <Button
          className={classes.demoButton}
          onClick={props.onDemoButtonClick}
        >
          Contact Us
        </Button>
        <Button
          variant="outline"
          className={classes.optionButton}
          onClick={() => setOpened((prev) => !prev)}
        >
          More options
        </Button>
      </>
    );
  }

  return (
    <Header height={HEADER_HEIGHT} className={classes.root}>
      <Container
        size="xl"
        fluid={true}
        className={classes.headerInnerContainer}
      >
        <Group classNames={classes.image2} style={{ borderRadius: "50%" }}>
          <Image
            height="90px"
            width="90px"
            src={require("../assets/images/LOGO3.png")}
          />
          <Title style={{ fontSize: "55px", color: "#9F2B68" }}>
            ZERO HUNGER
          </Title>
        </Group>

        <Group position="apart">
          <Group spacing={5} className={classes.links}>
            <Items />
            {opened && (
              <Popover
                opened={opened}
                onClose={() => setOpened(false)}
                withArrow
                position="bottom"
                transition="slide-down"
              >
                <div style={{ padding: "10px" }}>
                  {options.map((option) => (
                    <Text
                      key={option.label}
                      size="sm"
                      className={option.isDemoButton ? classes.highlight : ""}
                    >
                      {option.label}
                    </Text>
                  ))}
                </div>
              </Popover>
            )}
          </Group>
        </Group>
      </Container>
    </Header>
  );
}
