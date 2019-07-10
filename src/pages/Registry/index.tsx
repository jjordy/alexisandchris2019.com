import React from "react";
import { RouteComponentProps } from "@reach/router";

import {
  Center,
  Container,
  SlideOver,
  Header,
  SlideUp,
  MobileFriendlyContainer,
  Segment,
  Grid
} from "../../components";

export interface RegistryProps extends RouteComponentProps { }

const RegistryPage: React.SFC<RegistryProps> = ({ props }: any) => {
  return (
    <Container style={{maxWidth: 1150, margin: 'auto'}}>
      <MobileFriendlyContainer>
        <Center>
          <SlideOver>
            <Header to='/accommodations'>
              Registry
            </Header>
          </SlideOver>
        </Center>
        <Grid width='100%' gap={24}>
          <div>
            <SlideUp>
              <Segment style={{ flex: '1 1 auto' }}>
                <SlideUp>
                  <ul style={{listStyleType: 'none', fontSize: 24, color: '#222'}}>
                    <li><span role='img' aria-label='poppin bottles' style={{marginRight: 8}}>🍾</span>Martin Miazza</li>
                    <li><span role='img' aria-label='poppin bottles' style={{marginRight: 8}}>🎉</span>Heritage House Gifts</li>
                    <li><span role='img' aria-label='poppin bottles' style={{marginRight: 8}}>💏</span>Bed Bath and Beyond</li>
                  </ul>
                </SlideUp>
              </Segment>
            </SlideUp>
          </div>
        </Grid>

      </MobileFriendlyContainer>
    </Container>

  );
};

export default RegistryPage;
