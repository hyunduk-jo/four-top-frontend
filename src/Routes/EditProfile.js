import { useMutation, useQuery } from "@apollo/client";
import { gql } from "apollo-boost";
import Axios from "axios";
import { useState } from "react";
import styled from "styled-components";
import Avatar from "../Componentes/Avatar";
import Loader from "../Componentes/Loader";
import useInput from "../Hooks/useInput";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  min-height: 70vh;
`;

const Container = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Label = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  label{
    width: 50%;
    text-align: center;
  }
  input{
    width: 50%;
    height: 40px;
  }
  margin: 30px 0px;
`;

const EditContainer = styled.div`
  width: 660px;
  height: 60vh;
  border: 1px soild grey;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  form{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    button{
      margin-top: 20px;
      width: 40%;
      height: 40px;
      border: none;
      background-color:${props => props.theme.blueColor};
      color: white;
      font-size: 25px;
      font-weight: 600;
    }
  }
`;

const UserName = styled.div`
  font-size: 30px;
  font-weight: 600;
  margin-top: 20px;
`;

const Title = styled.div`
  font-size: 40px;
  font-weight: 600;
  margin: 40px 0px;
`;

const EDIT_USER = gql`
  mutation editUser($userName: String, $firstName: String, $lastName: String, $bio: String, $avatar: String){
    editUser(userName: $userName, firstName: $firstName, lastName: $lastName, bio: $bio, avatar: $avatar)
  }
`;

const ME = gql`
  query me{
    me{
      userName
      firstName
      lastName
      bio
      avatar
    }
  }
`;

const EditProfile = () => {
  const { data, loading } = useQuery(ME);
  const newFirstName = useInput("");
  const newLastName = useInput("");
  const newBio = useInput("");

  const [editUserMutation] = useMutation(EDIT_USER);
  const [file, setFile] = useState([]);
  const [fileUrl, setFileUrl] = useState(data?.me?.avatar); // For image preview
  const onClick = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("avatar", file)
    try {
      const { data: { location } } = await Axios({
        method: "POST",
        url: "http://localhost:4000/api/avatar",
        data: formData,
        headers: {
          "Content-Type": "multipart/form-data"
        }
      });
      const { data: { editUser } } = await editUserMutation({
        variables: {
          avatar: location, bio: newBio.value, firstName: newFirstName.value, lastName: newLastName.value
        }
      });
      if (editUser) {
        window.location = "#/gallery";
      }
    } catch (e) {
      console.log(e);
      alert("Can't upload Post");
    }
  }

  const onChange = (e) => {
    const { target: { files } } = e;
    setFile(files[0]);
    if (files[0] !== undefined) {
      setFileUrl(URL.createObjectURL(files[0]));
    }
  }


  return (
    <>
      {
        loading && (<Wrapper><Loader /></Wrapper>)
      }
      {
        !loading && data?.me && (
          <Wrapper>
            <Container>
              <EditContainer>
                <Title>프로필 변경</Title>
                {(fileUrl === null || fileUrl === undefined) ? <Avatar size="lg" url={data.me.avatar} /> : <Avatar size="lg" url={fileUrl} />}
                <form name="avatar" encType="multipart/form-data">
                  <Label>
                    <UserName>{data.me.userName}</UserName>
                  </Label>
                  <Label>
                    <label htmlFor="file">Avatar</label>
                    <input id="file" type="file" name="avatar" onChange={onChange} />
                  </Label>
                  <Label>
                    <label htmlFor="firstName">First Name</label>
                    <FNInput firstName={data.me.firstName} />
                    {/* <input id="firstName" value={newFirstName.value} onChange={newFirstName.onChange} /> */}
                  </Label>
                  <Label>
                    <label htmlFor="lastName">Last Name</label>
                    <LNInput lastName={data.me.lastName} />
                    {/* <input id="lastName" value={newLastName.value} onChange={newLastName.onChange} /> */}
                  </Label>
                  <Label>
                    <label htmlFor="bio">Bio</label>
                    <BIOInput bio={data.me.bio} />
                    {/* <input id="bio" value={newBio.value} onChange={newBio.onChange} /> */}
                  </Label>
                  <button onClick={onClick}>Upload</button>
                </form>
              </EditContainer>
            </Container>
          </Wrapper>
        )
      }
    </>
  )
}

const FNInput = ({ firstName }) => {
  const pre = useInput(firstName);
  return <input value={pre.value} onChange={pre.onChange} />
}

const LNInput = ({ lastName }) => {
  const pre = useInput(lastName);
  return <input value={pre.value} onChange={pre.onChange} />
}

const BIOInput = ({ firstName }) => {
  const pre = useInput(firstName);
  return <input value={pre.value} onChange={pre.onChange} />
}
export default EditProfile;