import {
  ActionIcon,
  Button,
  Center,
  Container,
  createStyles,
  Divider,
  Drawer,
  Group,
  ScrollArea,
  Space,
  Menu,
  Text,
  Header,
  Paper,
  Transition,
  Image,
  Title
} from "@mantine/core";


import { IconMenu2,IconSettings,IconTrash,IconMessageCircle } from "@tabler/icons";
import { useState } from "react";
import { GetUser, GetUserToken, LocalStorageKey, RemoveValueFromLocalStorage } from "../../utilities/LocalstorageUtility";
import { useNavigate } from "react-router-dom";





const useStyles = createStyles((theme) => ({
  root: {
    minHeight: 65,
    paddingTop: 20,
    paddingBottom: 10,
    borderBottom: `1px solid ${theme.colors.gray[3]}`,
  },
  navBarButton: {
    fontWeight: 500,
    color: "black",

    "&:hover": {
      color: "#3174F3",
      backgroundColor: "transparent",
    },
  },

  highlight: {
    fontWeight: 700,
    color: "#3174F3",
    "&:hover": {
      color: "#3174F3",
      backgroundColor: "transparent",
    },
  },
  loginButton: {
    backgroundColor: "#3174F3",
    paddingLeft: 50,
    paddingRight: 50,

    [theme.fn.smallerThan("sm")]: {
      paddingLeft: 20,
      paddingRight: 20,
    },
  },
  HomeButton: {
    backgroundColor: "#3174F3",
    paddingLeft: 50,
    paddingRight: 50,

    [theme.fn.smallerThan("sm")]: {
      paddingLeft: 20,
      paddingRight: 20,
    },
  },

  largerView: {
    [theme.fn.smallerThan("md")]: { display: "none" },
  },
  smallerView: {
    display:"flex",
    [theme.fn.largerThan("md")]: { display: "none" },
  },
}));

interface InstagramQuestions2Props{

  onHomeClick: () => void,
  

}




export function BlogHeader(props: InstagramQuestions2Props) {
  const { classes } = useStyles();
  const [showDrawer, setShowDrawer] = useState<boolean>(false);
  const [showAuthModal, setShowAuthModal] = useState<boolean>(false);
  const navigate=useNavigate();
 
 
  function ShowName() {
    return (
      <Menu shadow="md" width={200}>
      <Menu.Target>
        <Button >{GetUser().name}</Button>
      </Menu.Target>
  
      <Menu.Dropdown>
        
        
        
        <Menu.Item color="red" icon={<IconTrash size={14} />}
        onClick={() => {
          RemoveValueFromLocalStorage(LocalStorageKey.Token);
          RemoveValueFromLocalStorage(LocalStorageKey.User)
        }}>Logout</Menu.Item>
      </Menu.Dropdown>
    </Menu>
  
    );
  }
  function HomeButton() {

    return (
      <Button   className={classes.HomeButton} onClick={props.onHomeClick}>
        Go Back To Home Page
        </Button>
    );

  }
 
  
  function LargerDisplayView() {
    return (
      <Group position="apart" className={classes.largerView}>
          <Group>
          <Image
            height={40}
            width={40}
            src={require("../../assets/images/LOGO.png")}
          ></Image>
          <Title>VIGNAM</Title>
        </Group>

       
        <Group>
        <HomeButton/>
        </Group>
      </Group>
    );
  }

  function SmallerDisplayView() {
    return (
      <Group className={classes.smallerView} position="apart" >
        <Group>
         <Image
            height={20}
            width={20}
            src={require("../../assets/images/LOGO.png")}
          ></Image>
          <Title>VIGNAM</Title>
        </Group>

       
       <Group align="center" >
        
        </Group>
        
        <Group>
          
          </Group>
        <Group >
        <HomeButton/>
        </Group>
      </Group>
    );
  }
  function NavigateToHomePage() {
    navigate("/");
    
  }
  
 

  return (
    <Container fluid={true} className={classes.root}
    >
      
      
      <LargerDisplayView />
      <SmallerDisplayView />
      

      <Drawer
        opened={showDrawer}
        onClose={() => setShowDrawer(false)}
        withCloseButton={false}
       
      >
        <ScrollArea
          style={{ height: "100vh", marginTop: 20, marginBottom: 20 }}
         
        >
         
          <Space h={20} />
          <Divider />
          <Space h={20} />
          
        </ScrollArea>
      </Drawer>
    </Container>
  );
}

