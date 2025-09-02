const user = () => {
  return {
    id: '1',
    userName: 'JohnDoe',
  };
};

const users = () => {
  return [
    {
      id: '1',
      userName: 'JohnDoe',
    },
    {
      id: '2',
      userName: 'FulanoDeTal',
    },
    {
      id: '3',
      userName: 'VictorB',
    },
  ];
};

export const userResolvers = {
  Query: {
    user,
    users,
  },
};
