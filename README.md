# ipily [![Build Status](https://travis-ci.org/taoyuan/ipily.svg?branch=master)](https://travis-ci.org/taoyuan/ipily) [![Greenkeeper badge](https://badges.greenkeeper.io/taoyuan/ipily.svg)](https://greenkeeper.io/)

> Get your public IP address

Using the [`gandi` API](http://me.gandi.net).


## Install

```
$ npm i --save ipily
```


## Usage

```js
const ipily = require('ipily');

ipily().then(ip => {
	console.log(ip);
	//=> '82.142.31.236'
});
```


## API

### ipily([endpoint])

Returns a `Promise` for the IP address.

#### endpoint

Type: `string`<br>
Default: `http://me.gandi.net`

Custom API endpoint.

## Credits

- [ipify](https://github.com/sindresorhus/ipify) - Get public ip default using `https://api.ipify.org`

## License

MIT © [Yuan Tao](https://github.com/taoyuan)
