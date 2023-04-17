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

import { Hero1 } from "./PannelForHero";

const useStyles = createStyles((theme) => ({
  inner: {
    display: "flex",
    justifyContent: "space-evenly",

    padding: theme.spacing.xl * 4,
    paddingBottom:"0",
   

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
    color: theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: 62,
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
    display:"flex",alignItems:"center",justifyContent:"center",
    paddingTop:"2%",
    backgroundColor:"#ADD8E6",
    [theme.fn.smallerThan("lg")]: { display: "none" },
  },
  smallerView: {
    [theme.fn.largerThan("lg")]: { display: "none" },
  },
}));

export function Hero3() {
  const { classes } = useStyles();
  const [showDemoDialog, setShowDemoDialog] = useState<boolean>(false);
  const [domLoaded, setDomLoaded] = useState(false);
 
  const [isPopupActive, setIsPopupActive] = useState<boolean>(false);
  const [taskInp, setTaskInp] = useState("")
  
  
  function LargerDisplayView() {
    return (
     

   <Group className={classes.largerView} style={{paddingBottom:"5%"}}>
    
        <div >
        <Title className={classes.title}>
          Food Donation Options for Unsampled Food 
           
                
               
            
          </Title>
          <div style={{display:"flex", alignItems: "center", justifyContent:"center" , paddingTop:"2%" }}>
           <div style={{display:"flex", flexDirection:"column",  alignItems: "center" , paddingRight:"5%"}}> 
             <img src={require("../assets/images/LOGO7.png")} alt="" width="700" height="450" ></img>

             <h1 style={{color:"#9F2B68",fontSize:40,}}>Donate From Home </h1>
             <Button style={{height:"60px",fontSize:"18px",   border:"1px solid black"}}>Enter Your Address and Details</Button>
             </div> 
             <div style={{display:"flex", flexDirection:"column",  alignItems: "center", paddingLeft:"5%"}}> 
             <img src={require("../assets/images/LOGO6.png")} alt="" width="700" height="450"  ></img>
             <h1 style={{color:"#9F2B68",fontSize:40}}>Donate From Hotel or events </h1>
             <Button style={{height:"60px",fontSize:"18px",   border:"1px solid black"}}>Enter the Location and Important Details</Button>
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
          Food Donation Options for Unsampled Food 
           
                
               
            
          </Title>
          <div style={{display:"flex", alignItems: "center", justifyContent:"center", wordSpacing:"10"}}>
           <div style={{display:"flex", flexDirection:"column",  alignItems: "center",paddingRight:"10%"}}> 
             <img src={require("../assets/images/LOGO5.png")} alt="" width="700" height="450" ></img>
             <h1>Donate From Home </h1>
             </div> 
             <div style={{display:"flex", flexDirection:"column",  alignItems: "center", paddingLeft: "10%"}}> 
             <img src={require("../assets/images/LOGO5.png")} alt="" width="700" height="450" ></img>
             <h1>Donate From Hotel or events </h1>
             </div> 

          </div>
          <Text  mt="md" className={classes.description}>
         Food donation at our base.
          </Text>
        </div>
      </div>
     
      
      </Group>
    
  );
}
return(
 <div >
   < LargerDisplayView/>
   < SmallerDisplayView/>

   </div>

)
}

