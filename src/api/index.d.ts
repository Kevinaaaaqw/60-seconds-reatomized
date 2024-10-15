export declare const articalApi: {
    getArticalList: () => Promise<import("@firebase/database").DataSnapshot>;
    getArtical: (data: {
        articalId: string;
    }) => Promise<import("@firebase/database").DataSnapshot>;
    updateArtical: (data: {
        articalId: string;
        data: string;
    }) => Promise<boolean | undefined>;
};
export declare const memberApi: {
    signIn: (data: {
        email: string;
        password: string;
    }) => Promise<import("@firebase/auth").UserCredential>;
    toSignOut: () => Promise<void>;
};
