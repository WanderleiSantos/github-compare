import React from 'react';
import { Container, Repository } from './styles';

const CompareList = () => (
  <Container>
    <Repository>
      <header>
        <img src="" alt="facebook" />
        <strong>react</strong>
        <small>facebook</small>
      </header>
      <ul>
        <li>
          95 <small>stars</small>
        </li>
        <li>
          95 <small>stars</small>
        </li>
        <li>
          95 <small>stars</small>
        </li>
      </ul>
    </Repository>
    <Repository>
      <header>
        <img src="" alt="facebook" />
        <strong>react</strong>
        <small>facebook</small>
      </header>
      <ul>
        <li>
          95 <small>stars</small>
        </li>
        <li>
          95 <small>stars</small>
        </li>
        <li>
          95 <small>stars</small>
        </li>
      </ul>
    </Repository>
  </Container>
);

export default CompareList;
