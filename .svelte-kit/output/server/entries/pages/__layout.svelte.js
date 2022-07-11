import { c as create_ssr_component, v as validate_component, e as escape, a as add_attribute, n as null_to_empty, b as each, d as subscribe } from "../../chunks/index-7b9d2833.js";
import { R as Row } from "../../chunks/Row-b62db77e.js";
import { enforce, create, only, test } from "vest";
import pkg from "validator";
import classnames from "vest/classnames";
import { D as Defs } from "../../chunks/Defs-00394b96.js";
import { p as page } from "../../chunks/stores-ffb45b1b.js";
const PageTransition = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { url = "" } = $$props;
  if ($$props.url === void 0 && $$bindings.url && url !== void 0)
    $$bindings.url(url);
  return `

<div style="${"display: inline-grid"}"><div style="${"width: 100vw"}">
			${slots.default ? slots.default({}) : ``}</div></div>`;
});
var Fraunces_svelte_svelte_type_style_lang = "";
const css$7 = {
  code: "i{font-style:normal}body{font-family:sans-serif;margin:0;padding:0}.fraunces-i{transition:font-variation-settings .4s ease 0s!important;font-family:'Fraunces Variable Italic', serif;font-variation-settings:'wght' 336,\n	  'opsz' 100,\n	  'SOFT' 48,\n	  'WONK' 1}.fraunces{transition:font-variation-settings .4s ease 0s!important;font-family:'Fraunces Variable', serif;font-variation-settings:'wght' 366,\n		'opsz' 96,\n		'SOFT' 16,\n		'WONK' 0}.fw1{font-weight:100;font-variation-settings:'wght' 100}.fw2{font-weight:200;font-variation-settings:'wght' 200}.fw3{font-weight:300;font-variation-settings:'wght' 300}.fw4{font-weight:400;font-variation-settings:'wght' 400}.fw5{font-weight:500;font-variation-settings:'wght' 500}.fw6{font-weight:600;font-variation-settings:'wght' 600}.fw7{font-weight:700;font-variation-settings:'wght' 700}.fw8{font-weight:800;font-variation-settings:'wght' 800}.fw9{font-weight:900;font-variation-settings:'wght' 900}.hover-fw1:hover{font-variation-settings:'wght' 100}.hover-fw2:hover{font-variation-settings:'wght' 200}.hover-fw3:hover{font-variation-settings:'wght' 300}.hover-fw4:hover{font-variation-settings:'wght' 400}.hover-fw5:hover{font-variation-settings:'wght' 500}.hover-fw6:hover{font-variation-settings:'wght' 600}.hover-fw7:hover{font-variation-settings:'wght' 700}.hover-fw8:hover{font-variation-settings:'wght' 800}.hover-fw9:hover{font-variation-settings:'wght' 900}",
  map: null
};
const Fraunces = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$7);
  return ``;
});
var LeviMontage_svelte_svelte_type_style_lang = "";
const css$6 = {
  code: ":root{--montage-img:240px;--montage-duration:1.6s}.montage.svelte-12v06jt.svelte-12v06jt{width:var(--montage-img);height:var(--montage-img)}.montage.svelte-12v06jt img.svelte-12v06jt{will-change:transform;width:var(--montage-img);transition:all var(--montage-duration) cubic-bezier( 0.28, -0.07, 0.67, 2.00);transition-delay:calc(var(--montage-duration)/0.8);transform:scale(1.0) rotate(4.3deg)}.montage.svelte-12v06jt img.svelte-12v06jt:nth-child(1){left:calc(var(--montage-img)*0.53);transform:scale(0.7) rotate(3.5deg)}.montage.svelte-12v06jt img.svelte-12v06jt:nth-child(2){right:calc(var(--montage-img)*0.59);transform:scale(0.8) rotate(-5.5deg)}.montage.visible.svelte-12v06jt img.svelte-12v06jt{transform:scale(0.9) rotate(0deg)}.montage.visible.svelte-12v06jt img.svelte-12v06jt:nth-child(1){transform:scale(1.0) rotate(12deg);left:calc(var(--montage-img)*0.7)}.montage.visible.svelte-12v06jt img.svelte-12v06jt:nth-child(2){transform:scale(1.0) rotate(-9.5deg);right:calc(var(--montage-img)*0.7)}.diamond.svelte-12v06jt.svelte-12v06jt{background:currentColor;transform:rotate(45deg)}",
  map: null
};
let alt$1 = "Presentazione di Maurizio Levi";
const LeviMontage = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const imagesBaseUrl = `${"https://viaggilevi.vercel.app"}/images/`;
  $$result.css.add(css$6);
  return `${validate_component(Row, "Row").$$render($$result, {
    bg: "bg-linen",
    id: `${alt$1.toLowerCase().replace(/&amp;/g, "").replace(/&nbsp;/g, "-").replace(/\s/g, "-").replace(/\,/g, "").replace(/(&gt;)(?:&nbsp;|&#8209;|<br>)+(\s?&lt;)/g, "$1$2").replace(/--/g, "-")}`
  }, {}, {
    default: () => {
      return `
	<article class="${"ph2"}" id="${"viaggi-di-scoperta"}"><h4 class="${"mv0 pv4 f2 f2-ns f1-m f1-l fw2 lh-solid"}"><small class="${"golden-brown db tracked-none tracked-ns tracked-m tracked-mega-l f7 f7-ns f5-m f4-l fw5 ttu mv0"}">i viaggi di maurizio levi</small>
			<span class="${"fraunces"}">Viaggi </span><span class="${"fraunces-i"}">di\xA0scoperta</span></h4>

		
		<figure class="${"montage " + escape("") + " relative cf top-0 w-50 mr-auto ml-auto z-0 db svelte-12v06jt"}"><div class="${"flex items-reverse"}">
				<img loading="${"lazy"}" class="${"absolute shadow-5 svelte-12v06jt"}" src="${escape(imagesBaseUrl) + "MaurizioLevi_Anteprima.webp"}"${add_attribute("alt", alt$1, 0)}>
				<img loading="${"lazy"}" class="${"absolute shadow-5 svelte-12v06jt"}" src="${escape(imagesBaseUrl) + "Levi-Maurizio-768x510.webp"}"${add_attribute("alt", alt$1, 0)}>
				<img loading="${"lazy"}" class="${"absolute shadow-5 svelte-12v06jt"}" src="${escape(imagesBaseUrl) + "Maurizio_Levi.webp"}"${add_attribute("alt", alt$1, 0)}></div></figure>

		<div class="${"fl w-100 w-50-m w-50-l lh-copy measure "}"><p class="${"pr3 fw5"}">Scegliamo itinerari che sono il frutto di anni di esperienza e sono il meglio possible in quel paese o in quella regione per la durata che\xA0\xE8\xA0prevista.</p></div>

		<div class="${"fl w-100 w-50-m w-50-l lh-copy measure"}"><blockquote class="${"fw4 ma0"}"><p class="${""}">Tutti i nostri viaggi integrano, ciascuno a suo modo, i nostri tre\xA0valori: <b class="${"o-80"}">natura, cultura e incontri con le\xA0popolazioni.</b></p>
				<p class="${""}">Esaminate attentamente i nostri itinerari, cercate di capire dale descrizioni il motivo delle nostre scelte e comprenderete la differenza con quanto proposto da\xA0altri.</p>
				<cite class="${"fraunces-i fs-normal tr"}"><p><span class="${"fw5"}">Maurizio Levi</span> e tutto lo staff de <span class="${"db"}">I\xA0Viaggi di Maurizio Levi</span></p></cite>
			</blockquote></div>

		<aside class="${"fl w-100 lh-copy pb4"}"><div class="${"fl w-100 w-third-m w-third-l f6 lh-copy measure "}"><aside class="${"golden-brown diamond h2 w2 mb3 mr-auto ml-auto mt3 svelte-12v06jt"}"></aside>
					<h5 class="${"db black-70 fraunces mv0 pb2 tc f4 fw5 h3"}">Piccoli gruppi</h5>
				<p class="${"pr4"}">Favoriscono la coesione tra i partecipanti, riducono l&#39;impatto sull&#39;ambiente e acilitano &#39;opportunit\xE0 di instaurare rapporti con la popolazione locale.</p></div>
			<div class="${"fl w-100 w-third-m w-third-l f6 lh-copy measure"}"><aside class="${"golden-brown diamond h2 w2 mb3 mr-auto ml-auto mt3 svelte-12v06jt"}"></aside>
					<h5 class="${"db black-70 fraunces mv0 pb2 tc f4 fw5 h3"}">Spirito di esplorazione</h5>
				<p class="${"pr3"}">Percorsi accuratamente studiati, con un contenuto culturale in senso ampio, in grado di svelare aspetti inattesi e fuori dagli stereotipi.</p></div>
			<div class="${"fl w-100 w-third-m w-third-l ph0 f6 lh-copy measure"}"><aside class="${"golden-brown diamond h2 w2 mb3 mr-auto ml-auto mt3 svelte-12v06jt"}"></aside>
					<h5 class="${"db black-70 fraunces mv0 pb2 tc f4 fw5 h3"}">Cultura dell&#39;incontro</h5>
				<p class="${"pr4"}">Spirito di adattamento e predisposizione mentale verso realt\xE0 differenti, da rispettare e apprezzare proprio per la loro unicit\xE0.</p></div></aside></article>`;
    }
  })}`;
});
var Modal_svelte_svelte_type_style_lang = "";
const { isEmail } = pkg;
enforce.extend({ isEmail });
const suite = create((data = {}, currentField) => {
  only(currentField);
  test("nome", "necessario", () => {
    enforce(data.nome).isNotBlank();
  });
  test("nome", "di almeno 3 caratteri", () => {
    enforce(data.nome).longerThan(3);
  });
  test("_replyto", "necessario", () => {
    enforce(data._replyto).isNotBlank();
  });
  test("_replyto", "non valido", () => {
    enforce(data._replyto).isEmail();
  });
  test("terms", "STRING", () => {
    enforce(data.terms).isTruthy();
  });
});
var Input_svelte_svelte_type_style_lang = "";
const css$5 = {
  code: ".outline-3-highlight.svelte-q15gx1.svelte-q15gx1:hover,.outline-3-highlight.svelte-q15gx1.svelte-q15gx1:active,.outline-3-highlight.svelte-q15gx1.svelte-q15gx1:focus{outline:var(--spacing-medium) solid transparent\n}.outline-1-highlight:hover,.outline-1-highlight:active,.outline-1-highlight:focus{outline:var(--spacing-extra-small) solid transparent\n}.outline-2-highlight:hover,.outline-2-highlight:active,.outline-2-highlight:focus{outline:var(--spacing-small) solid transparent\n}input{box-sizing:border-box }label.svelte-q15gx1.svelte-q15gx1{display:block }@-webkit-keyframes svelte-q15gx1-spin{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes svelte-q15gx1-spin{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}.form-input.svelte-q15gx1 input.svelte-q15gx1{border:0.25rem solid var(--content-inactive);outline:none;transition:0.2s}@keyframes svelte-q15gx1-spin{0%{transform:rotate(0deg) }100%{transform:rotate(360deg) }}.form-input.pending.svelte-q15gx1 label.svelte-q15gx1::after{content:'';float:right;-webkit-animation:svelte-q15gx1-spin 1.5s infinite linear;animation:svelte-q15gx1-spin 1.5s infinite linear;width:1.5rem;height:1.5rem;border-radius:100%;background:conic-gradient(\n    var(--golden-brown) 0deg 90deg,\n    var(--linen) 90deg 180deg,\n    var(--golden-brown) 180deg 270deg,\n    var(--linen) 270deg 360deg)}.form-input.svelte-q15gx1 input.svelte-q15gx1,.form-input.svelte-q15gx1 input.svelte-q15gx1{transition:all .25s ease}.form-input.svelte-q15gx1 input.svelte-q15gx1:hover,.form-input.svelte-q15gx1 input.svelte-q15gx1:active,.form-input.svelte-q15gx1 input.svelte-q15gx1:focus{border-color:var(--golden-brown)}.form-input.svelte-q15gx1 input.svelte-q15gx1:focus{border:var(--bw2) solid var(--pick);background-color:hsla(0, 0%, 100%, 1)}.form-input.success.svelte-q15gx1 .validation-message.svelte-q15gx1,.form-input.success.svelte-q15gx1 label.svelte-q15gx1{color:var(--success)}.form-input.warning.svelte-q15gx1 .validation-message.svelte-q15gx1,.form-input.warning.svelte-q15gx1 label.svelte-q15gx1{color:var(--warning)}.form-input.error.svelte-q15gx1 .validation-message.svelte-q15gx1,.form-input.error.svelte-q15gx1 label.svelte-q15gx1{color:var(--error)}.form-input.success.svelte-q15gx1 input.svelte-q15gx1{border:var(--bw2) solid var(--success);background-color:hsl(120, 100%, 90%)}.form-input.warning.svelte-q15gx1 input.svelte-q15gx1{border:var(--bw2) solid var(--warning);background-color:hsl(36.6,73.9%, 90%)}.form-input.error.svelte-q15gx1 input.svelte-q15gx1{border:var(--bw2) solid var(--error);color:var(--error);background-color:hsl(36.6,73.9%, 90%)}:root{--content-inactive:rgba(0,0,0, 0.01);--alpha:1;--bw2:0.25rem;--pick:var(--golden-brown);--success:hsla(120, 100%, 19.6%, var(--alpha));--error:darkred;--warning:var(--golden-brown)}",
  map: null
};
const Input = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { value = "" } = $$props;
  let { label = "" } = $$props;
  let { name = "" } = $$props;
  let { placeholder = "" } = $$props;
  let { pending = false } = $$props;
  let { messages = [] } = $$props;
  let { validityClass } = $$props;
  let { onInput = () => {
  } } = $$props;
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.placeholder === void 0 && $$bindings.placeholder && placeholder !== void 0)
    $$bindings.placeholder(placeholder);
  if ($$props.pending === void 0 && $$bindings.pending && pending !== void 0)
    $$bindings.pending(pending);
  if ($$props.messages === void 0 && $$bindings.messages && messages !== void 0)
    $$bindings.messages(messages);
  if ($$props.validityClass === void 0 && $$bindings.validityClass && validityClass !== void 0)
    $$bindings.validityClass(validityClass);
  if ($$props.onInput === void 0 && $$bindings.onInput && onInput !== void 0)
    $$bindings.onInput(onInput);
  $$result.css.add(css$5);
  return `<div class="${[
    escape(null_to_empty(`${validityClass} form-input`)) + " svelte-q15gx1",
    pending ? "pending" : ""
  ].join(" ").trim()}">
  <label class="${"f6 f5-ns ph3 pv2 no-clutter svelte-q15gx1"}"${add_attribute("for", name, 0)}><strong class="${"ttu tracked svelte-q15gx1"}">${escape(label)}\xA0</strong><span class="${"validation-message h3 svelte-q15gx1"}">${escape(messages.length ? messages[0] : "")}</span></label>
  <input style="${"border-top:0 solid transparent;border-right:0 solid transparent;border-left:0 solid transparent;"}" class="${"inherit outline-3-highlight transition w-100 br0 ba bw2 bg-white-80 f6 f5-ns pv3 ph3 mb4 svelte-q15gx1"}"${add_attribute("id", name, 0)}${add_attribute("name", name, 0)}${add_attribute("placeholder", `${placeholder}`, 0)}${add_attribute("value", value, 0)}>
