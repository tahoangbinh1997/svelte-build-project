import { dev } from '$app/environment'

// we don't need any JS on this page, though we'll load
// it in dev so that we get hot module replacement...
export const csr = dev

export const ssr = true

// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in prod
export const prerender = true

// import { error } from '@sveltejs/kit'
import API from '../lib/api'

type Pokemon = {
	name: string
	url: string
}

export const load = async () => {
	// locals.userid comes from src/hooks.js
	const response = await API.get('pokemon/', {})

	if (!response.results) {
		// user hasn't created a todo list.
		// start with an empty array
		return {
			pokemons: [] as Pokemon[]
		}
	}

	return {
		pokemons: response.results as Pokemon[]
	}

	// throw error(response.message)
}

export const POST = async ({ request, locals }) => {
	const form = await request.formData()

	await API.post(`todos/${locals.userid}`, {
		text: form.get('text')
	})
}

export const PATCH = async ({ request, locals }) => {
	const form = await request.formData()

	await API.patch(`todos/${locals.userid}/${form.get('uid')}`, {
		text: form.has('text') ? form.get('text') : undefined,
		done: form.has('done') ? !!form.get('done') : undefined
	})
}

export const DELETE = async ({ request, locals }) => {
	const form = await request.formData()

	await API.delete(`todos/${locals.userid}/${form.get('uid')}`, {})
}
