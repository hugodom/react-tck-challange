/* eslint-disable @typescript-eslint/indent */
import React from 'react';
import { useQuery } from 'react-query';
import { Beer } from 'shared/models/beers';
import { fetchBeer } from 'shared/queries/brewery';
import './List.scss';

export const List = () => {
  const { status, data } = useQuery<Beer[]>('beer', fetchBeer, {
    refetchOnWindowFocus: false
  });

  return (
    <>
      {status === 'loading' && <div>Loading</div>}
      {status === 'error' && <div>Error fetching data</div>}
      {status === 'success' && (
        <>
          {data?.map((beer: Beer) => (
            <div key={beer.id} className="drink">
              <div
                className={`drink__abv ${
                  // eslint-disable-next-line no-nested-ternary
                  beer.abv <= 6
                    ? 'drink__abv--low'
                    : beer.abv >= 12
                    ? 'drink__abv--high'
                    : 'drink__abv--mid'
                }`}
              >
                {beer.abv}
              </div>
              <div className="drink__image">
                <img
                  alt={`beer ${beer.name}`}
                  src={beer.image_url}
                  height="150"
                />
              </div>
              <div className="drink__body">
                <div className="drink__name">{beer.name}</div>
                <div className="drink__description">{beer.description}</div>
                <div className="drink__pairing">
                  {beer.food_pairing.join(', ')}
                </div>
              </div>
            </div>
          ))}
        </>
      )}
    </>
  );
};
