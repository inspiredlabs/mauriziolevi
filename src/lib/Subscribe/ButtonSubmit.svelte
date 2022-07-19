<script>
  export let disabled;
  export let value;

  let online;
</script>

<svelte:window bind:online />
<!-- note: svelte.dev/tutorial/svelte-window-bindings -->
<!-- learn: v2.svelte.dev/repl?version=2.6.6&gist=05582022f7d4dc4e679439b8c34ab3b2 -->
<!-- learn: github.com/sveltejs/svelte/issues/1502 -->
<!-- learn: stackoverflow.com/questions/42526883/how-to-check-online-offline-state-in-browser-via-javascript -->

<button
  type="submit"
  class="submit-button no-clutter
  system input-reset b db tc br-pill f6 f5-ns b ph4 ph5-l pv3 ba bw2 b--transparent white ttu tracked-mega transition { online ? 'pointer' : 'disabled no-select' }"
  disabled={disabled}
>{ online ? value : 'Nessun segnale' }</button>

<!--
When offline:
  - Nessun segnale
  - Nessuna connessione dati
  - Niente internet
  - Controlla la tua connessione
-->

<!-- <slot></slot> -->
<!-- w-50 w-40-ns w-40-m w-40-l -->








<style>

  button.submit-button {
    outline: none;
    cursor: auto; /*not-allowed*/
    transition: all 1s ease;
  }

  /* button.submit-button:not(:disabled) {
    background-color:hsl(120, 100%, 90%);
    border-color: var(--success);
    color: var(--success);
  } */

  button.submit-button:not(:disabled) {
    cursor: pointer;
    color:white;
    border-color: black;
    background-color: var(--success);
  }

  button.submit-button:hover:not(:disabled) {
    background-color: black;
  }

  button.submit-button:active {
    /* learn: `cursor: wait` === conic-gradient: developer.mozilla.org/en-US/docs/Web/CSS/gradient/conic-gradient */
    cursor: wait; /* learn: w3schools.com/csSref/pr_class_cursor.asp */
    background-color: var(--linen);
  }

  button.submit-button:disabled, .disabled {
    background: var(--golden-brown);
    opacity: .38;
    color: var(--linen);
  }
</style>