</div>`;
});
var Checkbox_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: ".w2_5.svelte-1cmtlkj.svelte-1cmtlkj.svelte-1cmtlkj{width:calc( var(--spacing-medium) * 3) }.h2_5.svelte-1cmtlkj.svelte-1cmtlkj.svelte-1cmtlkj{height:calc( var(--spacing-medium) * 3) }input.svelte-1cmtlkj:hover~aside.svelte-1cmtlkj.svelte-1cmtlkj,input.svelte-1cmtlkj:active~aside.svelte-1cmtlkj.svelte-1cmtlkj,input.svelte-1cmtlkj:focus~aside.svelte-1cmtlkj.svelte-1cmtlkj{outline:var(--spacing-medium) solid transparent;border:var(--bw2) solid var(--golden-brown)}input.svelte-1cmtlkj:focus+svg.svelte-1cmtlkj.svelte-1cmtlkj{color:inherit;fill:currentColor}.radio-animation.svelte-1cmtlkj.svelte-1cmtlkj.svelte-1cmtlkj,.checkbox-animation.svelte-1cmtlkj.svelte-1cmtlkj.svelte-1cmtlkj{fill:currentColor;-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat;transform:scale(0);transition:all .3s ease}.visually-hidden.svelte-1cmtlkj:checked~.checkbox-animation.svelte-1cmtlkj.svelte-1cmtlkj{transform:scale(.66)}.form-checkbox.svelte-1cmtlkj.svelte-1cmtlkj.svelte-1cmtlkj{display:flex;align-items:center;color:inherit;transition:all 0.2s ease;background-color:transparent}.form-checkbox.error.svelte-1cmtlkj.svelte-1cmtlkj.svelte-1cmtlkj{color:var(--error);border-color:var(--error)}.form-checkbox.error.svelte-1cmtlkj input.svelte-1cmtlkj~aside.svelte-1cmtlkj{border-color:var(--error);background-color:hsl(36.6,73.9%, 90%)}.form-checkbox.success.svelte-1cmtlkj.svelte-1cmtlkj.svelte-1cmtlkj{color:var(--success);border-color:var(--success)}.form-checkbox.success.svelte-1cmtlkj input.svelte-1cmtlkj~aside.svelte-1cmtlkj{border-color:var(--success);background-color:hsl(120, 100%, 90%)}",
  map: null
};
const Checkbox = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { name = "" } = $$props;
  let { checked = false } = $$props;
  let { label = "" } = $$props;
  let { onChange = () => {
  } } = $$props;
  let { validityClass } = $$props;
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.checked === void 0 && $$bindings.checked && checked !== void 0)
    $$bindings.checked(checked);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.onChange === void 0 && $$bindings.onChange && onChange !== void 0)
    $$bindings.onChange(onChange);
  if ($$props.validityClass === void 0 && $$bindings.validityClass && validityClass !== void 0)
    $$bindings.validityClass(validityClass);
  $$result.css.add(css$4);
  return `<svg class="${"inherit spirites"}" style="${"display: none;"}"><defs><g id="${"check"}"><path d="${"M505.943 79.594c-8.077-8.077-21.172-8.077-29.249 0l-308.939 308.938-132.449-132.449c-8.076-8.077-21.172-8.077-29.248 0-8.077 8.077-8.077 21.172 0 29.249l147.074 147.074c4.038 4.039 9.332 6.058 14.625 6.058 5.293 0 10.587-2.019 14.625-6.059l323.562-323.562c8.075-8.076 8.075-21.171-.001-29.249z"}"></path></g><g id="${"disk"}"><circle cx="${"256"}" cy="${"256"}" r="${"215"}"></circle></g></defs></svg>


