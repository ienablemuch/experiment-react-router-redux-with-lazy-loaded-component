import { createBrowserHistory } from "history";
import { applyMiddleware, compose, createStore } from "redux";
import { routerMiddleware } from "connected-react-router";

import { createRootReducer } from "./reducers";

export const history = createBrowserHistory();

export function configureStore(preloadedState) {
    const store = createStore(
        createRootReducer(history),
        preloadedState,
        compose(
            applyMiddleware(
                routerMiddleware(history) // dor dispatching actions
                // ... other middlewares ...
            )
        )
    );

    return store;
}
