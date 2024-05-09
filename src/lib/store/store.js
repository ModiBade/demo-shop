import { configureStore } from "@reduxjs/toolkit";
// import { persistStore } from "redux-persist";
// import storage from "redux-persist/lib/storage";
// import { persistReducer } from "redux-persist";
import rootReducer from "./rootReducer";

// const persistConfig = {
//   key: "root",
//   storage: storage,
//   whitelist: ["options"],
// };

// const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

// export const persistor = persistStore(store);
