/* eslint-disable */
/* prettier-ignore */

/** An IntrospectionQuery representation of your schema.
 *
 * @remarks
 * This is an introspection of your schema saved as a file by GraphQLSP.
 * It will automatically be used by `gql.tada` to infer the types of your GraphQL documents.
 * If you need to reuse this data or update your `scalars`, update `tadaOutputLocation` to
 * instead save to a .ts instead of a .d.ts file.
 */
export type introspection = {
  query: 'Query';
  mutation: 'Mutation';
  subscription: never;
  types: {
    'JSON': unknown;
    'DateTime': unknown;
    'UserFromPost': { kind: 'OBJECT'; name: 'UserFromPost'; fields: { 'id': { name: 'id'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; } }; 'userName': { name: 'userName'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; } }; 'name': { name: 'name'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; } }; 'image': { name: 'image'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; } }; 'bio': { name: 'bio'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; } }; 'workingAt': { name: 'workingAt'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; } }; }; };
    'String': unknown;
    'Tags': { kind: 'OBJECT'; name: 'Tags'; fields: { 'mame': { name: 'mame'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; } }; }; };
    'Post': { kind: 'OBJECT'; name: 'Post'; fields: { 'id': { name: 'id'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'ID'; ofType: null; }; } }; 'postType': { name: 'postType'; type: { kind: 'ENUM'; name: 'PostType'; ofType: null; } }; 'accept': { name: 'accept'; type: { kind: 'SCALAR'; name: 'JSON'; ofType: null; } }; 'description': { name: 'description'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; } }; 'createdAt': { name: 'createdAt'; type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; } }; 'expiresAt': { name: 'expiresAt'; type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; } }; 'jobRole': { name: 'jobRole'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; } }; 'jobType': { name: 'jobType'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; } }; 'jobExperience': { name: 'jobExperience'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; } }; 'jobLocation': { name: 'jobLocation'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; } }; 'jobCompensation': { name: 'jobCompensation'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; } }; 'userId': { name: 'userId'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; } }; 'stars': { name: 'stars'; type: { kind: 'SCALAR'; name: 'Int'; ofType: null; } }; 'acceptLimit': { name: 'acceptLimit'; type: { kind: 'SCALAR'; name: 'Int'; ofType: null; } }; 'companyName': { name: 'companyName'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; } }; 'jobCode': { name: 'jobCode'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; } }; 'user': { name: 'user'; type: { kind: 'OBJECT'; name: 'UserFromPost'; ofType: null; } }; 'totalApplied': { name: 'totalApplied'; type: { kind: 'SCALAR'; name: 'Int'; ofType: null; } }; 'totalComments': { name: 'totalComments'; type: { kind: 'SCALAR'; name: 'Int'; ofType: null; } }; 'tags': { name: 'tags'; type: { kind: 'LIST'; name: never; ofType: { kind: 'OBJECT'; name: 'Tags'; ofType: null; }; } }; 'hashtags': { name: 'hashtags'; type: { kind: 'LIST'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; } }; }; };
    'ID': unknown;
    'Int': unknown;
    'CreatePost': { kind: 'OBJECT'; name: 'CreatePost'; fields: { 'postType': { name: 'postType'; type: { kind: 'ENUM'; name: 'PostType'; ofType: null; } }; 'accept': { name: 'accept'; type: { kind: 'SCALAR'; name: 'JSON'; ofType: null; } }; 'description': { name: 'description'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; } }; 'expiresAt': { name: 'expiresAt'; type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; } }; 'jobRole': { name: 'jobRole'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; } }; 'jobType': { name: 'jobType'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; } }; 'jobExperience': { name: 'jobExperience'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; } }; 'jobLocation': { name: 'jobLocation'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; } }; 'jobCompensation': { name: 'jobCompensation'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; } }; 'userId': { name: 'userId'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; } }; 'stars': { name: 'stars'; type: { kind: 'SCALAR'; name: 'Int'; ofType: null; } }; 'acceptLimit': { name: 'acceptLimit'; type: { kind: 'SCALAR'; name: 'Int'; ofType: null; } }; 'companyName': { name: 'companyName'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; } }; 'jobCode': { name: 'jobCode'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; } }; 'tags': { name: 'tags'; type: { kind: 'LIST'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; } }; 'hashtags': { name: 'hashtags'; type: { kind: 'LIST'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; } }; }; };
    'ApplyPost': { kind: 'OBJECT'; name: 'ApplyPost'; fields: { 'userId': { name: 'userId'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; } }; 'postId': { name: 'postId'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; } }; 'applyInfo': { name: 'applyInfo'; type: { kind: 'SCALAR'; name: 'JSON'; ofType: null; } }; }; };
    'Error': { kind: 'INTERFACE'; name: 'Error'; fields: { 'message': { name: 'message'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; } }; }; possibleTypes: 'UserNotAuthenticatedError' | 'NotFound'; };
    'UserNotAuthenticatedError': { kind: 'OBJECT'; name: 'UserNotAuthenticatedError'; fields: { 'message': { name: 'message'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; } }; }; };
    'NotFound': { kind: 'OBJECT'; name: 'NotFound'; fields: { 'message': { name: 'message'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; } }; }; };
    'PostResult': { kind: 'OBJECT'; name: 'PostResult'; fields: { 'code': { name: 'code'; type: { kind: 'SCALAR'; name: 'Int'; ofType: null; } }; 'success': { name: 'success'; type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null; } }; 'message': { name: 'message'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; } }; 'post': { name: 'post'; type: { kind: 'OBJECT'; name: 'CreatePost'; ofType: null; } }; }; };
    'Boolean': unknown;
    'ApplyPostResult': { kind: 'OBJECT'; name: 'ApplyPostResult'; fields: { 'code': { name: 'code'; type: { kind: 'SCALAR'; name: 'Int'; ofType: null; } }; 'success': { name: 'success'; type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null; } }; 'message': { name: 'message'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; } }; 'post': { name: 'post'; type: { kind: 'OBJECT'; name: 'ApplyPost'; ofType: null; } }; }; };
    'CreatePostType': { kind: 'INPUT_OBJECT'; name: 'CreatePostType'; inputFields: [{ name: 'postType'; type: { kind: 'ENUM'; name: 'PostType'; ofType: null; }; defaultValue: null }, { name: 'accept'; type: { kind: 'SCALAR'; name: 'JSON'; ofType: null; }; defaultValue: null }, { name: 'description'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; }; defaultValue: null }, { name: 'expiresAt'; type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; }; defaultValue: null }, { name: 'jobRole'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; }; defaultValue: null }, { name: 'jobType'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; }; defaultValue: null }, { name: 'jobExperience'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; }; defaultValue: null }, { name: 'jobLocation'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; }; defaultValue: null }, { name: 'jobCompensation'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; }; defaultValue: null }, { name: 'userId'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; }; defaultValue: null }, { name: 'stars'; type: { kind: 'SCALAR'; name: 'Int'; ofType: null; }; defaultValue: null }, { name: 'acceptLimit'; type: { kind: 'SCALAR'; name: 'Int'; ofType: null; }; defaultValue: null }, { name: 'companyName'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; }; defaultValue: null }, { name: 'jobCode'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; }; defaultValue: null }, { name: 'tags'; type: { kind: 'LIST'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; }; defaultValue: null }, { name: 'hashtags'; type: { kind: 'LIST'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; }; defaultValue: null }]; };
    'CreateApplyPost': { kind: 'INPUT_OBJECT'; name: 'CreateApplyPost'; inputFields: [{ name: 'userId'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; }; defaultValue: null }, { name: 'postId'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; }; defaultValue: null }, { name: 'applyInfo'; type: { kind: 'SCALAR'; name: 'JSON'; ofType: null; }; defaultValue: null }]; };
    'Todo': { kind: 'OBJECT'; name: 'Todo'; fields: { 'id': { name: 'id'; type: { kind: 'SCALAR'; name: 'ID'; ofType: null; } }; 'title': { name: 'title'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; } }; 'compleated': { name: 'compleated'; type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null; } }; }; };
    'ReturnedTodo': { kind: 'OBJECT'; name: 'ReturnedTodo'; fields: { 'code': { name: 'code'; type: { kind: 'SCALAR'; name: 'Int'; ofType: null; } }; 'sucess': { name: 'sucess'; type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null; } }; 'message': { name: 'message'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; } }; 'todo': { name: 'todo'; type: { kind: 'LIST'; name: never; ofType: { kind: 'OBJECT'; name: 'Todo'; ofType: null; }; } }; }; };
    'TodoResult': { kind: 'UNION'; name: 'TodoResult'; fields: {}; possibleTypes: 'ReturnedTodo' | 'UserNotAuthenticatedError' | 'NotFound'; };
    'PostType': { kind: 'ENUM'; name: 'PostType'; type: 'REFERRALPOST' | 'FINDREFERRER' | 'POST'; };
    'User': { kind: 'OBJECT'; name: 'User'; fields: { 'id': { name: 'id'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'ID'; ofType: null; }; } }; 'email': { name: 'email'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; } }; 'userName': { name: 'userName'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; } }; 'name': { name: 'name'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; } }; 'emailVerified': { name: 'emailVerified'; type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; } }; 'image': { name: 'image'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; } }; 'overlayImage': { name: 'overlayImage'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; } }; 'bio': { name: 'bio'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; } }; 'locale': { name: 'locale'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; } }; 'location': { name: 'location'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; } }; 'createdAt': { name: 'createdAt'; type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; } }; 'updatedAt': { name: 'updatedAt'; type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; } }; 'stars': { name: 'stars'; type: { kind: 'SCALAR'; name: 'Int'; ofType: null; } }; 'stripeCustomerId': { name: 'stripeCustomerId'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; } }; 'workingAt': { name: 'workingAt'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; } }; }; };
    'UserProfile': { kind: 'OBJECT'; name: 'UserProfile'; fields: { 'id': { name: 'id'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'ID'; ofType: null; }; } }; 'email': { name: 'email'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; } }; 'userName': { name: 'userName'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; } }; 'name': { name: 'name'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; } }; 'image': { name: 'image'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; } }; 'overlayImage': { name: 'overlayImage'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; } }; 'bio': { name: 'bio'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; } }; 'location': { name: 'location'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; } }; 'workingAt': { name: 'workingAt'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; } }; 'createdAt': { name: 'createdAt'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; } }; }; };
    'CreateUserData': { kind: 'INPUT_OBJECT'; name: 'CreateUserData'; inputFields: [{ name: 'email'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; }; defaultValue: null }, { name: 'userName'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; }; defaultValue: null }, { name: 'name'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; }; defaultValue: null }, { name: 'image'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; }; defaultValue: null }]; };
    'Query': { kind: 'OBJECT'; name: 'Query'; fields: { 'getUserById': { name: 'getUserById'; type: { kind: 'OBJECT'; name: 'UserProfile'; ofType: null; } }; 'getAllPosts': { name: 'getAllPosts'; type: { kind: 'LIST'; name: never; ofType: { kind: 'OBJECT'; name: 'Post'; ofType: null; }; } }; 'getPostBySlug': { name: 'getPostBySlug'; type: { kind: 'OBJECT'; name: 'Post'; ofType: null; } }; 'getAllAppliedPosts': { name: 'getAllAppliedPosts'; type: { kind: 'LIST'; name: never; ofType: { kind: 'OBJECT'; name: 'Post'; ofType: null; }; } }; 'getAllRequests': { name: 'getAllRequests'; type: { kind: 'LIST'; name: never; ofType: { kind: 'OBJECT'; name: 'Post'; ofType: null; }; } }; 'getAllBookmarkedPosts': { name: 'getAllBookmarkedPosts'; type: { kind: 'LIST'; name: never; ofType: { kind: 'OBJECT'; name: 'Post'; ofType: null; }; } }; 'getSignedURLForPost': { name: 'getSignedURLForPost'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; } }; 'getTodos': { name: 'getTodos'; type: { kind: 'OBJECT'; name: 'ReturnedTodo'; ofType: null; } }; 'test': { name: 'test'; type: { kind: 'UNION'; name: 'TodoResult'; ofType: null; } }; 'hello': { name: 'hello'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; } }; }; };
    'Mutation': { kind: 'OBJECT'; name: 'Mutation'; fields: { 'getSessionUser': { name: 'getSessionUser'; type: { kind: 'OBJECT'; name: 'User'; ofType: null; } }; 'verifyGoogleAuthToken': { name: 'verifyGoogleAuthToken'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; } }; 'createPost': { name: 'createPost'; type: { kind: 'OBJECT'; name: 'PostResult'; ofType: null; } }; 'createReferralPost': { name: 'createReferralPost'; type: { kind: 'OBJECT'; name: 'PostResult'; ofType: null; } }; 'createFindReferralPost': { name: 'createFindReferralPost'; type: { kind: 'OBJECT'; name: 'PostResult'; ofType: null; } }; 'deletePost': { name: 'deletePost'; type: { kind: 'OBJECT'; name: 'PostResult'; ofType: null; } }; 'bookmarkPost': { name: 'bookmarkPost'; type: { kind: 'OBJECT'; name: 'PostResult'; ofType: null; } }; 'applyPost': { name: 'applyPost'; type: { kind: 'OBJECT'; name: 'ApplyPostResult'; ofType: null; } }; 'commentOnPost': { name: 'commentOnPost'; type: { kind: 'OBJECT'; name: 'PostResult'; ofType: null; } }; }; };
  };
};

declare module "gql.tada" {
  interface setupSchema {
    introspection: introspection;
  }
}
