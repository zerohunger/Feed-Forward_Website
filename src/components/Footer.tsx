import {
  createStyles,
  Text,
  Container,
  ActionIcon,
  Group,
  Image,
  Title,
} from "@mantine/core";
import {
  IconBrandTwitter,
  IconBrandYoutube,
  IconBrandInstagram,
  IconBrandDiscord,
  IconBrandLinkedin,
} from "@tabler/icons";
import { SocialMediaLink } from "../@types/DataTypes.d";
import { AllBlogsPage } from "../Pages/AllBlogsPage";

const useStyles = createStyles((theme) => ({
  footer: {
    backgroundColor:"#ADD8E6",
    paddingTop: theme.spacing.xl * 2,
    paddingBottom: theme.spacing.xl,
    borderTop: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
  },

  logo: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",

    [theme.fn.largerThan("md")]: {
      maxWidth: 200,
    },
  },

  description: {
    marginTop: 5,

    [theme.fn.smallerThan("sm")]: {
      marginTop: theme.spacing.xs,
    },
  },

  inner: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
    alignItems: "center",

    [theme.fn.largerThan("md")]: {
      paddingLeft: 60,
      paddingRight: 60,
      flexDirection: "row",
    },
  },

  groups: {
    display: "flex",
    flexWrap: "wrap",

    [theme.fn.largerThan("md")]: {
      paddingLeft: 100,
      flexDirection: "row",
    },

    [theme.fn.smallerThan("md")]: {
      flexDirection: "column",
    },
  },

  wrapper: {
    width: 360,
    [theme.fn.smallerThan("md")]: {
      width: "100vw",
      padding: 20,
    },

    [theme.fn.largerThan("md")]: {
      width: 260,
    },
  },

  link: {
    display: "block",
    color: "black",
    fontSize: theme.fontSizes.sm,
    paddingTop: 3,
    paddingBottom: 3,

    "&:hover": {
      textDecoration: "underline",
    },
  },

  title: {
    fontSize: theme.fontSizes.lg,
    fontWeight: 700,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    marginBottom: theme.spacing.xs / 2,
    color: "#9F2B68",
  },

  afterFooter: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: theme.spacing.xl,
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,
    paddingLeft: 60,
    paddingRight: 60,
    borderTop: `1px solid ${theme.colors.gray[2]}`,

    [theme.fn.smallerThan("md")]: {
      flexDirection: "column",
    },
  },

  social: {
    [theme.fn.smallerThan("md")]: {
      marginTop: theme.spacing.xs,
    },
  },
}));

export function Footer() {
  const { classes } = useStyles();

  const groups = DATA.map((group) => {
    const links = group.links.map((link, index) => (
      <Text<"a">
        key={index}
        className={classes.link}
        component="a"
        onClick={(event) => {
          event.preventDefault();
          link.onClick();
        }}
      >
        {link.label}
      </Text>
    ));

    return (
      <div className={classes.wrapper} key={group.title}>
        <Text className={classes.title}>{group.title}</Text>
        {links}
      </div>
    );
  });

  return (
    <footer className={classes.footer}>
      <Container fluid={true} className={classes.inner}>
        <div className={classes.logo}>
          <Group>
            <Image
              height={100}
              width={100}
              src={require("../assets/images/LOGO3.png")}
            ></Image>
            <Title style={{ fontSize: 30, fontWeight: 900, color: "#9F2B68" }}>
            ZERO HUNGER
            </Title>
          </Group>
          <Text color="black" className={classes.description}>
            Join the Communtiy and Let's Protect the Needy and Underprivileged Children of India
          </Text>
        </div>
        <div className={classes.groups}>{groups}</div>
      </Container>

      <Container fluid={true} className={classes.afterFooter}>
        <Text color="black" size="sm">
          © 2023 Team Zero Hunger
        </Text>

        <Group spacing={0} className={classes.social} position="right" noWrap>
          <ActionIcon
            size="lg"
            onClick={() => {
             
              window.open(SocialMediaLink.discord, "__blank");
            }}
          >
            <IconBrandDiscord size={18} stroke={1.5} />
          </ActionIcon>
          <ActionIcon
            size="lg"
            onClick={() => {
            
              window.open(SocialMediaLink.youtube, "__blank");
            }}
          >
            <IconBrandYoutube size={18} stroke={1.5} />
          </ActionIcon>
          
          <ActionIcon
            size="lg"
            onClick={() => {
             
              window.open(SocialMediaLink.twitter, "__blank");
            }}
          >
            <IconBrandTwitter size={18} stroke={1.5} />
          </ActionIcon>

          <ActionIcon
            size="lg"
            onClick={() => {
            
              window.open(SocialMediaLink.instagram, "__blank");
            }}
          >
            <IconBrandInstagram size={18} stroke={1.5} />
          </ActionIcon>

          <ActionIcon
            size="lg"
            onClick={() => {
             
              window.open(SocialMediaLink.linkedIn, "__blank");
            }}
          >
            <IconBrandLinkedin size={18} stroke={1.5} />
          </ActionIcon>
        </Group>
      </Container>
    </footer>
  );
}

const DATA: {
  title: string;
  links: { label: string; onClick: () => void }[];
}[] = [
  {
    title: "Company",
    links: [
      {
        label: "About Us",
        onClick: () => {
         
        },
      },
    ],
  },
  {
    title: "Social",
    links: [
      {
        label: "Discord",
        onClick: () => {
          
         
          
        },
      },
      {
        label: "Twitter",
        onClick: () => {
         
       
        },
      },
      {
        label: "YouTube",
        onClick: () => {

         
        },
      },
      {
        label: "Instagram",
        onClick: () => {
         
         
        },
      },
      {
        label: "LinkedIn",
        onClick: () => {
          
        
        },
      },
    ],
  },
  {
    title: "Contact US",
    links: [
      {
        label:
          "Team Zero Hunger Founders are :       Mayank, Milind, Tanush and Kashish from '2021 Batch DSAI IIIT DHARWAD'.",
        onClick: () => {
         
        },
      },
      
      {
        label: "+91-8879818749",
        onClick: () => {
         
        },
      },
      {
        label: "ZeroHunger@gmail.com",
        onClick: () => {
         
        
        },
      },
    ],
  },
];
