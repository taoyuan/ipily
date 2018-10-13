import {assert} from 'chai';
import isIp = require('is-ip');
import ipily = require('..');

describe('ipily', function () {
  this.timeout(5000);
  it('should get public ip', async () => {
    assert.ok(isIp(await ipily()));
    assert.ok(isIp(await ipily('https://api.ipify.org')));
  })
});
