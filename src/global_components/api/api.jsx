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
    login(email, password, rememberMe = false){
        return instance.post(`auth/login`,{email, password, rememberMe})
    },
    logout(){
        return instance.delete(`auth/login`)
    }

};

export const APIUsers = {

    getAllUsers(curentPage, pageSize){
        return instance.get(`users?page=${curentPage}&count=${pageSize}`)
    },

    getFollow(id){
        return instance.post(`follow/${id}`)
    },

    getUnfollow(id){
        return instance.delete(`follow/${id}`)
    }

};
export const APIProfile = {
    getProfile(userId) {
        return instance.get(`profile/` + userId)
    },
    getStatus(userId){
        return instance.get(`profile/status/`+ userId)

    },
    updateStatus(status){
        return instance.put(`profile/status`, {status: status})
    }
};



