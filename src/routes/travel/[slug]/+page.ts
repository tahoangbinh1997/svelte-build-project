// import { error } from '@sveltejs/kit'
import API from '$lib/api'

// we don't need any JS on this page, though we'll load
// it in dev so that we get hot module replacement...
export const csr = true

export const ssr = false

// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in prod
export const prerender = true

type Post = {
	attributes: {
		Title: string
		Description: string
		Content: string
		Thumbnail: any
		Slug: string
		categories: any
		comments: any
		publishedAt: string
		createdBy: any
	}
	id: number
}

type Category = {
	attributes: {
		Title: string
		posts: any
	}
	id: number
}

type Tag = {
	attributes: {
		Title: string
	}
	id: number
}

type DetailPost = {
	attributes: {
		Content: string
		Description: string
		Slug: string
		Thumbnail: any
		Title: string
		createdAt: string
		categories: any
		locale: string
		publishedAt: string
		updatedAt: string
		updatedBy: any
		comments: any
	}
	id: number
}

export const load = async ({ params }) => {
	// locals.userid comes from src/hooks.js

	const data = {
		posts: [] as Post[],
		categories: [] as Category[],
		tags: [] as Tag[],
		detail_post: {} as DetailPost
	}

	const response = await Promise.all([
		API.get('categories?populate=*', {}),
		API.get('posts?populate=*', {}),
		API.get('tags', {}),
		API.get(`posts/${params.slug}?populate=*`, {})
	])

	if (!response[0].data) {
		data.categories = [] as Category[]
	} else {
		data.categories = response[0].data as Category[]
	}

	if (!response[1].data) {
		data.posts = [] as Post[]
	} else {
		data.posts = response[1].data as Post[]
	}

	if (!response[2].data) {
		data.tags = [] as Tag[]
	} else {
		data.tags = response[2].data as Tag[]
	}

	if (!response[3].data) {
		data.detail_post = {} as DetailPost
	} else {
		data.detail_post = response[3].data as DetailPost
	}

	return data
}

/** @type {import('./$types').Actions} */
// export const actions = {
// 	add: async ({ request, locals }) => {
// 		console.log('request: ', request)
// 		debugger

// 		// const form = await request.formData()

// 		// await api('POST', `todos/${locals.userid}`, {
// 		// 	text: form.get('text')
// 		// })
// 	},
// 	// edit: async ({ request, locals }) => {
// 	// 	const form = await request.formData()

// 	// 	await api('PATCH', `todos/${locals.userid}/${form.get('uid')}`, {
// 	// 		text: form.get('text')
// 	// 	})
// 	// },
// 	// toggle: async ({ request, locals }) => {
// 	// 	const form = await request.formData()

// 	// 	await api('PATCH', `todos/${locals.userid}/${form.get('uid')}`, {
// 	// 		done: !!form.get('done')
// 	// 	})
// 	// },
// 	// delete: async ({ request, locals }) => {
// 	// 	const form = await request.formData()

// 	// 	await api('DELETE', `todos/${locals.userid}/${form.get('uid')}`)
// 	// }
// }
