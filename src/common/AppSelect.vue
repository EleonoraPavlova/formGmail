<template>
	<select :value="modelValue" @change="changeOption">
		<option disabled value="">Sort by</option>
		<option v-for="option in options" :key="option.value" :value="option.value">
			{{ option.name }}
		</option>
	</select>
</template>

<script>
export default {
	name: "AppSelect",
	props: {
		modelValue: {
			type: String,
			default: "",
			//поле, по которому будет идти сортировка, название или title
		},
		options: {
			//пункты выпадающего списка
			type: Array,
			default: () => [], //по дефолту пустой массив
		},
	},
	emits: ["update:modelValue"],
	methods: {
		//отследить изменение значения!обязательно!чтобы обновить значение модели
		changeOption(event) {
			this.$emit("update:modelValue", event.target.value);
		},
	},
};
</script>
