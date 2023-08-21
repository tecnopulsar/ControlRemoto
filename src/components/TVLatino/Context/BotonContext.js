import { createContext } from "react";

export const botonPressedInit = false;

const BotonContext = createContext(botonPressedInit);

export default BotonContext;
