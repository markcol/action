import React, {Component} from 'react'
import styled from 'react-emotion'
import {createFragmentContainer, graphql} from 'react-relay'
import {PALETTE} from '../../../styles/paletteV2'
import EditableTemplatePrompt from './EditableTemplatePrompt'
import FontAwesome from 'react-fontawesome'

interface Props {
  prompt: TemplatePromptItem_prompt
}

interface State {
  isHover: boolean
}

const PromptItem = styled('li')({
  display: 'flex'
})

const EditTemplateIcon = styled(FontAwesome)(({isHover}: {isHover: boolean}) => ({
  color: PALETTE.TEXT.MAIN,
  opacity: isHover ? 1 : 0
}))

class TemplatePromptItem extends Component<Props, State> {
  state = {
    isHover: false
  }
  onMouseEnter = () => {
    this.setState({
      isHover: true
    })
  }

  onMouseLeave = () => {
    this.setState({
      isHover: false
    })
  }

  render () {
    const {prompt} = this.props
    const {question} = prompt
    const {isHover} = this.state
    return (
      <PromptItem onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave}>
        <EditableTemplatePrompt question={question} />
        <EditTemplateIcon isHover={isHover} name={'pencil'} />
      </PromptItem>
    )
  }
}

export default createFragmentContainer(
  TemplatePromptItem,
  graphql`
    fragment TemplatePromptItem_prompt on RetroPhaseItem {
      id
      question
    }
  `
)