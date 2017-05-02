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
        stateItems = state.items;
        console.log('----------------');
        console.dir(colection);
        stateItems.concat(colection);
        console.dir(stateItems);
        //stateItems.push.apply(stateItems, colection)
        //colection.push.apply(colection, state.items)
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
