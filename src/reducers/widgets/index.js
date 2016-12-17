import { CLOCK_TICK } from '../../actions/widgets'
import clockTicked from './clockReducer'

import dummyClock from './dummy-data/dashboard-tools/clock'

const updateWidget = ( state, action, type, updater ) => {
  let widgetIndex = 0
  while ( state[ widgetIndex ].type !== type ) {
    widgetIndex++
  }

  return [
    ...state.slice( 0, widgetIndex ),
       updater(state[ widgetIndex ], action),
    ...state.slice( widgetIndex + 1 )
  ]
}

const widgetReducer = ( state = [dummyClock], action ) => {
  switch( action.type ) {
    case CLOCK_TICK:
      return updateWidget( state, action, 'Clock', clockTicked )
    default:
      return state
  }
}

export default widgetReducer
