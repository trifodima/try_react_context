export const reducer = (state, action) => {
  switch(action.type) {
    case 'INCREMENT': {
      return {
        counter: state.counter + 1
      }
    }
    default: return state;
  }
}
export const initialState = {
  counter: 0
}