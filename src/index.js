
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  ScrollView
} from 'react-native';
import styled from 'styled-components/native';
import NavigationBar from 'react-native-navbar';

export default class angitu extends Component {
  render() {
    return (
      <Container>
        <NavigationBar
            title={{
                title: 'React Native chat demo',
            }}
        />
        <MessagesList>
            <IncomingMessage>
                Hello!
            </IncomingMessage>
            <IncomingMessage>
                Wellcome to chat application. Whats your name?
            </IncomingMessage>
            <OutgoingMessage>
                John Appleseed.
            </OutgoingMessage>
            <IncomingMessage>
                How are you?
            </IncomingMessage>
        </MessagesList>
        <Responses>
            <ResponsesScroll horizontal>
                <Response>
                    <Text>Great 😊</Text>
                </Response>
                <Response>
                    <Text>Just OK 👍</Text>
                </Response>
                <Response>
                    <Text>Could be better 😕</Text>
                </Response>
            </ResponsesScroll>
        </Responses>
      </Container>
    );
  }
}

const IncomingMessage = (props) => 
  <Message
    ViewElement={IncomingMessageView}
    TextElement={IncomingMessageText}
    {...props}
  />

const OutgoingMessage = (props) => 
  <Message
    ViewElement={OutgoingMessageView}
    TextElement={OutgoingMessageText}
    {...props}
  />

const Message = ({ViewElement, TextElement, ...props}) => 
  <ViewElement>
    <TextElement>
      <Text>
        {props.children}
      </Text>
    </TextElement>
  </ViewElement>


const Container = styled.View`
  flex: 1;
  backgroundColor: #edecf2;
`

const MessagesList = styled.ScrollView`
  flex: 1;
  padding: 10px;
`

const MessageView = styled.View`
  margin: 10px;
  flex: 1;
  flex-direction: row;
  border-radius: 10px;
`

const MessageText = styled.View`
  padding: 12px;
  border-radius: 15px;
`

const IncomingMessageView = styled(MessageView)`
  justify-content: flex-start;
`

const IncomingMessageText = styled(MessageText)`
  backgroundColor: #848389;
  border-bottom-left-radius: 0px; 
`

const OutgoingMessageView = styled(MessageView)`
  justify-content: flex-end;
`

const OutgoingMessageText = styled(MessageText)`
  backgroundColor: #006bff;
  border-bottom-right-radius: 0px; 
`

const Text = styled.Text`
  color: white;
`

const Responses = styled.View`
  height: 60px;
`

const ResponsesScroll = styled.ScrollView`
  flex-direction: row;
`

const Response = styled.TouchableOpacity`
  margin: 10px;
  padding: 12px 17px 12px 17px;
  border-radius: 20px;
  backgroundColor: #006bff;
  justify-content: center;
`

AppRegistry.registerComponent('angitu', () => angitu);
