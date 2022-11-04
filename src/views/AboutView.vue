<template>
	<div class="vuex">
		<h2>This is about vuex page</h2>
		<div class="d-flex justify-content-center align-items-center p-4">
			<h4 class="mb-0 pe-3">Counter: {{ $store.state.count }}</h4>
			<AppButtons color="success" size="sm" @click="increment">Add</AppButtons>
			<AppButtons color="danger" size="sm" @click="reset">Reset</AppButtons>
		</div>
	</div>
</template>


<script>
import AppButtons from "../common/AppButtons.vue";
export default {
	name: "AboutView",
	components: {
		AppButtons,
	},
	methods: {
		increment() {
			this.$store.state.count++;
		},
		reset() {
			this.$store.state.count = 0;
		},
	},
};
</script>