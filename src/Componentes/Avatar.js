import PropTypes from 'prop-types';
import styled from 'styled-components';

const getSize = (size) => {
  let number;
  if (size === "sm") {
    number = 40
  } else if (size === "md") {
    number = 80
  } else if (size === "lg") {
    number = 150
  }
  return `width: ${number}px; height: ${number}px;`
}

const Container = styled.img`
  background-image: url(${props => props.url});
  background-size: cover;
  ${props => getSize(props.size)};
  border-radius: 50%;
`;

const Avatar = ({ size, url }) => {
  return <Container size={size} src={url} />
}

Avatar.propTypes = {
  size: PropTypes.oneOf(["sm", "md", "md"]).isRequired,
  url: PropTypes.string
}

export default Avatar;