// Api.js
import axios from 'axios'

// Create a instance of axios to use the same base url.
const axiosAPI = axios.create({
	baseURL: 'http://localhost:1337/api/' // it's not recommended to have this info here.
})

// implement a method to execute all the request from here.
const apiRequest: Function = (method: string, url: string, request: string) => {
	const headers: any = {
		authorization:
			'Bearer 07ac798cd3ee82291ab11f3af33f995b533cf56301c07a6505c09bd74a9cea79cc35158af4c87b397ab0d13704d942ee835af1cb7ae17c3dcbdbb927fc2b01dbc0d5a53058ab3a49c6f8071d6c299498967dc4de5e46efaa10037d6a57900f7d148ecd245b9a2347d6e892aee9c189bdf8210a6c34bb1165f6779ba80f9cae14'
	}
	//using the axios instance to perform the request that received from each http method
	return axiosAPI({
		method,
		url,
		data: request,
		headers
	})
		.then((res: any) => {
			return Promise.resolve(res.data)
		})
		.catch((err: any) => {
			return Promise.reject(err)
		})
}

// function to execute the http get request
const get: Function = (url, request) => apiRequest('get', url, request)

// function to execute the http delete request
const deleteRequest: Function = (url, request) => apiRequest('delete', url, request)

// function to execute the http post request
const post: Function = (url, request) => apiRequest('post', url, request)

// function to execute the http put request
const put: Function = (url, request) => apiRequest('put', url, request)

// function to execute the http path request
const patch: Function = (url, request) => apiRequest('patch', url, request)

// expose your method to other services or actions
const API = {
	get,
	delete: deleteRequest,
	post,
	put,
	patch
}
export default API
