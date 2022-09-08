import Header from "./components/Header";
import Container from "./components/styled/Container.styled";
import { GlobalStyle } from "./components/styled/Global.styled";
import { ThemeProvider } from "styled-components";
import Shortener from "./components/Shortener";
import Content from "./components/Content";
import Banner from "./components/Banner";
import Footer from "./components/Footer";

const theme = {
  colors: {
    cyan: "hsl(180, 66%, 49%)",
    darkViolet: "hsl(257, 27%, 26%)",
    red: "hsl(0, 87%, 67%)",
    gray: "hsl(0, 0%, 75%)",
    grayishViolet: "hsl(257, 7%, 63%)",
    veryDarkBlue: "hsl(255, 11%, 22%)",
    veryDarkViolet: "hsl(260, 8%, 14%)",
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Container>
        <Header />
        <Shortener />
        <Content />
        <Banner />
        <Footer />
      </Container>
    </ThemeProvider>
  );
}

export default App;
