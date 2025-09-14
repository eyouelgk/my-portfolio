import styled from "styled-components"

const FooterContainer = styled.div`
  padding: 20px;
  text-align: center;
  background-color: #0b0e13;
  p:hover {
    color: #e8e95f;
  }
`

const Footer = () => {
  return (
    <FooterContainer id="footer">
      <p>© {new Date().getFullYear()} Eyouel Getachew Kebede.</p>
      <p> All rights reserved.</p>
    </FooterContainer>
  )
}
export default Footer
