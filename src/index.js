import React, { Component } from 'react'
import { AppRegistry, StyleSheet, View, ScrollView } from 'react-native'
import styled from 'styled-components/native'
import NavigationBar from 'react-native-navbar'

import { IncomingMessage, OutgoingMessage, MessagesList } from './messages.js'
import { Responses, Response } from './responses.js'

export default class angitu extends Component {
  state = { messages: [] }

  addMessage(message, type = 'outgoing') {
    this.setState({
      messages: this.state.messages.concat([
        {
          key: this.state.messages.length,
          text: message,
          type
        }
      ])
    })

    // scroll when message rendered - should be solved better using lifecycle methods
    setTimeout(_ => {
      if (this.refs._messagesView)
        this.refs._messagesView.root.scrollToEnd({ animated: true })
    }, 100)

    if (type === 'outgoing') {
      setTimeout(_ => this.addMessage('This is dummy reply.', 'incoming'), 1000)
    }
  }

  render() {
    return (
      <Container>
        <NavigationBar
          title={{
            title: 'React Native chat demo'
          }}
        />
        <MessagesList ref="_messagesView">
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
            Hi John. Where are you from?
          </IncomingMessage>
          <OutgoingMessage>
            Pardubice.
          </OutgoingMessage>
          <IncomingMessage>
            How are you?
          </IncomingMessage>

          {this.state.messages.map(
            m =>
              m.type === 'outgoing'
                ? <OutgoingMessage key={m.key}>{m.text}</OutgoingMessage>
                : <IncomingMessage key={m.key}>{m.text}</IncomingMessage>
          )}
        </MessagesList>
        <Responses>

          <Response onPress={m => this.addMessage(m)}>
            Great 😊
          </Response>
          <Response onPress={m => this.addMessage(m)}>
            Just OK 👍
          </Response>
          <Response onPress={m => this.addMessage(m)}>
            Could be better 😕
          </Response>

        </Responses>
      </Container>
    )
  }
}

const Container = styled.View`
  flex: 1;
  backgroundColor: #edecf2;
`

AppRegistry.registerComponent('angitu', () => angitu)
