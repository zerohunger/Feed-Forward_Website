import {
  Container,
  MantineProvider,
  Modal,
  useMantineTheme,
} from "@mantine/core";
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
import { useEffect, useState } from "react";
import { Mixpanel } from "./helpers/MixpanelHelper";
import { Hero1 } from "./components/PannelForHero";
import {
  AnalyticsEvent,
  RequestDemoLocation,
} from "./helpers/MixpanelEvents.d";
import { Fab } from "react-tiny-fab";
import { IconBrandWhatsapp } from "@tabler/icons";
import { SocialMediaLink } from "./@types/DataTypes.d";
import axios from "axios";
import { SubmitFormData } from "./helpers/SubmitRequestDemo";


export default function App() {
  const [showDemoDialog, setShowDemoDialog] = useState<boolean>(false);
  const [domLoaded, setDomLoaded] = useState(false);
  const theme = useMantineTheme();

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  const renderFab = domLoaded ? (
    <a href={SocialMediaLink.whatsApp} target="__blank">
      <Fab
        icon={<IconBrandWhatsapp color="white" size={28} />}
        mainButtonStyles={{ backgroundColor: theme.colors.green[7] }}
      ></Fab>
    </a>
  ) : null;

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
        <AppHeader
          onDemoButtonClick={() => {
            Mixpanel.track(AnalyticsEvent.DemoButtonClicked, {
              location: RequestDemoLocation.top,
            });
            setShowDemoDialog(true);
          }}
        />
        <Hero
          onDemoButtonClick={() => {
            Mixpanel.track(AnalyticsEvent.DemoButtonClicked, {
              location: RequestDemoLocation.hero,
            });
            setShowDemoDialog(true);
          }}
        />
        <Offering />
        <Feedbacks />
        
        <NumberAchivements />
       
        <InstitueFaith />
        <Features />
        <PartnerWithVignam/>
        <Footer />

        <Modal
          centered
          opened={showDemoDialog}
          onClose={() => setShowDemoDialog(false)}
        >
          <RequestDemoDialog 
           onSubmitClick={(data) => {
            Mixpanel.track(AnalyticsEvent.DemoFormSubmitted);
            SubmitFormData(data);
            setShowDemoDialog(false);
          }}/>
        </Modal>
        {renderFab}
      </Container>
    </MantineProvider>
  );
}
