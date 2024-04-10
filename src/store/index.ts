import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import MenuToggleSlice from "./slice/menuToggleSlice";
import chatSlice from "./slice/chatSlice";
import searchSlice from "./slice/searchSlice";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  menu: MenuToggleSlice,
  chat: chatSlice,
  cache: searchSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
});
export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
