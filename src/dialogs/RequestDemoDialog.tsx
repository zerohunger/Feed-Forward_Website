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
 
    title: {
    fontWeight: 700,
    fontSize: 52,
    textAlign: "center",
    [theme.fn.largerThan("md")]: {
    fontSize: "140%",
    },
    [theme.fn.smallerThan("md")]: {
    fontSize: "140%"
    },
    },
    image: {
         display: 'flex',
         alignItems: "center",
         justifyContent: "center",
    },
    highlight: {
      color: "#3174F3",
      },
    }));

interface ARequestDemoDialogProps {
  onSubmitClick: (data: {
    name: string;
    mobileNumber: string;
  }) => void;
}

export function RequestDemoDialog(props: ARequestDemoDialogProps) {
  const { classes } = useStyles();

  const [name, setName] = useState<string>();
  
  const [mobileNumber, setMobileNumber] = useState<string>();



  function DidSubmit() {
    let isValidName = name != null && name.length > 0;
  
    let isValidMobileNumber = mobileNumber != null && mobileNumber.length > 0;
   

    if (isValidName == false) {
      return;
    }
    if (isValidMobileNumber == false) {
      return;
    }
   

    props.onSubmitClick({
      
    name: name!,
      mobileNumber: mobileNumber!,
      
    });
  }
  


  return (
    <Stack>
      <div className={classes.image}>
          <Image
            height={40}
            width={40}
            
            src={require("../assets/images/LOGO.png")}
          ></Image>
          </div>
          <div>
  <Title className={classes.title}>
    Transform Your School with <span className={classes.highlight}>Vignam</span> Book a {" "}
    <span className={classes.highlight}>Free Demo</span> Today!
  </Title> 
</div> 
       
      <TextInput
        label="Enter your name"
        withAsterisk
        value={name}
        placeholder="Your Name"
        icon={<IconUserCircle size={18} />}
        onChange={(e) => setName(e.target.value)}
      />
      
      <TextInput
        label="Enter your mobile number"
        type="number"
        withAsterisk
        value={mobileNumber}
        placeholder="9997364220"
        icon={<IconPhoneCall size={18} />}
        onChange={(e) => setMobileNumber(e.target.value)}

      />
      <Button
        fullWidth
        onClick={DidSubmit}
      
        style={{ backgroundColor: "#3174F3" }}
      >
        Book free Demo
      </Button>
    </Stack>
  );
}
