import React from "react";
import store from "../store/store";
import { LOADING } from "../store/actions/types";
import "../../src/Loader.css";

const Loader = () => {
  function newLoad() {
    let name = [];
    return fetch("https://api.github.com/users")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        name.push(data);
        store.dispatch({
          type: LOADING,
          payload: name.map((e) => {
            return e.map((e) => {
              return (
                <div className="card" key={e.id}>
                  <h3>Number of card: {e.id}</h3>
                  <img
                    src="{`https://avatars0.githubusercontent.com/u/${e.id}?v=4`}"
                    alt="img"
                  />
                  <p>Login: {e.login}</p>
                </div>
              );
            });
          }),
        });
      });
  }

  return (
    <div className="Loader">
      <div className="Loader-search">
        <input type="text" />
        <button type="button" onClick={newLoad}>
          Search
        </button>
      </div>
      <div className="Loader-result">{store.getState().loading.value}</div>
    </div>
  );
};

export default Loader;
