<template>
	<div class="form-control p-4">
		<h6>
			Title: <strong>{{ name }}</strong>
		</h6>
		<p>
			Version: <strong>{{ version }} ({{ doubleVersion }})</strong>
		</p>
		<AppButtons size="sm" color="outline-warning" @click="changeToThird"
			>Change to third version</AppButtons
		>
	</div>
</template>

<script>
import { computed } from "vue";
import AppButtons from "../common/AppButtons.vue";
export default {
	name: "VueInfo",
	components: {
		AppButtons,
	},
	props: ["name", "version"],
	emits: ["change-version"],
	setup(props, context) {
		console.log(context);

		function change() {
			context.emit("change-version", 3);
		}

		return {
			changeToThird: change,
			doubleVersion: computed(() => props.version * 2),
		};
	},
};
</script>

<style>
</style>