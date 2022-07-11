<script>
// debug: Sveltekit throws 405, see: github.com/sveltejs/kit/issues/1046
// learn: overview: webjeda.com/blog/sveltekit-form-endpoint
// learn: Webjeda on form endpoints: youtube.com/watch?v=jpKbyiQsj3k
// learn: LihauTan on form endpoints: youtube.com/watch?v=gpiXjjOZDnw
// learn: LihauTan on form endpoints: youtube.com/watch?v=nmX-utfgeK4
// note: - from: youtube.com/results?search_query=form+submission+sveltekit


/*********** DONE ************/
	import Modal from "$lib/Subscribe/Modal.svelte";
	let modalOpen = true;

	function openModal() { modalOpen = true }
	function closeModal() { modalOpen = false }



/*********** DONE ************/




/*********** VEST ************/
	import suite from "$lib/Subscribe/suite";
	import Input from "$lib/Subscribe/Input.svelte";
	import Checkbox from "$lib/Subscribe/Checkbox.svelte";
	import ButtonSubmit from "$lib/Subscribe/ButtonSubmit.svelte";
	import classnames from "vest/classnames";

	let formState = {};

	// learn: validation result
	let res = suite.get();

	const handleChange = ({ target: { nome, email } }) => {
    res = suite(formState);
  };

	$: cn = classnames(res, {
		valid: "success",
		invalid: "error retry",
		warning: "warning"
	})

	$: disabled = !res.isValid();
/*********** VEST ************/



/*********** FORMSPREE ************/
let form;
let submitted = false;
let isSubmitting = false;

async function handleSubmit(event) {

	var data = new FormData(event.target);

	isSubmitting = true;

	fetch(event.target.action, {
		method: form.method,
		body: data,
		headers: {
			'Accept': 'application/json'
	}
		}).then(() => {
			// note: do something:
			console.log("Form submitted!");
			submitted = true;
			isSubmitting = false;
		})
		.finally(() => {
			// note: do something:
			console.log("It works!");
			// xxx. alert('Ciaonne');
			form.reset();
		})
		.catch((error) => {
			console.log(error);
			isSubmitting = false;
		});
};
/*********** FORMSPREE ************/

</script>

{#if submitted}
	<Modal modalOpen on:openModal={openModal} on:closeModal={closeModal} />
{/if}

<form
	bind:this={form}
	on:submit|preventDefault={handleSubmit}
	action="https://formspree.io/&#102;&sol;&#109;&#113;&#107;&#110;&#111;&#114;&#100;&#100;"
	method="POST"
	class="w-100 ">
	<!-- debug: method="POST", TypeError: Failed to execute 'fetch' on 'Window':	Request with GET/HEAD method cannot have body. -->
		<!-- <p class="ma0 pb3">{ submitted ? 'this is a test' : '' }</p> -->
		<input
		type="hidden"
		name="_subject"
		value="Syntax Magazine">

	<Input
		name="nome"
		label="Nome"
		placeholder="Nome e Cognome"
		bind:value={formState.nome}
		onInput={handleChange}
		messages={res.getErrors("nome")}
		validityClass={cn("nome")}
	/>

	<Input
		name="_replyto"
		label="indirizzo"
		placeholder="la-tua-email@indirizzo.it"
		bind:value={formState._replyto}
		onInput={handleChange}
		messages={res.getErrors("_replyto")}
		validityClass={cn("_replyto")}
	/>

	<Checkbox
		name="terms"
		label="Sono felice di ricevere e-mail da Viaggi di Maurizio Levi."
		bind:checked={formState.terms}
		onChange={handleChange}
		validityClass={cn('terms')}
	/>


	<div class="flex ml-auto justify-end w-100 w-50-m w-two-thirds-l pb3 pb6-ns pb5-m pb5-l { isSubmitting ? 'no-select' : 'pointer' }">
		<ButtonSubmit {disabled} value={'Iscriviti'} />
	</div>
</form>