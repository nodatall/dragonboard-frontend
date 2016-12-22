import React from 'react'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'

import Number from '../../../components/dashboard/widgets/Number'
import widgetData from
 '../../../reducers/widgets/dummy-data/dashboard-tools/number.js'

describe( 'Number widget component', () => {
  const givenStatistic = widgetData.statistic
  const givenGoal = widgetData.goal
  const expectedProgress = ( givenStatistic / givenGoal ) * 100
  const roundedProgress = expectedProgress.toFixed( 2 )

  const numberWrapper = shallow( <Number { ...widgetData } /> )

  it( 'renders without crashing', () => {
    const numberSnapshot = renderer.create(
      <Number { ...widgetData } />
    ).toJSON()
    expect( numberSnapshot ).toMatchSnapshot()
  })

  it( 'renders the main statistic', () => {
    const statisticDiv = numberWrapper.find( '.statistic' )
    expect( statisticDiv.type() ).toEqual( 'div' )
    expect( statisticDiv.text() ).toEqual( givenStatistic.toString() )
  })

  it( 'renders the goal', () => {
    const goalDiv = numberWrapper.find( '.goal' )
    expect( goalDiv.type() ).toEqual( 'div' )
    expect( goalDiv.text() ).toEqual( givenGoal.toString() )
  })

  it( 'renders the progress', () => {
    const progressDiv = numberWrapper.find( '.progress' )
    expect( progressDiv.type() ).toEqual( 'div' )
    expect( progressDiv.text() ).toEqual( `${ roundedProgress }%` )
  })

  it( 'calculates the progress into a percentage', () => {
    const progress = numberWrapper.instance().progress()
    expect( progress ).toEqual( `${ roundedProgress }%` )
  })

})
