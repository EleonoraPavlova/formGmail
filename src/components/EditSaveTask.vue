<template>
	<AppButtons
		v-if="!isEditing"
		size="sm"
		color="btn-outline-secondary"
		@click="$emit('click')"
	>
		<AppIcon name="pencil" size="sm" color="success" />
	</AppButtons>

	<AppButtons
		v-else
		size="sm"
		color="btn-outline-secondary"
		@click="$emit('onSave')"
	>
		<AppIcon name="checkbox-marked-circle-outline" size="sm" color="success" />
	</AppButtons>
</template>

<script>
import AppButtons from "../common/AppButtons.vue";
import AppIcon from "../common/AppIcon.vue";
export default {
	name: "EditSaveTask",
	components: {
		AppIcon,
		AppButtons,
	},
	props: {
		isEditing: {
			type: Boolean,
			default: false,
		},
	},
	emits: ["onSave", "click"],
};
</script>

<style>
</style>