import React from "react";
import { RouteComponentProps } from "@reach/router";
import {
  Center,
  Container,
  SlideOver,
  Header,
  SlideUp,
  MobileFriendlyContainer
} from "../../components";

export interface HomeProps extends RouteComponentProps { }



const HomePage: React.SFC<HomeProps> = () => {
  return (
    <Center style={{ minHeight: 225, textAlign: 'center' }}>
      <Container>
        <MobileFriendlyContainer>
          <SlideUp>
            <Header to='/'>
              ALEXIS AND CHRIS
            </Header>
          </SlideUp>
          <SlideOver>
            <Header to='/'>
              September 28 2019
            </Header>
          </SlideOver>
          <SlideOver>
            <div style={{ borderBottom: '2px solid rgba(8, 148, 161, 0.4)', marginTop: 8, marginBottom: 8 }} />
          </SlideOver>
          <SlideUp>
            <Header to='/'>
              PENSACOLA, FL
            </Header>
          </SlideUp>
        </MobileFriendlyContainer>
      </Container>
    </Center>
  );
};

export default HomePage;
