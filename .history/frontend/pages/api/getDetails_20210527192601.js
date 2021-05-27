import cookie from 'cookie'
import { API_URL } from '@/config/index'
import axios from 'axios'


export default async (req, res) => {
    if (req.method === 'GET') {


        const universities = await fetch(`${API_URL}/Universities?_limit=100`)
        console.log(universities.json());
    }
}