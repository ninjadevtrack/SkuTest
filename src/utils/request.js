import axios from 'axios';
import { API_BASE } from 'utils/constants';

export const makeJsonRequestOptions = ({
  method,
  requestUrlPath,
  headers,
  data,
  ...rest
}) => ({
  method,
  url: `${API_BASE}/${requestUrlPath}`,
  headers: {
    'Content-Type': 'application/json',
    ...headers,
  },
  ...(data ? { data } : {}),
  ...rest,
});

const request = (options) => axios(options);
export default request;
