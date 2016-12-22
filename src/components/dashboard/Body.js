import React, { Component } from 'react'

import Text from './widgets/Text'
import Image from './widgets/Image'
import QRCode from './widgets/QRCode'
import Clock from './widgets/Clock'
import Number from './widgets/Number'

import '../../styles/dashboard/body.css'

const buildWidgets = widgets =>
  widgets.map( widget => (
    {
      'Text': <Text { ...widget } key={ widget.title } />,
      'Image': <Image { ...widget } key={ widget.title } />,
      'QRCode': <QRCode { ...widget } key={ widget.title } />,
      'Clock': <Clock { ...widget } key={ widget.title } />,
      'Number': <Number { ...widget } key={ widget.title } />
    }[ widget.type ]
  ) )


export default class Body extends Component {
  render() {
    const renderWidgets = buildWidgets( this.props.widgets )

    return (
      <div className="dashboard-main">
        { renderWidgets }
        <div className="chat-icon">
          <img src="images/chat-icon.png" alt="Chat Icon"/>
        </div>
      </div>
    )
  }
}
