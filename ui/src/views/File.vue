<script setup lang="ts">
import { useRoute } from "vue-router";
import { ref, onMounted} from "vue";
import pb from "@/pocketbase"

const route = useRoute()
const id = ref(route.params.id)
const fileUrl= ref("")

onMounted(lookupFile)
async function  lookupFile() {
    if (id.value === "" || !id) return
		fileUrl.value = await pb.getFile(id.value as string)
}
</script>

<template>
	<p>You can download your file at <a v-bind:href="fileUrl" download>{{fileUrl}}</a></p>
</template>
