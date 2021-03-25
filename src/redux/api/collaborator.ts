import { AxiosRequestConfig } from 'axios';

import API from '@utils/request';

export default {
  list: (config?: AxiosRequestConfig) => API.get('/collaborator', config),

  collaborator: {
    info: (config?: AxiosRequestConfig, collaboratorId?: string) =>
      API.get(`/collaborator/${collaboratorId}`, config),

    feedback: (config?: AxiosRequestConfig, collaboratorId?: string) =>
      API.get(`/collaborator/${collaboratorId}/feedback`, config),
  },

  feedback: {
    like: (data: unknown, collaboratorId?: string, feedbackId?: string) =>
      API.put(`/collaborator/${collaboratorId}/feedback/${feedbackId}`, data),

    delete: (collaboratorId?: string, feedbackId?: string) =>
      API.delete(`/collaborator/${collaboratorId}/feedback/${feedbackId}`),
  },
};
