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
		<h4>Total active tasks: 5</h4>
		<div v-for="(task, index) in tasks" :key="index">
			<FormsTemplate>
				<template #header>
					<div class="align-items-center d-flex justify-content-between">
						<h5 class="mb-0 text-start">{{ task.title }}</h5>
						<AppButtons
							size="x"
							color="outline-success"
							class="rounded-pill"
							style="
								--bs-btn-padding-y: 0.2rem;
								--bs-btn-padding-x: 0.5rem;
								--bs-btn-font-size: 0.7rem;
							"
							>Active</AppButtons
						>
					</div>
				</template>
				<p class="text-start">{{ task.date }}</p>
				<div class="text-start">
					<AppButtons size="sm" color="outline-success">Show more</AppButtons>
				</div>
			</FormsTemplate>
		</div>
	</div>
</template>

<script>
import AppIcon from "../common/AppIcon.vue";
import AppButtons from "../common/AppButtons.vue";
import FormsTemplate from "../common/FormsTemplate.vue";
import { mapState } from "vuex";
export default {
	name: "TaskView",
	components: {
		AppIcon,
		FormsTemplate,
		AppButtons,
	},
	computed: {
		...mapState({
			tasks: (arg) => arg.tasks.collection,
		}),
	},
};
</script>

<style>
</style>