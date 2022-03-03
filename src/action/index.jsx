export const GET_DATA = 'GET_DATA';
import { getPosts } from "../utils/util";

export const getDataFromApi = async () => {
  const data = await getPosts();
  const filterd = data.body.map((item) =>{
    return {
      'name': item.NM,
      'address': item.ADRES,
      'phoneNumber': item.TELNO,
    }
  });
  return {
    type: GET_DATA,
    payload: filterd,
  }
}
