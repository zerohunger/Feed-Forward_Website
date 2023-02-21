import {
  Container,
  MantineProvider,
  Modal,
  useMantineTheme,
  createStyles,
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
import { useState } from "react";
import  { useCallback, useEffect } from "react";
import { Mixpanel } from "./helpers/MixpanelHelper";
import { Hero1 } from "./components/PannelForHero";
import { RequestSubmitDialog } from "./dialogs/RequestSubmitDialog";
import {
  AnalyticsEvent,
  RequestDemoLocation,
} from "./helpers/MixpanelEvents.d";
import { Fab } from "react-tiny-fab";
import { IconBrandWhatsapp } from "@tabler/icons";
import { SocialMediaLink } from "./@types/DataTypes.d";
import axios from "axios";
import { SubmitFormData } from "./helpers/SubmitRequestDemo";
import React, { KeyboardEvent } from "react";



export default function App() {
  
  const [showDemoDialog, setShowDemoDialog] = useState<boolean>(false);
  const [showSubmitDialog, setShowSubmitDialog] = useState<boolean>(false);
  const [domLoaded, setDomLoaded] = useState(false);
  const theme = useMantineTheme();
  


  

  
  useEffect(() => {
    setDomLoaded(true);
    const timer = setTimeout(() => {
      setShowDemoDialog(true);
    }, 10000);
    return () => clearTimeout(timer);
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
            setShowSubmitDialog(true);
          }}
        />
        <Offering />
        <Feedbacks />
        
        <NumberAchivements />
       
        <InstitueFaith />
        <Features />
        <PartnerWithVignam  onDemoButtonClick={() => {
            Mixpanel.track(AnalyticsEvent.DemoButtonClicked, {
              location: RequestDemoLocation.hero,
            });
            setShowSubmitDialog(true);
          }}/>
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
        <Modal
          centered
          opened={showSubmitDialog}
          onClose={() => setShowSubmitDialog(false)}
        
        >
          <RequestSubmitDialog />
        </Modal>
        {renderFab}
      </Container>
      
      <div >
      

      {showDemoDialog}
      {showSubmitDialog }
    </div>
    </MantineProvider>
  );
}
