<script>

</script>

<style>
/* external css: `instantwebapp.com` needs updating */
:global(i) { font-style: normal; }

:global(body) {
	font-family: sans-serif;
	margin: 0;
	padding: 0;
}

/*
Fraunces with vertical media queries, new to variable fonts? https://v-fonts.com/fonts/fraunces

`font-variation-settings` req. a complete parameterised string for `transition:hover`.
*/

/* @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,wght@0,100..900;1,100..900&display=swap'); */

/*
@font-face {
    font-family: 'Fraunces Variable Italic';
    src: url('https://inspiredlabs.co.uk/levi/fonts/Fraunces-Italic--latin_basic.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
}
@font-face {
    font-family: 'Fraunces Variable';
    src: url('https://inspiredlabs.co.uk/levi/fonts/Fraunces--latin_basic.woff2') format('woff2');
		font-weight: normal;
    font-style: normal;
}
*/

@font-face {
    font-family: 'Fraunces Variable Italic';
    src: url('https://viaggilevi.vercel.app/fonts/Fraunces-Italic--latin_basic.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
}

@font-face {
  font-family: 'Fraunces Variable';
  src: url('https://viaggilevi.vercel.app/fonts/Fraunces--latin_basic.woff2') format('woff2');
	font-weight: normal;
	font-style: normal;
}

:global(.fraunces-i) {
	transition: font-variation-settings .4s ease 0s!important;
  font-family: 'Fraunces Variable Italic', serif;
	font-variation-settings:
    'wght' 366,
	  'opsz' 100,
	  'SOFT' 20,
	  'WONK' 1;
}

:global(.fraunces) {
	transition: font-variation-settings .4s ease 0s!important;
  font-family: 'Fraunces Variable', serif;
	/* source: https://github.com/undercasetype/Fraunces/releases */
	/* why do some variable names get capitalized in code?
		- SYMBOLIC_CONSTANT: stackoverflow.com/questions/1540763/capitalization-convention-for-javascript-objects
		- GLOBAL_VARIABLE: crockford.com/code.html#names
		- custom AXIS names in `font-variation-settings` are capitalized because they are easier to identify as unique to the font.
			- from: udn.realityripple.com/docs/Web/CSS/font-variation-settings || udn.realityripple.com/docs/Web/CSS/CSS_Fonts/Variable_Fonts_Guide
	 */
	/* font-variation-settings: 'wght' `100-900`, 'opsz' `0-144`, 'SOFT' `0-100`, 'WONK' `0-1` */ /* ranges */
	font-variation-settings:
    'wght' 366,
		'opsz' 96,
		'SOFT' 16,
		'WONK' 0;
}

/*
`font-variation-settings`, is NOT yet integrated into Tachyonshower.
*/

:global(.fw1) {
  font-weight: 100;
  font-variation-settings: 'wght' 100;

}
:global(.fw2) {
  font-weight: 200;
  font-variation-settings: 'wght' 200;

}
:global(.fw3) {
  font-weight: 300;
  font-variation-settings: 'wght' 300;

}
:global(.fw4) {
  font-weight: 400;
  font-variation-settings: 'wght' 400;

}
:global(.fw5) {
  font-weight: 500;
  font-variation-settings: 'wght' 500;

}
:global(.fw6) {
  font-weight: 600;
  font-variation-settings: 'wght' 600;

}
:global(.fw7) {
  font-weight: 700;
  font-variation-settings: 'wght' 700;

}
:global(.fw8) {
  font-weight: 800;
  font-variation-settings: 'wght' 800;

}
:global(.fw9) {
  font-weight: 900;
  font-variation-settings: 'wght' 900;

}

:global(.hover-fw1:hover) {
  font-variation-settings: 'wght' 100;

}

:global(.hover-fw2:hover) {
  font-variation-settings: 'wght' 200;

}

:global(.hover-fw3:hover) {
  font-variation-settings: 'wght' 300;

}

:global(.hover-fw4:hover) {
  font-variation-settings: 'wght' 400;

}

:global(.hover-fw5:hover) {
  font-variation-settings: 'wght' 500;

}

:global(.hover-fw6:hover) {
  font-variation-settings: 'wght' 600;

}

:global(.hover-fw7:hover) {
  font-variation-settings: 'wght' 700;

}

:global(.hover-fw8:hover) {
  font-variation-settings: 'wght' 800;

}

:global(.hover-fw9:hover) {
  font-variation-settings: 'wght' 900;

}

</style>