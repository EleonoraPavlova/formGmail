<template>
	<div class="container">
		<div class="card p-4">
			<h4>{{ appTitle }}</h4>
		</div>
	</div>
</template>

<script>
import { useStore } from "vuex";
export default {
	name: "VuexView",
	setup() {
		const store = useStore();
		return {
			appTitle: store.getters.appTitle.toUpperCase(),
		};
	},
};
</script>

<style>
</style>