<label${add_attribute("for", name, 0)} class="${"flex items-center justify-between pa0 pointer " + escape(`form-checkbox ${validityClass}`) + " svelte-1cmtlkj"}"><div><input class="${"visually-hidden svelte-1cmtlkj"}" type="${"checkbox"}"${add_attribute("id", name, 0)}${add_attribute("checked", checked, 1)}>
    <svg class="${"w2_5 h2_5 checkbox-animation absolute pa0 ml0 svelte-1cmtlkj"}" viewBox="${"0 0 512 512"}" alt="${"check"}"><use xlink:href="${"#check"}"></use></svg>
    <aside class="${"w2_5 h2_5 pa0 bg-white-80 b--transparent outline-0 inherit outline-3-highlight transition ba bw2 br3 svelte-1cmtlkj"}"></aside>
    </div>
  <div class="${"flex items-end pl3"}"><strong class="${"pa0 ma0 mb3 ml0 ml3-ns ml3-m ml3-l f6 f5-ns pv3 lh-copy tracked no-clutter"}">${escape(label)}</strong>
      </div></label>






`;
});
var ButtonSubmit_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: "button.submit-button.svelte-1qf224i{outline:none;cursor:auto;transition:all 1s ease}button.submit-button.svelte-1qf224i:not(:disabled){cursor:pointer;color:white;border-color:black;background-color:var(--success)}button.submit-button.svelte-1qf224i:hover:not(:disabled){background-color:black}button.submit-button.svelte-1qf224i:active{cursor:wait;background-color:var(--linen)}button.submit-button.svelte-1qf224i:disabled,.disabled.svelte-1qf224i{background:var(--golden-brown);opacity:.38;color:var(--linen)}",
  map: null
};
const ButtonSubmit = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { disabled } = $$props;
  let { value } = $$props;
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  $$result.css.add(css$3);
  return `





