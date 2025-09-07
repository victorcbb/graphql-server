import { type AxiosResponse } from 'axios';

const user = async (
  _parent: any,
  arg: { id: string },
  context: { getUsers: (_id?: string) => Promise<AxiosResponse<any, any>> },
) => {
  const { getUsers } = context;
  const { id } = arg;

  const response = await getUsers(id);
  const user = response.data;

  return user;
};

const users = async (
  _parent: any,
  _arg: any,
  context: { getUsers: (_id?: string) => Promise<AxiosResponse<any, any>> },
) => {
  const { getUsers } = context;

  const response = await getUsers();
  const users = response.data;

  return users;
};

export const userResolvers = {
  Query: {
    user,
    users,
  },
};
