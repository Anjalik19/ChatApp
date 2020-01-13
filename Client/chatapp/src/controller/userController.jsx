import axios from 'axios';
import services from '../Services/userServices';
let controller={
    register(firstName, lastName, email, password) {
        let data = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password
        }
        return axios.post(services.register, data).then(response => {
            console.log("response" + JSON.stringify(response));
            if (response.status === 200) {
                console.log("register sucess")
            }
        })
            .catch(error => {
                console.log("registration failed", error);
            })
    },
    login(email, password) {
        var data = {
            email: email,
            password: password
        }
        return axios.post(services.login, data).then(response => {
            console.log("response" + JSON.stringify(response));
            if (response.status === 200) {
                console.log("login sucess")
            }
        })
            .catch(error => {
                console.log("login failed", error);
            })
    },
    forgotPassword(email) {
        var data = {
            email: email,
        }
        return axios.post(services.forgotPassword, data).then(response => {
            console.log("response" + JSON.stringify(response));
            if (response.status === 200) {
                console.log("mail sent")
            }
        })
            .catch(error => {
                console.log("forgot password failed", error);
            })
    },
    getAllUseres() {
        return axios.get(services.getAllUsers).then(response => {
            console.log("response", response.data);
            if (response.status === 200) {
                console.log("get all useres sucess");
                return response.data;
            }

        })
            .catch(error => {
                console.log("get all useres failed", error);


            })


    }
}
export default controller;
