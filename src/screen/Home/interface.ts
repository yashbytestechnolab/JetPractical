export interface myData {
    data: { results: Array<object> } | object | any;
    loading: boolean;
};

export interface details {
    page: number;
    result: number;
    myData: Array<object>;
    refreshing: boolean;
}