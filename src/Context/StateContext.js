import { createContext } from "react";

export const stateControlInit = {
  valBtnPress: "",
  listPress: [],
  command: [],
  commandSended: false, //El command[] fue enviado?
  ledEmitting: false, //Luz testigo control remoto
  config:{
    ledFlashing:1000,
  }
};

const StateContext = createContext(stateControlInit);

export default StateContext;
