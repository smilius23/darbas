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
      let stateItems = [];
      let colection = action.payload.map((item)=>{
        return {
          images: item.images
        }
      });
      if (state.items){
        stateItems = state.items.concat(colection);
       } else {
        stateItems = colection;
      }
      return{
        ...state,
        status: 'done',
        items: stateItems
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
