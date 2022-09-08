<script lang="ts">
	import Pagination from '../../templates/commons/pagination/Pagination.svelte'
	import RightSideBar from '../../templates/commons/right-sidebar/RightSideBar.svelte'
	import { onMount } from 'svelte'
	import { loading } from '../../store/index'

	onMount(() => {
		loading.set(true)
		setTimeout(function () {
			loading.set(false)
		}, 500)
	})
</script>

<svelte:head>
	<title>Travel</title>
	<meta name="description" content="Travel this app" />
</svelte:head>

{#if !$loading}
	<section class="ftco-section ftco-no-pt ftco-no-pb" data-aos="fade-in">
		<div class="container">
			<div class="row d-flex">
				<div class="col-xl-8 px-md-5 py-5">
					<div class="row pt-md-4">
						<div class="col-md-12" data-aos="fade-up">
							<div class="blog-entry-2">
								<!-- svelte-ignore a11y-missing-content -->
								<a
									href="/travel/hello-world"
									class="img"
									style="background-image:url(/images/ximage_1.jpg.pagespeed.ic.HkfdBUS8CU.jpg)"
								/>
								<div class="text pt-4">
									<h3 class="mb-4">
										<!-- svelte-ignore a11y-invalid-attribute -->
										<a href="/travel/hello-world">A Loving Heart is the Truest Wisdom</a>
									</h3>
									<p class="mb-4">
										Even the all-powerful Pointing has no control about the blind texts it is an
										almost unorthographic life One day however a small line of blind text by the
										name of Lorem Ipsum decided to leave for the far World of Grammar.
									</p>
									<div class="author mb-4 d-flex align-items-center">
										<!-- svelte-ignore a11y-missing-content -->
										<!-- svelte-ignore a11y-invalid-attribute -->
										<a
											href="/travel/hello-world"
											class="img"
											style="background-image:url(/images/xperson_1.jpg.pagespeed.ic.P4pHl6glbj.jpg)"
										/>
										<div class="ml-3 info">
											<span>Written by</span>
											<!-- svelte-ignore a11y-invalid-attribute -->
											<h3>
												<!-- svelte-ignore a11y-invalid-attribute -->
												<a href="#">Dave Lewis</a>, <span>June 28, 2019</span>
											</h3>
										</div>
									</div>
									<div class="meta-wrap d-md-flex align-items-center">
										<div class="half order-md-last text-md-right">
											<p class="meta">
												<span><i class="icon-heart" />3</span>
												<span><i class="icon-eye" />100</span>
												<span><i class="icon-comment" />5</span>
											</p>
										</div>
										<div class="half">
											<p>
												<!-- svelte-ignore a11y-invalid-attribute -->
												<a href="#" class="btn btn-primary p-3 px-xl-4 py-xl-3">Continue Reading</a>
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="col-md-12" data-aos="fade-up">
							<div class="blog-entry-2">
								<!-- svelte-ignore a11y-missing-content -->
								<a
									href="/travel/hello-world"
									class="img"
									style="background-image:url(/images/ximage_2.jpg.pagespeed.ic.hn6JeducHP.jpg)"
								/>
								<div class="text pt-4">
									<h3 class="mb-4">
										<!-- svelte-ignore a11y-invalid-attribute -->
										<a href="#">A Loving Heart is the Truest Wisdom</a>
									</h3>
									<p class="mb-4">
										Even the all-powerful Pointing has no control about the blind texts it is an
										almost unorthographic life One day however a small line of blind text by the
										name of Lorem Ipsum decided to leave for the far World of Grammar.
									</p>
									<div class="author mb-4 d-flex align-items-center">
										<!-- svelte-ignore a11y-missing-content -->
										<!-- svelte-ignore a11y-invalid-attribute -->
										<a
											href="#"
											class="img"
											style="background-image:url(/images/xperson_1.jpg.pagespeed.ic.P4pHl6glbj.jpg)"
										/>
										<div class="ml-3 info">
											<span>Written by</span>
											<h3>
												<!-- svelte-ignore a11y-invalid-attribute -->
												<a href="#">Dave Lewis</a>, <span>June 28, 2019</span>
											</h3>
										</div>
									</div>
									<div class="meta-wrap d-md-flex align-items-center">
										<div class="half order-md-last text-md-right">
											<p class="meta">
												<span><i class="icon-heart" />3</span>
												<span><i class="icon-eye" />100</span>
												<span><i class="icon-comment" />5</span>
											</p>
										</div>
										<div class="half">
											<p>
												<!-- svelte-ignore a11y-invalid-attribute -->
												<a href="#" class="btn btn-primary p-3 px-xl-4 py-xl-3">Continue Reading</a>
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="col-md-12" data-aos="fade-up">
							<div class="blog-entry-2">
								<!-- svelte-ignore a11y-missing-content -->
								<a
									href="/travel/hello-world"
									class="img"
									style="background-image:url(/images/ximage_3.jpg.pagespeed.ic.KZ6VUtC5Rz.jpg)"
								/>
								<div class="text pt-4">
									<h3 class="mb-4">
										<!-- svelte-ignore a11y-invalid-attribute -->
										<a href="#">A Loving Heart is the Truest Wisdom</a>
									</h3>
									<p class="mb-4">
										Even the all-powerful Pointing has no control about the blind texts it is an
										almost unorthographic life One day however a small line of blind text by the
										name of Lorem Ipsum decided to leave for the far World of Grammar.
									</p>
									<div class="author mb-4 d-flex align-items-center">
										<!-- svelte-ignore a11y-missing-content -->
										<!-- svelte-ignore a11y-invalid-attribute -->
										<a
											href="#"
											class="img"
											style="background-image:url(/images/xperson_1.jpg.pagespeed.ic.P4pHl6glbj.jpg)"
										/>
										<div class="ml-3 info">
											<span>Written by</span>
											<h3>
												<!-- svelte-ignore a11y-invalid-attribute -->
												<a href="#">Dave Lewis</a>, <span>June 28, 2019</span>
											</h3>
										</div>
									</div>
									<div class="meta-wrap d-md-flex align-items-center">
										<div class="half order-md-last text-md-right">
											<p class="meta">
												<span><i class="icon-heart" />3</span>
												<span><i class="icon-eye" />100</span>
												<span><i class="icon-comment" />5</span>
											</p>
										</div>
										<div class="half">
											<p>
												<!-- svelte-ignore a11y-invalid-attribute -->
												<a href="#" class="btn btn-primary p-3 px-xl-4 py-xl-3">Continue Reading</a>
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="col-md-12" data-aos="fade-up">
							<div class="blog-entry-2">
								<!-- svelte-ignore a11y-missing-content -->
								<a
									href="/travel/hello-world"
									class="img"
									style="background-image:url(/images/ximage_4.jpg.pagespeed.ic.5KyQb-yudD.jpg)"
								/>
								<div class="text pt-4">
									<h3 class="mb-4">
										<!-- svelte-ignore a11y-invalid-attribute -->
										<a href="#">A Loving Heart is the Truest Wisdom</a>
									</h3>
									<p class="mb-4">
										Even the all-powerful Pointing has no control about the blind texts it is an
										almost unorthographic life One day however a small line of blind text by the
										name of Lorem Ipsum decided to leave for the far World of Grammar.
									</p>
									<div class="author mb-4 d-flex align-items-center">
										<!-- svelte-ignore a11y-missing-content -->
										<!-- svelte-ignore a11y-invalid-attribute -->
										<a
											href="#"
											class="img"
											style="background-image:url(/images/xperson_1.jpg.pagespeed.ic.P4pHl6glbj.jpg)"
										/>
										<div class="ml-3 info">
											<span>Written by</span>
											<h3>
												<!-- svelte-ignore a11y-invalid-attribute -->
												<a href="#">Dave Lewis</a>, <span>June 28, 2019</span>
											</h3>
										</div>
									</div>
									<div class="meta-wrap d-md-flex align-items-center">
										<div class="half order-md-last text-md-right">
											<p class="meta">
												<span><i class="icon-heart" />3</span>
												<span><i class="icon-eye" />100</span>
												<span><i class="icon-comment" />5</span>
											</p>
										</div>
										<div class="half">
											<p>
												<!-- svelte-ignore a11y-invalid-attribute -->
												<a href="#" class="btn btn-primary p-3 px-xl-4 py-xl-3">Continue Reading</a>
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="col-md-12" data-aos="fade-up">
							<div class="blog-entry-2">
								<!-- svelte-ignore a11y-missing-content -->
								<a
									href="/travel/hello-world"
									class="img"
									style="background-image:url(/images/ximage_5.jpg.pagespeed.ic.xoHIk35385.jpg)"
								/>
								<div class="text pt-4">
									<h3 class="mb-4">
										<!-- svelte-ignore a11y-invalid-attribute -->
										<a href="#">A Loving Heart is the Truest Wisdom</a>
									</h3>
									<p class="mb-4">
										Even the all-powerful Pointing has no control about the blind texts it is an
										almost unorthographic life One day however a small line of blind text by the
										name of Lorem Ipsum decided to leave for the far World of Grammar.
									</p>
									<div class="author mb-4 d-flex align-items-center">
										<!-- svelte-ignore a11y-missing-content -->
										<!-- svelte-ignore a11y-invalid-attribute -->
										<a
											href="#"
											class="img"
											style="background-image:url(/images/xperson_1.jpg.pagespeed.ic.P4pHl6glbj.jpg)"
										/>
										<div class="ml-3 info">
											<span>Written by</span>
											<h3>
												<!-- svelte-ignore a11y-invalid-attribute -->
												<a href="#">Dave Lewis</a>, <span>June 28, 2019</span>
											</h3>
										</div>
									</div>
									<div class="meta-wrap d-md-flex align-items-center">
										<div class="half order-md-last text-md-right">
											<p class="meta">
												<span><i class="icon-heart" />3</span>
												<span><i class="icon-eye" />100</span>
												<span><i class="icon-comment" />5</span>
											</p>
										</div>
										<div class="half">
											<p>
												<!-- svelte-ignore a11y-invalid-attribute -->
												<a href="#" class="btn btn-primary p-3 px-xl-4 py-xl-3">Continue Reading</a>
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="col-md-12" data-aos="fade-up">
							<div class="blog-entry-2">
								<!-- svelte-ignore a11y-missing-content -->
								<a
									href="/travel/hello-world"
									class="img"
									style="background-image:url(/images/ximage_6.jpg.pagespeed.ic.8DytWEXWGZ.jpg)"
								/>
								<div class="text pt-4">
									<h3 class="mb-4">
										<!-- svelte-ignore a11y-invalid-attribute -->
										<a href="#">A Loving Heart is the Truest Wisdom</a>
									</h3>
									<p class="mb-4">
										Even the all-powerful Pointing has no control about the blind texts it is an
										almost unorthographic life One day however a small line of blind text by the
										name of Lorem Ipsum decided to leave for the far World of Grammar.
									</p>
									<div class="author mb-4 d-flex align-items-center">
										<!-- svelte-ignore a11y-missing-content -->
										<!-- svelte-ignore a11y-invalid-attribute -->
										<a
											href="#"
											class="img"
											style="background-image:url(/images/xperson_1.jpg.pagespeed.ic.P4pHl6glbj.jpg)"
										/>
										<div class="ml-3 info">
											<span>Written by</span>
											<h3>
												<!-- svelte-ignore a11y-invalid-attribute -->
												<a href="#">Dave Lewis</a>, <span>June 28, 2019</span>
											</h3>
										</div>
									</div>
									<div class="meta-wrap d-md-flex align-items-center">
										<div class="half order-md-last text-md-right">
											<p class="meta">
												<span><i class="icon-heart" />3</span>
												<span><i class="icon-eye" />100</span>
												<span><i class="icon-comment" />5</span>
											</p>
										</div>
										<div class="half">
											<p>
												<!-- svelte-ignore a11y-invalid-attribute -->
												<a href="#" class="btn btn-primary p-3 px-xl-4 py-xl-3">Continue Reading</a>
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="col-md-12" data-aos="fade-up">
							<div class="blog-entry-2">
								<!-- svelte-ignore a11y-missing-content -->
								<a
									href="/travel/hello-world"
									class="img"
									style="background-image:url(/images/ximage_7.jpg.pagespeed.ic.od6DA35UIk.jpg)"
								/>
								<div class="text pt-4">
									<h3 class="mb-4">
										<!-- svelte-ignore a11y-invalid-attribute -->
										<a href="#">A Loving Heart is the Truest Wisdom</a>
									</h3>
									<p class="mb-4">
										Even the all-powerful Pointing has no control about the blind texts it is an
										almost unorthographic life One day however a small line of blind text by the
										name of Lorem Ipsum decided to leave for the far World of Grammar.
									</p>
									<div class="author mb-4 d-flex align-items-center">
										<!-- svelte-ignore a11y-missing-content -->
										<!-- svelte-ignore a11y-invalid-attribute -->
										<a
											href="#"
											class="img"
											style="background-image:url(/images/xperson_1.jpg.pagespeed.ic.P4pHl6glbj.jpg)"
										/>
										<div class="ml-3 info">
											<span>Written by</span>
											<h3>
												<!-- svelte-ignore a11y-invalid-attribute -->
												<a href="#">Dave Lewis</a>, <span>June 28, 2019</span>
											</h3>
										</div>
									</div>
									<div class="meta-wrap d-md-flex align-items-center">
										<div class="half order-md-last text-md-right">
											<p class="meta">
												<span><i class="icon-heart" />3</span>
												<span><i class="icon-eye" />100</span>
												<span><i class="icon-comment" />5</span>
											</p>
										</div>
										<div class="half">
											<p>
												<!-- svelte-ignore a11y-invalid-attribute -->
												<a href="#" class="btn btn-primary p-3 px-xl-4 py-xl-3">Continue Reading</a>
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="col-md-12" data-aos="fade-up">
							<div class="blog-entry-2">
								<!-- svelte-ignore a11y-missing-content -->
								<a
									href="/travel/hello-world"
									class="img"
									style="background-image:url(/images/ximage_8.jpg.pagespeed.ic.k6KCknfXQH.jpg)"
								/>
								<div class="text pt-4">
									<h3 class="mb-4">
										<!-- svelte-ignore a11y-invalid-attribute -->
										<a href="#">A Loving Heart is the Truest Wisdom</a>
									</h3>
									<p class="mb-4">
										Even the all-powerful Pointing has no control about the blind texts it is an
										almost unorthographic life One day however a small line of blind text by the
										name of Lorem Ipsum decided to leave for the far World of Grammar.
									</p>
									<div class="author mb-4 d-flex align-items-center">
										<!-- svelte-ignore a11y-missing-content -->
										<!-- svelte-ignore a11y-invalid-attribute -->
										<a
											href="#"
											class="img"
											style="background-image:url(/images/xperson_1.jpg.pagespeed.ic.P4pHl6glbj.jpg)"
										/>
										<div class="ml-3 info">
											<span>Written by</span>
											<h3>
												<!-- svelte-ignore a11y-invalid-attribute -->
												<a href="#">Dave Lewis</a>, <span>June 28, 2019</span>
											</h3>
										</div>
									</div>
									<div class="meta-wrap d-md-flex align-items-center">
										<div class="half order-md-last text-md-right">
											<p class="meta">
												<span><i class="icon-heart" />3</span>
												<span><i class="icon-eye" />100</span>
												<span><i class="icon-comment" />5</span>
											</p>
										</div>
										<div class="half">
											<p>
												<!-- svelte-ignore a11y-invalid-attribute -->
												<a href="#" class="btn btn-primary p-3 px-xl-4 py-xl-3">Continue Reading</a>
											</p>
										</div>
									</div>
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
				>
					<RightSideBar />
				</div>
			</div>
		</div>
	</section>
{/if}
