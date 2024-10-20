export enum CounterActionType {
  INCREMENT = "INCREMENT",
  DECREMENT = "DECREMENT",
  INIT = "INIT"
};

export interface CounterAction {
  type: CounterActionType;
}

export interface CounterState {
  counter: number;
}

export function reducer(state: CounterState, action: CounterAction) {
  switch (action.type) {
    case CounterActionType.INCREMENT:
      return { counter: state.counter + 1 }
    case CounterActionType.DECREMENT:
      return { counter: state.counter - 1 }
    case CounterActionType.INIT:
      return { counter: 0 }
  }
}