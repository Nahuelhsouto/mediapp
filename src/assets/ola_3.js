import React from 'react';
import WebView from 'react-native-webview';

function getHtml() {
  const html =
    '<!doctype html><html><head><meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"><style>html, body {width: 100%; height: 100%;overflow:hidden;}body {margin:0; padding:0}</style></head><body>' +
    '<svg id="ekuqNowfX5M1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 906.73 808.49" shape-rendering="geometricPrecision" text-rendering="geometricPrecision"><defs><linearGradient id="ekuqNowfX5M5-fill" x1="436.55" y1="841.84" x2="356.14" y2="-167.24" spreadMethod="pad" gradientUnits="userSpaceOnUse" gradientTransform="matrix(1 0 0 1 0 0)"><stop id="ekuqNowfX5M5-fill-0" offset="0%" stop-color="rgb(137,199,245)"/><stop id="ekuqNowfX5M5-fill-1" offset="20%" stop-color="rgb(112,181,239)"/><stop id="ekuqNowfX5M5-fill-2" offset="49%" stop-color="rgb(77,156,232)"/><stop id="ekuqNowfX5M5-fill-3" offset="99%" stop-color="rgb(19,114,219)"/></linearGradient></defs><g id="ekuqNowfX5M2" transform="matrix(1 0 0 1 0 0.000001)" opacity="0.9"><g id="ekuqNowfX5M3" transform="matrix(1 0 0 1 0.019978 -12.829781)" clip-path="url(#ekuqNowfX5M6)"><g id="ekuqNowfX5M4"><path id="ekuqNowfX5M5" d="M-67.71,504.06C-67.71,504.06,69.11,672.91,217.53,672.91C365.95,672.91,444.79,609.34,563.06,609.34C681.33,609.34,737,710.65,839,710.65L839,-97.84L-67.71,-97.84Z" transform="matrix(1 0 0 1 67.71 97.84)" opacity="0.43" fill="url(#ekuqNowfX5M5-fill)" stroke="none" stroke-width="1"/></g><clipPath id="ekuqNowfX5M6" transform="matrix(1 0 0 1 67.71 97.84)"><rect id="ekuqNowfX5M7" width="751.02" height="1143.7" rx="4.16" ry="4.16" transform="matrix(1 0 0 1 -0.02 -62)" fill="none" stroke="none" stroke-width="1"/></clipPath></g></g></svg>' +
    '</body></html>';
  return html;
}

const SVGatorComponent = React.forwardRef((props, ref) => {
  let newProps = {...props};

  const html = getHtml();

  let attrs = {};
  let attrMatch =
    html.match(/<svg(.*?)>/)[1].match(/[a-z0-9]+\=['"]([^'"]+)['"]/gi) || [];
  attrMatch.forEach(attr => {
    let parts = attr.split('=', 2);
    let key = parts.shift().toLowerCase();
    let value = parts.join('=');
    value = value.replace(/^['"]+|['"]+$/g, '');
    attrs[key] = value;
  });

  let viewBox = attrs.viewbox ? attrs.viewbox.split(' ') : [];
  let svgWidth = attrs.width ? attrs.width : viewBox[2] || 100;
  let svgHeight = attrs.height ? attrs.height : viewBox[3] || 100;

  if (!newProps.hasOwnProperty('width') && svgWidth) {
    newProps.width = svgWidth;
  }

  if (!newProps.hasOwnProperty('height') && svgHeight) {
    let ratio = Math.min(newProps.width / svgWidth, 1);
    newProps.height = ratio * svgHeight;
  }
  if (newProps.width) {
    newProps.width = parseInt(newProps.width);
  }
  if (newProps.height) {
    newProps.height = parseInt(newProps.height);
  }

  return (
    <WebView
      ref={ref}
      {...newProps}
      source={{html}}
      containerStyle={{flex: 0}}
      style={{backgroundColor: 'transparent', flex: 0}}
    />
  );
});

export default SVGatorComponent;
