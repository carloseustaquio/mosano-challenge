import {HttpClientRequest} from '#/data/protocols/http-client-request';
import {HttpClientResponse} from '#/data/protocols/http-client-response';

export interface HttpClient {
  request(request: HttpClientRequest): Promise<HttpClientResponse>;
  setAuthorization(accessToken: string): void;
  clearAuthorization(): void;
}
