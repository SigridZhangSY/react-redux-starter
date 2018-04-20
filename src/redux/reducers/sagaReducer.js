export const SAGA_ACTION = 'SAGA_INCREASE_ACTION'
export const SAVE_SAGA_PAYPlOAD_ACTION = 'SAVE_SAGA_PAYPlOAD_ACTION'

const initial = {
  value: ''
}

const sagaReducer = (state = initial, action) => {
  switch(action.type) {
    case SAVE_SAGA_PAYPlOAD_ACTION:
      return {
        ...state,
        value: action.payload.sagaValue
      };
    default:
      return state;
  }
}

export default sagaReducer