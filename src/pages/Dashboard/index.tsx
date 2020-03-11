import React from 'react';
import { Button } from '@alifd/next';
import { store } from 'ice';

export default function Dashboard() {
  // const { addCount, addCountAsync } = store.useModelActions('counter');
  const [{ count }, { addCount, addCountAsync }] = store.useModel('counter');
  // const { addCountAsync: { isLoading, error } } =  store.useModelEffectsState('counter');

  return (
    <div>
      <h2>Dashboard page {count}</h2>
      <h3>演示 store 用法，操作 BasicLayout/Logo 里的 count </h3>
      <Button
        onClick={() => {
          addCount(1);
        }}
      >+1 sync</Button>
      <Button
        onClick={() => {
          addCountAsync(1);
        }}
      >+1 Async</Button>
    </div>
  );
}
