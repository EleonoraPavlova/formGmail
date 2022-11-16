<template>
	<input
		:type="type"
		class="m-1"
		:class="size"
		:id="id"
		:name="name"
		:value="modelValue"
		@input="updateInput"
	/>
</template>



<script>
export default {
	name: "AppInput",
	props: {
		modelValue: {
			type: String,
			default: "",
		},
		size: {
			type: String,
			default: "form-control",
		},
		type: {
			type: String,
			default: "text",
		},
		id: {
			type: String,
		},
		name: {
			type: String,
		},
	},
	emits: ["update:modelValue"],
	methods: {
		updateInput(event) {
			this.$emit("update:modelValue", event.target.value);
		},
	},
};
</script>

<style lang="scss" scoped>
.form-control {
	width: 97%;
}
</style>
