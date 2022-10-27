<template>
	<h4>Forget password?</h4>
	<AppButtons color="danger" size="sm" class="rounded-pill" @click="toLogin"
		>Return to login</AppButtons
	>
	<AppButtons
		color="success"
		size="sm"
		class="rounded-pill"
		@click="$router.push('/')"
		>To main</AppButtons
	>
</template>

<script>
import AppButtons from "../common/AppButtons.vue";

export default {
	name: "Forget",
	components: {
		AppButtons,
	},
	methods: {
		toLogin() {
			this.$router.push("/form");
			//или this.$router.replace("/form"); но replace не сохраняет историю перехода в браузере!
			//перейти на нужную страницу
		},
	},
};
</script>

<style>
</style>