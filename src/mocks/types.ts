import { PathParams } from 'msw';
import {
  DefaultRequestBody,
  ResponseResolver
} from 'msw/lib/types/handlers/RequestHandler';
import { RestContext, RestRequest } from 'msw/lib/types/handlers/RestHandler';

export type MockAPIHandler = ResponseResolver<
  RestRequest<DefaultRequestBody, PathParams>,
  RestContext
>;