<button type="${"submit"}" class="${"submit-button no-clutter system input-reset b db tc br-pill f6 f5-ns b ph4 pv3 ba bw2 b--transparent white ttu tracked-mega transition " + escape("disabled no-select") + " svelte-1qf224i"}" ${disabled ? "disabled" : ""}>${escape("Nessun segnale")}</button>




`;
});
const Form = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let cn;
  let disabled;
  let formState = {};
  let res = suite.get();
  const handleChange = ({ target: { nome, email } }) => {
    res = suite(formState);
  };
  let form;
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    cn = classnames(res, {
      valid: "success",
      invalid: "error retry",
      warning: "warning"
    });
    disabled = !res.isValid();
    $$rendered = `${``}

<form action="${"https://formspree.io/f/mqknordd"}" method="${"POST"}" class="${"w-100 "}"${add_attribute("this", form, 0)}>
		
		<input type="${"hidden"}" name="${"_subject"}" value="${"Syntax Magazine"}">

	${validate_component(Input, "Input").$$render($$result, {
      name: "nome",
      label: "Nome",
      placeholder: "Nome e Cognome",
      onInput: handleChange,
      messages: res.getErrors("nome"),
      validityClass: cn("nome"),
      value: formState.nome
    }, {
      value: ($$value) => {
        formState.nome = $$value;
        $$settled = false;
      }
    }, {})}

	${validate_component(Input, "Input").$$render($$result, {
      name: "_replyto",
      label: "indirizzo",
      placeholder: "la-tua-email@indirizzo.it",
      onInput: handleChange,
      messages: res.getErrors("_replyto"),
      validityClass: cn("_replyto"),
      value: formState._replyto
    }, {
      value: ($$value) => {
        formState._replyto = $$value;
        $$settled = false;
      }
    }, {})}

	${validate_component(Checkbox, "Checkbox").$$render($$result, {
      name: "terms",
      label: "Sono felice di ricevere e-mail da Viaggi di Maurizio Levi.",
      onChange: handleChange,
      validityClass: cn("terms"),
      checked: formState.terms
    }, {
      checked: ($$value) => {
        formState.terms = $$value;
        $$settled = false;
      }
    }, {})}


	<div class="${"flex ml-auto justify-end w-100 w-50-m w-two-thirds-l pb3 pb6-ns pb5-m pb5-l " + escape("pointer")}">${validate_component(ButtonSubmit, "ButtonSubmit").$$render($$result, { disabled, value: "Iscriviti" }, {}, {})}</div></form>`;
  } while (!$$settled);
  return $$rendered;
});
const Subscribe = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `

<figure style="${"box-shadow: inset 0 0 42px 42px var(--linen);background: url('./images/160x60-horizon.webp') center center;"}" class="${"cover ma0 pa0 "}">

	
	<div class="${"mr-auto ml-auto w-100 w-100-ns w-100-m w-40-l"}">
		<header class="${"ph2 ph2-ns ph2-m ph0-l tc"}"><h5 class="${"mv0 pv4 f3 f3-ns f2-m f2-l fw2 lh-solid"}"><small class="${"golden-brown db tracked-none tracked-ns tracked-m tracked-mega-l f7 f7-ns f5-m f4-l fw5 ttu mv0"}">Newsletter</small>
				
				
				<span class="${"fraunces"}">Resta<span class="${"fraunces-i"}">\xA0aggiornato</span>
				e ricevi<br class="${"dib dib-ns dib-m dn-l"}"> le\xA0nostre comunicazioni sui\xA0viaggi,<br class="${"dib dib-ns dib-m dn-l"}"> sulle promozioni e sulle numerose\xA0novit\xE0.</span></h5></header>

		<div class="${"ph2 ph2-ns ph2-m ph0-l ml-auto mr-auto w-100 w-100-ns w-two-thirds-m w-100-l"}" id="${"sottoscrivere"}">${validate_component(Form, "Form").$$render($$result, {}, {}, {})}</div></div>
	</figure>`;
});
let alt = "Maurizio Levi Official Partner";
const Partners = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let imagesBaseUrl = `${"https://viaggilevi.vercel.app"}/images/`;
  return `${validate_component(Row, "Row").$$render($$result, { bg: "bg-white" }, {}, {
    default: () => {
      return `<article class="${"highlight db black-70 f5 f4-ns f3-m f3-l lh-copy pv4 measure ph2 measure-ns ph4-ns measure-m ph2-m measure-wide-l ph0-l mr-auto ml-auto"}"><h4 class="${"mv0 pv4 f2 f2-ns f1-m f1-l fw2 lh-solid"}"><small class="${"golden-brown db tracked-none tracked-ns tracked-m tracked-mega-l f7 f7-ns f5-m f4-l fw5 ttu mv0"}">I viaggi di maurizio levi</small>
			<span class="${"fraunces"}">I nostri</span><span class="${"fraunces-i"}">\xA0partner</span></h4>
		<div class="${"flex flex-wrap items-center justify-around justify-between-m justify-between-l"}">
			<img class="${"h3 db no-select pb3 mr2"}" src="${escape(imagesBaseUrl) + "fai.webp"}"${add_attribute("alt", alt, 0)}>
			<img class="${"h3 db no-select pb3 mr2"}" src="${escape(imagesBaseUrl) + "tri.webp"}"${add_attribute("alt", alt, 0)}>
			<img class="${"h3 db no-select pb3 mr2"}" src="${escape(imagesBaseUrl) + "unesco.webp"}"${add_attribute("alt", alt, 0)}>
			<img class="${"h3 db no-select pb3 mr2"}" src="${escape(imagesBaseUrl) + "asc.webp"}"${add_attribute("alt", alt, 0)}>

			<img class="${"h3 db no-select pb3"}" src="${escape(imagesBaseUrl) + "fto.webp"}"${add_attribute("alt", alt, 0)}></div>
		</article>`;
    }
  })}`;
});
const Social = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Row, "Row").$$render($$result, { bg: "bg-white" }, {}, {
    default: () => {
      return `<div class="${"highlight db black-70 f5 f4-ns f3-m f3-l lh-copy pv4 measure ph2 measure-ns ph4-ns measure-m ph2-m measure-wide-l ph0-l mr-auto ml-auto"}"><h4 class="${"mv0 pv4 f2 f2-ns f1-m f1-l fw2 lh-solid"}"><small class="${"golden-brown db tracked-none tracked-ns tracked-m tracked-mega-l f7 f7-ns f5-m f4-l fw5 ttu mv0"}">I viaggi di maurizio levi</small>
			<span class="${"fraunces"}">Seguici</span></h4>

		<div class="${"flex justify-between w-100"}">
			
			<a class="${"link inherit pointer transition hover-golden-brown o-80 w-10 w3-ns h3-ns w-10-m w3-l h3-l"}" href="${"https://www.facebook.com/I-Viaggi-di-Maurizio-Levi-207083192654850/"}" title="${"Facebook"}"><svg viewBox="${"0 0 16 16"}" class="${"no-select"}"><use xlink:href="${"#fb"}"></use></svg></a>

			<a class="${"link inherit pointer transition hover-golden-brown o-80 w-10 w3-ns h3-ns w-10-m w3-l h3-l"}" href="${"https://twitter.com/viaggilevi"}" title="${"Twitter"}"><svg viewBox="${"0 0 16 16"}" class="${"no-select"}"><use xlink:href="${"#twitter"}"></use></svg></a>

			<a class="${"link inherit pointer transition hover-golden-brown o-80 w-10 w3-ns h3-ns w-10-m w3-l h3-l"}" href="${"https://www.youtube.com/user/viaggidimauriziolevi"}" title="${"YouTube"}"><svg viewBox="${"0 0 16 16"}" class="${"no-select"}"><use xlink:href="${"#yt"}"></use></svg></a>

			<a class="${"link inherit pointer transition hover-golden-brown o-80 w-10 w3-ns h3-ns w-10-m w3-l h3-l"}" href="${"https://www.instagram.com/p/BKVQ5cvAvht/"}" title="${"Instagram"}"><svg viewBox="${"0 0 16 16"}" class="${"no-select"}"><use xlink:href="${"#instagram"}"></use></svg></a>

			<a class="${"link inherit pointer transition hover-golden-brown o-80 w-10 w3-ns h3-ns w-10-m w3-l h3-l"}" href="${"https://za.pinterest.com/iviaggidimauriz/"}" title="${"Pintrest"}"><svg viewBox="${"0 0 16 16"}" class="${"no-select"}"><use xlink:href="${"#pintrest"}"></use></svg></a></div></div>`;
    }
  })}

