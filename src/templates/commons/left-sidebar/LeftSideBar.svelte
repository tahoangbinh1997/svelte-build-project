<script lang="ts">
	import { page } from '$app/stores'
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const currentYear: any = String(new Date().getFullYear())
</script>

<!-- svelte-ignore a11y-invalid-attribute -->
<a href="#" class="js-colorlib-nav-toggle colorlib-nav-toggle"><i /></a>
<!-- svelte-ignore a11y-no-redundant-roles -->
<aside id="colorlib-aside" role="complementary" class="js-fullheight" data-aos="fade-up">
	<!-- svelte-ignore a11y-no-redundant-roles -->
	<nav id="colorlib-main-menu" role="navigation">
		<ul>
			<li class:colorlib-active={$page.url.pathname === '/'}>
				<a href="/">Home</a>
			</li>
			<li class:colorlib-active={$page.url.pathname === '/fashion'}>
				<a href="/fashion">Fashion</a>
			</li>
			<li
				class:colorlib-active={$page.url.pathname === '/travel' ||
					$page.url.pathname.includes('/travel/')}
			>
				<a href="/travel">Travel</a>
			</li>
			<li class:colorlib-active={$page.url.pathname === '/about'}>
				<a href="/about">About</a>
			</li>
			<li class:colorlib-active={$page.url.pathname === '/contact'}>
				<a href="/contact">Contact</a>
			</li>
		</ul>
	</nav>
	<div class="colorlib-footer">
		<h1 id="colorlib-logo" class="mb-4">
			<!-- svelte-ignore a11y-invalid-attribute -->
			<a href="/" style="background-image:url(/images/xbg_1.jpg.pagespeed.ic.yyDakF8d8Y.jpg)"
				>Andrea <span>Moore</span></a
			>
		</h1>
		<div class="mb-4">
			<h3>Subscribe for newsletter</h3>
			<form action="#" class="colorlib-subscribe-form">
				<div class="form-group d-flex">
					<div class="icon"><span class="icon-paper-plane" /></div>
					<input type="text" class="form-control" placeholder="Enter Email Address" />
				</div>
			</form>
		</div>
		<p class="pfooter">
			Copyright &copy;
			{currentYear}
			All rights reserved | This template is made with
			<i class="icon-heart" aria-hidden="true" />
			by <a href="https://colorlib.com/" target="_blank">Colorlib</a>
		</p>
	</div>
</aside>
