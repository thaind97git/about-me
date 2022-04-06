import { AxiosResponse } from 'axios';
import HttpRequest from '@/services/http-request';

export const exportPDF = (payload = {}): Promise<AxiosResponse> =>
  HttpRequest.post('/api/export/pdf', payload, {
    responseType: 'arraybuffer',
  });
