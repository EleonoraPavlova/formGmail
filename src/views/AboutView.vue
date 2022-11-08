<template>
	<div class="vuex">
		<h3>{{ upprcaseTitle }}</h3>
		<div class="d-flex justify-content-center align-items-center p-4">
			<h4 class="mb-0 pe-3">Counter: {{ count }} ({{ doubleCount }})</h4>
			<AppButtons color="success" size="sm" @click="increment">Add</AppButtons>
			<AppButtons
				color="success"
				size="sm"
				@click="incrementAsync({ value: 10 })"
				>Add 10</AppButtons
			>
			<AppButtons color="danger" size="sm" @click="reset">Reset</AppButtons>
		</div>
	</div>
</template>


<script>
import AppButtons from "../common/AppButtons.vue";
import { mapGetters, mapMutations, mapActions } from "vuex";
export default {
	name: "AboutView",
	components: {
		AppButtons,
	},
	computed: {
		// count() {
		// 	return this.$store.getters.count;
		// }, или такая запись
		// ...mapGetters(["count", "doubleCount", "upprcaseTitle"]),
		// doubleCount() {
		// 	return this.$store.getters.doubleCount;
		// },
		//или вот такой рефакторинг:
		...mapGetters(["upprcaseTitle"]),
		...mapGetters("count", ["count", "doubleCount"]),
	},
	methods: {
		...mapMutations("count", ["increment", "reset"]),
		//или так записать
		// increment() {
		// 	this.$store.commit("increment");
		// },
		// reset() {
		// 	this.$store.commit("reset");
		// },
		...mapActions("count", ["incrementAsync"]),
		//или так
		// incrementAsync() {
		// 	this.$store.dispatch("incrementAsync", {
		// 		value: 10,
		// 	});
		// },
	},
};
</script>