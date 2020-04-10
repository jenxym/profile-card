import { fetchData } from './fetchData';

const elementsWeb = Array.from(document.querySelectorAll('profile-card'));
elementsWeb.forEach((element) => fetchData(element));
