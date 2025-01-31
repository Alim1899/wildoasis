import styled from "styled-components";
import GlobalStyle from "./styles/GlobalStyle";
import Button from "./ui/Button";
import Input from "./ui/Input";
import Row from "./ui/Row";
import Heading from "./ui/Heading";
const StyledApp = styled.div`
  padding: 20px;
`;
function App() {
  return (
    <>
      <GlobalStyle />
      <StyledApp>
        <Row>
          <Row type="horizontal">
            <Heading as="h1">HELLO WORLD!</Heading>
            <Heading as="h2">Check In And Out</Heading>
            <Button>Check in</Button>
            <Button variation="secondary" size="medium">
              Check out
            </Button>
          </Row>
          <Row>
            <Heading as="h3">Forms!</Heading>
            <form>
              <Input />
              <Input />
            </form>
          </Row>
        </Row>
      </StyledApp>
    </>
  );
}

export default App;
