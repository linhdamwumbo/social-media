import styled, { css } from 'styled-components';

export const H2 = styled.h2`
  color: #0b0e12;
  font-size: 40px;
  font-weight: normal;
  letter-spacing: 0;
  line-height: 1.5;

  ${(props) =>
    props.center &&
    css`
      text-align: center;
    `}

  ${(props) =>
    props.maxWidth &&
    css`
      max-width: ${props.maxWidth};
    `}

  @media only screen and (max-width: 1024px) {
    font-size: 24px;
    font-weight: normal;
    line-height: 1.29;
    letter-spacing: 0.23px;
    text-align: center;

    ${(props) =>
      props.maxWidthMd &&
      css`
        max-width: ${props.maxWidthMd};
      `}

    ${(props) =>
      props.mrMd &&
      css`
        margin: ${props.mrMd};
      `}
  }
`;
