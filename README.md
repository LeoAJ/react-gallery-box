# react-gallery-box

[![npm](https://img.shields.io/npm/v/react-gallery-box.svg?style=flat-square)](https://www.npmjs.com/package/react-gallery-box)
[![Travis](https://img.shields.io/travis/LeoAJ/react-gallery-box.svg?style=flat-square)](https://travis-ci.org/LeoAJ/react-gallery-box)
[![npm](https://img.shields.io/npm/l/express.svg?style=flat-square)](https://github.com/LeoAJ/react-gallery-box/blob/master/LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

> react photo gallery box component

Hover over mouse to see your photo gallery

![rgb](https://user-images.githubusercontent.com/492921/33963986-c59dab26-e00b-11e7-9b40-057aef1130b8.gif)

## Demo

[![Edit Demo : react-gallery-box](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/0yzmk24wqw)

## Install

```
yarn add react-gallery-box -S
```

## Usage

```js

import ReactGalleryBox from 'react-gallery-box';

<ReactGalleryBox images{/* List of image urls */} />

```

## Props

* `images`: array, list of image urls. Default `[]`
* `visibleImageIndex`: number, starting index of image array. Default `0`
* `delay`: number, millisecond of time interval between image switch. Defalt `1500`
* `containerClassnName`: string, custom css class for div container
* `itemClassnName`: string, custom css class for individual image div

## License

MIT © [Leo](https://github.com/LeoAJ)
