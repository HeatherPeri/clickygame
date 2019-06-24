import React from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Card from "./components/Card";
import friends from "./characters.json";

function App() {
  return (
    <Wrapper>
      <Title>Friends List</Title>
      <Card
        image={friends[0].image}
      />
      <Card
        image={friends[1].image}
      />
      <Card
        image={friends[2].image}
      />
    </Wrapper>
  );
}

export default App;