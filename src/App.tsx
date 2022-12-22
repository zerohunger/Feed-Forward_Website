import { Container, MantineProvider, Text } from "@mantine/core";
import { Hero } from "./components/Hero";
import { AppHeader } from "./components/Header";
import { Features } from "./components/Features";
import { NumberAchivements } from "./components/NumberAchivements";
import { Feedbacks } from "./components/Feedbacks";
import { InstitueFaith } from "./components/InstituteFaith";
import { PartnerWithVignam } from "./components/PartnerWithVignam";
import { Footer } from "./components/Footer";
import { Offering } from "./components/Offering";

export default function App() {
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        colors: {
          primaryBlue: [
            "#3174F3",
            "#3174F3",
            "#3174F3",
            "#3174F3",
            "#3174F3",
            "#3174F3",
            "#3174F3",
            "#3174F3",
            "#3174F3",
            "#3174F3",
          ],
        },
        primaryColor: "primaryBlue",
      }}
    >
      <Container
        fluid={true}
        style={{
          paddingLeft: 0,
          paddingRight: 0,
          marginLeft: 0,
          marginRight: 0,
          paddingTop: 20,
        }}
      >
        {/* <AppHeader /> */}
        <Hero />
        <Offering />
        <Features />
        <NumberAchivements />
        <Feedbacks />
        <InstitueFaith />
        <PartnerWithVignam /> 
        {/* <Footer /> */}
      </Container>
    </MantineProvider>
  );
}
