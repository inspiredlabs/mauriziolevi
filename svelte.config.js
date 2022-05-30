/** @type {import('@sveltejs/kit').Config} */
import vercel from '@sveltejs/adapter-vercel';
import path from 'path'; // dev.to/brittneypostma/make-pathing-easier-with-aliases-in-sveltekit-37l0
import preprocess from 'svelte-preprocess';

const config = {
  preprocess: [
    preprocess({
      postcss: true,
    }),
  ],
  //preprocess: [preprocess()],
  // mdsvex(mdsvexConfig), https://el3um4s.medium.com/sveltekit-github-pages-4fe2844773de
  // perhaps you need: npmjs.com/package/glory-svelte-preprocess/v/0.2.2?activeTab=readme
  kit: {
    prerender: {
			// This can be false if you're using a fallback (i.e. SPA mode)
			default: true
		},
    adapter: vercel({
			// default options are shown
			pages: 'build',
			assets: 'build',
			precompress: false,
      fallback: 'index.html',
      // fallback: null,
		}),

    // paths: {
    //   assets: '',
    //   base: '' //kit.svelte.dev/docs/configuration
    // },

		vite: {
      resolve: {
        alias: {
					// from: stackoverflow.com/questions/71481056/sveltekit-how-to-refer-to-the-routes-folder-from-components-and-endpoints-via
          //$components: path.resolve('./src/lib/components'),

          // learn: joshcollinsworth.com/blog/build-static-sveltekit-markdown-blog
					//$src: path.resolve('./src/'),
          //$lib: path.resolve('./src/lib'),
					//$routes: path.resolve('./src/routes'),
					//$images: path.resolve('./static/images/'),

					//$baseUrl: path.resolve('https://offline-phi.vercel.app/')
					// VITE glob image import: stackoverflow.com/questions/68060723/glob-import-of-image-urls-in-sveltekit
					// sveltekit base url vite:
          //$stores: path.resolve('./src/stores'),
        },
      },
    },
  },
};

export default config;
