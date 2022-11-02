enum Animation {
  prev = "prev",
  next = "next",
  flip = "flip"
}

export type CardsLogicAction =
    | { type: "TOGGLE_SIDE" }
    | { type: "NEXT_CARD" }
    | { type: "PREV_CARD" }
| {type: "FLIP_SIDE"}

interface CardsLogicState {
  animation: Animation,
  animate: boolean,
  isTermSide: boolean,
  keyChange: boolean,
}

export const initialState: CardsLogicState = {
  animation: Animation.flip,
  animate: false,
  isTermSide: true,
  keyChange: false,
}

export function cardsLogicReducer(
    state: CardsLogicState,
    action: CardsLogicAction
): CardsLogicState {
  switch (action.type) {
    case "TOGGLE_SIDE":
      return {
        ...state,
        animation: Animation.flip,
        animate: true,
        isTermSide: !state.isTermSide,
        keyChange: !state.keyChange
      };
    case "NEXT_CARD":
      return {
        ...state,
        animation: Animation.next,
        animate: true,
        keyChange: !state.keyChange,
      }
    case "PREV_CARD":
      return {
        ...state,
        animation: Animation.prev,
        animate: true,
        keyChange: !state.keyChange,
      }
    case "FLIP_SIDE":
      return {
        ...state,
        isTermSide: !state.isTermSide
      }
    default:
      return state;
  }
}