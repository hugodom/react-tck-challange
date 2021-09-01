import React from 'react';
import { useQuery } from 'react-query';
import { Beer } from 'shared/models/beers';
import { fetchBeer } from 'shared/queries/brewery';

export const List = () => {
  const { status, data } = useQuery<Beer[]>('beer', fetchBeer, {
    refetchOnWindowFocus: false
  });

  return (
    <>
      {status === 'loading' && <div>Loading</div>}
      {status === 'error' && <div>Error fetching data</div>}
      {status === 'success' && (
        <div>
          {data?.map((beer: Beer) => (
            <React.Fragment key={beer.id}>
              <img alt={`beer ${beer.name}`} src={beer.image_url} /> <br />
              Name: {beer.name} <br />
              Description: {beer.description} <br />
              Ideal para combinar con: {beer.food_pairing} <br />
              abv: {beer.abv} <br />
            </React.Fragment>
          ))}
        </div>
      )}
    </>
  );
};
