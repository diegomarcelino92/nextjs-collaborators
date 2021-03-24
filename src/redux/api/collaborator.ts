import API from '@utils/request';

import { AxiosRequestConfig } from 'axios';

export default {
  list: (config?: AxiosRequestConfig) => API.get('/collaborator', config),
};


