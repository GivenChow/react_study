import { ADD_PERSON } from '../constant';
// 增加一个人的action
export const person = personObj => ({ type: ADD_PERSON, data: personObj });
