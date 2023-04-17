import {
  Container,
  createStyles,
  Paper,
  Title,
  Text,
  Image,
  Group,
} from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import { useMediaQuery } from "@mantine/hooks";
import { useEffect } from "react";


const useStyles = createStyles((theme, _params, getRef) => ({
  wrapper: {
    paddingRight: theme.spacing.xl * 5,
    paddingLeft: theme.spacing.xl * 5,
    paddingTop: theme.spacing.xl * 4,
    paddingBottom: theme.spacing.xl * 4,
    backgroundColor: theme.colors.yellow[0],
    alignItems: "center",
    justifyItems: "center",
    justifyContent: "center",
    [theme.fn.smallerThan("md")]: {
      paddingTop: theme.spacing.xl * 2,
      paddingBottom: theme.spacing.xl * 2,
      paddingRight: theme.spacing.xl,
      paddingLeft: theme.spacing.xl,
    },
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 600,
    letterSpacing: "-2.5%",
    marginBottom: theme.spacing.xl * 2,
    textAlign: "center",
    fontSize: 48,
    [theme.fn.smallerThan("md")]: {
      fontSize: 28,
      textAlign: "center",
    },
  },

  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    backgroundPosition: "center",
    borderRadius: 20,
    padding: theme.spacing.xl * 2,

    [theme.fn.smallerThan("sm")]: {
      fontSize: 12,
      textAlign: "center",
      padding: theme.spacing.sm * 2,
    },
  },

  cardTitle: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 700,
    color: theme.black,
    lineHeight: 1.2,
    fontSize: 40,
    marginTop: theme.spacing.xs,
    [theme.fn.smallerThan("md")]: {
      fontSize: 28,
    },
  },

  cardSubTitle: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 400,
    color: "dimmed",
    lineHeight: "22px",
    fontSize: 16,
    marginTop: theme.spacing.xs,
    [theme.fn.smallerThan("md")]: {
      fontSize: 12,
    },
  },

  description: {
    paddingTop: 17,
    color: theme.black,
    fontWeight: 400,
    fontSize: 20,
    [theme.fn.smallerThan("md")]: {
      fontSize: 17,
    },
  },

  rating: {
    marginTop: 12,
    [theme.fn.smallerThan("md")]: {
      width: "100%",
    },

    [theme.fn.largerThan("md")]: {
      maxWidth: "50%",
    },
  },

  carousel: {
    "&:hover": {
      [`& .${getRef("carouselControls")}`]: {
        opacity: 1,
      },
    },
  },

  carouselControlsContainer: {
    ref: getRef("carouselControlsContainer"),
    transition: "opacity 150ms ease",
    opacity: 0,
  },

  carouselControls: {
    ref: getRef("carouselControls"),
    color: "#3174F3",
    height: 50,
    width: 50,
  },

  carouselIndicator: {
    width: 60,
    height: 14,
    backgroundColor: theme.colors.gray[5],
    "&[data-active]": {
      width: 12,
      backgroundColor: "#3174F3",
    },
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
    <Paper shadow="xl" className={classes.card}>
      <Group position="apart">
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
          height={40}
          fit="fill"
          className={classes.rating}
          src={require("../assets/images/stars.png")}
        ></Image>
      </Group>
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
    <Container  fluid={true} className={classes.wrapper}>
      <Title className={classes.title}>
        What are people saying about Vignam?
      </Title>
      <Carousel
        slideSize="50%"
        breakpoints={[{ maxWidth: "sm", slideSize: "100%", slideGap: 2 }]}
        slideGap="xl"
        align="center"
        loop={mobile ? false : true}
        withIndicators={true}
        slidesToScroll={mobile ? 1 : 2}
        classNames={{
          root: classes.carousel,
          indicator: classes.carouselIndicator,
          control: classes.carouselControls,
        }}
       
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
      "Vignam Labs has helped me to visualise physics like fluid mechanics and vernier mechanism in very clear way, plus I have now access to practical labs 24/7.",
    rating: 5,
  },
  {
    title: "Prabal Rajora",
    subtitle: "Class 12th PCB student",
    description:
      "Vignam labs has got detailed experiments in their virtual lab, I can perform all the operations which are possible in real world, also it helps me introduce the experiment well.",
    rating: 5,
  },
];