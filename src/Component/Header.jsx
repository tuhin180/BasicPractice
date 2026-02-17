import React from "react";
import Container from "./SharedComponent/Container";
import Navbar from "./SharedComponent/Navbar";

const Header = () => {
  return (
    <div className="bg-base-100 text-base-content font-normal shadow-sm">
      <Container>
        <Navbar />
      </Container>
    </div>
  );
};

export default Header;
