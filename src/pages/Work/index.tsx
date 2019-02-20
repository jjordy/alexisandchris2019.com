import React from "react";
import { RouteComponentProps } from "@reach/router";
import styled from 'styled-components'
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


export interface WorkProps extends RouteComponentProps { }

const WorkPage: React.SFC<WorkProps> = () => {
  return (
    <Center style={{ minHeight: 225, textAlign: 'center' }}>
      <Container>
        <MobileFriendlyContainer>
          <SlideOver>
            <Header to='/accommodations'>
             Accommodations
            </Header>
          </SlideOver>
          <Grid width='50%' gap={24}>
            <SlideOver>
              <Segment>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi minima ut officia reiciendis. Neque iure quia aut laudantium necessitatibus vel obcaecati itaque voluptatibus quos corporis recusandae, asperiores totam, non quas?</p>
              </Segment>
            </SlideOver>
            <SlideUp>
              <Segment>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi minima ut officia reiciendis. Neque iure quia aut laudantium necessitatibus vel obcaecati itaque voluptatibus quos corporis recusandae, asperiores totam, non quas?</p>
              </Segment>
            </SlideUp>
            <SlideUp>
              <Segment>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi minima ut officia reiciendis. Neque iure quia aut laudantium necessitatibus vel obcaecati itaque voluptatibus quos corporis recusandae, asperiores totam, non quas?</p>
              </Segment>
            </SlideUp>
            <SlideOver>
              <Segment>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi minima ut officia reiciendis. Neque iure quia aut laudantium necessitatibus vel obcaecati itaque voluptatibus quos corporis recusandae, asperiores totam, non quas?</p>
              </Segment>
            </SlideOver>
          </Grid>

        </MobileFriendlyContainer>
      </Container>
    </Center>

  );
};

export default WorkPage;
