import { SAGA_ACTION, SAVE_SAGA_PAYPlOAD_ACTION} from '../reducers/sagaReducer';

export const sagaAction = () => ({
  type: SAGA_ACTION,
})

export const saveSagaPayloadAction = (sagaValue) => ({
  type: SAVE_SAGA_PAYPlOAD_ACTION,
  payload: { sagaValue },
})