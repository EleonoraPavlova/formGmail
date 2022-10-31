<template>
	<div class="container">
		<div class="form-control p-4 position-relative">
			<AppIcon class="position-absolute top-0 end-0" />
			<div
				v-for="list in lists"
				:key="list"
				class="d-flex justify-content-between align-items-center"
			>
				<div class="title-left p-2">
					<h6 class="mb-0">{{ list.title }}</h6>
				</div>
				<hr class="vl" />
				<!-- <div class="descriptions-right p-2">
					<p>{{ list.descriptions }}</p>
				</div> -->
			</div>
		</div>
	</div>
</template>

<script>
import AppIcon from "../common/AppIcon.vue";
export default {
	name: "MailView",
	components: {
		AppIcon,
	},
	data() {
		return {
			lists: [
				{
					title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
					descriptions:
						"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo,\
						exercitationem? Corrupti ab modi vero sequi consequatur cumqu\
						expedita ducimus quidem dolor!/",
				},
				{
					title: "Donec vitae tincidunt nisi",
					descriptions:
						"Nullam nulla erat, aliquet non sodales nec, elementum ac risus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer lobortis accumsan massa non tempus. Integer vitae gravida leo. Phasellus vel ex at turpis finibus dictum eget eget dolor. Nulla efficitur at nisl vel elementum",
				},
				{
					title: "Integer nec pellentesque sapien",
					descriptions:
						"Integer nec pellentesque sapien. Proin ut quam dapibus, mollis purus quis, fermentum est. Maecenas eu mollis erat. Integer fermentum turpis quis rhoncus suscipit. Nam ultricies erat in mauris consequat lobortis. Nullam rutrum, dolor eu tempor euismod, nibh libero lacinia diam, non rhoncus enim lorem nec enim. Sed a interdum augue. Quisque sed malesuada nulla.",
				},
				{
					title:
						"Vestibulum at eros scelerisque, elementum leo nec, porta libero",
					descriptions:
						"Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer lobortis accumsan massa non tempus. Integer vitae gravida leo.",
				},
				{
					title: "Sed libero enim",
					descriptions:
						"Sed libero enim, cursus sed vulputate sed, egestas nec velit. Nullam ante nunc, finibus sed euismod quis, congue rutrum elit. Sed purus arcu, congue eu mi eu, ornare ultricies ante. Aliquam vitae ligula elit. Phasellus varius massa vel auctor molestie. Aenean convallis lacus sed tristique elementum. Nulla sed rutrum lacus. Pellentesque quis consectetur erat, a condimentum magna. Cras facilisis venenatis ante, eget cursus sapien pulvinar in. Sed placerat sed lacus at ultrices. Aliquam bibendum mauris nec suscipit feugiat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas efficitur risus enim. Nam dapibus mi id quam sagittis, ac auctor augue suscipit. Aenean a ullamcorper nisl. Duis hendrerit libero sit amet ligula luctus, in placerat ante tristique",
				},
				{
					title: "Aliquam vitae ligula elit",
					descriptions:
						"Nullam nulla erat, aliquet non sodales nec, elementum ac risus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus",
				},
				{
					title: "Phasellus vel ex at turpis finibus dictum eget eget dolor",
					descriptions:
						"Nullam rutrum, dolor eu tempor euismod, nibh libero lacinia diam, non rhoncus enim lorem nec enim. Sed a interdum augue. Quisque sed malesuada nulla",
				},
				{
					title: "Nullam nulla erat",
					descriptions:
						"Etiam porttitor molestie ipsum, sed rutrum nibh tempor eget. Praesent fringilla efficitur faucibus",
				},
				{
					title: "Nullam rutrum, dolor eu tempor euismod",
					descriptions:
						"Nullam nulla erat, aliquet non sodales nec, elementum ac risus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer lobortis accumsan massa non tempus. Integer vitae gravida leo",
				},
			],
		};
	},
};
</script>

<style>
.vl {
	border-left: 1px solid #212529;
	height: 100px;
}
</style>