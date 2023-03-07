import { Container, LoadingOverlay, Title } from "@mantine/core";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { CleanPlugin } from "webpack";
import { getBlogsById } from "../features/getBlogsSlice";


import {
  LocalStorageKey,
  SaveValueToLocalStorage,
} from "../utilities/LocalstorageUtility";

export function LoadingBlog() {
  const params = useParams();

  const navigate = useNavigate();
 
  const id = params.id;

  const [loadingData, setLoadingData] = useState<boolean>(true);
  const [blog, setBlog] = useState<BlogData>();

  useEffect(() => {
    fetchData();
  }, []);

  function fetchData() {
    if (id == null) {
      return;
    }
    setLoadingData(true);
    getBlogsById({ id: id })
      .then((response) => {
        const data = response as BlogData;

        setBlog(data);
        setLoadingData(false);
        SaveValueToLocalStorage(
          LocalStorageKey.SimulationData,
          JSON.stringify(data)
        );
        navigate("/blog/play");
      })
      .catch((error: Error) => {
        setLoadingData(false);
      });
  }

  return (
    <Container>
      
    </Container>
  );
}