import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./Login-slice";

import ThemeReducer from "./Theme-slice";

import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";
import { combineReducers, createStore } from "redux";

/*
const store = configureStore({
  reducer: { todos: todoReducer },
});
*/

const persistConfig = {
  key: "root",
  storage,
};
/* const persistedReducer = persistReducer(persistConfig, todoReducer); */

const rootReducer = combineReducers({
  login: todoReducer,
  theme: ThemeReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: [thunk],
});

export const persistor = persistStore(store);
// export default store;
