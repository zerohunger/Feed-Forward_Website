import {
  ThemeIcon,
  Text,
  Title,
  Container,
  SimpleGrid,
  useMantineTheme,
  createStyles,
  Image,
  Stack,
} from "@mantine/core";
import {
  IconGauge,
  IconCookie,
  IconUser,
  IconMessage2,
  IconLock,
  TablerIcon,
} from "@tabler/icons";

export const MOCKDATA = [
  {
    icon: "../images/features/Feature1.png",
    title: "Effective Teaching",
    description:
      "With Vignam, teachers are able to make students visualise the concepts they are teaching, in an interactive way.",
  },
  {
    icon: "../images/features/Feature1.png",
    title: "Engaged Students",
    description:
      "With Vignam’s Interactive Education content, students actively participate in classrooms and able to learn more efficiently.",
  },
  {
    icon: "../images/features/Feature1.png",
    title: "Practical Labs Setup",
    description:
      "Vignam helps schools to set up practical labs  with all the latest equipments for students to perform experiments ",
  },
  {
    icon: "../images/features/Feature1.png",
    title: "Teachers Evaluation",
    description:
      "Detailed analysis and monthly reports about your teacher’s performance accessible to school management on any device.",
  },
  {
    icon: "../images/features/Feature1.png",
    title: "Student Evaluation",
    description:
      "Manage student’s detailed performance reports securely and efficiently, with AI-powered personalised feedback system.",
  },
  {
    icon: "../images/features/Feature1.png",
    title: "Fee Management",
    description:
      "Make your school’s fee management effective, efficient, and easy Automate and simplify the entire fee management process.",
  },
];

interface FeatureProps {
  icon: string;
  title: React.ReactNode;
  description: React.ReactNode;
}

export function Feature({ icon, title, description }: FeatureProps) {
  const theme = useMantineTheme();
  return (
    <Stack spacing={1} align="center" style={{ padding: 12 }}>
      <Image withPlaceholder src={icon} height={80} width={80}></Image>
      <Text
        style={{
          marginTop: theme.spacing.sm,
          marginBottom: theme.spacing.sm,
          fontFamily: `Greycliff CF, ${theme.fontFamily}`,
          fontWeight: 700,
          textAlign: "center",
          fontSize: 30,
          lineHeight: "40px",
          [theme.fn.smallerThan("sm")]: {
            fontSize: 28,
            textAlign: "left",
          },
        }}
      >
        {title}
      </Text>
      <Text
        color="dimmed"
        style={{
          lineHeight: "24px",
          fontSize: 15,
          fontWeight: 400,
          textAlign: "center",
        }}
      >
        {description}
      </Text>
    </Stack>
  );
}

const useStyles = createStyles((theme) => ({
  wrapper: {
    paddingRight: theme.spacing.xl * 5,
    paddingLeft: theme.spacing.xl * 5,
    paddingTop: theme.spacing.xl * 4,
    paddingBottom: theme.spacing.xl * 4,
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 600,
    marginBottom: theme.spacing.md,
    textAlign: "center",
    fontSize: 48,
    [theme.fn.smallerThan("sm")]: {
      fontSize: 28,
      textAlign: "left",
    },
  },

  subtitle: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 400,
    marginBottom: theme.spacing.md,
    textAlign: "center",
    fontSize: 18,
    width: "60%",
    [theme.fn.smallerThan("sm")]: {
      fontSize: 28,
      textAlign: "left",
    },
  },

  description: {
    textAlign: "center",

    [theme.fn.smallerThan("sm")]: {
      textAlign: "left",
    },
  },
}));

export function Features() {
  const { classes, theme } = useStyles();
  const features = MOCKDATA.map((feature, index) => (
    <Feature {...feature} key={index} />
  ));

  return (
    <Container fluid={true} className={classes.wrapper}>
      <Title className={classes.title}>
        Why partner with {<span style={{ color: "#3174F3" }}>Vignam</span>}{" "}
      </Title>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {" "}
        <Title className={classes.subtitle}>
          Vignam solves the problems of School Owners, Principals,Teachers,
          Students and School’s Admin Department with their digital solutions
        </Title>
      </div>

      <SimpleGrid
        mt={70}
        cols={3}
        spacing={theme.spacing.xl * 2}
        breakpoints={[
          { maxWidth: 980, cols: 2, spacing: "xl" },
          { maxWidth: 755, cols: 1, spacing: "xl" },
        ]}
      >
        {features}
      </SimpleGrid>
    </Container>
  );
}
