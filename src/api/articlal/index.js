// import axios from 'axios'
// export const artical = (domainName: string, appPoolName: string) => {
//     const getArticalList = async () => {
//         const url = domainName + appPoolName + '/getArticalList'
//         return await axios.get(url)
//     }
//     const getArtical = async (data: artical) => {
//         const url = domainName + appPoolName + '/getArtical' + '/' + data.articalId
//         return await axios.get(url)
//     }
//     const updateArtical = async (data: { articalId: string, data: string }) => {
//         const url = domainName + appPoolName + '/updateArtical'
//         return await axios.post(url, data)
//     }
//     const artical = {
//         getArticalList: getArticalList, //所有文章
//         getArtical: getArtical, //查詢單個文章詳細
//         updateArtical: updateArtical, //更新文章
//     }
//     return artical
// }
import { get, ref, update } from 'firebase/database';
import { database } from '@/firebase';
export const artical = (domainName, appPoolName) => {
    domainName;
    appPoolName;
    const getArticalList = async () => {
        const articalRef = ref(database, "artical");
        return await get(articalRef);
    };
    const getArtical = async (data) => {
        const articalId = data.articalId;
        const articalRef = ref(database, "artical/" + articalId);
        return await get(articalRef);
    };
    const updateArtical = async (data) => {
        const articalId = data.articalId;
        const articalRef = ref(database, "artical/" + articalId);
        const isHaveArtical = await get(articalRef);
        if (isHaveArtical.exists()) {
            try {
                await update(articalRef, {
                    update_time: new Date().toLocaleString(),
                    content: data.data,
                });
                return true;
            }
            catch (error) {
                return false;
            }
        }
        else {
            alert('無此文章');
        }
    };
    const artical = {
        getArticalList: getArticalList, //所有文章
        getArtical: getArtical, //查詢單個文章詳細
        updateArtical: updateArtical, //更新文章
    };
    return artical;
};
