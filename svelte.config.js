/** @type {import('@sveltejs/kit').Config} */
import vercel from '@sveltejs/adapter-vercel';
import path from 'path'; // dev.to/brittneypostma/make-pathing-easier-with-aliases-in-sveltekit-37l0

const config = {
  kit: {
    adapter: vercel(),

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
