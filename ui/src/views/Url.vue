<script setup lang="ts">
import { useRoute } from "vue-router";
import { ref, onMounted} from "vue";
import pb from "@/pocketbase"

const route = useRoute()
const id = ref(route.params.id)
const target= ref("")

onMounted(redirect)
async function  redirect() {
    if (id.value === "" || !id) return
		target.value = await pb.getUrl(id.value as string)
		if (!target) return
		window.location.replace(target.value)
}
</script>

<template>
	<h1>Redirecting you to <a v-bind:href="target">{{target}}</a></h1>
</template>
