import { atom } from "jotai";

// SHARED DATA IS STORED HERE TO BE ACCESSED BY ALL COMPONENTS
export const dataAtom = atom([])
export const questionNumberAtom = atom(0)
export const markAtom = atom(0)
export const resultAtom = atom(false)