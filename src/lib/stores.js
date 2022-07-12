// learn: youtube.com/watch?v=gZS-tGD2_VY
import { writable } from "svelte/store";
import { browser } from "$app/env";


//////////// NAME ////////////
export const token_nome = writable(
  (browser && localStorage.getItem("token_nome")) || ''
);
token_nome.subscribe((val) => browser && (localStorage.token_nome = val))




//////////// EMAIL ////////////
export const token_replyto = writable(
  (browser && localStorage.getItem("token_replyto")) || ''
);
token_replyto.subscribe((val) => browser && (localStorage.token_replyto = val))




//////////// TERMS ////////////
export const token_terms = writable(
  (browser && localStorage.getItem("token_terms")) || ''
);
token_terms.subscribe((val) => browser && (localStorage.token_terms = val))
