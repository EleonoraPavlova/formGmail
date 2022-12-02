<template>
	<div class="container">
		<header class="navbar">
			<div class="d-flex justify-content-start align-items-center">
				<AppIcon name="clipboard-list-outline" size="mdx" color="success" />
				<h4 class="mb-0 success p-2">Task list</h4>
			</div>

			<ul class="navbar">
				<li>
					<router-link to="/task" class="black addHover me-4"
						>All tasks</router-link
					>
				</li>
				<li>
					<router-link to="/create" class="black addHover me-4"
						>Create</router-link
					>
				</li>
				<li>
					<router-link to="/done" class="black addHover me-4">Done</router-link>
				</li>
				<li>
					<AppSelect
						v-model="selectedSortTask"
						class="width p-1"
						size="big"
						:options="sortOptionsTask"
					/>
				</li>
			</ul>
		</header>

		<h4 class="mb-5">
			Total active: {{ activeTasksCount }}
			{{ activeTasksCount < 2 ? "task" : "tasks" }}
		</h4>
		<div v-if="!activeTasksCount && !sortedTasks" class="mb-5">
			<h6 class="success">There are no tasks!</h6>
		</div>

		<div class="d-flex flex-wrap mb-3">
			<div v-for="(task, index) in sortedTasks" :key="index">
				<FormTask :task="task" :index="index" :showDescription="false">
					<template #toggle>
						<AppButtons
							v-if="!task.done"
							size="x"
							class="rounded-pill ms-2 btnActive"
							:color="task.active ? 'outline-success' : 'outline-danger'"
							@click="$store.commit('tasks/toggleActive', task.id)"
							>{{ task.active ? "Active" : "Inactive" }}</AppButtons
						>
						<div v-else class="btnActive rounded-pill border border-info m-2">
							Done
						</div>
					</template>
					<div class="">
						<AppButtons
							size="sm"
							color="outline-success"
							:class="{ 'me-5': !task.done }"
							@click="readMore(index)"
							>{{ expandedItemIndex === index ? "hide" : "Read more" }}
						</AppButtons>
						<AppButtons
							v-if="!task.done"
							size="sm"
							color="outline-info"
							class="addHover"
							@click="$router.push('/task/' + task.id)"
							>Expand</AppButtons
						>
					</div>
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
import AppSelect from "../common/AppSelect.vue";
import { mapState, mapGetters } from "vuex";

export default {
	name: "TaskView",
	components: {
		AppIcon,
		AppButtons,
		FormTask,
		AppSelect,
	},
	data() {
		return {
			selectedSortTask: "",
			sortOptionsTask: [
				{ value: "Title", name: "name" },
				{ value: "Data", name: "data" },
				{ value: "State", name: "state" },
			],
			expandedItemIndex: null,
			//переменная, куда буду ложить индекс конкретной открытой task(без этого открываются все)
			//allActive: [], //сюда ложу чекнутые active, и удаляю inactive(если нужно выбрать несколько элементов-всегда нужен массив, если один- null или false)
		};
	},
	computed: {
		//вычисляемые свойства
		...mapState({
			tasks: (arg) => arg.tasks.collection,
		}),
		...mapGetters("tasks", ["activeTasksCount"]),
		sortedTasks() {
			return this.tasks.sort((a, b) => {
				if (!this.selectedSortTask) {
					return 0;
				}
				if (this.selectedSortTask === "Title") {
					if (a.title.toLowerCase() > b.title.toLowerCase()) return 1;
					if (a.title.toLowerCase() == b.title.toLowerCase()) return 0;
					if (a.title.toLowerCase() < b.title.toLowerCase()) return -1;
				}
				if (this.selectedSortTask === "Data") {
					return new Date(a.date) - new Date(b.date);
				}
				if (this.selectedSortTask === "State") {
					return a.active === b.active ? 0 : a.active ? -1 : 1;
				}
			});
		},
	},
	methods: {
		readMore(index) {
			if (this.expandedItemIndex === index) {
				this.expandedItemIndex = null;
			} else {
				this.expandedItemIndex = index;
			}
		},
		// toggle(index) {
		// 	//туда-обратно кнопка
		// 	if (!this.allActive.includes(index)) {
		// 		this.allActive.push(index);
		// 	} else {
		// 		const el = this.allActive.findIndex((item) => item === index);
		// 		this.allActive.splice(el, 1);
		// 	}
		// },
		//	},
	},
};
</script>

<style>
.btnActive {
	padding: 5px 6px !important;
	font-size: 10px !important;
}
.width {
	width: 100%;
}
</style>