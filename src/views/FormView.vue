<template>
	<div class="container mt-5">
		<div class="d-flex justify-content-center">
			<div class="card p-4 width mb-4">
				<h3 class="mb-0 text-start">Form gmail</h3>
				<hr class="mt-1 mb-4" />
				<InputLogin />
				<div class="d-flex justify-content-start align-items-center">
					<AppButtons
						color="success"
						size="sm"
						class="rounded-pill"
						type="submit"
						>Sign In</AppButtons
					>
					<AppButtons color="danger" size="sm" class="rounded-pill"
						>Forgot password?</AppButtons
					>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import AppButtons from "../common/AppButtons.vue";
import InputLogin from "../components/InputLogin.vue";

export default {
	name: "FormView",
	components: {
		AppButtons,
		InputLogin,
	},
	data() {
		return {};
	},
	methods: {},
};
</script>


<style lang="scss" scoped>
@import "../assets/mixins.scss";
.width {
	width: 60%;
}
</style>
