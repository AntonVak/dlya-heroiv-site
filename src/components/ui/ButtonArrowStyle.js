import styled from "@emotion/styled";

export const styles = {
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
