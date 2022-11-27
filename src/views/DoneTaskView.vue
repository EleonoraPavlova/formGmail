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
				<h5 class="mb-0 p-2">
					Done: {{ doneTasks.length }}
					{{ doneTasks.length < 2 ? "task" : "tasks" }}
				</h5>
			</div>
		</div>
		<div v-if="!doneTasks.length" class="my-4 marginLeft">
			<h5 class="success">No completed tasks!</h5>
		</div>
		<div class="d-flex flex-wrap mb-3 position-relative">
			<div v-for="(task, index) in doneTasks" :key="index">
				<FormTask :task="task" :index="index" :showDescription="false">
					<template #toggle>
						<div class="btnActive rounded-pill border border-info m-2">
							Done
						</div>
					</template>
					<div class="position-absolute top-0 end-0">
						<CloseButton
							@click="deleteTask(doneTasks.index)"
							size="xs"
							class="btn-close p-2"
						/>
					</div>
					<AppButtons
						size="sm"
						color="outline-success"
						class="m-auto"
						@click="readMore(index)"
						>{{ expandedItemIndex === index ? "hide" : "Read more" }}
					</AppButtons>
					<div v-if="expandedItemIndex === index" class="m-2 text-start">
						{{ task.description[0].toUpperCase() + task.description.slice(1) }}
					</div>
				</FormTask>
			</div>
		</div>
	</div>
</template>

<script>
import AppIcon from "../common/AppIcon.vue";
import AppButtons from "../common/AppButtons.vue";
import FormTask from "../common/FormTask.vue";
import CloseButton from "../common/CloseButton.vue";
import { mapGetters } from "vuex";
export default {
	name: "DoneTaskView",
	components: {
		AppIcon,
		AppButtons,
		FormTask,
		CloseButton,
	},
	data() {
		return {
			expandedItemIndex: null,
		};
	},
	computed: {
		...mapGetters("tasks", ["doneTasks"]),
	},
	methods: {
		readMore(index) {
			if (this.expandedItemIndex === index) {
				this.expandedItemIndex = null;
			} else {
				this.expandedItemIndex = index;
			}
		},
		deleteTask(index) {
			this.$store.commit("tasks/deleteTask", index);
			this.$toast.success("Deleted successfully");
		},
	},
};
</script>

<style lang="scss">
.btn-close {
	&:focus {
		box-shadow: none !important;
	}
}
.marginLeft {
	margin-left: 7%;
}
</style>