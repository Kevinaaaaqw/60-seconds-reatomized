type artical = {
    articalId: string;
};
export declare const artical: (domainName: string, appPoolName: string) => {
    getArticalList: () => Promise<import("@firebase/database").DataSnapshot>;
    getArtical: (data: artical) => Promise<import("@firebase/database").DataSnapshot>;
    updateArtical: (data: {
        articalId: string;
        data: string;
    }) => Promise<boolean | undefined>;
};
export {};
