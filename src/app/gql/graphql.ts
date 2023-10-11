/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /**
   * A date-time string at UTC, such as 2007-12-03T10:15:30Z, is compliant with the date-time format outlined in section 5.6 of the RFC 3339
   * profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar.
   *
   * This scalar is a description of an exact instant on the timeline such as the instant that a user account was created.
   *
   * # Input Coercion
   *
   * When expected as an input type, only RFC 3339 compliant date-time strings are accepted. All other input values raise a query error indicating an incorrect type.
   *
   * # Result Coercion
   *
   * Where an RFC 3339 compliant date-time string has a time-zone other than UTC, it is shifted to UTC.
   * For example, the date-time string 2016-01-01T14:10:20+01:00 is shifted to 2016-01-01T13:10:20Z.
   */
  DateTime: { input: any; output: any; }
  /** A scalar to validate the email as it is defined in the HTML specification. */
  Email: { input: any; output: any; }
};

export type Comment = {
  __typename?: 'Comment';
  author?: Maybe<User>;
  body: Scalars['String']['output'];
  /** when the model was created */
  createdAt: Scalars['DateTime']['output'];
  /** Unique identifier */
  id: Scalars['ID']['output'];
  likes?: Maybe<Scalars['Int']['output']>;
  movie: Movie;
  /** when the model was updated */
  updatedAt: Scalars['DateTime']['output'];
};

export type CommentByInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type CommentCollectionFilterInput = {
  id?: InputMaybe<IdCollectionFilterInput>;
};

export type CommentConnection = {
  __typename?: 'CommentConnection';
  edges?: Maybe<Array<Maybe<CommentEdge>>>;
  /** Information to aid in pagination */
  pageInfo: PageInfo;
};

/** Input to create a Comment */
export type CommentCreateInput = {
  author?: InputMaybe<CommentToUserCreateUserRelation>;
  body: Scalars['String']['input'];
  likes?: InputMaybe<Scalars['Int']['input']>;
  movie: CommentToMovieCreateMovieRelation;
};

export type CommentCreateManyInput = {
  input: CommentCreateInput;
};

export type CommentCreateManyPayload = {
  __typename?: 'CommentCreateManyPayload';
  commentCollection: Array<Comment>;
};

export type CommentCreatePayload = {
  __typename?: 'CommentCreatePayload';
  comment?: Maybe<Comment>;
};

export type CommentDeleteManyInput = {
  by: CommentByInput;
};

export type CommentDeleteManyPayload = {
  __typename?: 'CommentDeleteManyPayload';
  deletedIds: Array<Scalars['ID']['output']>;
};

export type CommentDeletePayload = {
  __typename?: 'CommentDeletePayload';
  deletedId: Scalars['ID']['output'];
};

export type CommentEdge = {
  __typename?: 'CommentEdge';
  cursor: Scalars['String']['output'];
  node: Comment;
};

export type CommentOrderByInput = {
  createdAt?: InputMaybe<OrderByDirection>;
};

export type CommentSearchConnection = {
  __typename?: 'CommentSearchConnection';
  edges: Array<CommentSearchEdge>;
  pageInfo: PageInfo;
  searchInfo?: Maybe<SearchInfo>;
};

export type CommentSearchEdge = {
  __typename?: 'CommentSearchEdge';
  cursor: Scalars['String']['output'];
  node: Comment;
  score: Scalars['Float']['output'];
};

export type CommentSearchFilterInput = {
  ALL?: InputMaybe<Array<CommentSearchFilterInput>>;
  ANY?: InputMaybe<Array<CommentSearchFilterInput>>;
  NONE?: InputMaybe<Array<CommentSearchFilterInput>>;
  NOT?: InputMaybe<CommentSearchFilterInput>;
  body?: InputMaybe<StringSearchFilterInput>;
  createdAt?: InputMaybe<DateTimeSearchFilterInput>;
  likes?: InputMaybe<IntOrNullSearchFilterInput>;
  updatedAt?: InputMaybe<DateTimeSearchFilterInput>;
};

