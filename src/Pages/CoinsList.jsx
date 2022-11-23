import React from 'react';
import { useSelector } from 'react-redux';
import CoinsData from '../components/CoinsData';

const CryptoList = () => {
  const { dataArray, loading } = useSelector((state) => state.crypto);

  return (
    <div>
      {loading
        ? 'loading...'
        : dataArray.map((team) => (
          <li key={team.id} className="rocket">
            <CoinsData
              image={team.image}
              name={team.name}
            />
          </li>
        ))}
    </div>
  );
};

export default CryptoList;
