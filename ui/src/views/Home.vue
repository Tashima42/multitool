<script setup lang="ts">
import {ref} from "vue"
import pb from "../pocketbase"

const url = ref("")
const shortenedUrl = ref("")

async function createUrl() {
    if (url.value === "") return
    shortenedUrl.value = await pb.createUrl(url.value)
    // @ts-ignore
    document.querySelector("#short-url-dialog")?.show()
}

function closeDialog() {
    // @ts-ignore
    document.querySelector("#short-url-dialog")?.close()
}

async function uploadFile() {
    const fileInput = document.getElementById("file-input")
    // @ts-ignore
    const file = fileInput.files[0]
    const formData = new FormData()
    formData.append('file', file)
    const fileUrl = await pb.uploadFile(formData)
    alert(fileUrl)
}
</script>

<template>
    <header>
        <h1>Multitool</h1>
    </header>
    <body>
    <div class="tools">
        <div class="url-shortener">
            <input type="text" placeholder="https://google.com" v-model="url">
            <button v-on:click="createUrl">Shorten</button>
            <dialog id="short-url-dialog">
                <a v-bind:href="shortenedUrl">{{ shortenedUrl }}</a>
                <button v-on:click="closeDialog">close</button>
            </dialog>
        </div>
        <div class="file-uploader">
            <input type="file" id="file-input"/>
            <button v-on:click="uploadFile">upload</button>
        </div>
    </div>
    </body>
</template>

<style scoped>
header {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
}

h1 {
    font-size: 70px;
}

.tools {
    display: flex;
    flex-direction: row;
}

.tools .url-shortener input {
    width: 80%;
    margin-bottom: 10px;
}

.tools .url-shortener button {
    padding: 0.5rem;
    background-color: black;
    color: white;
    border-radius: 5px;
}

.tools .url-shortener {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 33%;
}

dialog {
    z-index: 10;
    border: solid;
}
</style>
