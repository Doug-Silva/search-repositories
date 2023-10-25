import React from "react";

import { Container, Header, Avatar, Login, Name } from "./styles";

function Profile() {
  return (
    <Container>
      <Header>
        <Avatar src="https://avatars.githubusercontent.com/u/55540536?v=4" />
        <Login>devsamurai</Login>
        <Name>Dev Samurai</Name>
      </Header>
    </Container>
  );
}

export default Profile;
