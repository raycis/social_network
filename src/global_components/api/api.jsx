import * as axios from 'axios';


const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY" : "d0c20dba-f905-4e64-aeda-fcc7f5dc5bf6"
    }
})


export const APIAuth = {
    getAuthInfo() {
        return instance.get(`auth/me`)
    },
    login(email, password, rememberMe){
        return instance.post(`auth/login`,{email, password, rememberMe})
    },
    logout(){
        return instance.delete(`auth/login`)
    }

}



