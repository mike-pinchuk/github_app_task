import { LOADING } from "../actions/types";

export function loading(value) {
  return {
    type: LOADING,
    payload: value,
  };
}


