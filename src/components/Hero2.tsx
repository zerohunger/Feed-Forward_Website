import {
  Image,
  Container,
  Title,
  Text,
  AppShell,
  createStyles,
  Drawer,
  Menu,
  Group,
  Navbar,
  ScrollArea,
  Button,
  Center,
} from "@mantine/core";
import { useEffect, useState } from "react";

import { RequestDemoDialog } from "../dialogs/RequestDemoDialog";

import { Hero1 } from "./PannelForHero";

const useStyles = createStyles((theme) => ({
  inner: {
    display: "flex",
    justifyContent: "space-evenly",

    padding: theme.spacing.xl * 4,
    paddingTop:"0",
    paddingRight:0,
   

    [theme.fn.smallerThan("sm")]: {
      paddingTop: theme.spacing.xl * 2,
      paddingBottom: theme.spacing.xl * 2,
      paddingLeft: theme.spacing.lg,
      paddingRight: theme.spacing.lg,
    },
  },
  inner1: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",

    padding: theme.spacing.xl * 4,
    paddingRight: 0,

    [theme.fn.smallerThan("sm")]: {
      paddingTop: theme.spacing.xl * 2,
      paddingBottom: theme.spacing.xl * 2,
      paddingLeft: theme.spacing.lg,
      paddingRight: theme.spacing.lg,
    },
  },

  content: {
    [theme.fn.largerThan("lg")]: {
      maxWidth: 600,
      minWidth: 500,
    },

    [theme.fn.smallerThan("lg")]: {
      maxWidth: "60%",
      minWidth: "50%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    },

    [theme.fn.smallerThan("sm")]: {
      maxWidth: "100%",
      minWidth: "100%",
    },
  },

  title: {
    color: "#00008B",
  
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: 40,
    lineHeight: "75px",
    fontWeight: 900,
    [theme.fn.smallerThan("lg")]: {
      fontSize: 32,
      lineHeight: "45px",
      fontWeight: 900,
    },
  },
  highlight: {
    position: "absolute",
 borderRadius: theme.radius.sm,
    color: "#9F2B68",
    fontSize: 50,
    lineHeight: "75px",
    fontWeight: 900,

    [theme.fn.smallerThan("lg")]: {
      fontSize: 32,
    },
  },

  requestDemoButton: {
    marginTop: 30,
    width: "70%",
    fontWeight: 900,
    backgroundColor: theme.primaryColor,
  },

  description: {
    
    fontSize: 20,
    lineHeight: "30px",
    fontWeight: 400,
    paddingTop: 100,

    [theme.fn.smallerThan("lg")]: {
      fontSize: 15,
      lineHeight: "25px",
      paddingTop: 40,
    },
  },
  modal: {
    position: "fixed",
    "z-index": 1,
    "padding-top": "100px",
    left: 0,
    top: 0,
    width: "100%",
    height: "100%",
    overflow: "auto",
    "background-color": "rgba(0,0,0,0.4)",
  },
  modalContent: {
    top: 0,
    "background-color": "#fefefe",
    margin: "auto",
    padding: "20px",
    border: "1px solid #888",
    width: "85%",
  },
  close: {
    position: "absolute",
    right: "10%",
    fontSize: "30px",
    color: "rgba(255,0,0)",
    "background-color": "#fefefe",
    margin: "auto",

    border: "1px solid #fefefe",
    width: "30px ",
    cursor: "pointer",
  },
  heroContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.fn.smallerThan("lg")]: {
      flexDirection: "column",
    },
  },
  largerView: {
    backgroundColor:"#D16587",
    paddingBottom:"4%",
    [theme.fn.smallerThan("lg")]: { display: "none" },
  },
  smallerView: {
    [theme.fn.largerThan("lg")]: { display: "none" },
  },
}));

export function Hero4() {
  const { classes } = useStyles();
  const [showDemoDialog, setShowDemoDialog] = useState<boolean>(false);
  const [domLoaded, setDomLoaded] = useState(false);
  
  const [isPopupActive, setIsPopupActive] = useState<boolean>(false);
  const [taskInp, setTaskInp] = useState("")
  
  
  function LargerDisplayView() {
    return (
     

   <Group className={classes.largerView} style={{paddingTop:"4%"}}>
     <img src={require("../assets/images/LOGO8.png")} alt="" width="700" height="450"  ></img>
      <div className={classes.inner}>
        <div className={classes.content} >
        <div style={{paddingTop:"80px", alignItems:"center", justifyContent:"center"}}>
    

          <Title className={classes.title}>
         BECOME A PART OF TEAM ZEROHUNGER AND JOIN OUR FOOD COLLECTION AND FOOD DONATION DRIVES.
               
            
          </Title>
          <div style={{paddingTop:"10%" ,paddingLeft:"21%"}}>
         <Button style={{height:"60px",fontSize:"18px",   border:"1px solid black",width:"250px"}} >Join the Community</Button>
        </div>
        </div>
      </div>
      </div>
     
   </Group>
  );
}


function SmallerDisplayView() {
  return (
    <Group className={classes.smallerView}>
       <div className={classes.inner}>
        <div className={classes.content}>
          <Title className={classes.title}>
            Make your School <br></br>
            <span className="rotator-wrapper ">
              <span className="rotator">
                <span className={classes.highlight}>SMARTER</span>
                <span className={classes.highlight}>DIGITAL</span>
                <span className={classes.highlight}>STANDOUT</span>
              </span>
            </span>
          </Title>
          <div style={{paddingTop:"20%"}}>
         
       </div>
          <Text color="dimmed" mt="md" className={classes.description}>
            Vignam help schools to transform their classroom teaching, set up
            their practical labs infrastructure and help school’s to digitise
            their existing management practices
          </Text>
        </div>
      </div>
     
      
      </Group>
    
  );
}
return(
  <Container fluid={true} className={classes.heroContainer}>
   < LargerDisplayView/>
   < SmallerDisplayView/>

  </Container>

)
}

