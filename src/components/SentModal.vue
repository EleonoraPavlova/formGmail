<template>
	<div class="modal d-flex p-4 backdrop" @click="$emit('close')">
		<div
			class="
				m-auto
				bg-light
				border border-success
				rounded
				p-5
				d-flex
				flex-column
			"
		>
			<slot />
		</div>
	</div>
</template>

<script>
export default {
	name: "SentModal",
	emits: ["close"],
};
</script>

<style>
.sent-modal {
	width: 60%;
}
.backdrop {
	position: fixed;
	top: 0;
	right: 0;
	left: 0;
	bottom: 0;
	background: #0000003d;
}
</style>