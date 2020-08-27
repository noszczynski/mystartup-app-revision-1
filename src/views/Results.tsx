import React, { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Results: FC = () => {
  const { search } = useParams();
  const [searchPhrase, setSearchPhrase] = useState('');

  const handleSearchPhrase = (str: string): void => {
    setSearchPhrase(str.replace('+', ' '));
  };

  useEffect(() => {
    if (search) {
      handleSearchPhrase(search);
    }
  }, [search]);

  return (
    <div>
      Results view for:
      {' '}
      {searchPhrase}
    </div>
  );
};

export default Results;