/** Input to create a Comment for the CommentToMovie relation of Movie */
export type CommentToMovieCreateComment = {
  author?: InputMaybe<CommentToUserCreateUserRelation>;
  body: Scalars['String']['input'];
  likes?: InputMaybe<Scalars['Int']['input']>;
};

/** Input to link to or create a Comment for the CommentToMovie relation of Movie */
export type CommentToMovieCreateCommentRelation = {
  create?: InputMaybe<CommentToMovieCreateComment>;
  link?: InputMaybe<Scalars['ID']['input']>;
};

/** Input to create a Movie for the CommentToMovie relation of Comment */
export type CommentToMovieCreateMovie = {
  comments?: InputMaybe<Array<InputMaybe<CommentToMovieCreateCommentRelation>>>;
  content?: InputMaybe<Scalars['String']['input']>;
  likes?: InputMaybe<Scalars['Int']['input']>;
  title: Scalars['String']['input'];
};

/** Input to link to or create a Movie for the CommentToMovie relation of Comment */
export type CommentToMovieCreateMovieRelation = {
  create?: InputMaybe<CommentToMovieCreateMovie>;
  link?: InputMaybe<Scalars['ID']['input']>;
};

/** Input to link/unlink to or create a Comment for the CommentToMovie relation of Movie */
export type CommentToMovieUpdateCommentRelation = {
  create?: InputMaybe<CommentToMovieCreateComment>;
  link?: InputMaybe<Scalars['ID']['input']>;
  unlink?: InputMaybe<Scalars['ID']['input']>;
};

/** Input to link/unlink to or create a Movie for the CommentToMovie relation of Comment */
export type CommentToMovieUpdateMovieRelation = {
  create?: InputMaybe<CommentToMovieCreateMovie>;
  link?: InputMaybe<Scalars['ID']['input']>;
  unlink?: InputMaybe<Scalars['ID']['input']>;
};

/** Input to create a User for the CommentToUser relation of Comment */
export type CommentToUserCreateUser = {
  email?: InputMaybe<Scalars['Email']['input']>;
  movies?: InputMaybe<Array<InputMaybe<MovieToUserCreateMovieRelation>>>;
  name: Scalars['String']['input'];
};

/** Input to link to or create a User for the CommentToUser relation of Comment */
export type CommentToUserCreateUserRelation = {
  create?: InputMaybe<CommentToUserCreateUser>;
  link?: InputMaybe<Scalars['ID']['input']>;
};

/** Input to link/unlink to or create a User for the CommentToUser relation of Comment */
export type CommentToUserUpdateUserRelation = {
  create?: InputMaybe<CommentToUserCreateUser>;
  link?: InputMaybe<Scalars['ID']['input']>;
  unlink?: InputMaybe<Scalars['ID']['input']>;
};

/** Input to update a Comment */
export type CommentUpdateInput = {
  author?: InputMaybe<CommentToUserUpdateUserRelation>;
  body?: InputMaybe<Scalars['String']['input']>;
  likes?: InputMaybe<IntOperationsInput>;
  movie?: InputMaybe<CommentToMovieUpdateMovieRelation>;
};

export type CommentUpdateManyInput = {
  by: CommentByInput;
  input: CommentUpdateInput;
};

export type CommentUpdateManyPayload = {
  __typename?: 'CommentUpdateManyPayload';
  commentCollection: Array<Comment>;
};

export type CommentUpdatePayload = {
  __typename?: 'CommentUpdatePayload';
  comment?: Maybe<Comment>;
};

