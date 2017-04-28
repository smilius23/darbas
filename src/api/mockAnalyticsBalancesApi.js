import delay from './delay';

const balances = [
  {name: ''}
];

class api {
  static getSomeData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], balances));
      }, delay);
    });
  }
}

export default api;
