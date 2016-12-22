import React, { Component } from 'react'
import Dropdown from './Dropdown'
import NestedDropdownArea from './NestedDropdownArea'
import RadioField from './RadioField'
import TextInputContainer from './TextInputContainer'
import '../../../styles/forms/form.css'

export default class Field extends Component {
  render() {
    const { type } = this.props

    if( type === 'text' ) {
      return <TextInputContainer {...this.props} />
    } else if( type === 'dropdown' ) {
      return <Dropdown {...this.props} />
    } else if( type === 'nested-dropdown' ) {
      return <NestedDropdownArea {...this.props} />
    } else if( type === 'radio' ) {
      return <RadioField {...this.props} />
    } else {
      return <div>Not a valid component type </div>
    }
  }
}
