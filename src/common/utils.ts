export function reveal() {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const reveals: any = document?.querySelectorAll('.animated')

	for (let i = 0; i < reveals.length; i++) {
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		const windowHeight: any = window.innerHeight
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		const elementTop: any = reveals[i].getBoundingClientRect().top
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		const elementVisible: any = 0

		if (elementTop < windowHeight - elementVisible) {
			reveals[i].classList.add('active')
		}
	}
}

export function rightBarReveals() {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const rightBarElement: any = document.getElementById('right-sidebar')

	if (rightBarElement) {
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		const reveals: any = rightBarElement.querySelectorAll('.animated')

		for (let i = 0; i < reveals.length; i++) {
			reveals[i].classList.remove('active')
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			// const windowHeight: any = window.innerHeight
			// // eslint-disable-next-line @typescript-eslint/no-explicit-any
			// const elementTop: any = reveals[i].getBoundingClientRect().top
			// // eslint-disable-next-line @typescript-eslint/no-explicit-any
			// const elementVisible: any = 0

			// if (elementTop < windowHeight - elementVisible) {
			// 	reveals[i].classList.add('active')
			// }
		}
	}
}
