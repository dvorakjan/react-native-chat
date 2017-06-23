import React, { Component } from 'react'
import styled from 'styled-components/native'

export const Responses = props => (
  <ResponsesView>
    <ResponsesScroll horizontal>
      {props.children}
    </ResponsesScroll>
  </ResponsesView>
)

export const Response = props => (
  <ResponseView onPress={_ => props.onPress(props.children)}>
    <Text>{props.children}</Text>
  </ResponseView>
)

const Text = styled.Text`
  color: white;
`

const ResponsesView = styled.View`
  height: 75px;
  paddingTop: 15px;
`

const ResponsesScroll = styled.ScrollView`
  flex-direction: row;
`

const ResponseView = styled.TouchableOpacity`
  margin: 10px;
  padding: 12px 17px 12px 17px;
  border-radius: 20px;
  backgroundColor: #006bff;
  justify-content: center;
`
