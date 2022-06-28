interface Props {
    url: string;
    token: string;
    body?: {};
}
declare const _default: {
    patchData: ({ url, body, token }: Props) => Promise<{
        data: any;
        status: string;
        error: any;
        message: any;
    }>;
    postData: ({ url, body, token }: Props) => Promise<{
        data: any;
        status: string;
        error: any;
        message: any;
    }>;
    getData: ({ url, token }: Props) => Promise<{
        data: any;
        status: string;
        error: any;
        message: any;
    }>;
    deleteData: ({ url, body, token }: Props) => Promise<{
        data: any;
        status: string;
        error: any;
        message: any;
    }>;
};
export default _default;
