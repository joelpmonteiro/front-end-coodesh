import axios from 'axios'
const services = axios.create({
    baseURL: 'http://localhost:3333/'
})


export default {
    async getAllArticle() {
        const getAll = services.get('articles/1/10');

        if (getAll.status === 200) return getAll
        //se error
        return getAll
    },
    async getNewsArticlePagination(dados) {
        const getAll = services.get(`articles/${dados.page}/${dados.limit}`);

        if (getAll.status === 200) return getAll
        //se error
        return getAll
    }
}