import axios from 'axios'

const tiendaApi=axios.create({
    baseURL:process.env.VUE_APP_API_URL,
    
})

export default tiendaApi