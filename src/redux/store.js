import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { loadFromStorage, saveToStorage } from "./localStorageAPI";
import rootReducer from "./reducers";

const middleWare = [thunk];

const store = createStore(
  rootReducer,
  loadFromStorage(),
  compose(
    applyMiddleware(...middleWare),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

store.subscribe(() => {
  saveToStorage(store.getState());
});

export default store;
