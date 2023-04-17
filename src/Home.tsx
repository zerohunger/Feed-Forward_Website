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

import { Feedbacks } from "./components/Feedbacks";

import { Footer } from "./components/Footer";
import { RequestDemoDialog } from "./dialogs/RequestDemoDialog";
import { useState } from "react";
import  { useCallback, useEffect } from "react";

import { Hero3 } from "./components/Hero1";
import { Hero4 } from "./components/Hero2";
import { Heroo } from "./components/Hero3";
import { RequestSubmitDialog } from "./dialogs/RequestSubmitDialog";

import { Fab } from "react-tiny-fab";
import { IconBrandWhatsapp } from "@tabler/icons";
import { SocialMediaLink } from "././@types/DataTypes.d";
import axios from "axios";
import React, { KeyboardEvent } from "react";



export default function Home() {
  
  const [showDemoDialog, setShowDemoDialog] = useState<boolean>(false);
  const [showSubmitDialog, setShowSubmitDialog] = useState<boolean>(false);
  const [domLoaded, setDomLoaded] = useState(false);
  const theme = useMantineTheme();
  


  

  
  

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
          backgroundColor:"#D16587",
          paddingLeft: 0,
          paddingRight: 0,
          marginLeft: 0,
          marginRight: 0,
         
        }}
      >
        <AppHeader
          onDemoButtonClick={() => {
           
            setShowDemoDialog(true);
          }}
        
        />
        <Hero/>
        <Hero3/>
      <Heroo/>
      <Footer />
     
        {renderFab}
        <Modal
          centered
          opened={showDemoDialog}
          onClose={() => setShowDemoDialog(false)}
        >
          <RequestDemoDialog 
           onSubmitClick={(data) => {
            
          
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
      </Container>
      
      <div >
      

      {showDemoDialog}
      {showSubmitDialog }
    </div>
    </MantineProvider>
  );
}

/*        <Hero
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
     

       
        */