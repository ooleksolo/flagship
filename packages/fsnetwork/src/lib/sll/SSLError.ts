import { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import { ReactNativeSSLPinning } from 'react-native-ssl-pinning';
import { SSLResponse } from './SSLResponse';

export class SSLError implements AxiosError {
  code: string;
  config: AxiosRequestConfig;
  message: string;
  name: string;
  request: any;
  response: AxiosResponse;
  stack: string;

  constructor(
    data: ReactNativeSSLPinning.Response,
    config: AxiosRequestConfig
  ) {
    this.code = data.status && data.status.toString() || 'no status';
    this.config = config;
    this.response = new SSLResponse(data, config);
    this.message = data.bodyString || '';
    this.name = data.bodyString || '';
    this.stack = data.bodyString || '';
  }
}