export type DateTimeSearchFilterInput = {
  ALL?: InputMaybe<Array<DateTimeSearchFilterInput>>;
  ANY?: InputMaybe<Array<DateTimeSearchFilterInput>>;
  NONE?: InputMaybe<Array<DateTimeSearchFilterInput>>;
  NOT?: InputMaybe<DateTimeSearchFilterInput>;
  eq?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  neq?: InputMaybe<Scalars['DateTime']['input']>;
  notIn?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type IdCollectionFilterInput = {
  in?: InputMaybe<Array<Scalars['ID']['input']>>;
};

/** Possible operations for an Int field */
export type IntOperationsInput = {
  decrement?: InputMaybe<Scalars['Int']['input']>;
  increment?: InputMaybe<Scalars['Int']['input']>;
  set?: InputMaybe<Scalars['Int']['input']>;
};

export type IntOrNullSearchFilterInput = {
  ALL?: InputMaybe<Array<IntOrNullSearchFilterInput>>;
  ANY?: InputMaybe<Array<IntOrNullSearchFilterInput>>;
  NONE?: InputMaybe<Array<IntOrNullSearchFilterInput>>;
  NOT?: InputMaybe<IntOrNullSearchFilterInput>;
  eq?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  neq?: InputMaybe<Scalars['Int']['input']>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type Movie = {
  __typename?: 'Movie';
  comments?: Maybe<CommentConnection>;
  content?: Maybe<Scalars['String']['output']>;
  /** when the model was created */
  createdAt: Scalars['DateTime']['output'];
  /** Unique identifier */
  id: Scalars['ID']['output'];
  likes?: Maybe<Scalars['Int']['output']>;
  title: Scalars['String']['output'];
  /** when the model was updated */
  updatedAt: Scalars['DateTime']['output'];
};


export type MovieCommentsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<MovieOrderByInput>;
};

export type MovieByInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type MovieCollectionFilterInput = {
  id?: InputMaybe<IdCollectionFilterInput>;
};

export type MovieConnection = {
  __typename?: 'MovieConnection';
  edges?: Maybe<Array<Maybe<MovieEdge>>>;
  /** Information to aid in pagination */
  pageInfo: PageInfo;
};

/** Input to create a Movie */
export type MovieCreateInput = {
  comments?: InputMaybe<Array<InputMaybe<CommentToMovieCreateCommentRelation>>>;
  content?: InputMaybe<Scalars['String']['input']>;
  likes?: InputMaybe<Scalars['Int']['input']>;
  title: Scalars['String']['input'];
};

export type MovieCreateManyInput = {
  input: MovieCreateInput;
};

export type MovieCreateManyPayload = {
  __typename?: 'MovieCreateManyPayload';
  movieCollection: Array<Movie>;
};

export type MovieCreatePayload = {
  __typename?: 'MovieCreatePayload';
  movie?: Maybe<Movie>;
};

export type MovieDeleteManyInput = {
  by: MovieByInput;
};

export type MovieDeleteManyPayload = {
  __typename?: 'MovieDeleteManyPayload';
  deletedIds: Array<Scalars['ID']['output']>;
};

export type MovieDeletePayload = {
  __typename?: 'MovieDeletePayload';
  deletedId: Scalars['ID']['output'];
};

export type MovieEdge = {
  __typename?: 'MovieEdge';
  cursor: Scalars['String']['output'];
  node: Movie;
};

export type MovieOrderByInput = {
  createdAt?: InputMaybe<OrderByDirection>;
};

export type MovieSearchConnection = {
  __typename?: 'MovieSearchConnection';
  edges: Array<MovieSearchEdge>;
  pageInfo: PageInfo;
  searchInfo?: Maybe<SearchInfo>;
};

export type MovieSearchEdge = {
  __typename?: 'MovieSearchEdge';
  cursor: Scalars['String']['output'];
  node: Movie;
  score: Scalars['Float']['output'];
};

export type MovieSearchFilterInput = {
  ALL?: InputMaybe<Array<MovieSearchFilterInput>>;
  ANY?: InputMaybe<Array<MovieSearchFilterInput>>;
  NONE?: InputMaybe<Array<MovieSearchFilterInput>>;
  NOT?: InputMaybe<MovieSearchFilterInput>;
  content?: InputMaybe<StringOrNullSearchFilterInput>;
  createdAt?: InputMaybe<DateTimeSearchFilterInput>;
  likes?: InputMaybe<IntOrNullSearchFilterInput>;
  title?: InputMaybe<StringSearchFilterInput>;
  updatedAt?: InputMaybe<DateTimeSearchFilterInput>;
};

/** Input to create a Movie for the MovieToUser relation of User */
export type MovieToUserCreateMovie = {
  comments?: InputMaybe<Array<InputMaybe<CommentToMovieCreateCommentRelation>>>;
  content?: InputMaybe<Scalars['String']['input']>;
  likes?: InputMaybe<Scalars['Int']['input']>;
  title: Scalars['String']['input'];
};

/** Input to link to or create a Movie for the MovieToUser relation of User */
export type MovieToUserCreateMovieRelation = {
  create?: InputMaybe<MovieToUserCreateMovie>;
  link?: InputMaybe<Scalars['ID']['input']>;
};

/** Input to link/unlink to or create a Movie for the MovieToUser relation of User */
export type MovieToUserUpdateMovieRelation = {
  create?: InputMaybe<MovieToUserCreateMovie>;
  link?: InputMaybe<Scalars['ID']['input']>;
  unlink?: InputMaybe<Scalars['ID']['input']>;
};

/** Input to update a Movie */
export type MovieUpdateInput = {
  comments?: InputMaybe<Array<InputMaybe<CommentToMovieUpdateCommentRelation>>>;
  content?: InputMaybe<Scalars['String']['input']>;
  likes?: InputMaybe<IntOperationsInput>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type MovieUpdateManyInput = {
  by: MovieByInput;
  input: MovieUpdateInput;
};

export type MovieUpdateManyPayload = {
  __typename?: 'MovieUpdateManyPayload';
  movieCollection: Array<Movie>;
};

export type MovieUpdatePayload = {
  __typename?: 'MovieUpdatePayload';
  movie?: Maybe<Movie>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Create a Comment */
  commentCreate?: Maybe<CommentCreatePayload>;
  /** Create multiple Comment */
  commentCreateMany?: Maybe<CommentCreateManyPayload>;
  /** Delete a Comment by ID or unique field */
  commentDelete?: Maybe<CommentDeletePayload>;
  /** Delete multiple Comment */
  commentDeleteMany?: Maybe<CommentDeleteManyPayload>;
  /** Update a Comment */
  commentUpdate?: Maybe<CommentUpdatePayload>;
  /** Update multiple Comment */
  commentUpdateMany?: Maybe<CommentUpdateManyPayload>;
  /** Create a Movie */
  movieCreate?: Maybe<MovieCreatePayload>;
  /** Create multiple Movie */
  movieCreateMany?: Maybe<MovieCreateManyPayload>;
  /** Delete a Movie by ID or unique field */
  movieDelete?: Maybe<MovieDeletePayload>;
  /** Delete multiple Movie */
  movieDeleteMany?: Maybe<MovieDeleteManyPayload>;
  /** Update a Movie */
  movieUpdate?: Maybe<MovieUpdatePayload>;
  /** Update multiple Movie */
  movieUpdateMany?: Maybe<MovieUpdateManyPayload>;
  /** Create a User */
  userCreate?: Maybe<UserCreatePayload>;
  /** Create multiple User */
  userCreateMany?: Maybe<UserCreateManyPayload>;
  /** Delete a User by ID or unique field */
  userDelete?: Maybe<UserDeletePayload>;
  /** Delete multiple User */
  userDeleteMany?: Maybe<UserDeleteManyPayload>;
  /** Update a User */
  userUpdate?: Maybe<UserUpdatePayload>;
  /** Update multiple User */
  userUpdateMany?: Maybe<UserUpdateManyPayload>;
};


export type MutationCommentCreateArgs = {
  input: CommentCreateInput;
};


export type MutationCommentCreateManyArgs = {
  input: Array<CommentCreateManyInput>;
};


export type MutationCommentDeleteArgs = {
  by: CommentByInput;
};


export type MutationCommentDeleteManyArgs = {
  input: Array<CommentDeleteManyInput>;
};


export type MutationCommentUpdateArgs = {
  by: CommentByInput;
  input: CommentUpdateInput;
};


export type MutationCommentUpdateManyArgs = {
  input: Array<CommentUpdateManyInput>;
};


export type MutationMovieCreateArgs = {
  input: MovieCreateInput;
};


export type MutationMovieCreateManyArgs = {
  input: Array<MovieCreateManyInput>;
};


export type MutationMovieDeleteArgs = {
  by: MovieByInput;
};


export type MutationMovieDeleteManyArgs = {
  input: Array<MovieDeleteManyInput>;
};


export type MutationMovieUpdateArgs = {
  by: MovieByInput;
  input: MovieUpdateInput;
};


export type MutationMovieUpdateManyArgs = {
  input: Array<MovieUpdateManyInput>;
};


export type MutationUserCreateArgs = {
  input: UserCreateInput;
};


export type MutationUserCreateManyArgs = {
  input: Array<UserCreateManyInput>;
};


export type MutationUserDeleteArgs = {
  by: UserByInput;
};


export type MutationUserDeleteManyArgs = {
  input: Array<UserDeleteManyInput>;
};


export type MutationUserUpdateArgs = {
  by: UserByInput;
  input: UserUpdateInput;
};


export type MutationUserUpdateManyArgs = {
  input: Array<UserUpdateManyInput>;
};

export enum OrderByDirection {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor?: Maybe<Scalars['String']['output']>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPreviousPage: Scalars['Boolean']['output'];
  startCursor?: Maybe<Scalars['String']['output']>;
};

export type Query = {
  __typename?: 'Query';
  /** Query a single Comment by an ID or a unique field */
  comment?: Maybe<Comment>;
  /** Paginated query to fetch the whole list of `Comment`. */
  commentCollection?: Maybe<CommentConnection>;
  /** Search `Comment` */
  commentSearch?: Maybe<CommentSearchConnection>;
  /** Query a single Movie by an ID or a unique field */
  movie?: Maybe<Movie>;
  /** Paginated query to fetch the whole list of `Movie`. */
  movieCollection?: Maybe<MovieConnection>;
  /** Search `Movie` */
  movieSearch?: Maybe<MovieSearchConnection>;
  /** Query a single User by an ID or a unique field */
  user?: Maybe<User>;
  /** Paginated query to fetch the whole list of `User`. */
  userCollection?: Maybe<UserConnection>;
};


export type QueryCommentArgs = {
  by: CommentByInput;
};


export type QueryCommentCollectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<CommentCollectionFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<CommentOrderByInput>;
};


export type QueryCommentSearchArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  fields?: InputMaybe<Array<Scalars['String']['input']>>;
  filter?: InputMaybe<CommentSearchFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  query?: InputMaybe<Scalars['String']['input']>;
};


