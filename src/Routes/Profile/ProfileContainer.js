import { useQuery } from '@apollo/client';
import { useState } from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import Loader from '../../Componentes/Loader';
import ProfilePresenter from './ProfilePresenter';
import { SEE_USER } from './ProfileQueries';

const Container = styled.div`
  display:flex;
  align-items:center;
  justify-content: center;
  min-height: 70vh;
`;

const ProfileContainer = ({ match: { params: { username } } }) => {
  const { data, loading } = useQuery(SEE_USER, { variables: { userName: username } });
  const [state, setState] = useState(null);
  if (data) { console.log(data) }

  return loading ? (<Container><Loader /></Container>) : (
    !loading && data?.seeUser && (
      <ProfilePresenter
        loading={loading}
        userName={username}
        avatar={data.seeUser.avatar}
        bio={data.seeUser.bio}
        followingCount={data.seeUser.followingCount}
        followersCount={data.seeUser.followersCount}
        id={data.seeUser.id}
        likes={data.seeUser.likes}
        posts={data.seeUser.posts}
        followers={data.seeUser.followers}
        following={data.seeUser.following}
        state={state}
        setState={setState}
        postsCount={data.seeUser.postsCount}
        isFollowing={data.seeUser.isFollowing}
        firstName={data.seeUser.firstName}
        lastName={data.seeUser.lastName}
      />
    )
  )
}

export default withRouter(ProfileContainer);