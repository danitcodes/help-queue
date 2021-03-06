import * as c from './../actions/ActionTypes';

export default (state = false, action) => {
  switch (action.type) {
    case c.TOGGLE_FORM: //if toggle_form is passed into reducer
      return !state; // then boolean state will be toggled
    default:
      return state;
    }
};