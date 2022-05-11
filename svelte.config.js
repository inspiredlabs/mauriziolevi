/** @type {import('@sveltejs/kit').Config} */
import vercel from '@sveltejs/adapter-vercel';
import path from 'path'; // dev.to/brittneypostma/make-pathing-easier-with-aliases-in-sveltekit-37l0

const config = {
  kit: {
    adapter: vercel(),

		vite: {
      resolve: {
        alias: {
          $lib: path.resolve('./src/lib')
        },
      },
    },
  },
};

export default config;
