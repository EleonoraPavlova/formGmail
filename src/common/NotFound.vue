<template>
	<div class="container">
		<h4 class="success">Oops, there is no such page....</h4>
		<!-- <AppButtons
			color="danger"
			size="md"
			@click="$router.push({ path: '/form', query: { page: $route.path } })"
			>Sign in</AppButtons
		>
		<AppButtons color="success" size="md" @click="$router.push('/')"
			>Main page</AppButtons
		> -->
	</div>
</template>

<script>
// import AppButtons from "../common/AppButtons.vue";
export default {
	name: "NotFound",
	components: {
		// AppButtons,
	},
};
</script>
