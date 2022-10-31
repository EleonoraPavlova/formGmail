<template>
	<div class="d-flex justify-content-between align-items-center">
		<div class="div">
			<router-link to="/" class="text-decoration-none"
				><h5 class="mb-0 text-dark">Gmail</h5></router-link
			>
		</div>
		<div class="d-flex justify-content-end align-items-center">
			<router-link to="/" class="text-decoration-none"
				><h6 class="me-3 mb-0 text-dark">Main</h6></router-link
			>
			<router-link to="/mail" class="text-decoration-none"
				><h6 class="me-3 mb-0 text-dark">Mail</h6>
			</router-link>

			<AppButtons
				color="warning"
				size="md"
				class="rounded-pill text-white"
				@click.prevent="OutLog"
				>Go out</AppButtons
			>
		</div>
	</div>
</template>

<script>
import AppButtons from "./AppButtons.vue";

export default {
	name: "NavBar",
	components: {
		AppButtons,
	},
	inject: ["logout"],
	methods: {
		OutLog() {
			this.logout();
			this.modal = true;
		},
	},
};
</script>

<style>
</style>