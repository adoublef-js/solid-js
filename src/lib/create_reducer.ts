import { createStore, reconcile } from "solid-js/store";

export function createReducer<
    State extends Object,
    ActionData extends Array<any>
>(
    dispatcher: (state: State, ...args: ActionData) => State,
    initialState: State
): [State, (...args: ActionData) => void] {
    const [store, setStore] = createStore(initialState);

    const dispatch = (...action: ActionData) => {
        initialState = dispatcher(initialState, ...action);
        setStore(reconcile(initialState));
    };

    return [store, dispatch];
}

// https://www.solidjs.com/tutorial/stores_immutable?solved
// https://solid-primitives.netlify.app/package/memo#createReducer
