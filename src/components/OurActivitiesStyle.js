import styled from "@emotion/styled";

export const styles = {
  subtitle: {
    fontSize: "14px",
    fontWeight: "700",
    color: "text.grey",
  },
  title: {
    fontFamily: "Unbounded sans-serif",
    lineHeight: {xs:"44px", sm:"62px", },
    fontSize: {xs:"34px", sm:"48px", } ,
    fontWeight: "700",
    textTransform: "uppercase",
    marginTop: "20px",
  },
  wrapperBox: {
    display: {xs: 'block', md: "flex" },
    justifyContent: 'flex-end',
    
   
  },
  button: {
    position: 'relative',
    display: 'flex',
    height: '80px',
    border: '1px solid  #E2E2E2',
    borderRadius: '50px',
    alignItems: 'center',
    justifyContent: 'space-between', 
    padding: '0 20px', 
  },
  button1:{
    width: {lg: "270px",   xs: '100%' },
    
  },
  button2:{
    width: {lg: "340px",  xs: '100%' },
    marginLeft: {lg: "20px", xs: '0' },
    m: {xs:'10px 0 0 auto', lg:'0 0 0 20px' }
  },
  button3:{
    width: {lg: "550px",  xs: '100%' },
    m: '10px 0 0 auto' 
  },
  button4:{
    width: {lg: "500px",  xs: '100%' },
    m:'10px 0 0 auto'
  },
};

export const Section = styled.section`
  display: flex;
  justify-content: space-between;
  height: 470px;
  padding:  80px 70px 0;
  @media only screen and (max-width: 767.8px) {
    padding:  70px 20px 0;
    display: block;
    height: 100%;
}
  @media only screen and (max-width: 424.8px) {
    padding:  70px 20px 0;
    display: block;
    height: 100%;
}

`;
export const Span = styled.span`
  color: #fcb813;
`;
export const Cicle = styled.div`
  position: absolute;
  height: 60px;
  width: 60px;
  border-radius: 50%;
  border: 1px solid  #E2E2E2;
  background-color: #FFFFFF;
  right: 10px;
  top: 50%; 
  transform: translateY(-50%);
  display: flex;
  align-items: center;
`;

export const Img = styled.img`
  margin: 0 auto; 
`;