`;
});
var items = [
  {
    id: "africa",
    title: "Africa",
    bg: "bg-gray",
    src: "./images/king-lewanika-lodge-liuwa-plain-national-park.webp",
    imageCredit: "",
    headingEn: "I want to travel",
    headingIt: "voglio viaggiare",
    figCaption: "King Lewanika Lodge, Liuwa Plain National Park \u2013 Zambia, Africa",
    slug: "africa"
  },
  {
    id: "lontano-oriente",
    title: "Lontano Oriente",
    bg: "bg-light-pink",
    src: "./images/lake-urmia-south-caspian-sea-iran.webp",
    headingEn: "I want to travel",
    headingIt: "voglio viaggiare",
    figCaption: "Lake Urmia, East Azerbaijan &amp; West Azerbaijan - South of the Caspian Sea, Iran",
    slug: "lontano-oriente"
  },
  {
    id: "americhe",
    title: "Americhe",
    bg: "bg-light-blue",
    src: "./images/Tineye.Torres.del.Paine.National.Park.webp",
    headingEn: "I want to travel",
    headingIt: "voglio viaggiare",
    figCaption: "Lago Grey, Torres del Paine National Park - Cile, South Westerly tip of South America",
    slug: "americhe"
  },
  {
    id: "oceania",
    title: "Oceania",
    bg: "bg-light-red",
    src: "./images/Marshall-Islands-coral-reef.webp",
    imageCredit: "This image is from: http://www.logicum.co/wp-content/uploads/2016/04/Marshall-Islands-coral-reef.jpg",
    headingEn: "I want to travel",
    headingIt: "voglio viaggiare",
    figCaption: "The Marshall Islands, slightly west of the International Date Line, Micronesia",
    slug: "oceania"
  },
  {
    id: "europa",
    title: "Europa",
    bg: "bg-light-yellow",
    src: "./images/eu-largest-lake-skadar-national-park-montenegro-and-albania.webp",
    headingEn: "I want to travel",
    headingIt: "voglio viaggiare",
    figCaption: "Lake Skadar National Park - Albania, South East Europe",
    slug: "europa"
  },
  {
    id: "vicino-oriente-asia-centrale",
    title: "Vicino Oriente - Asia Centrale",
    bg: "bg-light-red",
    src: "./images/bodgaya-island-tun-sakaran-marine-park-sulu-sea.webp",
    imageCredit: "This image is from: https://www.molon.de/galleries/Malaysia/Sabah/Islands/",
    headingEn: "I want to travel",
    headingIt: "voglio viaggiare",
    figCaption: "Bodgaya Island, Tun Sakaran Marine Park \u2013 Sulu Sea, Malaysia",
    slug: "vicino-oriente-asia-centrale"
  },
  {
    id: "artide-e-antartide",
    title: "Artide e Antartide",
    bg: "bg-red",
    src: "./images/russia-largest-freshwater-lake-ladoga.webp",
    headingEn: "I want to travel",
    headingIt: "voglio viaggiare",
    figCaption: "Freshwater Lake Ladoga \u2013 Russia, &amp; Finland's boarder",
    slug: "artide-e-antartide"
  }
];
const Contact = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Row, "Row").$$render($$result, { bg: "bg-solitaire" }, {}, {
    default: () => {
      return `

