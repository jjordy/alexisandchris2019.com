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

import Map from '../../components/Map'

export interface WorkProps extends RouteComponentProps { }



const WorkPage: React.SFC<WorkProps> = ({ props }: any) => {
  return (
    <Container style={{maxWidth: 1150, margin: 'auto'}}>
      <MobileFriendlyContainer>
        <Center>
          <SlideOver>
            <Header to='/accommodations'>
              Accommodations
            </Header>
          </SlideOver>
        </Center>
        <Grid width='50%' gap={24}>
          <SlideOver>
            <Segment>
              <Map containerElement={<div style={{ height: `400px` }} />}
                mapElement={<div style={{ height: `100%` }} />} />
            </Segment>
          </SlideOver>
          <div>
            <SlideUp>
              <Segment style={{ flex: '1 1 auto' }}>
                <SlideUp>
                  <Header to='/accomodations'>WHAT TO DO</Header>
                  <p>Enjoy the 💕 of downtown Pensacola.</p>
                  <p>Lots of Resturants Museums and Bars within walking distance.</p>
                  <p>
                    Enjoy the food and fairs at the{" "}
                    <a href="https://www.pensacolaseafoodfestival.com/">Pensacola Seafood festival</a>
                    <small><i>Note: This will increase traffic in the area please book your hotel as soon as possible to ensure you get a room in the block.</i></small>

                  </p>
                </SlideUp>
              </Segment>
            </SlideUp>
            <SlideOver>
              <Segment>
                <SlideUp>
                  <Header to='/accomodations'>WHERE TO STAY</Header>
                  <br />
                  <br />
                  <a href="https://www.ihg.com/holidayinnexpress/hotels/us/en/pensacola/pnsdt/hoteldetail?cm_mmc=GoogleMaps-_-EX-_-US-_-PNSDT">Holiday Inn Express - Downtown Pensacola</a>
                  <p>101 E Main street Pensacola, FL 32502<br />
                  Block Code: MGW<br />
                    Cut off: July 1, 2019</p>
                </SlideUp>
              </Segment>
            </SlideOver>
          </div>
        </Grid>

      </MobileFriendlyContainer>
    </Container>

  );
};

export default WorkPage;