export type QueryMovieArgs = {
  by: MovieByInput;
};


export type QueryMovieCollectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<MovieCollectionFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<MovieOrderByInput>;
};


export type QueryMovieSearchArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  fields?: InputMaybe<Array<Scalars['String']['input']>>;
  filter?: InputMaybe<MovieSearchFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  query?: InputMaybe<Scalars['String']['input']>;
};


export type QueryUserArgs = {
  by: UserByInput;
};


export type QueryUserCollectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<UserCollectionFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<UserOrderByInput>;
};

export type SearchInfo = {
  __typename?: 'SearchInfo';
  totalHits: Scalars['Int']['output'];
};

export type StringOrNullSearchFilterInput = {
  ALL?: InputMaybe<Array<StringOrNullSearchFilterInput>>;
  ANY?: InputMaybe<Array<StringOrNullSearchFilterInput>>;
  NONE?: InputMaybe<Array<StringOrNullSearchFilterInput>>;
  NOT?: InputMaybe<StringOrNullSearchFilterInput>;
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  neq?: InputMaybe<Scalars['String']['input']>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  regex?: InputMaybe<Scalars['String']['input']>;
};

export type StringSearchFilterInput = {
  ALL?: InputMaybe<Array<StringSearchFilterInput>>;
  ANY?: InputMaybe<Array<StringSearchFilterInput>>;
  NONE?: InputMaybe<Array<StringSearchFilterInput>>;
  NOT?: InputMaybe<StringSearchFilterInput>;
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  neq?: InputMaybe<Scalars['String']['input']>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  regex?: InputMaybe<Scalars['String']['input']>;
};

