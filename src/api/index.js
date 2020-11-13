import axios from 'axios';

const API_PATH = 'https://swapi.dev/api';

export function fetchPlanets(ids) {
  return axios.get(`${API_PATH}/planets`, { ids: ids });
}

export function fetchFilms(ids) {
  return axios.get(`${API_PATH}/films`, { ids: ids });
}

export function fetchResidents(ids) {
  return axios.get(`${API_PATH}/people`, { ids: ids });
}
