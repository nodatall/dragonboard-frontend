const clockTicked = ( state, action ) => {
  const { time } = action

  const newClock = Object.assign({}, state )
  newClock.data = {
    time: time.format( "h:mm" ),
    meridian: time.format( "A" ),
    dayOfWeek: time.format( "dddd" ),
    date: time.format( "D MMM YYYY" )
  }

  return newClock
}

export default clockTicked
