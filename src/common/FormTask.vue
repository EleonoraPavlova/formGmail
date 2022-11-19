<template>
	<div class="card p-4 m-3">
		<div class="align-items-center d-flex justify-content-between">
			<h6 v-if="!isEditing" class="mb-0 text-start me-3">
				{{ task.title[0].toUpperCase() + task.title.slice(1) }}
			</h6>
			<div v-else>
				<AppInput v-model="localTask.title"></AppInput>
			</div>
			<div v-if="editable">
				<AppButtons
					v-if="!isEditing"
					size="sm"
					color="btn-outline-secondary"
					@click="isEditing = true"
				>
					<AppIcon name="pencil" size="sm" color="success" />
				</AppButtons>

				<AppButtons
					v-else
					size="sm"
					color="btn-outline-secondary"
					@click="onSave"
				>
					<AppIcon
						name="checkbox-marked-circle-outline"
						size="sm"
						color="success"
					/>
				</AppButtons>
			</div>
			<div class="d-flex align-items-center">
				<slot name="label" />
				<slot name="toggle" />
			</div>
		</div>
		<hr class="mt-1 mb-3" />
		<p class="text-start">
			<strong class="me-3">Deadline:</strong> {{ task.date }}
			<slot name="editDate" />
		</p>
		<slot />
	</div>
</template>

<script>
import AppButtons from "../common/AppButtons.vue";
import AppIcon from "../common/AppIcon.vue";
import AppInput from "../common/AppInput.vue";
export default {
	name: "FormTask",
	components: {
		AppButtons,
		AppIcon,
		AppInput,
	},
	data() {
		return {
			isEditing: false,
			//копия всех task
			localTask: { ...this.task },
		};
	},
	props: {
		task: {
			type: Object,
			default: null,
		},
		index: {
			type: [String, Number],
		},
		editable: {
			type: Boolean,
		},
	},
	methods: {
		onSave() {
			this.$store.commit("tasks/saveTask", {
				index: this.$route.params.index,
				value: this.localTask,
			});
			this.isEditing = false;
		},
	},
};
</script>

<style scoped>
</style>