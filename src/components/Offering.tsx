import { Container, createStyles, Title, Image } from "@mantine/core";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const useStyles = createStyles((theme) => ({
  wrapper: {
    alignItems: "center",
    justifyItems: "center",
    justifyContent: "center",
    backgroundColor: theme.colors.gray[1],

    [theme.fn.largerThan("md")]: {
      paddingTop: theme.spacing.xl * 2,
      paddingBottom: theme.spacing.md,
    },

    [theme.fn.smallerThan("md")]: {
      padding: 10,
    },
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 500,
    marginBottom: theme.spacing.xl,
    textAlign: "center",
    fontSize: 17,
    marginTop: theme.spacing.xl ,
    color: "#3174F3",

    [theme.fn.largerThan("md")]: {
      fontSize: 20,
      lineHeight: "24px",
      letterSpacing: "10%",
    },
  },

  subtitle: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 600,
    textAlign: "center",
    fontSize: 25,
    lineHeight: "24px",
    letterSpacing: "10%",
    [theme.fn.largerThan("md")]: {
      fontSize: 36,
    },
  },

  carousel: {
    // backgroundColor: "turquoise",
    minHeight: "55vh",
    marginTop: theme.spacing.xl * 2,
    marginBottom: theme.spacing.xl * 2,
    [theme.fn.largerThan("md")]: {
      minHeight: "70vh",
      marginTop: theme.spacing.xl * 2,
      marginBottom: theme.spacing.xl * 2,
    },
  },
}));

export function Offering() {
  const { classes, theme } = useStyles();

  return (
    <Container fluid={true} className={classes.wrapper}>
      <Title className={classes.title}>WHAT DOES VIGNAM OFFER?</Title>
      <Title className={classes.subtitle}>
        Digital solutions that run in any hardware at your school
      </Title>

      <Image className={classes.carousel}></Image>

      <Swiper
        style={{ paddingTop: 50 }}
        slidesPerView={3}
        loop={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        speed={2000}
        modules={[Autoplay]}
        updateOnWindowResize={true}
        autoHeight={true}
      >
        {/* <SwiperSlide>
          <Image
            src={require("../assets/images/Desktop.png")}
            width={828}
          ></Image>
        </SwiperSlide>

        <SwiperSlide>
          <Image
            src={require("../assets/images/Mobile.png")}
            width={348}
          ></Image>
        </SwiperSlide> */}
      </Swiper>
    </Container>
  );
}
