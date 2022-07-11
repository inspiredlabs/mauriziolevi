<script>
  export let name = "";
  export let checked = false;
  export let label = "";
  export let onChange = () => {};
  export let validityClass;
</script>


<svg class="inherit spirites" style="display: none;"><defs>
	<g id="check"><path d="M505.943 79.594c-8.077-8.077-21.172-8.077-29.249 0l-308.939 308.938-132.449-132.449c-8.076-8.077-21.172-8.077-29.248 0-8.077 8.077-8.077 21.172 0 29.249l147.074 147.074c4.038 4.039 9.332 6.058 14.625 6.058 5.293 0 10.587-2.019 14.625-6.059l323.562-323.562c8.075-8.076 8.075-21.171-.001-29.249z"/></g>
  <g id="disk"><circle cx="256" cy="256" r="215"/></g>
</defs></svg>

<!-- required -->
<label
for={name}
class="flex items-center
  justify-between
  pa0
  pointer {`form-checkbox ${validityClass}`}"
>
<div>
  <input
    class="visually-hidden"
    type="checkbox"
    id={name}
    bind:checked
    on:change={onChange}
  />
    <svg
      class="w2_5 h2_5 checkbox-animation absolute pa0 ml0"
      viewBox="0 0 512 512" alt="check">
      <!-- h2 w2 || h3 w3 accent -->
      <use xlink:href="#check"></use>
    </svg>
    <aside class="w2_5 h2_5 pa0 bg-white-80 b--transparent outline-0
    inherit outline-3-highlight transition ba bw2 br3"></aside>
    <!-- h2 w2 || h3 w3 accent -->
  </div>
  <div class="flex items-end pl3">
    <strong class="pa0 ma0 mb3 ml0 ml3-ns ml3-m ml3-l f6 f5-ns pv3 lh-copy tracked no-clutter">{ label }</strong>
      <!-- fw4 -->
  </div>
</label>




<style>

/* learn: better naming convention */
.w2_5 { width: calc( var(--spacing-medium) * 3) } /* 3rem */
.h2_5 { height: calc( var(--spacing-medium) * 3) } /* 3rem */

input:hover ~ aside,
input:active ~ aside,
input:focus ~ aside {
  outline: var(--spacing-medium) solid transparent;
  border: var(--bw2) solid var(--golden-brown);
}

input:focus + svg { color: inherit; fill: currentColor; }

/* //ColeBemis.com feather collection: https://inspiredlabs.co.uk/j/feather/ in SVG defs `.spirites` */
.radio-animation,
.checkbox-animation {
  fill:currentColor;
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;

  -ms-transform: scale(0);
  -webkit-transform: scale(0);
  transform: scale(0);

  -ms-transition: all .3s ease;
  -webkit-transition: all .3s ease;
  transition: all .3s ease;
}

.visually-hidden:checked ~ .checkbox-animation,
.visually-hidden:checked ~ .radio-animation {
  -ms-transform: scale(.66);
  -webkit-transform: scale(.66);
  transform: scale(.66);
}






/************* VEST ***************/
  .form-checkbox {
    display: flex;
    align-items: center;
    color: inherit;
    transition: all 0.2s ease;
    background-color: transparent;
  }

  /* .form-checkbox.warning input ~ aside {
    color: var(--warning);
    border-color: var(--warning);
    background-color:hsl(36.6,73.9%, 90%);
  } */

  .form-checkbox.error {
    color: var(--error);
    border-color: var(--error);
  }

  .form-checkbox.error input ~ aside {
    border-color: var(--error);
    background-color:hsl(36.6,73.9%, 90%);
  }

  .form-checkbox.success {
    color: var(--success);
    border-color: var(--success);
  }

  .form-checkbox.success input ~ aside {
    border-color: var(--success);
    background-color:hsl(120, 100%, 90%);
  }




</style>

<!--style>

/* color: var(--content-active); */
/* input, aside {
  border: 0.25rem solid transparent;
  outline: none;
  transition: 0.2s;
} */


/* Animated labels
.select-reset {
  border-bottom: 0.25rem solid transparent;
}*/


/* input > aside:focus,
input > aside:active,
input > aside:hover {
  border: 0.25rem solid var(--accent);
  background-color: var(--content-semi)!important;
} */



/* input:focus { border: var(--bw2) solid var(--content-active) } */




/****** Checkbox/Radio hint ******/
input[type="checkbox"] ~ aside,
input[type="radio"] ~ aside {
  transition: all .25s ease;
  /* background-color:silver; */
}
input[type="checkbox"]:active ~ aside,
input[type="checkbox"]:focus ~ aside,
input[type="radio"]:active ~ aside,
input[type="radio"]:focus ~ aside {
  border-color: var(--golden-brown);
}

input[type="checkbox"]:hover ~ aside,
input[type="radio"]:hover ~ aside {
  border-color: var(--golden-brown);
}
</style-->