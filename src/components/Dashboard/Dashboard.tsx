import React from 'react';
import { Pension } from '../Pension/Pension';

export const Dashboard = () => (
  <>
    <div className="title">
      HOTEL <span className="title--bold">Mieres del Camín Apartamentos</span>
    </div>
    <div className="grid">
      <div className="grid__col-2" style={{ backgroundColor: 'red' }}>
        <Pension title="Test" list={['a', 'b', 'c']} radioName="testname" />
      </div>
      <div className="grid__col-2" style={{ backgroundColor: 'red' }}>
        <Pension title="Test 2" list={['a', 'b', 'c']} radioName="testname" />
      </div>
      <div className="grid__col-2" style={{ backgroundColor: 'red' }}>
        <Pension title="Test 3" list={['a', 'b', 'c']} radioName="testname" />
      </div>
    </div>
  </>
);
