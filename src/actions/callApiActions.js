import { CALL_API } from 'redux-api-middleware';

function postData(link, actionTypes, apiBody) {
  return {
    [CALL_API]: {
      endpoint: link,
      method: 'POST',
      types: [actionTypes.REQUEST, actionTypes.SUCCESS, actionTypes.FAILURE],
      headers: { 'Content-Type': 'application/json' },
     	body: JSON.stringify(apiBody)
    }
  }
}

function getData(link, actionTypes, header) {
  return {
    [CALL_API]: {
      endpoint: link,
      method: 'GET',
      headers: { ...header },
      types: [actionTypes.REQUEST, actionTypes.SUCCESS, actionTypes.FAILURE]
    }
  }
}

export const uploadData = {
	post: postData,
  get: getData
}

export default uploadData
