<template>
	<div class="container mt-5">
		<div class="d-flex justify-content-center">
			<div class="card p-4 width mb-4">
				<h3 class="mb-0 text-start">Form gmail</h3>
				<hr class="mt-1 mb-4" />
				<InputLogin />
			</div>
		</div>
	</div>
</template>

<script>
import InputLogin from "../components/InputLogin.vue";

export default {
	name: "FormView",
	components: {
		InputLogin,
	},
};
</script>


<style lang="scss" scoped>
@import "../assets/mixins.scss";
.width {
	width: 60%;
}
</style>
