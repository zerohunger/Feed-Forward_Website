import{
  AppShell,
  createStyles,
  Drawer,
  Menu,
  
  Navbar,
  ScrollArea,
  Button,
 
  Center,
}from "@mantine/core";
import { LoadingBlog } from "./LoadingBlog";


import { useLocation, useSearchParams } from "react-router-dom";
import { BlogHeader } from "../components/BlogCard/BlogHeader";
import { Container, Group, LoadingOverlay, Modal, Space } from "@mantine/core";
import { useEffect, useState } from "react";

import { Blogs } from "../components/BlogCard/BlogCard";
import { useNavigate } from "react-router";



const useStyles = createStyles((theme) => ({
  loginButton: {
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
    [theme.fn.largerThan("md")]: { display: "none" },
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
    "background-color": "rgba(0,0,0,0.4)" 
  },
  modalContent: {
    top:0,
    "background-color": "#fefefe",
  margin: "auto",
  padding: "20px",
  border: "1px solid #888",
  width: "85%"
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
  cursor:'pointer'
  }
}));


export function AllBlogsPage( ) {
  const { classes } = useStyles();
  const [blogs, setBlogs] = useState<BlogData[]>();
  const [isPopupActive, setIsPopupActive] = useState<boolean>(false);
  const [blog, setBlog] = useState<BlogData>();
 

  const [searchParams, setSearchParams] = useSearchParams()

  const id = searchParams.get('id')
 

  useEffect(() => { 
    blogs?.forEach(q => {
      if(q._id === id) {
      
        setBlog(q)

        
       
      
    }
    })
  }, [blogs, id])
  const navigate = useNavigate();
  function onButtonClick(blog: BlogData ) {
    setBlog(blog);
   
   
    <LoadingBlog/>
      
}
  return(<Container fluid={true} p={0} m={0}>
    
  <BlogHeader
  
    onHomeClick={() => {
      
      navigate("/");
    }}
  />
 
  <Blogs onClick={onButtonClick} updateQuestions={setBlogs}/>
   
    </Container>
  );
  }