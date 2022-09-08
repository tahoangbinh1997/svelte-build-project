import adapter from '@sveltejs/adapter-auto'
import preprocess from 'svelte-preprocess'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: adapter(),

		// Override http methods in the Todo forms
		methodOverride: {
			allowed: ['PATCH', 'DELETE']
		}
	},
	files: {
		assets: 'static',
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
