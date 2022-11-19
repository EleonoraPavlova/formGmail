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
			</ul>
		</header>
		<h4 class="mb-5">
			Total active: {{ activeTasksCount }}
			{{ activeTasksCount < 2 ? "task" : "tasks" }}
		</h4>
		<div class="d-flex flex-wrap mb-3">
			<div v-for="(task, index) in tasks" :key="index">
				<FormTask :task="task" :index="index">
					<template #toggle>
						<AppButtons
							size="x"
							class="rounded-pill ms-2 btnActive"
							:color="task.active ? 'outline-success' : 'outline-danger'"
							@click="$store.commit('tasks/toggleActive', index)"
							>{{ task.active ? "Active" : "Inactive" }}</AppButtons
						>
					</template>
					<div class="">
						<AppButtons
							size="sm"
							color="outline-success"
							class="me-5"
							@click="readMore(index)"
							>{{ expandedItemIndex === index ? "hide" : "Read more" }}
						</AppButtons>
						<AppButtons
							size="sm"
							color="outline-info"
							class="addHover"
							@click="$router.push('/task/' + index)"
							>Expand
						</AppButtons>
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
import { mapState, mapGetters } from "vuex";
export default {
	name: "TaskView",
	components: {
		AppIcon,
		AppButtons,
		FormTask,
	},
	data() {
		return {
			expandedItemIndex: null,
			//переменная, куда буду ложить индекс конкретной открытой task(без этого открываются все)
			//allActive: [], //сюда ложу чекнутые active, и удаляю inactive(если нужно выбрать несколько элементов-всегда нужен массив, если один- null или false)
		};
	},
	computed: {
		...mapState({
			tasks: (arg) => arg.tasks.collection,
		}),
		...mapGetters("tasks", ["activeTasksCount"]),
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
	},
};
</script>

<style>
.btnActive {
	padding: 5px 6px !important;
	font-size: 10px !important;
}
</style>