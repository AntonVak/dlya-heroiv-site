import styled from "@emotion/styled";
import { Global } from "@emotion/react";

export const GlobalStyles = () => {
  return (
    <Global styles=
    {{
      html: {
        scrollBehavior: "smooth",
        padding: 0,
        margin: 0,
      },
      "*": {
        boxSizing: "border-box",
      },
      "*::before": {
        boxSizing: "border-box",
      },
      "*::after": {
        boxSizing: "border-box",
      },
      body: {
        fontFamily: "Montserrat, sans-serif",
        padding: 0,
        margin: 0,
      },
      h1: {
        fontWeight: 500,
        margin: 0,
        padding: 0,
      },
      h2: {
        fontWeight: 500,
        margin: 0,
        padding: 0,
      },
      h3: {
        fontWeight: 500,
        margin: 0,
        padding: 0,
      },
      h4: {
        fontWeight: 500,
        margin: 0,
        padding: 0,
      },
      h5: {
        fontWeight: 500,
        margin: 0,
        padding: 0,
      },
      h6: {
        fontWeight: 500,
        margin: 0,
        padding: 0,
      },
      p: {
        fontWeight: 500,
        margin: 0,
        padding: 0,
      },
      ul: {
        marginTop: 0,
        marginBottom: 0,
        paddingLeft: 0,
      },
      ol: {
        marginTop: 0,
        marginBottom: 0,
        paddingLeft: 0,
      },
      li: {
        listStyle: "none",
      },
      a: {
        textDecoration: "none",
      },
      img: {
        display: "block",
        maxWidth: "100%",
        height: "auto",
      },
      button: {
        cursor: "pointer",
        border: "none",
        display: "block",
      },
    }}/>
      
   
  );
};

export const Container = styled.div`
  width: min(100% - 0rem, 90rem);
  margin-inline: auto;
  padding: 0 4.38rem;
  background-color: azure;
  /* display: flex;
  justify-content: center; */
`;

export const FlexWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
