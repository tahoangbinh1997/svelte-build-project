export function reveal() {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const reveals: any = document?.querySelectorAll('.animated')

	// eslint-disable-next-line @typescript-eslint/no-inferrable-types
	for (let i: number = 0; i < reveals.length; i++) {
		// if (reveals[i].classList.contains('animate-fade-in')) {
		// 	reveals[i].style.translateY = '0px'
		// 	reveals[i].classList.add('fadeIn')
		// 	continue
		// }

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
