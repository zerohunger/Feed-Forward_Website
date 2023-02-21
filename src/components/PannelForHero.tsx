import {
  Button,
  NativeSelect,
  Stack,
  TextInput,
  Title,
  Group,
  Image,
  createStyles,
  Center,
} from "@mantine/core";
import { useState } from "react";
import { useRef } from "react";

import {
  IconAt,
  IconPhoneCall,
  IconSchool,
  IconUserCircle,
} from "@tabler/icons";
const useStyles = createStyles((theme) => ({
  inner: {
    display: "flex",
    justifyContent: "space-evenly",
    [theme.fn.largerThan("lg")]: {
      maxWidth: 500,
      minWidth: 400,
    },
    [theme.fn.smallerThan("lg")]: {
      maxWidth: 400,
      minWidth: 280,
    },

    padding: theme.spacing.xl * 1,

    [theme.fn.smallerThan("sm")]: {
      paddingTop: theme.spacing.xl * 1,
      paddingBottom: theme.spacing.xl * 1,
      paddingLeft: theme.spacing.xl * 1,
      paddingRight: theme.spacing.xl * 1,
    },
  },

  content: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    [theme.fn.largerThan("lg")]: {
      maxWidth: 500,
      minWidth: 400,
    },
    [theme.fn.smallerThan("lg")]: {
      maxWidth: 400,
      minWidth: 280,
    },
  },

  title: {
    
    fontWeight: 700,
    fontSize: 52,
    textAlign: "center",
    [theme.fn.largerThan("md")]: {
      fontSize: "140%",
    },
    [theme.fn.smallerThan("md")]: {
      fontSize: "90%",
    },
  },
  highlight: {
    color: "#3174F3",
  },
  button: {
    display: "center",

    justifyContent: "center",

    paddingTop: "10",
  },
}));

interface ARequestDemoDialogProps2 {
  onSubmitClick: (data: {
    name: string;
    mobileNumber: string;
  }) => void;
  
}

export function Hero1(props: ARequestDemoDialogProps2) {
  const { classes } = useStyles();

  const [name, setName] = useState<string>();

  const [mobileNumber, setMobileNumber] = useState<string>();
  const [value, setValue] = useState("");
  const formRef = useRef(null);
  
  


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

  //function LargerDisplayView() {
  return (
    <Group position="apart">
      <Stack text-align="center" padding-left={10}>
        <div>
          <div
            className={classes.inner}
            style={{ border: "1px solid #C4C4C4", borderRadius: "20px", backgroundColor:"white" }}
          >
            <div className={classes.content}>
              <div >
                <Image
                  height={55}
                  width={55}
                  src={require("../assets/images/LOGO.png")}
                ></Image>
              </div>
              <div style={{
                   display: "flex",
                   alignItems: "center",
                   justifyContent: "center",
              }}>
                <Title
                  style={{
                    paddingTop: "5%",
                    width: "80%",
                  }}
                  className={classes.title}
                >
                  Transform Your School with{" "}
                  <span className={classes.highlight}>Vignam</span> Book a{" "}
                  <span className={classes.highlight}>Free Demo</span> Today!
                </Title>
              </div>

              <TextInput
                style={{
                  paddingTop: "5%",
                  paddingBottom: "5%",
                  width: "80%",
                }}
                withAsterisk
                value={name}
                placeholder="Your Name"
                icon={<IconUserCircle size={18} />}
                onChange={(e) => setName(e.target.value)}
              />
              <TextInput
                style={{
                  paddingBottom: "5%",
                  width: "80%",
                }}
                type="number"
                withAsterisk
                value={mobileNumber}
                placeholder="9997364220"
                icon={<IconPhoneCall size={18} />}
                onChange={(e) => setMobileNumber(e.target.value)}
              />
              
                <Button 
                  onClick={DidSubmit}
                  ref={formRef}
                  style={{
                    backgroundColor: "#3174F3",
                    width: "80%",
                    
                  }}
                >
                  Book free Demo
                </Button>
                
            </div>
          </div>
        </div>
      </Stack>
    </Group>
  );
}