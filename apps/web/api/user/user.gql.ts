import { gql } from 'urql';

export const GET_USER = gql`
  query GetUser($args: UserWhereUniqueInput!) {
    user(where: $args) {
      email
      name
    }
  }
`;
