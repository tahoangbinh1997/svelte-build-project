import adapter from '@sveltejs/adapter-static'
import preprocess from 'svelte-preprocess'
import { readFile } from 'fs/promises'
import { searchForWorkspaceRoot } from 'vite'

const json = JSON.parse(await readFile(new URL('./package.json', import.meta.url)))

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),
	extensions: ['.svelte', '.md'],

	kit: {
		adapter: adapter({
			// default options are shown. On some platforms
			// these options are set automatically — see below
			pages: 'build',
			assets: 'build',
			fallback: 'app.html',
			precompress: false
		})
	},

	// hydrate the <div id="svelte"> element in src/app.html
	target: '#svelte',

	vite: {
		build: {
			rollupOptions: {
				output: {
					manualChunks: undefined
				}
			}
		},
		ssr: {
			optimizeDeps: Object.keys(json.dependencies || {})
		}
	},

	files: {
		assets: 'static',
		ssr: false,
		hydrate: true,
		router: true,
		hooks: {
			// client: 'src/hooks.client',
			server: 'src/hooks.server'
		},
		lib: 'src/lib',
		// params: 'src/params',
		routes: 'src/routes',
		// serviceWorker: 'src/service-worker',
		template: 'src/app.html'
		// errorTemplate: 'src/error.html'
	},

	server: {
		fs: {
			// Allow serving files from one level up to the project root
			allow: [searchForWorkspaceRoot(process.cwd()), '../', '../..']
		}
	}
}

export default config
