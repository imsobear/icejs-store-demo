interface IState {
  count: number;
};

const counter = {
  state: {
    count: 20,
  },
  reducers: {
    addCount(prevState: IState, count: number): IState {
      return {
        ...prevState,
        count: prevState.count += count,
      };
    },
  },
  effects: {
    async addCountAsync(prevState: IState, count: number, actions): Promise<void> {
      await new Promise((resolve) => setTimeout(resolve, 0.5 * 1000));
      actions.addCount(count);
    }
  }
}

export default counter;