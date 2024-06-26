// GENERATED by @edgedb/generate v0.5.3

import type {Executor} from "edgedb";


export type GetUserReturns = {
  "username": string;
  "email": string;
} | null;

export function getUser(client: Executor): Promise<GetUserReturns> {
  return client.querySingle(`\
select User {
  username,
  email
} limit 1`);

}
