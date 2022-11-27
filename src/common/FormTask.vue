<template>
	<div class="card p-4 m-3">
		<div class="align-items-center d-flex justify-content-between">
			<div class="d-flex align-items-center">
				<h6 v-if="!isEditingTitle" class="mb-0 text-start me-3">
					{{
						task.title
							? task.title[0].toUpperCase() + task.title.slice(1)
							: "No title"
					}}
				</h6>
				<div v-else>
					<AppInput v-model="localTask.title" @keypress.enter="onSave" />
				</div>
				<div v-show="editable">
					<EditSaveTask
						:isValid="localTask.title.length > 3"
						@onSave="onSave"
						@click="isEditingTitle = true"
						:isEditing="isEditingTitle"
					/>
				</div>
			</div>
			<div class="d-flex align-items-center">
				<slot name="label" />
				<slot name="toggle" />
			</div>
		</div>
		<hr class="mt-1 mb-3" />
		<div class="d-flex align-items-center mb-3">
			<div v-if="!isEditingDate">
				<p class="text-start mb-0">
					<strong class="me-3">Deadline:</strong> {{ task.date }}
				</p>
			</div>
			<div v-else>
				<AppInput v-model="localTask.date" @keypress.enter="onSave" />
			</div>
			<div v-show="editable">
				<EditSaveTask
					@onSave="onSave"
					@click="isEditingDate = true"
					:isEditing="isEditingDate"
				/>
			</div>
		</div>
		<div v-if="showDescription" class="d-flex align-items-center mb-3">
			<div v-if="!isEditingDescrip">
				<p class="text-start mb-0">
					<strong class="me-3">Description:</strong> {{ task.description }}
				</p>
			</div>
			<div v-else>
				<AppInput v-model="localTask.description" @keypress.enter="onSave" />
			</div>
			<div v-show="editable">
				<EditSaveTask
					@onSave="onSave"
					@click="isEditingDescrip = true"
					:isEditing="isEditingDescrip"
				/>
			</div>
		</div>
		<slot />
	</div>
</template>

<script>
import AppButtons from "../common/AppButtons.vue";
import AppIcon from "../common/AppIcon.vue";
import AppInput from "../common/AppInput.vue";
import EditSaveTask from "../components/EditSaveTask.vue";

export default {
	name: "FormTask",
	components: {
		AppButtons,
		AppIcon,
		AppInput,
		EditSaveTask,
	},
	data() {
		return {
			isEditingTitle: false,
			isEditingDate: false,
			isEditingDescrip: false,
			//копия всех task, чтобы изменить значения props(менять объвленный props нельзя, только через копию)
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
			// не показывает блоки редактирования на странице TaslView()
		},
		showDescription: {
			type: Boolean,
			//дефолт undefined
		},
	},
	methods: {
		onSave() {
			this.$store.commit("tasks/saveTask", {
				index: this.$route.params.index,
				value: this.localTask,
			});
			this.isEditingTitle = false;
			this.isEditingDescrip = false;

			const today = new Date();
			today.setHours(0);
			today.setMinutes(0);
			today.setSeconds(0);
			today.setMilliseconds(0);
			if (new Date(this.localTask.date) > today) {
				this.$toast.success("The data edited successfully");
			} else {
				this.$toast.error("Enter a valid date");
				return;
			}
			this.isEditingDate = false;
		},
	},
};
</script>

<style scoped>
</style>