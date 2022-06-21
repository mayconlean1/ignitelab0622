import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4obxy9i1svm01xi3byv49w5/master',
    cache: new InMemoryCache
})