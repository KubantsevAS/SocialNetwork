import axios from 'axios';



const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: { "API-KEY": "bff11a72-6534-45d6-9852-f7e15e778155" }
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            })
    },

    follow(userId) {
        return instance.post(`follow/${userId}`)
    },

    unfollow(userId) {
        return instance.delete(`follow/${userId}`)
    },

    getLogin () {
        return  authAPI.getLogin();
    },

    getProfile (userId) {
        return  profileAPI.getProfile(userId)    
    }
}

export const profileAPI = {

    getProfile (userId) {
        return instance.get(`profile/` + userId)
    },

    getStatus (userId) {
        return instance.get(`profile/status/` + userId)
    },

    updateStatus (status) {
        return instance.put(`profile/status`, {status})
    },

    uploadPhoto (Photofile) {
        var formData = new FormData();
        formData.append("image", Photofile)
        return instance.put(`profile/photo/`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    },

    saveProfile (profile) {
        return instance.put(`profile`, profile)
    }
}

export const authAPI = {

    login (email, password, rememberMe = false, captcha = null) {
        return  instance.post(`auth/login`, {email, password, rememberMe, captcha});
    },

    logout () {
        return  instance.delete(`auth/login`);
    },

    getLogin () {
        return  instance.get(`auth/me`);
    },
}

export const friendsAPI = {

    getUsers(friend, currentPage, pageSize) {
        return instance.get(`users?friend=${friend}&page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            })
    },
}

export const securityAPI = {

    getCaptchaUrl () {
        return  instance.post(`security/get-captcha-url`);
    }
}


