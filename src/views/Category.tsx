import React, { FC } from 'react';
import { useParams, withRouter } from 'react-router-dom';
import Page from 'components/Page';

const Category: FC = () => {
  const { id } = useParams();

  return (
    <Page>
      <p>
        Category view id:
        {id}
      </p>
    </Page>
  );
};

export default withRouter(Category);
