import axios from 'axios'

const enum RequestMethod {
    GET = "GET",
    POST = "POST"
}

interface Response {
    data: any,
    code: number
}

const instance = axios.create({
    withCredentials: true,
    baseURL: "/api",
    timeout: 3000
});

instance.interceptors.request.use(
    config => {
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

instance.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        return Promise.reject(error);
    }
)

const request = async (url: string, params: any = {}, method: RequestMethod = RequestMethod.GET) => {
    let res: Response = <Response>{};
    if (method == RequestMethod.GET) res = await instance.get(url, {
        params: params
    })
    if (method == RequestMethod.POST) res = await instance.post(url, {
        params: params
    })
    if (res && res.code == 50000) return res.data;
}

export default {
    getNotice: async () => {
        return await request("/getNotice");
    },
    searchProblem: async (params: any) => {
        return await request('/searchProblem', {
            params: params
        });
    },
}