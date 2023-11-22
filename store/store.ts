import { TodosService } from "@/services/TodosService";
import GlobalSlice from "@/slices/GlobalSlice";
import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

const store = configureStore({
  reducer: {
    GlobalSlice,
    [TodosService.reducerPath]: TodosService.reducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(TodosService.middleware),
});

setupListeners(store.dispatch);

export default store;
