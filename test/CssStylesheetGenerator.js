const expect = require('unexpected')
  .clone()
  .use(require('unexpected-snapshot'))
  .use(require('magicpen-prism'));
const chanceCache = require('chance-generators/lib/chanceCache');

const CssStylesheetGenerator = require('../lib/CssStylesheetGenerator');

describe('CssStylesheetGenerator', () => {
  beforeEach(() => chanceCache.clear());

  it('should generate a CSS declaration list', () => {
    expect(new CssStylesheetGenerator().take(10), 'to equal snapshot', [
      ':target { border-inline-end-style: ridge; scroll-behavior: smooth; margin-top: -108.3345em; border-block-end-style: none; grid-auto-rows: fit-content(202.23em); }\n:read-write { animation-delay: -887.1769s; padding-top: 94%; border-left-width: -636.3501vw; border-inline-end-style: groove; }\n',
      ':only-child { align-items: stretch; animation-direction: reverse; inset-inline-end: 40%; }\n#lel :target + :only-child { float: none; }\n',
      ':nth-last-of-type(even) { shape-margin: 68%; }\n:active { background-origin: border-box; transition: -390.7725ms -804.6558ms step-start none; overflow-wrap: normal; }\n:nth-of-type(even) { animation-name: none; text-justify: inter-character; border-width: 325.0446vh; column-gap: normal; inset-inline: 93.4206px; }\n:active { vertical-align: 78%; }\n:lang(uz) { text-emphasis: GrayText none; margin-block: 41.6685ch; }\n',
      ':first-of-type { font-family: sans-serif; justify-self: safe left; unicode-bidi: embed; mask-image: image(ltr url(camokja) , rgb(-5425172966277120 , 71%)); page-break-before: recto; }\n:scope { background-size: contain; filter: sepia(85%); mask-size: cover; columns: -378.0354rem; }\n:first-of-type { page-break-before: right; min-height: 89%; list-style-position: inside; float: left; }\n::selection { scroll-snap-align: center; padding-top: 23%; scale: none; height: border-box -949.1618pc; }\n:checked ~ .nenvudsi { quotes: none; border-spacing: 885.7072cm 197.7309in; padding-block: 760.9357vmin; }\n',
      ':valid { max-width: 742.9212pc; scroll-margin-inline-end: -563.1192em; }\n:in-range { text-decoration-color: #530846; scroll-margin-left: -755.8241vmin; empty-cells: show; text-indent: 43% each-line hanging; -webkit-line-clamp: -30%; }\n::backdrop { align-items: normal; inset-block: 42%; }\n:last-of-type { padding: -461.1754mm; border-top-color: ButtonFace; }\n',
      ':default { list-style-image: none; font-size: larger; visibility: visible; }\n::placeholder { border-top-right-radius: 50%; padding-inline-start: -703.8262in; }\n',
      "#umi { animation-name: none; }\n:fullscreen { min-block-size: 68%; border-end-start-radius: 49%; grid-area: heajiupe 7% span / span 2% bun; column-span: all; border-right-color: rgb(51% , 22%); }\n:fullscreen { border-block-end-color: rgba(3439628451315712 , -2040394548248576); inset-block-start: auto; scroll-padding-inline-end: auto; outline-width: thin; }\n:right { border-left-style: outset; }\n:not(* | * . guz : : hezuw [ gehwoivu ] 'ipuod' fit-content(67%) [ becvub ] / [ ki ] minmax(max-content , min-content) [ harhi ] ) : los || * | * . dijjeg : : miwtitpo snap from-image 722.4521dpi ) : zogu) { grid-row: span -97% kimsuzceh / jel; border-inline-end: inset medium; top: 7%; border-block-end-color: rgba(67% , 36%); border-color: hsl(6798148865359872 , 32% , 74% , 70%); }\n",
      ':read-write { filter: contrast(42%); scroll-margin-right: -487.5861vmin; mask-mode: match-source; border-block: thick hidden; }\n',
      '[reversed=cuvbe}] { border-block-end: dashed hsla(963.6818grad 84% 59% / 3%); border-top-right-radius: -922.3306vmax; color-adjust: economy; }\n:not(zeftic | girofod : katji blueviolet ) : : uc : vicod thin ) > vutuwom | * . maglas : : da : ku) { padding-bottom: -51.6523ch; border-block-end-color: currentcolor; hanging-punctuation: force-end first; object-fit: contain; background-attachment: fixed; }\n::marker { text-decoration-line: none; border-width: thin; animation: obututven -6692342744481792 running alternate-reverse 91.2336s step-end; font: small-caption; }\n::placeholder { text-indent: -570.8218cm each-line hanging; flex-shrink: -8678944026918912; animation-play-state: running; mask-position: right -229.2068vmax bottom -318.7509vmax; }\n',
      ':enabled { border-bottom: ThreeDShadow 470.1421pc inset; vertical-align: super; line-break: auto; }\n:in-range { margin-block: auto; margin-block-start: auto; page-break-inside: auto; border-bottom-right-radius: -499.9671vh; }\n'
    ]);
  });
});
