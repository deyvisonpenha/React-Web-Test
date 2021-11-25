import axios from 'axios';

const apiServer = axios.create({baseURL: 'https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean'});

export default apiServer;