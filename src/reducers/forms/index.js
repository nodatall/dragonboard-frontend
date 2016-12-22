import { FORM_FIELD_UPDATE, FORM_RESET } from '../../actions/form/constants'

const initialState = {
  values: {}
}

const formFieldUpdate = ( state, action ) => {
  return Object.assign({}, state, {
    values: Object.assign({}, state.values, {
      [action.name]: action.value
    })
  })
}

const formReducer = ( state = initialState, action ) => {
  switch( action.type ) {
    case FORM_RESET:
      return initialState
    case FORM_FIELD_UPDATE:
      return formFieldUpdate( state, action )
    default:
      return state
  }
}

export default formReducer
