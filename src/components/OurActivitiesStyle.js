import styled from "@emotion/styled";

export const styles = {
  subtitle: {
    fontSize: "14px",
    fontWeight: "700",
    color: "text.grey",
  },
  title: {
    fontFamily: "Unbounded sans-serif",
    lineHeight: "62px",
    fontSize: "48px",
    fontWeight: "700",
    textTransform: "uppercase",
    marginTop: "20px",
  },
  button: {
    position: 'relative',
    display: 'flex',
    height: '80px',
    width: '310px',
    border: '1px solid  #E2E2E2',
    borderRadius: '50px',
    alignItems: 'center',
    justifyContent: 'space-between', 
    padding: '0 20px', 
    
  },
};
export const Section = styled.section`
  display: flex;
  justify-content: space-between;
  height: 470px;
  padding:  80px 70px 0;

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
