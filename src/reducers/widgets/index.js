import { CLOCK_TICK } from '../../actions/widgets'
import clockTicked from './clockReducer'

import dummyClock from './dummy-data/dashboard-tools/clock'

const updateWidget = ( state, action, type, updater ) => {

  const index = state.indexOf(
    state.filter( widget => widget.type === type )[0]
  )

  return [
    ...state.slice( 0, index ),
    updater( state[ index ], action ),
    ...state.slice( index + 1 )
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
