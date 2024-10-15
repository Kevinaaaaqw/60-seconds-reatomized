// export const member = (domainName: string, appPoolName: string) => {
//     const signIn = async (data: memberInfo) => {
//         const url = domainName + appPoolName + '/member/signIn'
//         return await axios.post(url, data)
//     }
//     const signOut = async () => {
//         const url = domainName + appPoolName + '/member/signOut'
//         return await axios.get(url)
//     }
//     const checkLogin = async () => {
//         const url = domainName + appPoolName + '/member/checkLogin'
//         return await axios.get(url)
//     }
//     const member = {
//         signIn: signIn, //登入
//         signOut: signOut, //登出
//         checkLogin: checkLogin, //驗證登入
//     }
//     return member
// }
import { signInWithEmailAndPassword, signOut, } from 'firebase/auth';
import { auth } from '@/firebase';
export const member = (domainName, appPoolName) => {
    domainName;
    appPoolName;
    const signIn = async (data) => {
        return signInWithEmailAndPassword(auth, data.email, data.password);
    };
    const toSignOut = async () => {
        signOut(auth);
    };
    const member = {
        signIn: signIn, //登入
        toSignOut: toSignOut, //登出
    };
    return member;
};
