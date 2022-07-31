import * as Types from '@nx-practice/client/generated/graphql-types';

import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type GetUserQueryVariables = Types.Exact<{
  args: Types.UserWhereUniqueInput;
}>;


export type GetUserQuery = { __typename?: 'Query', user: { __typename?: 'User', email: string, name?: string | null } };


export const GetUserDocument = gql`
    query GetUser($args: UserWhereUniqueInput!) {
  user(where: $args) {
    email
    name
  }
}
    `;

export function useGetUserQuery(options: Omit<Urql.UseQueryArgs<GetUserQueryVariables>, 'query'>) {
  return Urql.useQuery<GetUserQuery, GetUserQueryVariables>({ query: GetUserDocument, ...options });
};