import {
  createStream as create,
  getStreams as getAll,
  getStream as getSingle,
  deleteStream as remove,
  updateStream as update
} from "../api/Streamy";

import {STREAMS} from '../components/streamy/routes';

import history from '../history'

export const CREATE_STREAM = 'CREATE_STREAM';
export const GET_STREAM = 'GET_STREAM';
export const GET_STREAMS = 'GET_STREAMS';
export const UPDATE_STREAM = 'UPDATE_STREAM';
export const DELETE_STREAM = 'DELETE_STREAM';

export function createStream(streamValues) {
  return async (dispatch, getState) => {
    const {user} = getState().googleAuth;
    const resp = await create({...streamValues, ...{userId: user.id}});
    dispatch({type: CREATE_STREAM, payload: resp.data});
    history.push(STREAMS);
  }
}

export function getStreams() {
  return async (dispatch) => {
    const resp = await getAll();
    dispatch({type: GET_STREAMS, payload: resp.data})
  }
}

export function getStream(id) {
  return async (dispatch) => {
    const resp = await getSingle(id);
    dispatch({type: GET_STREAM, payload: resp.data})
  }
}

export function updateStream(id, streamValues) {
  return async (dispatch) => {
    const resp = await update(id, streamValues);
    dispatch({type: UPDATE_STREAM, payload: resp.data});
    history.push(STREAMS);
  }
}

export function replaceStream(stream) {
  return async (dispatch) => {
    const resp = await update(stream);
    dispatch({type: UPDATE_STREAM, payload: resp.data});
    history.push(STREAMS);
  }
}

export function deleteStream(id) {
  return async (dispatch) => {
    await remove(id);
    dispatch({type: DELETE_STREAM, payload: id});
    history.push(STREAMS);
  }
}