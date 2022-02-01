import rootReducer from "./services/reducers/rootReducer";
import { createStore } from "redux"

const store = createStore(rootReducer)

export default store