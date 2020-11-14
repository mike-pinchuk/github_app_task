import { LOADING } from "../actions/types";

export function loading(newLoad) {
  return {
    type: LOADING,
    payload: newLoad,
  };
}


