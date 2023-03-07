import { MantineProvider } from "@mantine/core";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { useEffect } from "react";
import { AllBlogsPage } from "./Pages/AllBlogsPage";
import { LoadingBlog } from "./Pages/LoadingBlog";
import { BlogPage } from "./Pages/BlogPage";
import Home from "./Home";

const router = createBrowserRouter([
  {
    path: "/blogs",
    element: <AllBlogsPage/>,
  },
  {
    path: "/blogs/:id",
    element: <BlogPage/>,
  },
  {
    path:"/",
    element: <Home/>,
  }
 
]);

export default function AppV() {

  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        fontFamily: "Greycliff CF, Verdana, sans-serif",
        fontFamilyMonospace: "Greycliff CF, Monaco, Courier, monospace",
        breakpoints: {
          xs: 320,
          sm: 480,
          md: 768,
          lg: 1024,
          xl: 1440,
        },
        headings: {
          fontWeight: 400,
          fontFamily: "Greycliff CF, sans-serif",
        },
      }}
    >
     
       
          <RouterProvider router={router} />
      
     
    </MantineProvider>
  );
}
