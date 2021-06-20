import {HttpClientRequest} from '#/common/http-client/protocols/http-client-request';
import {HttpClientResponse} from '#/common/http-client/protocols/http-client-response';

export interface HttpClient {
	request(request: HttpClientRequest): Promise<HttpClientResponse>;
	setAuthorization(accessToken: string): void;
	clearAuthorization(): void;
}
