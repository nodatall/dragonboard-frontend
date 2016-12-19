import React, { Component } from 'react'
import Text from './widgets/Text'
import Image from './widgets/Image'
import QRCode from './widgets/QRCode'
import Clock from './widgets/Clock'
import '../styles/dash_body.css'

const buildWidgets = widgets =>
  widgets.map( widget => (
    {
      'Text': <Text { ...widget } key={ widget.title } />,
      'Image': <Image { ...widget } key={ widget.title } />,
      'QRCode': <QRCode { ...widget } key={ widget.title } />,
      'Clock': <Clock { ...widget } key={ widget.title } />
    }[ widget.type ]))

class DashboardBody extends Component {
  render() {
    const renderWidgets = buildWidgets( this.props.widgets )

    return (
      <div className="dash-main">
        {renderWidgets}
        <div className="chat-icon">
          <img src="images/chat-icon.png" alt="Chat Icon"/>
        </div>
      </div>
    )
  }
}

export default DashboardBody