<div class="${"highlight db black-70 f2 f4-ns f3-m f2-l lh-copy pb6 measure ph2 measure-ns ph4-ns measure-m ph2-m measure-wide-l ph0-l mr-auto ml-auto pv5"}"><section class="${"fl w-100 cf"}"><div class="${"fl w-100 w-third-ns w-third-m w-two-thirds-l lh-copy measure "}"><small class="${"golden-brown db tracked-none tracked-ns tracked-m tracked-mega-l ttu mv0 pb2"}">destinazioni</small>
			<hr class="${"inherit b--golden-brown"}">
			<ul class="${"list pl0 fraunces pr1 pr4-ns pr4-m pr1-l"}">${each(items, ({ title, slug }) => {
        return `<li class="${"truncate"}"><a${add_attribute("href", `#${slug}`, 0)} class="${"link inherit o-80 fw4 hover-fw6 hover-o-100 hover-o-100 "}">${escape(title)}</a>
						
					</li>`;
      })}</ul></div>

	<div class="${"fl w-100 w-third-ns w-third-m w-third-l lh-copy measure"}"><small class="${"golden-brown db tracked-none tracked-ns tracked-m tracked-mega-l ttu mv0 pb2"}">contattaci</small>
	<hr class="${"inherit b--golden-brown"}">
		<ul class="${"list pl0 fraunces pr1 pr4-ns pr4-m pr1-l mb0-l"}"><li class="${"truncate"}"><small class="${"golden-brown o-50 db tracked-none tracked-ns tracked-m tracked-mega-l ttu pt3 pb1 system f6 f5-ns f4-m f3-l"}">chiamaci</small><small><a href="${"tel:+390234934528"}" class="${"link inherit o-80 fw4 bw1 bw2-l bb b--transparent hover-b--inherit hover-o-100 "}">+39\xA002\xA034934528</a></small></li>
			<li class="${"truncate"}"><small class="${"golden-brown o-50 db tracked-none tracked-ns tracked-m tracked-mega-l ttu pt3 pb1 system f6 f5-ns f4-m f3-l"}">scrivici</small><small><a href="${"mailto:info@viaggilevi.com"}" class="${"link inherit o-80 fw4 bw1 bw2-l bb b--transparent hover-b--inherit hover-o-100 "}" style="${"letter-spacing:-0.0125em"}">info@viaggilevi.com</a></small></li>
</ul></div>
	<div class="${"fl w-100 w-third-ns w-third-m w-third-l ph0 lh-copy measure "}"><small class="${"golden-brown o-50 db tracked-none tracked-ns tracked-m tracked-mega-l fw5 ttu mv0 pb2 dn-l"}">\xA0</small>
<hr class="${"inherit b--golden-brown dn-l"}">
<address class="${"fs-normal"}"><ul class="${"list pl0 fraunces pr1 pr4-ns pr4-m pr1-l mt0-l"}"><li class="${"truncate"}"><small class="${"golden-brown o-50 db tracked-none tracked-ns tracked-m tracked-mega-l ttu pt3 pb1 system f6 f5-ns f4-m f3-l"}">trovaci</small>
<small><a href="${"https://google.it/maps/place/Via+Francesco+Londonio,+4,+20154+Milano"}" class="${"link inherit o-80 fw4 bw1 bw2-l bb b--transparent hover-b--inherit hover-o-100 "}">Via Londonio 4<br>20154 Milano</a></small></li></ul></address></div>
</section></div>`;
    }
  })}`;
});
const Terms = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Row, "Row").$$render($$result, { bg: "bg-cocoa" }, {}, {
    default: () => {
      return `<article class="${"highlight db black-70 f4 f5-ns f3-m f3-l lh-copy white pt4 pb7 measure ph2 measure-ns ph4-ns measure-m ph2-m measure-wide-l ph0-l mr-auto ml-auto"}"><section class="${"fl w-100 cf"}"><div class="${"fl w-100 w-100-ns w-third-m w-third-l f6 lh-copy measure tc tc-ns tl-m tl-l"}"><a href="${"#termini"}" class="${"tracked-none tracked-ns tracked-m tracked-mega-l f7 f7-ns f5-m f4-l fw5 ttu mv0 pb2 link pointer inherit o-70 hover-o-100 transition"}"><span class="${"fw2"}">Cookie\xA0Policy &amp;\xA0</span>Termini</a></div>
			<div class="${"fl w-100 w-100-ns w-third-m w-third-l f6 lh-copy measure tc"}"><a href="${"#piva"}" class="${"tracked-none tracked-ns tracked-m tracked-mega-l f7 f7-ns f5-m f4-l fw5 ttu mv0 pb2 link pointer inherit o-70 hover-o-100 transition"}"><span class="${"fw2"}">Partita\xA0Iva </span>12819030151</a></div>
			<div class="${"fl w-100 w-100-ns w-third-m w-third-l ph0 f6 lh-copy measure tc tc-ns tr-m tr-l"}"><a href="${"https://inspiredlabs.co.uk"}" title="${"Inspired Labs"}" class="${"tracked-none tracked-ns tracked-m tracked-mega-l f7 f7-ns f5-m f4-l fw5 ttu mv0 pb2 link pointer inherit o-70 hover-o-100 transition"}"><span class="${"fw2"}">I Viaggi di Maurizio\xA0Levi</span>\xA0\xA9</a></div></section></article>`;
    }
  })}`;
});
const Outro = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `
${validate_component(LeviMontage, "LeviMontage").$$render($$result, {}, {}, {})}
${validate_component(Subscribe, "Subscribe").$$render($$result, {}, {}, {})}
${validate_component(Partners, "Partners").$$render($$result, {}, {}, {})}
${validate_component(Social, "Social").$$render($$result, {}, {}, {})}
${validate_component(Contact, "Contact").$$render($$result, {}, {}, {})}
${validate_component(Terms, "Terms").$$render($$result, {}, {}, {})}`;
});
var Buttons_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: "a.svelte-1obr2tm{line-height:2rem}.active.svelte-1obr2tm{opacity:1 }@media all and (orientation:portrait){@media screen and (min-width:30em){}@media screen and (min-width:30em) and (max-width:60em){.portrait-f5-m.svelte-1obr2tm{font-size:1rem}}@media screen and (min-width:60em){}}",
  map: null
};
const Buttons = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let pageUrl;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  const buttons = [
    { name: "Partenze", route: "/partenze" },
    { name: "Viaggi", route: "/viaggi" },
    { name: "Chi Siamo", route: "/chi-siamo" },
    { name: "News", route: "/news" }
  ];
  $$result.css.add(css$2);
  pageUrl = $page.url.pathname;
  $$unsubscribe_page();
  return `${each(buttons, ({ route, name }, i) => {
    return `<a${add_attribute("href", route, 0)} sveltekit:prefetch${add_attribute("style", `width: calc( 100% / ${buttons.length})`, 0)} class="${[
      "h-100 nowrap link pv0 pv2 pv3-m pv3-l ttt bg-transparent f6 f4-ns f6-m portrait-f5-m f5-l pointer hover-o-100 transition white bn bb b--white ph0 o-80 svelte-1obr2tm",
      (route !== "/" ? pageUrl.match(route) : route === pageUrl) ? "active" : ""
    ].join(" ").trim()}">${escape(name)}</a>`;
  })}`;
});
var index_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".hover-b--inherit.svelte-1j0w8fz{border:2px solid inherit;transition:border 0.4s ease 0s!important;transform:translateZ(0)}.hover-b--inherit.svelte-1j0w8fz:hover{border-color:inherit\n}.levi-nav.svelte-1j0w8fz{--alpha:0.9;background-color:hsla(30,28.95%,14.9%,var(--alpha));-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px)}@media screen and (min-width:30em) and (max-width:60em){.w-45-m.svelte-1j0w8fz{width:45%}}@media all and (orientation:portrait){@media screen and (min-width:30em){}@media screen and (min-width:30em) and (max-width:60em){}@media screen and (min-width:60em){}}@media all and (orientation:landscape){@media screen and (min-width:30em){}@media screen and (min-width:30em) and (max-width:60em){.landscape-dn-m.svelte-1j0w8fz{display:none}.landscape-flex-m.svelte-1j0w8fz{display:flex}}@media screen and (min-width:60em){.landscape-top-0-l.svelte-1j0w8fz{top:0}.landscape-dn-l.svelte-1j0w8fz{display:none}.landscape-flex-l.svelte-1j0w8fz{display:flex}}}.hover-saturate.svelte-1j0w8fz:hover{filter:saturate(1.8)}",
  map: null
};
const Menu = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$result.css.add(css$1);
  $$unsubscribe_page();
  return `<nav class="${"levi-nav fixed z-5 w-100 top-0 landscape-top-0-ns landscape-top-0-m landscape-top-0-l flex tc white system svelte-1j0w8fz"}"><div class="${"w-100 flex justify-between f5 f4-ns f3-m f3-l lh-copy pv0 pa2 measure ph4-ns measure-ns ph2-m measure-m pa0-l measure-wide-l mr-auto ml-auto"}"><h1 class="${"tl w-50 w-50-ns w-25-m w-20-l pv0 h3 f5 f4-ns fs-m f5-l mv0"}"><a href="${"/"}"${add_attribute("style", !$page.url.pathname.includes("") ? `filter: saturate(1.8)` : "", 0)} class="${"link pointer transition hover-saturate svelte-1j0w8fz"}"><img class="${"w4"}" src="${"https://viaggilevi.vercel.app/images/levi-logo.svg"}" alt="${"Levi"}">
		<span class="${"visually-hidden"}">I Vaggi di Maurizio Levi</span></a></h1>