export type User = {
  __typename?: 'User';
  /** when the model was created */
  createdAt: Scalars['DateTime']['output'];
  email?: Maybe<Scalars['Email']['output']>;
  /** Unique identifier */
  id: Scalars['ID']['output'];
  movies?: Maybe<MovieConnection>;
  name: Scalars['String']['output'];
  /** when the model was updated */
  updatedAt: Scalars['DateTime']['output'];
};


export type UserMoviesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<UserOrderByInput>;
};

export type UserByInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type UserCollectionFilterInput = {
  id?: InputMaybe<IdCollectionFilterInput>;
};

export type UserConnection = {
  __typename?: 'UserConnection';
  edges?: Maybe<Array<Maybe<UserEdge>>>;
  /** Information to aid in pagination */
  pageInfo: PageInfo;
};

/** Input to create a User */
export type UserCreateInput = {
  email?: InputMaybe<Scalars['Email']['input']>;
  movies?: InputMaybe<Array<InputMaybe<MovieToUserCreateMovieRelation>>>;
  name: Scalars['String']['input'];
};

export type UserCreateManyInput = {
  input: UserCreateInput;
};

export type UserCreateManyPayload = {
  __typename?: 'UserCreateManyPayload';
  userCollection: Array<User>;
};

export type UserCreatePayload = {
  __typename?: 'UserCreatePayload';
  user?: Maybe<User>;
};

