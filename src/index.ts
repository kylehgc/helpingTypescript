import memoryjs from 'memoryjs';

import log from '@/helpers/log';

async function tick() {
  log.debug('tick');
}

async function main() {
  setInterval(tick, 33);
}

main();
