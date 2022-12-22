import classes from "*.module.css";
import { Container, createStyles, Group, Stack, Title } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  wrapper: {
    padding: 0,
    margin: 0,
    display: "flex",
    backgroundColor: theme.colors.blue[0],
    minHeight: "370px",
    alignItems: "center",
    justifyContent: "center",
    justifyItems: "center",
    alignContent: "center",
  },
}));

function Achivement(props: { title: string; subtitle: string }) {
  return (
    <Stack spacing={1} align="center" justify="center">
      <Title
        style={{
          fontWeight: 800,
          fontSize: 72,
          lineHeight: "108px",
          textAlign: "center",
          color: "#0850FD",
        }}
      >
        {props.title}
      </Title>
      <Title
        style={{
          fontWeight: 500,
          fontSize: 20,
          lineHeight: "30px",
          textAlign: "center",
        }}
      >
        {props.subtitle}
      </Title>
    </Stack>
  );
}

export function NumberAchivements() {
  const { classes } = useStyles();
  return (
    <Container fluid={true} className={classes.wrapper}>
      <Container style={{ minWidth: "80%" }}>
        <Group position="apart" align="center">
          <Achivement title="1400+" subtitle="Satisfied users" />
          <Achivement title="1000+" subtitle="Topics Covered" />
          <Achivement title="50%" subtitle="Increase in School’s Efficiency" />
        </Group>
      </Container>
    </Container>
  );
}
