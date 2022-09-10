import adapter from '@sveltejs/adapter-auto'
import preprocess from 'svelte-preprocess'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: adapter({
			// if true, will create a Netlify Edge Function rather
			// than using standard Node-based functions
			edge: false,

			// if true, will split your app into multiple functions
			// instead of creating a single one for the entire app.
			// if `edge` is true, this option cannot be used
			split: false
		})
	},
	files: {
		assets: 'static',
		ssr: true,
		hydrate: true,
		router: true,
		// hooks: {
		// 	client: 'src/hooks.client',
		// 	server: 'src/hooks.server'
		// },
		lib: 'src/lib',
		// params: 'src/params',
		routes: 'src/routes',
		// serviceWorker: 'src/service-worker',
		appTemplate: 'src/app.html'
		// errorTemplate: 'src/error.html'
	}
}

export default config
