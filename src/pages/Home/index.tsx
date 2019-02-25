import React from "react";
import { RouteComponentProps, Link } from "@reach/router";
import {
  Center,
  Container,
  SlideOver,
  Header,
  SlideUp,
  Button,
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
        <MobileFriendlyContainer style={{ height: '20vh', display: 'flex', alignItems: 'flex-end', justifyContent: 'center' }}>
          <SlideOver><Button as={Link} to='/accommodations'>CELEBRATE WITH US</Button></SlideOver>
        </MobileFriendlyContainer>
      </Container>
    </Center>
  );
};

export default HomePage;
