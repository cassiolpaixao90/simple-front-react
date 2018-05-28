import axios from 'axios';

export class AuthoresService {

    getAllAuthores() {
        return axios.get('http://localhost:4000/api/book/getall')
            .then(res =>  res.data.books);
    }

    getAddAuthores() {

    }

}