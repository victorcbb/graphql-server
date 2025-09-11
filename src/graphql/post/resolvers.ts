import { type AxiosResponse } from 'axios';

const post = async (
  _parent: any,
  arg: { id: string },
  context: { getPosts: (_id?: string) => Promise<AxiosResponse<any, any>> },
) => {
  const { getPosts } = context;
  const { id } = arg;

  const response = await getPosts(`/${id}`);
  return response.data;
};

const posts = async (
  _parent: any,
  _arg: { id: string },
  context: { getPosts: (_id?: string) => Promise<AxiosResponse<any, any>> },
) => {
  const { getPosts } = context;

  const response = await getPosts();
  return response.data;
};

export const postResolvers = {
  Query: {
    post,
    posts,
  },
};
