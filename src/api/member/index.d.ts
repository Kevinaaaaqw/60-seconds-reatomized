type memberInfo = {
    email: string;
    password: string;
};
export declare const member: (domainName: string, appPoolName: string) => {
    signIn: (data: memberInfo) => Promise<import("@firebase/auth").UserCredential>;
    toSignOut: () => Promise<void>;
};
export {};
