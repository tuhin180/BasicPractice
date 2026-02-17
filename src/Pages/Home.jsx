import Container from "../Component/SharedComponent/Container";
import Header from "../Component/Header";
import Hero from "../Component/CommonComponent/hero";
import Product from "../Component/Product";

const Home = () => {
  return (
    <>
      <Header />
      <Container>
        <Hero />
        <Product />
      </Container>
    </>
  );
};

export default Home;
