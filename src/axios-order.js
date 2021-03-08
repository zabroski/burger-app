import axios from 'axios';


const instance = axios.create({
    // baseURL: 'https://burger-app-4d69c-default-rtdb.firebaseio.com/'
    baseURL: 'https://react-my-burger-82791-default-rtdb.firebaseio.com/'
})

export default instance;