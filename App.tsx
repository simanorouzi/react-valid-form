import * as React from 'react';
import ValidByHook from './Component/ValidByHook';
import ValidForm from './Component/ValidForm';
import './style.css';

export default function App() {
  return (
    <div>
      <ValidForm />
      <div className="line"></div>
      <ValidByHook />
    </div>
  );
}
