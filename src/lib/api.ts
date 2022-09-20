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
			'Bearer 2f1657885c0918f47bd8897084484224fdbb138f340a744142612a87a31f503ffc82d8e9cfc194c474192fdfb68749c9e678f09fae48aa4bc15067908a2b394ae9ee059dc619f879b5d84c45b05ff1e1d6d0b977397f5e5c85401cfeceef02f6bc5bc578862e799ad3df238d9098ba1354917062683e98533b6b75552ace0104'
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
