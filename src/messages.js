import React, { Component } from 'react'
import styled from 'styled-components/native'

export const IncomingMessage = props => (
  <Message
    ViewElement={IncomingMessageView}
    TextElement={IncomingMessageText}
    {...props}
  />
)

export const OutgoingMessage = props => (
  <Message
    ViewElement={OutgoingMessageView}
    TextElement={OutgoingMessageText}
    {...props}
  />
)

export const Message = ({ ViewElement, TextElement, ...props }) => (
  <ViewElement>
    <TextElement>
      <WhiteText>
        {props.children}
      </WhiteText>
    </TextElement>
  </ViewElement>
)

export const MessagesList = styled.ScrollView`
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

const WhiteText = styled.Text`
  color: white;
`
