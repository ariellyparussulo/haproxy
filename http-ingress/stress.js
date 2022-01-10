const { get } = require('axios').default;

const INGRESS_HOST = 'http://http.server/';
const PERIOD = 0.5;
const CONCURRENT_CLIENT = 1000;

let promises = [];
for (let count = 0; count < CONCURRENT_CLIENT; count++) {
    promises.push(get(INGRESS_HOST));
}

const httpRequest = async () => {
  await setTimeout(async () => {
    console.log(`Calling ${INGRESS_HOST} ${CONCURRENT_CLIENT} times...`)
    const data = await Promise.all(promises);

    httpRequest();
  }, PERIOD * 1000);
};

httpRequest();