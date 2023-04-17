import { Button, NativeSelect, Stack, TextInput, Title,Group,Image,createStyles, Center,
} from "@mantine/core";
import { useState } from "react";
import {
IconAt,
IconPhoneCall,
IconSchool,
IconUserCircle,

} from "@tabler/icons";
const useStyles = createStyles((theme) => ({
  popup:{
   height: "200px",
   width: "100%",

  },

 title: {
 fontWeight: 700,
 fontSize: "22px",
 
 
 [theme.fn.smallerThan("md")]: {
  fontSize:"16px",
 }
 
 },
 image: {
     display: "flex",
     alignItems: "center",
     justifyContent: "center",
 },
 highlight: {
   color: "#3174F3",
   },
 }));



export function RequestSubmitDialog() {

  const { classes } = useStyles();


 return (
   <Stack className={classes.popup}>
   <div className={classes.image}>
       <Image
         height={50}
         width={50}
         
         src={require("../assets/images/LOGO.png")}
       ></Image>
       </div>
       <div>
        <div style={{paddingTop:"2%"}}>
<Title className={classes.title}>
 Thanks For  Contacting Team  {" "}
 <span className={classes.highlight}>ZeroHunger</span>
</Title> 
</div>
<div style={{paddingTop:"5%"}}>
<Title className={classes.title}>
Please Enter Your Details And We Will Get Back To 
<span className={classes.highlight}>You Soon...</span>
</Title> 
</div>

</div> 
</Stack>

 )
}