<div class="${"dn dn-ns w-45-m landscape-flex-m w-40-l justify-between landscape-flex-l items-center svelte-1j0w8fz"}">
	${validate_component(Buttons, "Buttons").$$render($$result, {}, {}, {})}</div>

<div class="${"w-80 w-80-ns w-40-m w-50-l f5 f4-ns fs-m f5-l flex items-center justify-around"}">
	<a href="${"tel:+390234934528"}" class="${"link flex items-center justify-center-l justify-bettween-m br-pill charcoal bg-solitaire hover-bg-linen pointer transition mr2"}">
		<svg viewBox="${"0 0 24 24"}" class="${"no-select h1 ph2 pv2 pr0-l pa2-ns h2-m pa2-m h2-l"}"><use xlink:href="${"#icon-phone"}"></use></svg>
		
		<span class="${"dn dn-ns dn-m flex-l w-100 h-100 truncate items-center f7 pv2-l fraunces pl0 ml0"}"><span class="${"fw4"}">+</span>
			<span class="${"fw4 bb b--transparent hover-b--inherit svelte-1j0w8fz"}">39\u200902\u20093493\u20094528</span></span>
		</a>

	<a href="${"mailto:info@viaggilevi.com"}" class="${"link flex items-center justify-center-l justify-bettween-m br-pill charcoal bg-solitaire hover-bg-linen pointer transition mr2 "}">
		<svg viewBox="${"0 0 24 24"}" class="${"no-select h1 pa2 pa2-ns h2-m pa2-m h2-l"}"><use xlink:href="${"#icon-open"}"></use></svg>
		
		<span class="${"dn dn-ns dn-m flex-l w-100 f7 pv2-l fraunces fw4 nowrap"}"><span class="${"fw4 bb b--transparent hover-b--inherit svelte-1j0w8fz"}">info\u2026</span></span>
		</a>



	<aside class="${"pl2 w-60 w-60-ns w-100-m w-100-l"}"><div class="${"flex items-center br-pill bg-meadow f6 f4-ns f6-m f5-l hover-bg-near-white bg-charcoal pointer transition "}">
		<input id="${"search"}" type="${"search"}" name="${"search"}" placeholder="${"Search"}" data-placeholder="${"Cerca"}" class="${"charcoal bg-transition input-reset br0 bb bw0 bg-transparent b--black f5 f5-ns f5-m f5-l tl items-center pv3 w-100 mr0 pr0 pl1 pl2-ns pl3-m pl3-l"}">
		
		
		<button class="${"inherit bg-near-black hover-bg-golden-brown pointer br-pill bn aspect-ratio--object relative w2 w3-l pr0 pl0 pv2"}" style="${"border-radius: 0px 9999px 9999px 0px"}">
		
		<svg viewBox="${"0 0 24 24"}" class="${"no-select h2 relative left-0"}"><use xlink:href="${"#icon-search"}"></use></svg></button></div></aside></div></div></nav>



<nav class="${"levi-nav fixed z-9999 w-100 bottom-0 landscape-dn-m landscape-dn-l flex tc  svelte-1j0w8fz"}">
<div class="${"w-100 flex justify-between f5 f4-ns f3-m f3-l lh-copy measure measure-ns measure-m measure-wide-l mr-auto ml-auto h3"}">


						

	${validate_component(Buttons, "Buttons").$$render($$result, {}, {}, {})}</div>
