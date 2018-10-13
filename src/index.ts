const got = require('got');

export = function ipify(endpoint?: string): Promise<string> {
  return got(endpoint || 'http://me.gandi.net').then(res => res.body.toString().replace('\n', ''));
}

