<template>
	<div class="container mt-5">
		<div class="d-flex justify-content-center">
			<div class="card p-4 width mb-4">
				<h3 class="mb-0 text-start">Form gmail</h3>
				<hr class="mt-1 mb-4" />
				<div class="text-start mb-3">
					<label for="inputEmail"><strong>Email</strong></label>
					<AppInput
						v-model.trim="inputValueMail"
						type="email"
						id="inputEmail"
					/>
				</div>
				<div class="text-start mb-3">
					<label for="inputPassword"><strong>Password</strong> </label>
					<AppInput
						v-model.trim="inputValuePass"
						type="password"
						id="inputPassword"
					/>
				</div>
				<div class="d-flex justify-content-start align-items-center">
					<AppButtons color="success" size="sm" class="rounded-pill"
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
import AppInput from "../common/AppInput.vue";

export default {
	name: "HomeView",
	components: {
		AppButtons,
		AppInput,
	},
	data() {
		return {
			inputValueMail: "",
			inputValuePass: "",
		};
	},
};
</script>


<style lang="scss" scoped>
@import "../assets/mixins.scss";
.width {
	width: 60%;
}
</style>
