import { artical } from './articlal/index';
import { member } from './member/index';

const domainName = 'http://localhost:3000'
const appPoolName = ''

export const articalApi = artical(domainName, appPoolName)
export const memberApi = member(domainName, appPoolName) 
