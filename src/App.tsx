import { Container, MantineProvider, Modal } from "@mantine/core";
import { Hero } from "./components/Hero";
import { AppHeader } from "./components/Header";
import { Features } from "./components/Features";
import { NumberAchivements } from "./components/NumberAchivements";
import { Feedbacks } from "./components/Feedbacks";
import { InstitueFaith } from "./components/InstituteFaith";
import { PartnerWithVignam } from "./components/PartnerWithVignam";
import { Footer } from "./components/Footer";
import { Offering } from "./components/Offering";
import { RequestDemoDialog } from "./dialogs/RequestDemoDialog";
import { useState } from "react";

export default function App() {
  const [showDemoDialog, setShowDemoDialog] = useState<boolean>(false);

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
        <AppHeader onDemoButtonClick={() => setShowDemoDialog(true)} />
        <Hero onDemoButtonClick={() => setShowDemoDialog(true)} />
        <Offering />
        <Features />
        <NumberAchivements />
        <Feedbacks />
        <InstitueFaith />
        <PartnerWithVignam />
        <Footer />

        <Modal
          centered
          opened={showDemoDialog}
          onClose={() => setShowDemoDialog(false)}
        >
          <RequestDemoDialog onSubmitClick={() => {}} />
        </Modal>
      </Container>
    </MantineProvider>
  );
}
