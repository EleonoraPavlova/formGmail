<template>
	<div
		class="alert d-flex justify-content-center align-items-start"
		role="alert"
		:class="[`alert-${color}`]"
		@click="$emit('close')"
	>
		<div class="mx-3">
			<h6 class="alert-title">{{ title }}</h6>
			<p class="m-0">{{ text }}</p>
		</div>
	</div>
</template>

<script>
export default {
	name: "AppAlert",
	emits: ["close"],
	props: {
		title: {
			type: String,
			default: "I am a title component",
		},
		text: {
			type: String,
			default: "I am a text component",
		},
		color: {
			type: String,
			requeired: false,
			default: "primary",
			validator(val) {
				return [
					"secondary",
					"success",
					"danger",
					"warning",
					"info",
					"light",
					"dark",
				].includes(val);
			},
		},
	},
};
</script>

