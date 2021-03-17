import axios from 'axios';


const instance = axios.create({
    baseURL: 'https://react-my-burger-82791-default-rtdb.firebaseio.com/'
    
})

export default instance;