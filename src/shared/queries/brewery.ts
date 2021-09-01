// https://api.punkapi.com/v2/beers?page=1&per_page=10

import { Beer } from '../models/beers';

export const fetchBeer = async (): Promise<Beer[]> => {
  const res = await fetch(
    'https://api.punkapi.com/v2/beers?page=1&per_page=10'
  );
  return res.json();
};
