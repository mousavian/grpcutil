// Code generated by protoc-gen-tstypes. DO NOT EDIT.

declare namespace grpc.testing {

  export interface Request {
    fill_username?: boolean;
    fill_oauth_scope?: boolean;
  }

  export interface Response {
    username?: string;
    oauth_scope?: string;
  }

  export interface TestServiceService {
    UnaryCall: (r:Request) => Response;
  }
}

