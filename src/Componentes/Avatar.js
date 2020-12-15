import PropTypes from 'prop-types';
import styled from 'styled-components';

const getSize = (size) => {
  let number;
  if (size === "sm") {
    number = 40
  } else if (size === "md") {
    number = 80
  } else if (size === "lg") {
    number = 200
  }
  return `width: ${number}px; height: ${number}px;`
}

const Container = styled.img`
  background-image: url(${props => props.url});
  background-size: cover;
  ${props => getSize(props.size)};
  border-radius: 50%;
  cursor: pointer;
`;

const Avatar = ({ size, url, className, onClick }) => {
  return <Container className={className} size={size} src={url} onClick={onClick} />
}

Avatar.propTypes = {
  size: PropTypes.oneOf(["sm", "md", "lg"]).isRequired,
  url: PropTypes.string,
  onClick: PropTypes.func
}

export default Avatar;