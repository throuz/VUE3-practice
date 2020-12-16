import axios from 'axios'

const apiClient = axios.create({
    baseURL: `http://e-traffic.taichung.gov.tw`
})

export const getEvent = () => apiClient.get('/DataAPI/api/ThsrStationAPI')