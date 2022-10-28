<template>
	<div class="d-flex justify-content-between align-items-center">
		<div class="container position-relative">
			<div
				v-if="!isAuth"
				class="position-absolute top-0 start-100 middlePosition"
			>
				<AppButtons
					color="danger"
					size="sm"
					class=""
					@click="$router.push('/form')"
					>Sing in</AppButtons
				>
			</div>
			<div class="">
				<h1 class="mb-4">Welcome to main page</h1>
			</div>
			<p>
				Nam porttitor consectetur sapien vitae malesuada. Ut in lectus eget ante
				gravida tincidunt eu non mauris. Ut sit amet leo mi. Vestibulum
				convallis vulputate odio. Vivamus non risus vitae nunc fermentum dictum
				quis in lacus. Pellentesque non tincidunt quam, vehicula faucibus nulla.
				Aliquam erat volutpat. Nunc a sollicitudin ipsum, lobortis congue nulla.
				Pellentesque non lectus lorem. Sed imperdiet placerat lorem id
				consequat. Fusce at placerat massa.
			</p>
		</div>
	</div>
</template>

<script>
import AppButtons from "../common/AppButtons.vue";
export default {
	name: "Main",
	components: {
		AppButtons,
	},
	inject: ["isAuth"],
};
</script>

<style>
.middlePosition {
	transform: translate(27%, -122%) !important;
}
</style>