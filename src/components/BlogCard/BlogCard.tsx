import {
  createStyles,
  Title,
  Container,
  Paper,
  Button,
  ScrollArea,
  Space,
  Group,
  Grid,
} from "@mantine/core";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";


import { fetchAllBlog } from "../../features/getBlogsSlice";
import { IconPlayerPlay } from "@tabler/icons";

import { useNavigate, Link } from "react-router-dom";
import { LoadingBlog } from "../../Pages/LoadingBlog";

const useStyles = createStyles((theme) => ({
  CompleteTitle: {
    font: "Popins",
    fontWeight: 400,
    fontSize: "200%",
    marginTop: theme.spacing.xs,
    paddingTop: "-55%",
    paddingBottom: "-55%",
    textAlign: "center",
    color: "#3174F3",

    [theme.fn.smallerThan("sm")]: {
      fontWeight: 200,
      fontSize: 25,
      paddingTop: 0,
      paddingBottom: 5,
    },
  },
  trendingSubtitle: {
    fontWeight: 600,
    fontSize: 36,
    paddingBottom: 24,
    textAlign: "center",
    

    [theme.fn.smallerThan("sm")]: {
      fontSize: 28,
    },
  },
  highlightText: {
    color: "#3174F3",
  },
  card: {
    height: 500,
    backgroundColor: "indianred",
    transition: "transform 150ms ease, box-shadow 150ms ease",
    "&:hover": {
      transform: "scale(1.02)",
      boxShadow: theme.shadows.md,
    },
  },

  innerCard: {
    height: 340,
    width: 300,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
    backgroundSize: "cover",
    backgroundPosition: "center",
    background: theme.fn.linearGradient(
      180,

      "transparent",
      "transparent",
      theme.colors.dark[5]
    ),
  },
  button:{
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "5px",
    outerWidth:"300px",
  },

  title: {
    fontFamily: `Greycliff CF ${theme.fontFamily}`,
    fontWeight: 900,
    color: "black",
    fontSize: 35,
    marginTop: theme.spacing.xs,
    
  },
  linkStyle : {
    textDecoration: 'none',
    color: 'inherit',
    "&:hover": {
      textDecoration:"underline",
      cursor: "pointer",
    },
  },
  subtitle: {
    fontFamily: `Greycliff CF ${theme.fontFamily}`,
    fontWeight: 900,
    color: "grey",
    fontSize: 25,
    marginTop: theme.spacing.xs,
   
  },

  category: {
    color: theme.white,
    opacity: 0.7,
    fontWeight: 700,
    textTransform: "uppercase",
  },

  Grid: {
    padding: 20,
    maxHeight: 600,
    [theme.fn.smallerThan("sm")]: { paddingLeft: 0, paddingRight: 0 },
  },

  Container:{
    width:"100%",
    display: "grid",
    "grid-template-columns": "repeat(1, 1fr)",
    
    "@media (min-width: 600px)": {
      "grid-template-columns": "repeat(2, 1fr)",
    },
    "@media (min-width: 900px)": {
      "grid-template-columns": "repeat(4, 1fr)",
    }
  }
}));

interface BlogProps {
  onClick: (simulation: BlogData) => void;
  updateQuestions: (blogs: BlogData[]) => void;
}

function BlogCard(props: {
  name: string;
  id: string;
  subtitle: string|undefined;
  onClick: () => void;
  imageUrl?: string;
}) {
  const { classes } = useStyles();
  
  return (
    <div style={{
      margin: "10px"
    }}>
          <div className="">

    <Paper
      shadow="md"
      radius="md"
      sx={{
        backgroundImage: `url(${props.imageUrl})`,
        backgroundSize: "cover",
      }}
     
    >
    
      <div className={classes.innerCard} style={{ padding: 20 }}>
        <Space />
        <Group>
         
          
        </Group>
      </div>
    </Paper>
   <Link to={'/blogs/'+props.id} className={classes.linkStyle}>
   <Title  className={classes.title}>
            {props.name}
            <div className={classes.subtitle}>
            {props.subtitle}
           
            </div>
          </Title>
   </Link>
    </div>
    
    </div>
  );
}

export function Blogs(props: BlogProps ) {
  const { classes } = useStyles();
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState<BlogData[]>();

  useEffect(() => {
    fetchAllBlog()
      .then((data) => {
        const blogs = data as BlogData[];

        setBlogs(blogs);
        props.updateQuestions(blogs);
      })
      .catch((error) => {});
  }, []);

  const blogsList = blogs?.map((item) => (
    
    <BlogCard
      key={item._id}
      name={item.Title}
      subtitle={item.subTitle}
      id={item._id}
      onClick={() => {
       
        
        
      props.onClick(item)
      
      }}
      imageUrl={item.blogImageUrl}
    />
    
  ));
  return (
    <div
      style={{
        backgroundColor: "#D9D9D933",
        padding: 40,
      }}
    >
      <Title className={classes.CompleteTitle}> Vignam Blogs</Title>
      <Title className={classes.trendingSubtitle}>
      
        
      </Title>
      <Grid>
        <div className={classes.Container} style={{ display: "grid", columns: "repeat(4, 1fr)"
 , gap: 40 }}>

          { blogsList}
          
        </div>
      </Grid>
    </div>
  );
}

