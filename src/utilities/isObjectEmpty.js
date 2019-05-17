import {objectLength} from "./objectLength";

export const isObjectEmpty = object => objectLength(object) === 0;