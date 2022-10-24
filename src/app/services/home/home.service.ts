import axios from 'axios';
import { HttpClient } from '@angular/common/http';

export const postDataForm = {
  post: async function (url: string, data: any) {
    const res = await axios.post(url, data);
    return res.data;
  },
  test: (data: any) => console.log(data),
};

// export const method = {
//    post: async function (url: string, data: any) {
//       const res = await HttpClient.post(url, data);
//    }
// }
