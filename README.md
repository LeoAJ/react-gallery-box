# react-gallery-box

[![Travis](https://img.shields.io/travis/LeoAJ/react-gallery-box.svg?style=flat-square)](https://travis-ci.org/LeoAJ/react-gallery-box)
[![npm](https://img.shields.io/npm/l/express.svg?style=flat-square)](https://github.com/LeoAJ/react-iTunes-search/blob/master/LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

> react photo gallery box component

Hover over mouse to see your photo gallery

## Install

```
yarn add react-gallery-box
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

License

MIT © [Leo](https://github.com/LeoAJ)
