import netlify from '@sveltejs/adapter-auto'
import preprocess from 'svelte-preprocess'
import { readFile } from 'fs/promises'

const json = JSON.parse(await readFile(new URL('./package.json', import.meta.url)))

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: netlify()
	},

	// hydrate the <div id="svelte"> element in src/app.html
	target: '#svelte',

	vite: {
		ssr: {
			noExternal: Object.keys(json.dependencies || {})
		}
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
