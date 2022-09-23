import moment from 'moment'

export const formatDate: Function = (date: string, format: string) => {
	return moment(date).format(format)
}
