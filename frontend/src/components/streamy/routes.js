export const CREATE_STREAM = '/streams/new';
export const SHOW_STREAM = '/streams/show/:id';
export const STREAMS = '/streams';
export const EDIT_STREAM = '/streams/edit/:id';
export const DELETE_STREAM = `/streams/delete/:id`;

export function deleteStreamPath(id = ':id') {
  return `/streams/delete/${id}`;
}