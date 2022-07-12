<script>
  export let value = "";
  export let label = "";
  export let name = "";
  export let placeholder = "";
  export let pending = false;
  export let messages = [];
  export let validityClass;
  export let onInput = () => {};
</script>

<div class:pending class={`${validityClass} form-input`}>
  <!-- debug: ${pending} -->
  <label
    class="f6 f5-ns ph3 pv2 no-clutter"
    for={name}>
    <strong class="ttu tracked">{label}&nbsp;</strong><span class="validation-message h3"
    >{messages.length ? messages[0] : '' }</span>
  </label>
  <input
    style="border-top:0 solid transparent;border-right:0 solid transparent;border-left:0 solid transparent;"
    class="inherit outline-3-highlight transition w-100 br0 ba bw2 bg-white-80 f5 f5-ns pv3 ph3 mb4"
    id={name}
    name={name}
    bind:value
    on:input={onInput}
    placeholder={`${placeholder}`}
  />
</div>

<style>

.outline-3-highlight:hover,
.outline-3-highlight:active,
.outline-3-highlight:focus {
  outline: var(--spacing-medium) solid transparent
}

:global(.outline-1-highlight:hover),
:global(.outline-1-highlight:active),
:global(.outline-1-highlight:focus) {
  outline: var(--spacing-extra-small) solid transparent
}

:global(.outline-2-highlight:hover),
:global(.outline-2-highlight:active),
:global(.outline-2-highlight:focus) {
  outline: var(--spacing-small) solid transparent
}
  /* learn: intentionally terse: agnosticui.com/docs/components/inputs.html */
  /* learn: developer.mozilla.org/en-US/docs/Web/CSS/::placeholder */
  /* learn: natclark.com/tutorials/css-placeholder-color/ */
  /* :global(input::-webkit-input-placeholder) {color:inherit;font-family:monospace;opacity:0.5}
  :global(input::-ms-input-placeholder) {color:inherit;font-family:monospace;opacity:0.5}
  :global(input:-ms-input-placeholder) {color:inherit;font-family:monospace;opacity:0.5}
  :global(input::placeholder) {color:inherit;font-family:monospace;opacity:0.5}
  :global(input:focus::placeholder) {opacity: 0.2} */

  /* learn: why do form inputs overhangs? */
  :global(input) { box-sizing: border-box }

  label { display: block }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }




  .form-input {
    /* padding: 1em 0;
    position: relative; */
  }

  .form-input label {
    /* display: block; */
  }

  .form-input strong {
    /* text-transform: uppercase; */
  }

  .form-input .validation-message {
    /* font-weight: 400;
    float: right; */
  }

  .form-input input {
    /* box-sizing: border-box; */
    border: 0.25rem solid var(--content-inactive);
    /* `bw2` corresponds to `var(--bw2)` */
    outline: none;
    transition: 0.2s;
    /* color: var(--content-active); */
  }



@keyframes spin {
  0% { transform: rotate(0deg) }
  100% { transform: rotate(360deg) }
}

.form-input.pending label::after {
  content: '';
  float: right;
  animation: spin 1.5s infinite linear;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 100%;
  /* border: 0.05rem dotted var(--golden-brown); */
  background: conic-gradient(
    var(--golden-brown) 0deg 90deg,
    var(--linen) 90deg 180deg,
    var(--golden-brown) 180deg 270deg,
    var(--linen) 270deg 360deg);
  /* background: conic-gradient(
    var(--golden-brown) 0deg 45deg,
    var(--solitaire) 45deg 90deg,
    var(--golden-brown) 90deg 135deg,
    var(--solitaire) 135deg 180deg,
    var(--golden-brown) 180deg 225deg,
    var(--solitaire) 225deg 270deg,
    var(--golden-brown) 270deg 315deg,
    var(--solitaire) 315deg 360deg); */
}


/****** Input hint ******/
.form-input input,
.form-input input {
  transition: all .25s ease;
  /* background-color:silver; */
}
.form-input input:hover,
.form-input input:active,
.form-input input:focus {
  border-color: var(--golden-brown);
}


  .form-input input:focus {
    border: var(--bw2) solid var(--pick);
    background-color: hsla(0, 0%, 100%, 1);
  }

  .form-input.success .validation-message,
  .form-input.success label {
    color: var(--success);
  }

  .form-input.warning .validation-message,
  .form-input.warning label {
    color: var(--warning);
  }

  .form-input.error .validation-message,
  .form-input.error label {
    color: var(--error);
  }

  .form-input.success input {
    border: var(--bw2) solid var(--success);
    background-color:hsl(120, 100%, 90%);
  }

  .form-input.warning input {
    border: var(--bw2) solid var(--warning);
    background-color:hsl(36.6,73.9%, 90%);
  }

  .form-input.error input {
    border: var(--bw2) solid var(--error);
    color: var(--error);
    background-color:hsl(36.6,73.9%, 90%);
  }

  :global(:root) {
    /* --content-active: cyan; */
    --content-inactive: rgba(0,0,0, 0.01);
    --alpha: 1;
    --bw2: 0.25rem;
    --pick: var(--golden-brown);
    --success: hsla(120, 100%, 19.6%, var(--alpha));
    --error: darkred; /*firebrick*/
    --warning: var(--golden-brown);
  }
</style>
