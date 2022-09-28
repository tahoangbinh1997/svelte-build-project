<script lang="ts">
	import { formatDate } from '$lib/utils/utils'

	export let sideBarData
</script>

<div class="sidebar-box pt-md-4" data-aos="fade-up">
	<form action="#" class="search-form">
		<div class="form-group">
			<span class="icon icon-search" />
			<input type="text" class="form-control" placeholder="Type a keyword and hit enter" />
		</div>
	</form>
</div>
<div class="sidebar-box" data-aos="fade-up">
	<h3 class="sidebar-heading">Categories</h3>
	<ul class="categories">
		{#each sideBarData?.categories || [] as category}
			<!-- svelte-ignore a11y-invalid-attribute -->
			<li>
				<a href="#"
					>{category?.attributes?.Name || ''}
					<span>({category?.attributes?.posts?.data?.length || 0})</span></a
				>
			</li>
		{/each}
	</ul>
</div>
<div class="sidebar-box" data-aos="fade-up">
	<h3 class="sidebar-heading">Popular Articles</h3>
	{#each sideBarData?.posts || [] as post}
		<div class="block-21 mb-4 d-flex">
			<div
				class="blog-img mr-4"
				style="background-image:url(http://localhost:1337{post?.attributes?.Thumbnail?.data
					?.attributes?.url || ''})"
			/>
			<div class="text">
				<h3 class="heading">
					<!-- svelte-ignore a11y-invalid-attribute -->
					<a href="#">{post?.attributes?.Title}</a>
				</h3>
				<div class="meta">
					<!-- svelte-ignore a11y-invalid-attribute -->
					<div>
						<a href="#"
							><span class="icon-calendar" />
							{formatDate(post.attributes.publishedAt, 'YYYY-MM-DD')}</a
						>
					</div>
					<!-- svelte-ignore a11y-invalid-attribute -->
					<!-- <div><a href="#"><span class="icon-person" /> Dave Lewis</a></div> -->
					<!-- svelte-ignore a11y-invalid-attribute -->
					<div>
						<a href="#"
							><span class="icon-chat" /> {post?.attributes?.comments?.data?.length || 0}</a
						>
					</div>
				</div>
			</div>
		</div>
	{/each}
</div>
<div class="sidebar-box" data-aos="fade-up">
	<h3 class="sidebar-heading">Tag Cloud</h3>
	<ul class="tagcloud">
		{#each sideBarData?.tags || [] as tag}
			<!-- svelte-ignore a11y-invalid-attribute -->
			<a href="#" class="tag-cloud-link">{tag?.attributes?.Name || ''}</a>
		{/each}
	</ul>
</div>
<div
	class="sidebar-box subs-wrap img py-4"
	data-aos="fade-up"
	data-aos-offset="200"
	data-aos-delay="200"
	style="background-image:url(/images/xbg_1.jpg.pagespeed.ic.yyDakF8d8Y.jpg)"
>
	<div class="overlay" />
	<h3 class="mb-4 sidebar-heading">Newsletter</h3>
	<p class="mb-4">Far far away, behind the word mountains, far from the countries Vokalia</p>
	<form action="#" class="subscribe-form">
		<div class="form-group">
			<input type="text" class="form-control" placeholder="Email Address" />
			<input type="submit" value="Subscribe" class="mt-2 btn btn-white submit" />
		</div>
	</form>
</div>
<div class="sidebar-box" data-aos="fade-up">
	<h3 class="sidebar-heading">Archives</h3>
	<ul class="categories">
		<!-- svelte-ignore a11y-invalid-attribute -->
		<li><a href="#">Decob14 2018 <span>(10)</span></a></li>
		<!-- svelte-ignore a11y-invalid-attribute -->
		<li><a href="#">September 2018 <span>(6)</span></a></li>
		<!-- svelte-ignore a11y-invalid-attribute -->
		<li><a href="#">August 2018 <span>(8)</span></a></li>
		<!-- svelte-ignore a11y-invalid-attribute -->
		<li><a href="#">July 2018 <span>(2)</span></a></li>
		<!-- svelte-ignore a11y-invalid-attribute -->
		<li><a href="#">June 2018 <span>(7)</span></a></li>
		<!-- svelte-ignore a11y-invalid-attribute -->
		<li><a href="#">May 2018 <span>(5)</span></a></li>
	</ul>
</div>
<div class="sidebar-box" data-aos="fade-up">
	<h3 class="sidebar-heading">Paragraph</h3>
	<p>
		Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus itaque, autem necessitatibus
		voluptate quod mollitia delectus aut.
	</p>
</div>
