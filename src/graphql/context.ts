import { api } from '../lib/axios.ts';

export const context = async () => {
  return {
    getUsers: (id: string = '/') => api(`/users${id}`),
    getPosts: (id: string = '/') => api(`/posts${id}`),
  };
};
