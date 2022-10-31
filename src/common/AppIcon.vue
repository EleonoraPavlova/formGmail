<template>
	<i :class="[size, 'mdi', `mdi-${name}`]" :style="{ color: color }" />
</template>

<script>
export default {
	name: "AppIcon",
	props: {
		name: {
			type: String,
			default: "close-octagon-outline",
		},
		color: {
			type: String,
			default: "black",
		},
		size: {
			type: String,
			default: "md",
		},
	},
};
</script>
