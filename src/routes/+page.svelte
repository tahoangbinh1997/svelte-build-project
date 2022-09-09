<script lang="ts">
	import Pagination from '../templates/commons/pagination/Pagination.svelte'
	import RightSideBar from '../templates/commons/right-sidebar/RightSideBar.svelte'
	import { onMount } from 'svelte'
	import { loading } from '../store/index'

	onMount(() => {
		loading.set(true)
		setTimeout(function () {
			loading.set(false)
		}, 500)
	})
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Home app" />
</svelte:head>
{#if !$loading}
	<section class="ftco-section ftco-no-pt ftco-no-pb">
		<div class="container">
			<div class="row d-flex">
				<div class="col-xl-8 py-5 px-md-5" data-aos="fade-in">
					<div class="row pt-md-4">
						<div class="col-md-12">
							<div class="blog-entry d-md-flex" data-aos="fade-up">
								<!-- svelte-ignore a11y-missing-content -->
								<a
									href="/travel/hello-world"
									class="img img-2"
									style="background-image:url(/images/ximage_1.jpg.pagespeed.ic.HkfdBUS8CU.jpg)"
								/>
								<div class="text text-2 pl-md-4">
									<h3 class="mb-2">
										<a href="/travel/hello-world">A Loving Heart is the Truest Wisdom</a>
									</h3>
									<div class="meta-wrap">
										<p class="meta">
											<span><i class="icon-calendar mr-2" />June 28, 2019</span>
											<span
												><a href="/travel/hello-world"><i class="icon-folder-o mr-2" />Travel</a
												></span
											>
											<span><i class="icon-comment2 mr-2" />5 Comment</span>
										</p>
									</div>
									<p class="mb-4">
										A small river named Duden flows by their place and supplies it with the
										necessary regelialia.
									</p>
									<!-- svelte-ignore a11y-invalid-attribute -->
									<p>
										<a href="travel/hello-world" class="btn-custom"
											>Read More <span class="ion-ios-arrow-forward" /></a
										>
									</p>
								</div>
							</div>
						</div>
						<div class="col-md-12">
							<div class="blog-entry d-md-flex" data-aos="fade-up">
								<!-- svelte-ignore a11y-missing-content -->
								<a
									href="/travel/hello-world"
									class="img img-2"
									style="background-image:url(/images/ximage_2.jpg.pagespeed.ic.hn6JeducHP.jpg)"
								/>
								<div class="text text-2 pl-md-4">
									<h3 class="mb-2">
										<a href="/travel/hello-world">Great Things Never Came from Comfort Zone</a>
									</h3>
									<div class="meta-wrap">
										<p class="meta">
											<span><i class="icon-calendar mr-2" />June 28, 2019</span>
											<span
												><a href="/travel/hello-world"><i class="icon-folder-o mr-2" />Travel</a
												></span
											>
											<span><i class="icon-comment2 mr-2" />5 Comment</span>
										</p>
									</div>
									<p class="mb-4">
										A small river named Duden flows by their place and supplies it with the
										necessary regelialia.
									</p>
									<!-- svelte-ignore a11y-invalid-attribute -->
									<p>
										<a href="travel/hello-world" class="btn-custom"
											>Read More <span class="ion-ios-arrow-forward" /></a
										>
									</p>
								</div>
							</div>
						</div>
						<div class="col-md-12">
							<div class="blog-entry d-md-flex" data-aos="fade-up">
								<!-- svelte-ignore a11y-missing-content -->
								<a
									href="/travel/hello-world"
									class="img img-2"
									style="background-image:url(/images/ximage_3.jpg.pagespeed.ic.KZ6VUtC5Rz.jpg)"
								/>
								<div class="text text-2 pl-md-4">
									<h3 class="mb-2"><a href="/travel/hello-world">Paths Are Made by Walking</a></h3>
									<div class="meta-wrap">
										<p class="meta">
											<span>Dec 14, 2018</span>
											<span><a href="/travel/hello-world">Lifestyle</a></span>
											<span>5 Comment</span>
										</p>
									</div>
									<p class="mb-4">
										A small river named Duden flows by their place and supplies it with the
										necessary regelialia.
									</p>
									<!-- svelte-ignore a11y-invalid-attribute -->
									<p>
										<a href="travel/hello-world" class="btn-custom"
											>Read More <span class="ion-ios-arrow-forward" /></a
										>
									</p>
								</div>
							</div>
						</div>
						<div class="col-md-12">
							<div class="blog-entry d-md-flex" data-aos="fade-up">
								<!-- svelte-ignore a11y-missing-content -->
								<a
									href="/travel/hello-world"
									class="img img-2"
									style="background-image:url(/images/ximage_4.jpg.pagespeed.ic.5KyQb-yudD.jpg)"
								/>
								<div class="text text-2 pl-md-4">
									<h3 class="mb-2">
										<a href="/travel/hello-world">The Secret of Getting Ahead is Getting Started</a>
									</h3>
									<div class="meta-wrap">
										<p class="meta">
											<span>Dec 14, 2018</span>
											<span><a href="/travel/hello-world">Nature</a></span>
											<span>5 Comment</span>
										</p>
									</div>
									<p class="mb-4">
										A small river named Duden flows by their place and supplies it with the
										necessary regelialia.
									</p>
									<!-- svelte-ignore a11y-invalid-attribute -->
									<p>
										<a href="travel/hello-world" class="btn-custom"
											>Read More <span class="ion-ios-arrow-forward" /></a
										>
									</p>
								</div>
							</div>
						</div>
						<div class="col-md-12">
							<div class="blog-entry d-md-flex" data-aos="fade-up">
								<!-- svelte-ignore a11y-missing-content -->
								<a
									href="/travel/hello-world"
									class="img img-2"
									style="background-image:url(/images/ximage_5.jpg.pagespeed.ic.xoHIk35385.jpg)"
								/>
								<div class="text text-2 pl-md-4">
									<h3 class="mb-2">
										<a href="/travel/hello-world">You Can't Blame Gravity for Falling in Love</a>
									</h3>
									<div class="meta-wrap">
										<p class="meta">
											<span>Dec 14, 2018</span>
											<span><a href="/travel/hello-world">Lifestyle</a></span>
											<span>5 Comment</span>
										</p>
									</div>
									<p class="mb-4">
										A small river named Duden flows by their place and supplies it with the
										necessary regelialia.
									</p>
									<!-- svelte-ignore a11y-invalid-attribute -->
									<p>
										<a href="travel/hello-world" class="btn-custom"
											>Read More <span class="ion-ios-arrow-forward" /></a
										>
									</p>
								</div>
							</div>
						</div>
						<div class="col-md-12">
							<div class="blog-entry d-md-flex" data-aos="fade-up">
								<!-- svelte-ignore a11y-missing-content -->
								<a
									href="/travel/hello-world"
									class="img img-2"
									style="background-image:url(/images/ximage_6.jpg.pagespeed.ic.8DytWEXWGZ.jpg)"
								/>
								<div class="text text-2 pl-md-4">
									<h3 class="mb-2">
										<a href="/travel/hello-world">You Can't Blame Gravity for Falling in Love</a>
									</h3>
									<div class="meta-wrap">
										<p class="meta">
											<span>Dec 14, 2018</span>
											<span><a href="/travel/hello-world">Travel</a></span>
											<span>5 Comment</span>
										</p>
									</div>
									<p class="mb-4">
										A small river named Duden flows by their place and supplies it with the
										necessary regelialia.
									</p>
									<!-- svelte-ignore a11y-invalid-attribute -->
									<p>
										<a href="travel/hello-world" class="btn-custom"
											>Read More <span class="ion-ios-arrow-forward" /></a
										>
									</p>
								</div>
							</div>
						</div>
						<div class="col-md-12">
							<div class="blog-entry d-md-flex" data-aos="fade-up">
								<!-- svelte-ignore a11y-missing-content -->
								<a
									href="/travel/hello-world"
									class="img img-2"
									style="background-image:url(/images/ximage_7.jpg.pagespeed.ic.od6DA35UIk.jpg)"
								/>
								<div class="text text-2 pl-md-4">
									<h3 class="mb-2">
										<a href="/travel/hello-world">You Can't Blame Gravity for Falling in Love</a>
									</h3>
									<div class="meta-wrap">
										<p class="meta">
											<span>Dec 14, 2018</span>
											<span><a href="/travel/hello-world">Travel</a></span>
											<span>5 Comment</span>
										</p>
									</div>
									<p class="mb-4">
										A small river named Duden flows by their place and supplies it with the
										necessary regelialia.
									</p>
									<!-- svelte-ignore a11y-invalid-attribute -->
									<p>
										<a href="travel/hello-world" class="btn-custom"
											>Read More <span class="ion-ios-arrow-forward" /></a
										>
									</p>
								</div>
							</div>
						</div>
						<div class="col-md-12">
							<div class="blog-entry d-md-flex" data-aos="fade-up">
								<!-- svelte-ignore a11y-missing-content -->
								<a
									href="/travel/hello-world"
									class="img img-2"
									style="background-image:url(/images/ximage_8.jpg.pagespeed.ic.k6KCknfXQH.jpg)"
								/>
								<div class="text text-2 pl-md-4">
									<h3 class="mb-2">
										<a href="/travel/hello-world">You Can't Blame Gravity for Falling in Love</a>
									</h3>
									<div class="meta-wrap">
										<p class="meta">
											<span><i class="icon-calendar mr-2" />June 28, 2019</span>
											<span
												><a href="/travel/hello-world"><i class="icon-folder-o mr-2" />Travel</a
												></span
											>
											<span><i class="icon-comment2 mr-2" />5 Comment</span>
										</p>
									</div>
									<p class="mb-4">
										A small river named Duden flows by their place and supplies it with the
										necessary regelialia.
									</p>
									<!-- svelte-ignore a11y-invalid-attribute -->
									<p>
										<a href="travel/hello-world" class="btn-custom"
											>Read More <span class="ion-ios-arrow-forward" /></a
										>
									</p>
								</div>
							</div>
						</div>
						<div class="col-md-12">
							<div class="blog-entry d-md-flex" data-aos="fade-up">
								<!-- svelte-ignore a11y-missing-content -->
								<a
									href="/travel/hello-world"
									class="img img-2"
									style="background-image:url(/images/ximage_9.jpg.pagespeed.ic.E1wf1dWUIg.jpg)"
								/>
								<div class="text text-2 pl-md-4">
									<h3 class="mb-2">
										<a href="/travel/hello-world">You Can't Blame Gravity for Falling in Love</a>
									</h3>
									<div class="meta-wrap">
										<p class="meta">
											<span><i class="icon-calendar mr-2" />June 28, 2019</span>
											<span
												><a href="/travel/hello-world"><i class="icon-folder-o mr-2" />Travel</a
												></span
											>
											<span><i class="icon-comment2 mr-2" />5 Comment</span>
										</p>
									</div>
									<p class="mb-4">
										A small river named Duden flows by their place and supplies it with the
										necessary regelialia.
									</p>
									<!-- svelte-ignore a11y-invalid-attribute -->
									<p>
										<a href="travel/hello-world" class="btn-custom"
											>Read More <span class="ion-ios-arrow-forward" /></a
										>
									</p>
								</div>
							</div>
						</div>
						<div class="col-md-12">
							<div class="blog-entry d-md-flex" data-aos="fade-up">
								<!-- svelte-ignore a11y-missing-content -->
								<a
									href="/travel/hello-world"
									class="img img-2"
									style="background-image:url(/images/ximage_10.jpg.pagespeed.ic.ayKelK-QSW.jpg)"
								/>
								<div class="text text-2 pl-md-4">
									<h3 class="mb-2">
										<a href="/travel/hello-world">You Can't Blame Gravity for Falling in Love</a>
									</h3>
									<div class="meta-wrap">
										<p class="meta">
											<span>Dec 14, 2018</span>
											<span><a href="/travel/hello-world">Lifestyle</a></span>
											<span>5 Comment</span>
										</p>
									</div>
									<p class="mb-4">
										A small river named Duden flows by their place and supplies it with the
										necessary regelialia.
									</p>
									<!-- svelte-ignore a11y-invalid-attribute -->
									<p>
										<a href="travel/hello-world" class="btn-custom"
											>Read More <span class="ion-ios-arrow-forward" /></a
										>
									</p>
								</div>
							</div>
						</div>
						<div class="col-md-12">
							<!-- svelte-ignore a11y-missing-content -->
							<div class="blog-entry d-md-flex" data-aos="fade-up">
								<a
									href="/travel/hello-world"
									class="img img-2"
									style="background-image:url(/images/ximage_11.jpg.pagespeed.ic.6xbzAJITq9.jpg)"
								/>
								<div class="text text-2 pl-md-4">
									<h3 class="mb-2">
										<a href="/travel/hello-world">You Can't Blame Gravity for Falling in Love</a>
									</h3>
									<div class="meta-wrap">
										<p class="meta">
											<span><i class="icon-calendar mr-2" />June 28, 2019</span>
											<span
												><a href="/travel/hello-world"><i class="icon-folder-o mr-2" />Travel</a
												></span
											>
											<span><i class="icon-comment2 mr-2" />5 Comment</span>
										</p>
									</div>
									<p class="mb-4">
										A small river named Duden flows by their place and supplies it with the
										necessary regelialia.
									</p>
									<!-- svelte-ignore a11y-invalid-attribute -->
									<p>
										<a href="travel/hello-world" class="btn-custom"
											>Read More <span class="ion-ios-arrow-forward" /></a
										>
									</p>
								</div>
							</div>
						</div>
						<div class="col-md-12">
							<div class="blog-entry d-md-flex" data-aos="fade-up">
								<!-- svelte-ignore a11y-missing-content -->
								<a
									href="/travel/hello-world"
									class="img img-2"
									style="background-image:url(/images/ximage_12.jpg.pagespeed.ic.U-egCdVO1Y.jpg)"
								/>
								<div class="text text-2 pl-md-4">
									<h3 class="mb-2">
										<a href="/travel/hello-world">You Can't Blame Gravity for Falling in Love</a>
									</h3>
									<div class="meta-wrap">
										<p class="meta">
											<span><i class="icon-calendar mr-2" />June 28, 2019</span>
											<span
												><a href="/travel/hello-world"><i class="icon-folder-o mr-2" />Travel</a
												></span
											>
											<span><i class="icon-comment2 mr-2" />5 Comment</span>
										</p>
									</div>
									<p class="mb-4">
										A small river named Duden flows by their place and supplies it with the
										necessary regelialia.
									</p>
									<!-- svelte-ignore a11y-invalid-attribute -->
									<p>
										<a href="travel/hello-world" class="btn-custom"
											>Read More <span class="ion-ios-arrow-forward" /></a
										>
									</p>
								</div>
							</div>
						</div>
					</div>
					<div class="row">
						<div class="col">
							<Pagination />
						</div>
					</div>
				</div>
				<div
					class="col-xl-4 sidebar bg-light pt-5"
					data-aos="fade-up"
					data-aos-offset="200"
					data-aos-delay="100"
					id="right-sidebar"
				>
					<RightSideBar />
				</div>
			</div>
		</div>
	</section>
{/if}
