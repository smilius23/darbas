import initialState from './initialState';
import { dribbbleApiTypes } from '../actions/actionTypes';

export default function reducer(state = initialState.dribbble, action) {
  switch (action.type) {
    case dribbbleApiTypes.REQUEST:
      return{
        ...state,
        status: 'started'
      };
    case dribbbleApiTypes.SUCCESS:
      let colection = action.payload.map((item, key)=>{
        return {
          key,
          images: item.images
        }
      });
      return{
        ...state,
        status: 'done',
        items: colection
      };
    case dribbbleApiTypes.FAILURE:
      return{
        ...state,
        status: 'error'
      };
    default:
      return state;
  }
}
