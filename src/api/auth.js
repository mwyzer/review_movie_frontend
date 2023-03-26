import axios from 'axios';
import client from './client';

const createUser = async (userInfo) => {
  await client.post('http://localhost:8000/api/user/create');
};
