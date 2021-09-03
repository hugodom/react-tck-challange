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
              <div className="drink__image">
                <img
                  alt={`beer ${beer.name}`}
                  src={beer.image_url}
                  height="150"
                />
              </div>
              <div className="drink__description">
                <div className="drink__name">{beer.name}</div>
                <div className="drink__description">{beer.description}</div>
                <div className="drink__pairing">{beer.food_pairing}</div>
                <div className="drink__abv">{beer.abv}</div>
              </div>
            </div>
          ))}
        </>
      )}
    </>
  );
};
