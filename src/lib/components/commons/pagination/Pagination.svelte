<script lang="ts">
	import { PaginationNav } from 'carbon-components-svelte'
</script>

<PaginationNav shown={7} />

<style lang="css" scoped>
	:global(.bx--pagination-nav__list-item) {
		width: 40px;
		height: 40px;
	}

	:global(.bx--pagination-nav__list-item:not(:last-child)) {
		margin-right: 5px;
	}

	:global(.bx--pagination-nav__page.bx--pagination-nav__page, .bx--btn.bx--btn--icon-only.bx--tooltip__trigger) {
		min-width: 40px;
		height: 40px;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 100%;
		border: 1px solid #1eafed;
	}

	:global(.bx--pagination-nav__page:hover) {
		background-color: none !important;
	}

	:global(.bx--pagination-nav__page) {
		outline: none !important;
	}

	:global(.bx--btn.bx--btn--icon-only.bx--tooltip__trigger) {
		min-width: 40px;
		min-height: 40px;
		width: 40px;
		height: 40px;
	}

	:global(.bx--pagination-nav__page.bx--pagination-nav__page--active) {
		background: #1eafed !important;
		color: white !important;
	}

	:global(.bx--pagination-nav__page:not(.bx--pagination-nav__page--direction)::after) {
		content: none !important;
	}
</style>
