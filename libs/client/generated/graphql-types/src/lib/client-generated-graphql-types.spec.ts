import { clientGeneratedGraphqlTypes } from './client-generated-graphql-types';

describe('clientGeneratedGraphqlTypes', () => {
  it('should work', () => {
    expect(clientGeneratedGraphqlTypes()).toEqual(
      'client-generated-graphql-types'
    );
  });
});
