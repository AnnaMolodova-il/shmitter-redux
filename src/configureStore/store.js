import {legacy_createStore as createStore} from "redux";
import {shmitterReducer} from "../reducer/shmitterReducer.js";

export const store = createStore(shmitterReducer);