</nav>`;
});
var app = "";
var __layout_svelte_svelte_type_style_lang = "";
const css = {
  code: ":root{--content-inactive:rgba(0,0,0, 0.01);--alpha:1;--bw2:0.25rem;--pick:var(--golden-brown);--success:hsla(120, 100%, 19.6%, var(--alpha));--error:darkred;--warning:var(--golden-brown)}.accent{font-family:'Fraunces Variable Italic', serif}.outline-3-highlight{outline:0 solid var(--golden-brown)}.form-checkbox.retry{animation:svelte-301s3z-retry .5s linear 0.8s;-webkit-animation:svelte-301s3z-retry .5s linear 0.8s}.form-input.retry{animation:svelte-301s3z-retry .5s linear 0.8s;-webkit-animation:svelte-301s3z-retry .5s linear 0.8s}@-webkit-keyframes svelte-301s3z-retry{8%,41%{transform:translateX(-10px)}25%,58%{transform:translateX(10px)}72%{transform:translateX(-5px)}86%{transform:translateX(5px)}92%{transform:translateX(-2px)}98%{transform:translateX(2px)}0%,100%{transform:translateX(0)}}@keyframes svelte-301s3z-retry{8%,41%{transform:translateX(-10px)}25%,58%{transform:translateX(10px)}72%{transform:translateX(-5px)}86%{transform:translateX(5px)}92%{transform:translateX(-2px)}98%{transform:translateX(2px)}0%,100%{transform:translateX(0)}}.sticky{position:-webkit-sticky;position:sticky}.dg, .grid{display:grid }@media screen and (min-width: 30em){.dg-ns, .grid-ns{display:grid\n  }}@media screen and (min-width: 30em) and (max-width: 60em){.dg-m, .grid-m{display:grid\n  }}@media screen and (min-width: 60em){.dg-l, .grid-l{display:grid\n  }}.grid-items-start{justify-items:start }.grid-items-center{justify-items:center }.grid-items-end{justify-items:end }.grid-align-start{align-items:start }.grid-align-center{align-items:center }.grid-align-end{align-items:end }:root{--spacing-none:0;--spacing-extra-small:.25rem;--spacing-small:.5rem;--spacing-medium:1rem;--spacing-large:2rem;--spacing-extra-large:4rem;--spacing-extra-extra-large:8rem;--spacing-extra-extra-extra-large:16rem}.gg0, .gap-0{grid-gap:var(--spacing-none) }.gg1, .gap-1{grid-gap:var(--spacing-extra-small) }.gg2, .gap-2{grid-gap:var(--spacing-small) }.gg3, .gap-3{grid-gap:var(--spacing-medium) }.gg4, .gap-4{grid-gap:var(--spacing-large) }.gg5, .gap-5{grid-gap:var(--spacing-extra-large) }.gg6, .gap-6{grid-gap:var(--spacing-extra-extra-large) }.gg7, .gap-7{grid-gap:var(--spacing-extra-extra-extra-large) }.cols-fr1{grid-template-columns:1fr }.rows-fr1{grid-template-rows:1fr }.col-fr1-auto-auto, .grid-fr1-auto-auto{grid-template-columns:fr1 auto auto }.col-3x1fr, .grid-repeat-3-1fr{grid-template-columns:repeat(3, 1fr) }.col-5x1fr, .grid-repeat-5-1fr{grid-template-columns:repeat(5, 1fr) }.col{grid-column:auto }.col-s3, .col-span-3{grid-column:span 3 }@media screen and (min-width: 30em){.col-span-3-ns{grid-column:span 3\n  }}@media screen and (min-width: 30em) and (max-width: 60em){.col-span-3-m{grid-column:span 3\n  }}@media screen and (min-width: 60em){.col-span-3-l{grid-column:span 3\n  }}.col-span-2{grid-column:span 2 }@media screen and (min-width: 30em){.col-span-2-ns{grid-column:span 2\n  }}@media screen and (min-width: 30em) and (max-width: 60em){.col-span-2-m{grid-column:span 2\n  }}@media screen and (min-width: 60em){.col-span-2-l{grid-column:span 2\n  }}.col-span-1{grid-column:span 1 }@media screen and (min-width: 30em){.col-span-1-ns{grid-column:span 1\n  }}@media screen and (min-width: 30em) and (max-width: 60em){.col-span-1-m{grid-column:span 1\n  }}@media screen and (min-width: 60em){.col-span-1-l{grid-column:span 1\n  }}.col-span-0{grid-column:span 1 }@media screen and (min-width: 30em){.col-span-0-ns{grid-column:span 1\n  }}@media screen and (min-width: 30em) and (max-width: 60em){.col-span-0-m{grid-column:span 0\n  }}@media screen and (min-width: 60em){.col-span-0-l{grid-column:span 0\n  }}.row-h-33{grid-auto-rows:minmax(33%, auto) }.row-h-25vh{grid-auto-rows:minmax(25vh, auto) }.row-h-third{grid-auto-rows:minmax(33.333vh, auto) }.row-span-2{grid-row:span 2 }.row-span-3{grid-row:span 3 }.row{display:contents }.o-80{opacity:.8 }@media screen and (min-width: 30em){.o-80-ns{opacity:.8\n  }}@media screen and (min-width: 30em) and (max-width: 60em){.o-80-m{opacity:.8\n  }}@media screen and (min-width: 60em){.o-80-l{opacity:.8\n  }}@media screen and (min-width: 30em) and (max-width: 60em){.o-100-m{opacity:1\n  }}.hover-b--inherit{transition:all 0.4s ease 0s!important}.hover-b--inherit:hover{border-color:inherit}.visually-hidden{height:1px;overflow:hidden;width:1px;position:absolute;clip:rect(1px 1px 1px 1px);clip:rect(1px, 1px, 1px, 1px);-webkit-clip-path:inset(50%);clip-path:inset(50%);white-space:nowrap}.light-pagination-nav span.option.prev > svg path{fill:var(--golden-brown)!important}.light-pagination-nav span.option.next > svg path{fill:var(--golden-brown)!important}.light-pagination-nav span.option.prev{color:transparent;transition:background 0.4s ease 0s;-webkit-transition:background 0.4s ease 0s;border:solid 0.125rem var(--golden-brown);border-radius:9999px 0px 0px 9999px;font-size:1rem;padding-left:2rem;padding-right:2rem;padding-top:0.5rem;padding-bottom:0.5rem;border-right:none}.light-pagination-nav span.option.next{color:transparent;transition:background 0.4s ease 0s;-webkit-transition:background 0.4s ease 0s;border:solid 0.125rem var(--golden-brown);border-radius:0px 9999px 9999px 0px;font-size:1rem;padding-left:2rem;padding-right:2rem;padding-top:0.5rem;padding-bottom:0.5rem}.light-pagination-nav .option{border-top:solid 0.125rem var(--golden-brown);border-left:solid 0.125rem var(--golden-brown);border-bottom:solid 0.125rem var(--golden-brown);border-right:none;text-shadow:0px 0.125rem 0.125rem white;color:hsla(30,28.95%,14.9%, 0.7)!important}.light-pagination-nav .option:hover{background-color:rgba(255,255,255, 0.8)!important;color:var(--cocoa)!important;border:solid 0.125rem var(--golden-brown);border-right:none}.light-pagination-nav .pagination-nav{background:transparent!important;box-shadow:none!important}.option.active{text-shadow:0px 0.125rem 0.125rem black;color:white!important;background-color:var(--golden-brown)!important;border-top:solid 0.125rem var(--golden-brown);border-left:solid 0.125rem var(--golden-brown);border-bottom:solid 0.125rem var(--golden-brown);border-right:none}.option.active:hover{background-color:var(--golden-brown)!important;cursor:auto!important;color:white!important}svg{stroke-width:inherit;vector-effect:non-scaling-stroke}:root{--stroke-accent:white}.sw2{stroke-width:var(--spacing-extra-small) }.s--accent{stroke:var(--stroke-accent)}.transparent{color:transparent;fill:transparent}",
  map: null
};
const load = async ({ url }) => ({ props: { url: url.href } });
const _layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { url } = $$props;
  if ($$props.url === void 0 && $$bindings.url && url !== void 0)
    $$bindings.url(url);
  $$result.css.add(css);
  return `





${validate_component(Menu, "Menu").$$render($$result, {}, {}, {})}



<main class="${"system backface-hidden charcoal"}">
  ${validate_component(PageTransition, "PageTransition").$$render($$result, { url }, {}, {
    default: () => {
      return `
    ${slots.default ? slots.default({}) : ``}
    ${validate_component(Outro, "Outro").$$render($$result, {}, {}, {})}`;
    }
  })}</main>

${validate_component(Defs, "Defs").$$render($$result, {}, {}, {})}
${validate_component(Fraunces, "Fraunces").$$render($$result, {}, {}, {})}













`;
});
export { _layout as default, load };
