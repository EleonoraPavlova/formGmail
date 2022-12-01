<template>
	<div class="container">
		<div v-if="task">
			<!-- условие, чтобы рендерелись таски, если ничего нет - тогда no task(v-else) -->
			<!-- {{ $route.params.index }} вытянула index с урл -->
			<h5 class="m-4">The task id: {{ $route.params.id }}</h5>
			<div class="d-flex align-items-start">
				<AppButtons
					size="sm"
					color="btn-outline-secondary"
					class="m-2"
					@click="$router.push('/task')"
				>
					<AppIcon name="keyboard-return" size="mdx" color="success" />
				</AppButtons>
				<FormTask
					:task="task"
					:index="$route.params.index"
					:editable="true"
					:showDescription="true"
					class="m-auto"
				>
					<template #label>
						<p class="mb-0">Status:</p>
					</template>
					<template #toggle>
						<div
							v-if="task.active"
							class="btnActive rounded-pill border border-success m-2"
						>
							<span class="success">Active</span>
						</div>
						<div v-else class="btnActive rounded-pill border border-danger m-2">
							<span class="dangerous">Inactive</span>
						</div>
					</template>
					<div class="">
						<AppButtons
							size="xs"
							class="rounded-pill ms-2"
							color="outline-success"
							@click="$store.commit('tasks/toggleActive', $route.params.id)"
							>{{ task.active ? "Cancel" : "Take to work" }}</AppButtons
						>
						<AppButtons
							size="xs"
							class="rounded-pill ms-2"
							color="danger"
							@click="deleteTask($route.params.id)"
							>Delete</AppButtons
						>
						<AppButtons
							v-if="task.active"
							size="xs"
							class="rounded-pill ms-2"
							color="outline-info addHover"
							@click="onDoneTasks"
							>Done</AppButtons
						>
					</div>
				</FormTask>
			</div>
		</div>
		<div v-else>
			<h6 class="dangerous">No task</h6>
		</div>
	</div>
</template>

<script>
import FormTask from "../common/FormTask.vue";
import AppButtons from "../common/AppButtons.vue";
import AppIcon from "../common/AppIcon.vue";
import EditSaveTask from "../components/EditSaveTask.vue";
import { mapState, mapGetters } from "vuex";
export default {
	name: "LookTaskView",
	components: {
		FormTask,
		AppButtons,
		AppIcon,
		EditSaveTask,
	},

	data() {
		return {
			editingTaskId: null, // порядковый номер элемента
			editingValue: null, //отред значение
		};
	},
	computed: {
		task() {
			const task = this.tasks.find(
				(task) => task.id === +this.$route.params.id
			);
			return task;
			//вытянули task из store
		},
		...mapState({
			tasks: (state) => state.tasks.collection,
		}),
		...mapGetters("tasks", ["doneTasks"]),
	},
	methods: {
		deleteTask(index) {
			this.$router.push("/task");
			this.$store.commit("tasks/deleteTask", index);
		},
		async onSaveItem() {
			try {
				await this.$store.dispatch("resumeItems/editItem", {
					id: this.editingTaskId,
					value: this.editingValue,
				});
				this.editingTaskId = null;
				this.editingValue = null;
				this.$toast.success("Edited successfuly");
			} catch (e) {
				this.$toast.warning("Something went wrong");
			}
		},
		onDoneTasks() {
			this.$store.commit("tasks/toggleDone", this.$route.params.id);
			//мутация
			this.$router.push("/done");
		},
	},
};
</script>

<style scoped>
.card {
	width: 45%;
}
</style>