import { AxiosRequestConfig } from 'axios';

import API from '@utils/request';

export default {
  list: (config?: AxiosRequestConfig) => API.get('/collaborator', config),
};
