<script lang="ts">
	import { onMount } from 'svelte'
	import { loading } from '$lib/store/index'

	onMount(() => {
		loading.set(true)
		setTimeout(function () {
			loading.set(false)
		}, 500)
	})
</script>

<svelte:head>
	<title>About</title>
	<meta name="description" content="About this app" />
</svelte:head>

{#if !$loading}
	<section class="ftco-about img ftco-section ftco-no-pt ftco-no-pb" id="about-section">
		<div class="container-fluid px-0">
			<div class="row d-flex height-100vh">
				<div class="col-md-6 d-flex">
					<div
						data-aos="fade-in"
						class="img d-flex align-self-stretch align-items-center js-fullheight"
						style="background-image:url(/images/xabout.jpg.pagespeed.ic.Ws6-XUQzFw.jpg)"
					/>
				</div>
				<div class="col-md-6 d-flex align-items-center" data-aos="fade-up">
					<div class="text px-4 pt-5 pt-md-0 px-md-4 pr-md-5">
						<h2 class="mb-4">I'm <span>Andrea Moore</span> a Scotish Blogger &amp; Explorer</h2>
						<p>
							A small river named Duden flows by their place and supplies it with the necessary
							regelialia. It is a paradisematic country, in which roasted parts of sentences fly
							into your mouth. It is a paradisematic country, in which roasted parts of sentences
							fly into your mouth.
						</p>
					</div>
				</div>
			</div>
		</div>
	</section>
{/if}
