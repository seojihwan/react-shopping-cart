import styled from "styled-components";

interface IImageProps {
  size: string;
}

const Container = styled.div<IImageProps>`
  ${({ size }) => `width: ${size}; 
    height: ${size};
  `}
  position: relative;
  overflow: hidden;
`;

const Img = styled.img<IImageProps>`
  ${({ size }) => `width: ${size};`}
`;

const Background = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.05);
`;

export { Container, Img, IImageProps, Background };
