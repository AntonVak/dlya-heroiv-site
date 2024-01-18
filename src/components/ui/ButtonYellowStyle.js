import styled from "@emotion/styled";

export const Button = styled.button`
  display: block;
  position: relative;
  height: 60px;
  width: 240px;
  border: 1px solid #000000;
  border-radius: 50px;
  background-color: #FCB813;
  margin-top: 45px;
  margin-left: 70px;
  bottom: 235px;
  @media only screen and (max-width: 767.8px) {
    margin: 20px 0 0 20px;
    bottom: 0px;
}

`;
export const Cicle = styled.div`
  position: absolute;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  background-color: #FFFFFF;
  left: 10px;
  top: 10px;
`;
export const ImgMap = styled.img`
  position: relative;
  height: 23px;
  width: 30px;
  margin-top: 9px;

  
`;

export const styles = {
  text: {
    marginLeft: '65px',
    textAlign: 'left', 
  },
}
