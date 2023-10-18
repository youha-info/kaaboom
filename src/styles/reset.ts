import { css } from "@emotion/react";

const reset = css`
  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }
  ol,
  ul {
    list-style: none;
  }
  blockquote,
  q {
    quotes: none;
  }
  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: "";
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  ul {
    padding: 0;
  }
  li {
    list-style: none;
  }
  colgroup {
    display: table-column-group;
  }

  select {
    width: 200px;
    height: 32px;
    padding-left: 7px;
    -webkit-appearance: menulist;
    -moz-appearance: menulist;
    appearance: menu;
    border: 1px solid #eee;
    border-radius: 0px;
    background-color: #fff;
  }
  select::-ms-expand {
    display: none;
  }
  input#password {
    padding: 0;
    border: 0;
    border-bottom: 2px #e1e1e1 solid;
  }
  input[type="button"] {
    border-radius: 0;
  }
  input:-webkit-autofill,
  textarea:-webkit-autofill,
  select:-webkit-autofill {
    background-color: rgba(254, 78, 108, 0.2);
    background-image: none;
    color: #ffffff;
  }
  html,
  body,
  dl,
  dt,
  dd,
  ul,
  ol,
  li,
  h2,
  h3,
  h4,
  h5,
  h6,
  pre,
  code,
  form,
  fieldset,
  legend,
  input,
  textarea,
  p,
  blockquote,
  th,
  td,
  img {
    margin: 0;
    padding: 0;
  }
  div {
    cursor: default;
  }
  li {
    list-style: none;
  }
  img,
  fieldset {
    border: none;
    vertical-align: middle;
  }
  input {
    /* font-family: 'Montserrat', sans-serif !important; */
    font-family: 'Poppins', Helvetica, sans-serif !important;
    font-size: 16px;
    color: #ffffff;
    vertical-align: middle;
    opacity: 1;
  }
  select,
  option,
  textarea {
    font-size: 17px;
    color: #ffffff;
    vertical-align: middle;
    font-family: 'Poppins', Helvetica, sans-serif !important;
  }
  a,
  a:link,
  a:visited {
    text-decoration: none;
    color: #ffffff;
  }
  a:active {
    text-decoration: none;
  }
  table {
    border-spacing: 0;
    border: 0;
    border-collapse: collapse;
    width: 100%;
    height: 100%;
  }
  button {
    padding: 0;
    margin: 0;
    border: 0;
    overflow: visible;
    cursor: pointer;
    background-color: transparent;
  }
  [role="button"] {
    cursor: pointer;
  }
  button:focus {
    outline: 0;
  }
  strong {
    font-weight: bold;
  }
  html {
    background-color: #101418 !important;
    /* background-color: #ffffff !important; */
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
    text-size-adjust: 100%;
  }
  body {
    /* font-size: 17px;
  line-height: 1.5; */
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #ffffff;
    background-color: #101418 !important;
    scroll-behavior: smooth;
    letter-spacing: 0.15px !important;
    width: 100%;
    min-height: 100%;
    position: relative;
  }
  * {
    box-sizing: border-box;
    -webkit-tap-highlight-color: rgba(18, 18, 18, 0) !important;
    /* font-family: "Spoqa Han Sans Neo", "Spoqa Han Sans JP", sans-serif !important; */
    /* font-family: "Spoqa Han Sans Neo", "Spoqa Han Sans JP", sans-serif !important; */
    /* font-family: "Noto Sans KR", sans-serif !important; */
    font-display: block;
    /* letter-spacing: -0.4px !important; */
  }
  body {
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
    text-size-adjust: 100%;
  }
  /* 사파리 누를때 줌 안되게 */
  // * {
  //   -webkit-touch-callout: none;
  //   -webkit-user-select: none;
  //   -khtml-user-select: none;
  //   -moz-user-select: none;
  //   -ms-user-select: none;
  //   user-select: none;
  // }
  // ::-moz-scrollbar {
  //   display: none !important;
  // }
  // ::-webkit-scrollbar {
  //   display: none !important;
  // }
  body::-webkit-scrollbar-track,
  .scroller::-webkit-scrollbar-track {
    background-color: #ACBAC8 !important
  }
  body::-webkit-scrollbar-thumb:hover,
  .scroller::-webkit-scrollbar-thumb:hover  {
    background-color: #4B5E71 !important
  }
  body::-webkit-scrollbar-thumb 
  .scroller::-webkit-scrollbar-thumb {
    background-color: #2F3A46 !important
  }
  img {
    border: none;
    vertical-align: middle;
    max-width: 100%;
  }
  select {
    padding-left: 7px;
    padding-right: 15px;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border: 1px solid #d8d8d8;
    border-radius: 0px;
    /* background: url(https://danoshop.net/mall/upload/resource/common/selection-arrow.svg)
  no-repeat right 5px center #fff; */
  }
  input {
    line-height: 100%;
    height: 100%;
    border: none;
    background-color: transparent;
    padding: 0px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    touch-action: pan-y;
  }
  input:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 1000px #181924 inset; // 배경색 변경
    -webkit-text-fill-color: white // 글자색 변경
 }
  input,
  textarea {
    caret-color: #2F59CC !important
  }
  input::placeholder {
    color: #607d8b;
  }
  input[type="checkbox"] {
    padding: 0;
  }
  input[type="text"],
  input[type="password"] {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }
  input:focus,
  input:active,
  input:hover {
    outline: none;
    background-color: transparent;
  }
  caption {
    visibility: visible;
    position: absolute;
    left: -1000px;
    top: -1000px;
    height: 0;
    width: 0;
    display: none;
  }
  html,
  body {
    font-family: "Poppins", Helvetica, sans-serif;
  }
  #__next {
    width: 100%;
    height: 100%;
    --sat: var(--sait);
    --sar: var(--sair);
    --sab: var(--saib);
    --sal: var(--sail);
  }
  img {
    -webkit-user-drag: none;
  }
`;

export default reset;
