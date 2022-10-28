<template>
	<div class="container">
		<div
			class="
				card
				width40
				p-3
				d-flex
				flex-column
				align-items-center
				justify-content-center
				m-auto
			"
		>
			<div class="text-center">
				<h4 class="mb-3 p-1">Forget password?</h4>
			</div>
			<AppButtons
				color="danger"
				size="sm"
				class="rounded-pill width40"
				@click="toLogin"
				>Return to login</AppButtons
			>
			<AppButtons
				color="success"
				size="sm"
				class="rounded-pill width40"
				@click="$router.push('/')"
				>To main</AppButtons
			>
		</div>
	</div>
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
.width40 {
	width: 40%;
}
</style>