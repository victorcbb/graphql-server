const post = () => {
  return {
    id: '1',
    title: 'Entendendo Graphql',
  };
};

const posts = () => {
  return [
    {
      id: '1',
      title: 'Entendendo Graphql',
    },
    {
      id: '2',
      title: 'Conhecendo Apollo Server',
    },
    {
      id: '3',
      title: 'Como criar queries e resolvers',
    },
  ];
};

export const postResolvers = {
  Query: {
    post,
    posts,
  },
};