export type UserDeleteManyInput = {
  by: UserByInput;
};

export type UserDeleteManyPayload = {
  __typename?: 'UserDeleteManyPayload';
  deletedIds: Array<Scalars['ID']['output']>;
};

export type UserDeletePayload = {
  __typename?: 'UserDeletePayload';
  deletedId: Scalars['ID']['output'];
};

export type UserEdge = {
  __typename?: 'UserEdge';
  cursor: Scalars['String']['output'];
  node: User;
};

export type UserOrderByInput = {
  createdAt?: InputMaybe<OrderByDirection>;
};

/** Input to update a User */
export type UserUpdateInput = {
  email?: InputMaybe<Scalars['Email']['input']>;
  movies?: InputMaybe<Array<InputMaybe<MovieToUserUpdateMovieRelation>>>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type UserUpdateManyInput = {
  by: UserByInput;
  input: UserUpdateInput;
};

export type UserUpdateManyPayload = {
  __typename?: 'UserUpdateManyPayload';
  userCollection: Array<User>;
};

export type UserUpdatePayload = {
  __typename?: 'UserUpdatePayload';
  user?: Maybe<User>;
};

export type GetMoviesQueryVariables = Exact<{
  first?: InputMaybe<Scalars['Int']['input']>;
}>;


export type GetMoviesQuery = { __typename?: 'Query', movieCollection?: { __typename?: 'MovieConnection', edges?: Array<{ __typename?: 'MovieEdge', node: { __typename?: 'Movie', title: string, id: string } } | null> | null } | null };


export const GetMoviesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getMovies"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}},"defaultValue":{"kind":"IntValue","value":"10"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"movieCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetMoviesQuery, GetMoviesQueryVariables>;