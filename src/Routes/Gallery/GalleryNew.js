import styled from "styled-components";
import axios from 'axios';
import useInput from "../../Hooks/useInput";
import { useState } from "react";
import { gql } from "apollo-boost";
import { useMutation } from "@apollo/client";

const Container = styled.div``;

const UPLOAD = gql`
  mutation upload($title: String!, $description: String!, $files: [String!]!){
    upload(title: $title, description: $description, files: $files)
  }
`;

const GalleryNew = ({ isLoggedIn }) => {
  const title = useInput("");
  const description = useInput("");

  const [files, setFiles] = useState([]);

  const [uploadMutation] = useMutation(UPLOAD);

  const onClick = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    for (let i = 0; i < files.length; i++) {
      formData.append("file", files[i])
    }
    try {
      const { data: { fileArr } } = await axios({
        method: "POST",
        url: "http://localhost:4000/api/upload",
        data: formData,
        headers: {
          "Content-Type": "multipart/form-data"
        }
      });
      const { data: { upload } } = await uploadMutation({
        variables: {
          title: title.value,
          description: description.value,
          files: [...fileArr]
        }
      });
      if (upload) {
        window.location = "#/gallery";
      }
    } catch (e) {
      console.log(e);
      alert("Can't upload Post");
    }
  }

  const onChange = (e) => {
    const { target: { files } } = e;
    setFiles(files);
  }

  return (
    <>
      {
        isLoggedIn ? (
          <Container>
            <form name="file" encType="multipart/form-data">
              <input type="file" multiple name="file" onChange={onChange} />
              <input placeholder="Title" name="title" value={title.value} onChange={title.onChange} />
              <input placeholder="Description" name="description" value={description.value} onChange={description.onChange} />
              <button onClick={onClick}>Upload</button>
            </form>
          </Container>
        ) : (window.location = "#/auth", alert("You need to login"))
      }

    </>
  )
}

export default GalleryNew;