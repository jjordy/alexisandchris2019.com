import React, { useState } from 'react'
import { RouteComponentProps } from '@reach/router'
import posed from 'react-pose'
import styled from 'styled-components'
import {
  Segment as BaseSegment,
  Flex,
  Center,
  SlideUp,
  SlideOver,
  Container,
  MobileFriendlyContainer,
  Grid,
  Header
} from '../../components'
import axios from 'axios'
export interface ContactProps extends RouteComponentProps { }

const Segment = styled(BaseSegment)`
  min-width: 650px;
  @media (max-width: 768px) {
    width: 75%;
    min-width: 350px;
  }
`

const ListContainer = posed.div({
  enter: { staggerChildren: 50 },
  exit: { staggerChildren: 20, staggerDirection: -1 }
})

const AnimatedItem = posed.div({
  enter: { y: 0, opacity: 1 },
  exit: { y: 50, opacity: 0 }
})

const Item = styled(AnimatedItem)`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 50px;
`

const Form = styled.form.attrs((props: any) => ({
  netlify: props.netlify
}))`
  & input,
  select,
  textarea {
    width: 100%;
    padding: 0.2rem;
    margin-bottom: 1rem;
    margin-top: 0.5rem;

  }

  & label {
    font-weight: bold;
    font-size: 14px;
    display: flex;
  }

  .radio-label {
    width: 75%;
  }

  .radio-label:checked {
    width: 75%;
    background-color: #f30;
  }

  & input:not(input[type='checkbox']) {
    width: 100%;
  }

  input[type='radio'] {
    width: 0px;
    height: 0px;
  }

  .radio-label {
    background-color: #f30;
    width: 100%;

    & input[type='radio']:checked {
      background-color: #ccc;
    }
  }

  & button {
    padding: 1rem 2rem 1rem 2rem;
    background-color: rgba(8, 148, 161, 0.4);
    margin-bottom: 1rem;
    color: #fff;
    font-weight: 700;
    width: 50%;
    border: 0px;
    box-shadow: 1px 1px 1px #e7e7e7;
    @media (max-width: 768px) {
      width: 100% !important;
    }
  }
`

const ContactPage: React.SFC<ContactProps> = () => {
  const [name, setName] = useState('')
  const [accept, setAccept] = useState<boolean | null>(true)
  return (
    <React.Fragment>
      <Center style={{ minHeight: 225, textAlign: 'center' }}>
        <Container>
          <MobileFriendlyContainer>
            <SlideOver>
              <Header to="/rsvp">RSVP</Header>
            </SlideOver>
            <SlideUp>
              <Segment>
                <Form
                  name="contact"
                  action="/?submit-contact-form=success"
                  netlify
                  netlify-honeypot="bot-field"
                  method="post"
                  onSubmit={evt => {
                    evt.preventDefault()
                    axios.post('/?submit-contact-form=success', {
                      name,
                      rsvp: accept ? 'Politely Accepts': 'Declines'
                    })
                  }}
                >
                  <p className="hidden">
                    <label>
                      Don’t fill this out if you're human: <input name="bot-field" />
                    </label>
                  </p>
                  <input type="hidden" name="form-name" value="contact" />
                  <ListContainer>
                    <Item style={{ padding: '1rem' }}>
                      <label htmlFor="id_name">NAME OR COUPLE</label>
                      <input
                        type="text"
                        name="name"
                        id="id_name"
                        placeholder="Your name"
                        required
                        value={name}
                        onChange={evt => setName(evt.target.value)}/>
                    </Item>
                    <Flex>
                      <button
                        type='button'
                        onClick={() => setAccept(true)}
                        style={{
                          outline: 0,
                          boxSizing: 'border-box',
                          background: accept ? 'green' : '#ccc' }}
                      >
                        POLITELY ACCCEPT{accept && <>&#10004;</>}
                      </button>
                      <button
                        type='button'
                        onClick={() => setAccept(false)}
                        style={{
                          outline: 0,
                          boxSizing: 'border-box',
                          background: !accept ? 'red' : '#ccc'
                        }}>
                        REGRETFULLY DECLINE {!accept && <>&#10004;</>}
                      </button>
                    </Flex>
                    <Flex align='center' justify='center' style={{ marginBottom: '1rem' }}>
                      <strong style={{ color: 'rgba(8, 148, 161, 0.4)', fontFamily: 'Amatic SC, cursive' }}>
                        {accept ? 'WE WILL SEE YOU THERE!' : 'SORRY YOU CANT MAKE IT!'}
                      </strong>
                    </Flex>
                    <Item>
                      <button>Submit</button>
                    </Item>
                  </ListContainer>
                </Form>
              </Segment>
            </SlideUp>
          </MobileFriendlyContainer>
        </Container>
      </Center>
    </React.Fragment >
  )
}

export default ContactPage
