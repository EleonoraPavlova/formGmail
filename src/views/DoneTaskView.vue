<template>
	<div class="container mt-2">
		<div class="d-flex align-items-center justify-content-between">
			<AppButtons
				size="sm"
				color="btn-outline-secondary"
				class="m-2"
				@click="$router.push('/task')"
			>
				<AppIcon name="keyboard-return" size="mdx" color="success" />
			</AppButtons>
			<div class="d-flex m-auto align-items-center">
				<AppIcon name="check" size="md" color="success" />
				<h5 class="mb-0 p-2">Done: {{ number }} tasks</h5>
			</div>
		</div>
	</div>
</template>

<script>
import { number } from "yup/lib/locale";
import AppIcon from "../common/AppIcon.vue";
import AppButtons from "../common/AppButtons.vue";
export default {
	name: "DoneTaskView",
	components: {
		AppIcon,
		AppButtons,
	},
	props: {
		number: {
			type: Number,
			default: 0,
		},
	},
};
</script>

<style>
</style>