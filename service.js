import axios from 'axios';
let PriorityService = () => {};
PriorityService.click = async function(component) {
    return await axios.post('http://localhost:3001/click', {component: component, token: localStorage.getItem('token')}, {headers: {"Content-Type": "application/json"}});
}

PriorityService.getPriorities = async function(callback) {
    axios.get('http://localhost:3001/getpriorities?token=' + localStorage.getItem('token')).then(response => {
        callback(response.data);
    })
}

export {PriorityService};