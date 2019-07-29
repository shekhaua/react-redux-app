import axios from 'axios';

const BASE_URL = 'http://localhost:3001';

const streamy = axios.create({baseURL: BASE_URL});

export async function getStreams() {
  return await streamy.get('/streams');
}

export async function getStream(id) {
  return await streamy.get(`/streams/${id}`);
}

export async function createStream(streamData) {
  return await streamy.post('/streams', streamData);
}

/*
* Updates only specific values of a stream
* */
export async function updateStream(id, values) {
  return await streamy.patch(`/streams/${id}`, values)
}

/*
* Replaces the whole stream by the one provided as argument
* Caution! It may lead to loose of data id the structure of replacing stream is different
* than the structure od replaced stream
* */
export async function replaceStream(replacedStream) {
  return await streamy.put(`/streams/${replacedStream.id}`, replacedStream);
}

export async function deleteStream(id) {
  return await streamy.delete(`/streams/${id}`)
}