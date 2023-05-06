import PocketBase from "pocketbase"

const pocketbase = new PocketBase("http://tapi.local.tashima.space")

const URLS_COLLECTION = "urls"
const FILES_COLLECTION = "files"

const pb = {
    async createUrl(target: string): Promise<string> {
        const data = { target }
        const record = await pocketbase.collection(URLS_COLLECTION).create(data)
        return `http://t.local.tashima.space/${record.id}`
    },
    async getUrl(id: string): Promise<string> {
        const result = await pocketbase.collection(URLS_COLLECTION).getOne(id)
        return result.target
    },
    async uploadFile(file: FormData): Promise<string> {
        const record = await pocketbase.collection(FILES_COLLECTION).create(file)
        return `http://t.local.tashima.space/f/${record.id}`
    },
    async getFile(id: string): Promise<string> {
        const record = await pocketbase.collection(FILES_COLLECTION).getOne(id)
        return pocketbase.getFileUrl(record, record.file)
    },
}

export default pb