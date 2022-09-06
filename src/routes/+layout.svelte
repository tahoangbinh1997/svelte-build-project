<script lang="ts">
	import LeftSideBar from '$lib/left-sidebar/LeftSideBar.svelte'
	import RightSideBar from '$lib/right-sidebar/RightSideBar.svelte'
	import { onMount } from 'svelte'
	import { reveal } from '../common/utils'
	import '../app.scss'

	onMount(() => reveal())
</script>

<svelte:window on:scroll={reveal} />
<div id="colorlib-page">
	<LeftSideBar />
	<div id="colorlib-main">
		<section class="ftco-section ftco-no-pt ftco-no-pb">
			<div class="container">
				<div class="row d-flex">
					<div class="col-xl-8 py-5 px-md-5 animated">
						<main>
							<slot />
						</main>
					</div>
					<div class="col-xl-4 sidebar bg-light pt-5 animated" id="right-sidebar">
						<RightSideBar />
					</div>
				</div>
			</div>
		</section>
	</div>
</div>
<svelte:head>
	<link
		href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700"
		rel="stylesheet"
	/>
	<link
		href="https://fonts.googleapis.com/css?family=Lora:400,400i,700,700i&amp;display=swap"
		rel="stylesheet"
	/>
	<link
		href="https://fonts.googleapis.com/css?family=Abril+Fatface&amp;display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<style>
	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 1024px;
		margin: 0 auto;
		box-sizing: border-box;
	}
</style>
