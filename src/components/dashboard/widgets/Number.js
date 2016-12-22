import React, { Component } from 'react'

import Header from './Header'

import '../../../styles/dashboard/widget/number.css'
import '../../../styles/dashboard/widget/widget.css'

export default class Number extends Component {

  displayStatistic() {
    const { statistic } = this.props

    return statistic % 1 === 0 ? statistic : statistic.toFixed( 2 )
  }

  completedClass() {
    const { statistic, goal } = this.props

    return statistic / goal >= 1 ? ' complete' : ''
  }

  progress() {
    const { statistic, goal } = this.props

    return `${( statistic / goal * 100 ).toFixed( 2 )}%`
  }

  render() {
    const { title, x, y, statistic, goal } = this.props
    const positionStyle = { top: x, left: y }

    return (
      <article>
        <div className="widget widget-width-1 widget-height-1"
          style={ positionStyle }>
          <Header title={ title }/>

          <div className={ `widget-body stat-wrapper${ this.completedClass() }` }>
            <div className="statistic">{ this.displayStatistic() }</div>

            <div className="goal-progress-wrapper">
              <div className="progress">{ this.progress() }</div>
              <div className="goal">{ goal }</div>
            </div>

            <div className="progress-bar">
              <span style={ { width: `${ this.progress() }` } }></span>
            </div>
          </div>
        </div>
      </article>
    )
  }
}
