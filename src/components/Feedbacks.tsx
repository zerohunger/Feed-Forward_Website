import {
  Container,
  createStyles,
  Paper,
  Title,
  Text,
  Image,
} from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import { useMediaQuery } from "@mantine/hooks";

const useStyles = createStyles((theme) => ({
  wrapper: {
    paddingRight: theme.spacing.xl * 5,
    paddingLeft: theme.spacing.xl * 5,
    paddingTop: theme.spacing.xl * 4,
    paddingBottom: theme.spacing.xl * 4,
    backgroundColor: theme.colors.yellow[1],
    alignItems: "center",
    justifyItems: "center",
    justifyContent: "center",
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 600,
    letterSpacing: "-2.5%",
    marginBottom: theme.spacing.xl * 2,
    textAlign: "center",
    fontSize: 48,
    [theme.fn.smallerThan("sm")]: {
      fontSize: 28,
      textAlign: "left",
    },
  },

  card: {
    height: 440,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    backgroundPosition: "center",
    borderRadius: 20,
  },

  cardTitle: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 700,
    color: theme.black,
    lineHeight: 1.2,
    fontSize: 40,
    marginTop: theme.spacing.xs,
  },

  cardSubTitle: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 400,
    color: "dimmed",
    lineHeight: "22px",
    fontSize: 16,
    marginTop: theme.spacing.xs,
  },

  description: {
    paddingTop: 17,
    color: theme.black,
    fontWeight: 400,
    fontSize: 20,
  },
}));

interface FeedbackCardProps {
  title: string;
  subtitle: string;
  description: string;
  rating: number;
}

function FeedbackCard(props: FeedbackCardProps) {
  const { classes, theme } = useStyles();

  return (
    <Paper shadow="xl" p={theme.spacing.xl * 2} className={classes.card}>
      <div>
        <Title order={3} className={classes.cardTitle}>
          {props.title}
        </Title>
        <Text color="dimmed" className={classes.cardSubTitle} size="xs">
          {props.subtitle}
        </Text>

        <Text className={classes.description} size="xs">
          {props.description}
        </Text>
      </div>
      <Image
        style={{ backgroundColor: "darkturquoise", height: 80, marginTop: 12 }}
      ></Image>
    </Paper>
  );
}

export function Feedbacks() {
  const { classes, theme } = useStyles();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm}px)`);
  const slides = data.map((item) => (
    <Carousel.Slide key={item.title}>
      <FeedbackCard {...item} />
    </Carousel.Slide>
  ));
  return (
    <Container fluid={true} className={classes.wrapper}>
      <Title className={classes.title}>
        What are people saying about Vignam?
      </Title>
      <Carousel
        slideSize="50%"
        breakpoints={[{ maxWidth: "sm", slideSize: "100%", slideGap: 2 }]}
        slideGap="xl"
        align="center"
        loop={true}
        withIndicators={true}
        slidesToScroll={mobile ? 1 : 2}
      >
        {slides}
      </Carousel>
    </Container>
  );
}

const data: FeedbackCardProps[] = [
  {
    title: "Prince Solanki",
    subtitle: "Owner, Prince Public School",
    description:
      "Vignam completely transformed how teaching and learning is done in our school. Teachers in our school are happy as students are now able to learn and understand concepts in very less time.",
    rating: 5,
  },
  {
    title: "Alok",
    subtitle: "Owner, Shankar Public School",
    description:
      "With Vignam’s whole ecosystem of digital solutions, our overall infrastructure of the school has strengthened, from classrooms to practical labs to our fee management system, Vignam’s got it all covered.",
    rating: 5,
  },
  {
    title: "Bhavay Sharma",
    subtitle: "Student",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.vhkbgkjb jbkjbjkbkjbkjbkjbjkb  kbkjkbkjb bkbbb.",
    rating: 5,
  },
  {
    title: "Prabal Rajora",
    subtitle: "Class 12th PCB student",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.vhkbgkjb jbkjbjkbkjbkjbkjbjkb  kbkjkbkjb bkbbb.",
    rating: 5,
  },
];
