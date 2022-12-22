import {
  createStyles,
  Text,
  Container,
  ActionIcon,
  Group,
} from "@mantine/core";
import {
  IconBrandTwitter,
  IconBrandYoutube,
  IconBrandInstagram,
  IconBrandDiscord,
  IconBrandLinkedin,
} from "@tabler/icons";

const useStyles = createStyles((theme) => ({
  footer: {
    marginTop: 120,
    paddingTop: theme.spacing.xl * 2,
    paddingBottom: theme.spacing.xl * 2,
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[6]
        : theme.colors.gray[0],
    borderTop: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
  },

  logo: {
    maxWidth: 200,

    [theme.fn.smallerThan("sm")]: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
  },

  description: {
    marginTop: 5,

    [theme.fn.smallerThan("sm")]: {
      marginTop: theme.spacing.xs,
      textAlign: "center",
    },
  },

  inner: {
    display: "flex",
    justifyContent: "space-between",
    paddingLeft: 60,
    paddingRight: 60,
    [theme.fn.smallerThan("sm")]: {
      flexDirection: "column",
      alignItems: "center",
    },
  },

  groups: {
    display: "flex",
    flexWrap: "wrap",

    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  wrapper: {
    width: 160,
  },

  link: {
    display: "block",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[1]
        : theme.colors.gray[6],
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
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
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
    borderTop: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[2]
    }`,

    [theme.fn.smallerThan("sm")]: {
      flexDirection: "column",
    },
  },

  social: {
    [theme.fn.smallerThan("sm")]: {
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
        href={link.link}
        onClick={(event) => event.preventDefault()}
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
          {/* <MantineLogo size={30} /> */}
          <Text size="xs" color="dimmed" className={classes.description}>
            28 , SSG Majesty Mall , Plot No. 2 Road No. 43, Guru Harikishan
            Marg,Pitam Pura,Delhi 10034
          </Text>
        </div>
        <div className={classes.groups}>{groups}</div>
      </Container>
      <Container fluid={true} className={classes.afterFooter}>
        <Text color="dimmed" size="sm">
          © 2022 Vignam Labs PVT Limited. All rights reserved.
        </Text>

        <Group spacing={0} className={classes.social} position="right" noWrap>
          <ActionIcon size="lg">
            <IconBrandTwitter size={18} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg">
            <IconBrandYoutube size={18} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg">
            <IconBrandInstagram size={18} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg">
            <IconBrandDiscord size={18} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg">
            <IconBrandLinkedin size={18} stroke={1.5} />
          </ActionIcon>
        </Group>
      </Container>
    </footer>
  );
}

const DATA: {
  title: string;
  links: { label: string; link: string }[];
}[] = [
  {
    title: "Company",
    links: [
      {
        label: "About Us",
        link: "",
      },
      {
        label: "Privacy Policy",
        link: "",
      },
    ],
  },
  {
    title: "Social",
    links: [
      {
        label: "Discord",
        link: "",
      },
      {
        label: "Twitter",
        link: "",
      },
      {
        label: "YouTube",
        link: "",
      },
      {
        label: "Instagram",
        link: "",
      },
      {
        label: "LinkedIn",
        link: "",
      },
    ],
  },
  {
    title: "Contact US",
    links: [
      {
        label: "+919650488030",
        link: "",
      },
      {
        label: "+918561057510",
        link: "",
      },
      {
        label: "partner@vignam.com",
        link: "",
      },
    ],
  },
];