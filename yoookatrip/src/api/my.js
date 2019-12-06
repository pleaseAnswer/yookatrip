import axios from 'axios';

// 创建axios实例
const my = axios.create({
    baseURL: 'http://localhost:1910/'
});

function get(path,params,config={}){
    return my.get(path,{
        ...config,
        params
    })
}

function post(path,data={},config={}){
    return my.post(path,data,config)
}
function patch(path,data={},config={}){
    return my.patch(path,data,config)
}
function remove(path,data={},config={}){
    return my.delete(path,data,config)
}
export default {
    get,
    post,
    patch,
    remove
}