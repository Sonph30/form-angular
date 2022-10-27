import axios from "axios";

export const useHeader = {
    get :  function (url: string) {
        const res =  axios.get(url);
        return  res;
    },
    post: function( url: string, data: object){
        const res = axios.post(url, data);
        return res;
    },
    update: function( url: string, data: object) {
        const res = axios.post(url, data);
        return res;
    },
    delete : function (url: string) {
        const res = axios.delete(url);
        return res;
    }
}