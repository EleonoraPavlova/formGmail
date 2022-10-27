<template>
	<div class="container">
		<div class="bg-success p-2 bg-opacity-75 card p-3">
			<div class="d-flex justify-content-between align-items-center">
				<h6 class="text-start text-white">You have successfully logged in</h6>
				<AppButtons
					color="warning"
					size="sm"
					class="rounded-pill text-white"
					@click="OutLog"
					>Go out</AppButtons
				>
			</div>
		</div>
	</div>
</template>

<script>
import AppButtons from "../common/AppButtons.vue";
export default {
	name: "DashboardView",
	components: {
		AppButtons,
	},
	inject: ["logout"],
	methods: {
		OutLog() {
			this.logout();
		},
	},
};
</script>

<style>
</style>