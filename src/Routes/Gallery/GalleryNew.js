import styled from "styled-components";
import axios from 'axios';
import useInput from "../../Hooks/useInput";
import { useState } from "react";
import { gql } from "apollo-boost";
import { useMutation } from "@apollo/client";

const UPLOAD = gql`
  mutation upload($title: String!, $description: String!, $files: [String!]!){
    upload(title: $title, description: $description, files: $files)
  }
`;

const Wrapper = styled.div`
  display:flex;
  justify-content:center;
`;

const Container = styled.div`
  width: 80%;
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content:center;
`;

const Grid = styled.div`
  width: 80%;
  display: grid;
  grid-template-columns: 65% 35%;
`;

const Preview = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const PreviewMainContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 500px;
  margin-bottom: 30px;
`;

const PreviewMain = styled.img`
  width: 500px;
  height: 100%;
  background-image: url(${props => props.url});
  background-size: cover;
  background-position: center;
`;

const PreviewSubContainer = styled.div`
  width: 100%;
  height: 120px;
  display: flex;
  justify-content: space-between;
`;

const PreviewSub = styled.img`
  width: 20%;
  height: 100%;
  background-image: url(${props => props.url});
  background-color: green;
`;

const Button = styled.button`
  width: 40%;
  height: 50px;
  border-radius: 25px;
  background-color: white;
  border: 2px solid grey;
  font-size: 25px;
  font-weight: 600;
  color: grey;
  margin-top: 20px;
`;

const LabelContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Label = styled.label`
  display: inline-block;
  padding: 5px;
  color: white;
  font-size: 20px;
  font-weight: 600;
  background-color: ${props => props.theme.blueColor};
  cursor: pointer;
  border-radius: 10px;
`;

const FileContainer = styled.div`
  padding: 10px;
  margin: 20px 0px;
  min-height: 100px;
  width: 100%;
  border: 1px solid black;
`;

const FileName = styled.div`
  margin-bottom: 3px;
`;

const FileInput = styled.input`
  width: 100%;
  &[type="file"]{
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip:rect(0,0,0,0);
    border: 0;
  }
`;

const TitleInput = styled.input`
  width: 100%;
  height: 30px;
  margin-bottom: 10px;
`;

const TextInput = styled.input`
  width: 100%;
  height: 300px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const GalleryNew = ({ isLoggedIn }) => {
  const title = useInput("");
  const description = useInput("");

  const [files, setFiles] = useState([]);
  const [fileUrl, setFileUrl] = useState();
  const image = [];

  const [uploadMutation] = useMutation(UPLOAD);

  const onClick = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    for (let i = 0; i < files.length; i++) {
      formData.append("img", files[i])
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
        window.location = "/gallery";
      }
    } catch (e) {
      console.log(e);
      alert("Can't upload Post");
    }
  }

  const onChange = (e) => {
    const { target: { files } } = e;
    setFiles(files);
    if (files !== undefined) {
      for (let i = 0; i < files.length; i++) {
        if (files[i].type === "image/jpeg" || files[i].type === "image/png") {
          image.push(URL.createObjectURL(files[i]));
        }
      }
      setFileUrl(image);
    }
  }
  return (
    <>
      {
        isLoggedIn ? (
          <Wrapper>
            <Container>
              <Grid>
                <Preview>
                  <PreviewMainContainer>
                    {fileUrl === undefined ? <PreviewMain /> : <PreviewMain src={fileUrl[0]} />}
                  </PreviewMainContainer>
                  {fileUrl === undefined ? <PreviewSubContainer /> : <PreviewSubContainer>
                    {
                      fileUrl.map((url, i) => { return i === 0 ? null : <PreviewSub key={i} src={fileUrl[i]} /> })
                    }
                  </PreviewSubContainer>}
                </Preview>
                <Form name="file" encType="multipart/form-data">
                  <LabelContainer>
                    <Label htmlFor="img">파일 선택</Label>
                    <FileInput id="img" type="file" multiple name="img" onChange={onChange} />
                  </LabelContainer>
                  <FileContainer>
                    {
                      [...files].map(file => <FileName key={file.lastModified}>{file.name}</FileName>)
                    }
                  </FileContainer>
                  <TitleInput placeholder="Title" name="title" value={title.value} onChange={title.onChange} required />
                  <TextInput placeholder="Description" name="description" value={description.value} onChange={description.onChange} required />
                  <Button onClick={onClick}>등록</Button>
                </Form>
              </Grid>

            </Container>
          </Wrapper>
        ) : (window.location = "/auth", alert("You need to login"))
      }

    </>
  )
}

export default GalleryNew;