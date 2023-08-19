import { createContext } from "react";

export const botonPressedInit = {
  btnPressed: false
};

const BotonContext = createContext(botonPressedInit);

export default BotonContext;
