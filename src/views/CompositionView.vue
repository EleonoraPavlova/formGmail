<template>
	<div class="container">
		<header class="navbar">
			<div class="div">
				<h4 class="mb-0">Vue composition Api</h4>
				<hr class="m-2" />
			</div>
			<ul class="navbar">
				<li>
					<router-link to="/approach" class="black addHover me-4"
						>Composition approach</router-link
					>
				</li>
				<li>
					<router-link to="/reusable" class="black addHover me-4"
						>Reusable</router-link
					>
				</li>
				<li>
					<router-link to="/vuex" class="black addHover me-4">Vuex</router-link>
				</li>
			</ul>
		</header>
		<div class="container with-nav">
			<router-view></router-view>
		</div>
		<AppButtons
			size="sm"
			color="outline-info"
			class="m-4 addHover"
			@click="toggle"
			>Show message</AppButtons
		>
		<AppAlert
			v-if="alert"
			class="width70 m-auto mb-4"
			title="Composition message"
			color="danger"
			text="Neque quisquam est qui dolorem ipsum quia dolor!"
			@close="close"
		/>
	</div>
</template>

<script>
import AppAlert from "../components/AppAlert.vue";
import AppButtons from "../common/AppButtons.vue";
import useAlert from "../use/alert";
export default {
	name: "CompositionView",
	components: {
		AppAlert,
		AppButtons,
	},
	setup() {
		return {
			...useAlert(), //сокращенная запись миксина
		};
	},
};
</script>

<style>
</style>