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
			<router-link to="/mail" custom v-slot="{ navigate }"
				><a
					@click="navigate"
					class="text-decoration-none"
					:class="{
						'router-link-active': $route.path.includes('mail'),
					}"
					><h6 class="me-3 mb-0 text-dark">Mail</h6></a
				>
			</router-link>
			<!-- ручное управление состоянием ссылки, урок 10 -->
			<!-- на router-link класс вещать нельзя, если в нем есть slot -->

			<AppButtons
				color="warning"
				size="md"
				class="rounded-pill text-white"
				@click="OutLog"
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

<style lang="scss">
.router-link-active {
	h6 {
		color: green !important;
	}
}
</style>