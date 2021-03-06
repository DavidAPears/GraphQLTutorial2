const schema = `
  schema {
    query: Query
  }
`;

const Query = `
  type Query {
    hello: Hello!
  }
`;

const Hello = `
  type Hello {
    world: World!
  }
`;

const World = `
  type World {
    text: String!
  }
`;

export default [
  schema,
  Query,
  Hello,
  World
];
