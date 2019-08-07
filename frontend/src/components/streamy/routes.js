export const STREAMS = '/streams';

export const CREATE_STREAM = '/streams/new';

export function showStreamPath(id = ':id') {
  return `/streams/${id}`;
}

export const EDIT_STREAM = '/streams/edit/:id';

export function deleteStreamPath(id = ':id') {
  return `/streams/delete/${id}`;
}