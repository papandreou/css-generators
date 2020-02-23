const expect = require('./expect');
const chanceCache = require('chance-generators/lib/chanceCache');

const CssStylesheetGenerator = require('../lib/CssStylesheetGenerator');

describe('CssStylesheetGenerator', () => {
  beforeEach(() => chanceCache.clear());

  it('should generate a CSS stylesheet', () => {
    expect(new CssStylesheetGenerator().take(10)).toEqualSnapshot([
      '@keyframes sidfanu {\n  to {\n  border-image-outset: 2718165087813632; animation-direction: normal; vertical-align: bottom; scroll-padding-bottom: -998.4425em;\n}\n}\n::slotted([ jimab | lel ] ::gemsibsof:ow) { mask-border: 3318847205539840 url(ebik) repeat luminance; outline-color: invert; contain: strict; list-style-image: url(gazziw); font-variant-alternates: swash(uhlog) annotation(sezsi) ornaments(ju) historical-forms stylistic(bu) character-variant(mahbu) styleset(wot); }\n:scope { block-size: auto; float: inline-start; border-bottom-color: ThreeDShadow; scroll-padding-top: -338.204cm; }\n* { contain: content; cursor: url(sogrij) grab; }\n:read-write { pointer-events: fill; mask-border: luminance; inset-inline-start: 45.4657rem; grid-auto-flow: row; border-block-start-width: -937.1417vmin; }\n:only-of-type { content: none; letter-spacing: 815.133em; box-shadow: -593.8776ex rgb(29% , 6853899260526592) inset; }\n:only-child { column-rule-style: groove; border-block-start-style: inset; grid-template-rows: subgrid; border-inline-start-width: thin; text-decoration-style: wavy; }\n:not(: kujemat ::barilva:ofhi ~ . hug ::wejujo:caku ( 361.4109em )) { inset-inline-end: 99%; margin-right: 185.3935rem; border-block-color: currentcolor; }\n:focus { border-width: medium; scroll-margin-bottom: -264.4337pt; }\n:only-child { object-position: right top; scroll-margin-block-end: 670.605em; counter-set: none; border-inline-start-width: medium; backdrop-filter: url(har); }\n:left { border-top: outset medium; font-variant-alternates: normal; list-style: url(guireva) none outside; margin-right: 53%; break-inside: avoid; }\n::slotted(: ipaje ( none ) ::ikotucfow ( luminance ):du ( fill-box, fill-box, no-clip, stroke-box, stroke-box )) { border-top: rgb(49%); border-inline-start: inset midnightblue thin; mask-border-outset: -7319704678957056; letter-spacing: normal; offset: polygon(evenodd , 35% 65%, 67% 728.3352em, 444.9043pt 144.0084ch) view-box 94%; }\n::placeholder { text-orientation: sideways; font-kerning: none; }\ntt { display: table-column; translate: 99% -411.1022in; border-left-color: currentcolor; clear: left; inset-block-start: -254.6263px; }\n:hover { scroll-padding-left: 57%; background-size: 67%; word-spacing: normal; border-image: 4337301782003712 fill / auto; padding-block: 105.64in; }\n:enabled { grid: auto-flow dense min-content / none; justify-items: unsafe left; background-size: contain; font-variant-alternates: annotation(bedinbel); border-inline: #dc437a -499.4973ch; }\n#likizef { min-inline-size: max-content; border-block-style: inset; background-blend-mode: overlay; margin-block: 54%; overscroll-behavior-x: none; }\n',
      "::selection ~ ::selection { padding-block-start: -917.865vh; font-variant-caps: small-caps; grid-column: haucmor; }\n* { text-orientation: mixed; }\n:invalid { border-top-width: medium; border-block-end-color: darkgrey; }\n:optional { color-adjust: exact; transition-delay: 33.3925s; orphans: 11%; grid-column-end:  -51%; mask-border-mode: luminance; }\n:root frameset ~ , + #ku { overscroll-behavior-y: contain; inline-size: 613.826pt ; border-inline-end-style: solid; grid-column-end: 23% cejtu; justify-self: stretch; }\n::backdrop { outline: invert outset 734.3979px; offset: right url(am) 810.7013deg auto -861.2774ex; font-variation-settings: normal; }\n#vec { counter-reset: betjivo; mix-blend-mode: color; text-align-last: auto; page-break-after: avoid; }\n:valid { column-count: auto; border-inline-start: #fd91be ridge; font-weight: bold; box-shadow: 861.5147px inset ; grid-auto-rows: fit-content(74%); }\n:root { border-block-start-color: hsla(10.5048grad , 83% , 39%); column-rule-style: inset; }\n, { background-clip: border-box; transition-duration: 810.764s; }\n, { counter-reset: none; transform-style: preserve-3d; }\n::placeholder { mask-border-slice: 2374968125947904; grid-template: none; column-rule-color: #54235c; }\n:nth-child(odd) { transform-origin: 861.8583pt right; writing-mode: vertical-lr; background-color: hsla(91.8316grad , 71% , 11% , 3387247466381312); pointer-events: all; }\n:only-child { border-block-start: -854.474mm currentcolor inset; padding: -837.3025pt; border-block-style: dotted; word-break: keep-all; font-optical-sizing: none; }\n:focus { scroll-margin-left: -526.6296vw; text-emphasis-style: 'lerpo'; font-variation-settings: 'ihmi' -4437267431030784, 'ni' -7992929603813376, 'zatossez' -1797424519577600, 'jarek' 8344675337371648; scroll-margin-bottom: -975.6911vw; vertical-align: middle; }\n",
      '::cue { text-shadow:  107.7086rem; unicode-bidi: normal; list-style-position: inside; }\n:only-child { overscroll-behavior-block: contain; grid-template-columns: subgrid repeat(auto-fill , [ wawuz ]); }\n* { font-variant: none; border-block-start-style: groove; filter: none; border-inline-end-color: rgba(46%); flex-shrink: -4874790854721536; }\n:nth-last-of-type(1n+4) { break-inside: avoid-region; grid-template-columns: repeat(28% , minmax(60% , max-content)) repeat(auto-fill , [ ozi ] minmax(min-content , 92%)) repeat(88% , [ falo ] minmax(min-content , 99%)); mask-position: right 85% bottom 6%; image-orientation: from-image; gap: normal; }\naside { shape-outside: cross-fade(cross-fade(element(#wusleg) ) ); }\n::placeholder { max-block-size: 23%; text-align-last: right; }\n:root { background: 52% center / contain radial-gradient(at left -942.4347pc bottom 62% , purple 234.5275ch, GrayText 64%, #6ffe5b 35%, #8394d0 40% , hsl(724.7275rad , 95% , 80%)) content-box repeat-y fixed none hsl(159.2999deg 34% 7% / -718429287874560) border-box padding-box; border-image-source: none; border-image:  88% paint(sabuke) stretch; animation-name: lelam; }\n',
      "@font-face {\n  font-family:vamfuj ;\n}\n* { color: currentcolor; }\n:valid { perspective: -630.958vw; }\n:checked { font-language-override: 'tori'; padding-inline: 6%; animation-timing-function: linear; }\n:disabled { padding-block-start: 90%; }\n::after { perspective-origin: left; shape-outside: circle(); clear: inline-start; }\n:focus { animation-direction: alternate; }\n:first-child { border-right-width: -345.0053px; border-bottom-right-radius: 781.0546mm; mask-origin: fill-box; overflow-block: hidden; scroll-behavior: smooth; }\n:last-of-type { border-block-width: medium; margin-block-start: auto; mask-image: cross-fade(element(#je)  , #921e86); }\n:dir(ltr) { word-break: break-all; max-block-size: fill-available; border-top-style: none; }\n:default + :fullscreen :dir(ltr) { scroll-padding-top: auto; }\n, { scroll-margin-inline: -653.2528ch; text-decoration-thickness: -839.5325ch; }\n:link { font-variant-position: super; }\n::selection { border-bottom: outset currentcolor 634.1442vw; break-before: left; border-inline-end-color: mistyrose; scroll-padding: 56%; margin-block-end: 48%; }\n:empty { resize: both; border-inline-start-width: thick; cursor: url(gihidtoh) nw-resize; left: 864.0287pt; counter-set: none; }\n",
      '@charset "JUS_I.B1.003-serb" ;\n@charset "ISO-2022-KR" ;\n:not([ ace = dil ] ::lawesu ( avoid ):ofacuwib ( 563.029em ) || | guvoije:alilul ( 79.5621vh ) ::hewli:hom ( 879.6643in )) { padding-right: 387.4352em; border-inline-width: thick; text-combine-upright: all; isolation: isolate; }\n:right { mask-border-slice: 100%; place-content: first baseline start; mask-border-repeat: round; position: absolute; text-align-last: center; }\n',
      "@keyframes 'el' {\n  from {\n  font-variant-alternates: character-variant(tisirse) stylistic(uwsemi) styleset(taw) ornaments(pahas) historical-forms swash(ociwowwo); border-image-width: auto; mask-border-source: none; max-block-size: -151.7387cm;\n}\n}\n:right { top: auto; }\n::first-line { grid-template-areas: none; border-bottom: rgba(-5650740685045760); scroll-padding-inline-start: 739.7928in; list-style: outside; font-variant-caps: all-small-caps; }\n* { filter: none; scroll-margin-bottom: 575.5798ch; mask-type: luminance; border-bottom-color: hsla(727.0363turn 93% 34%); }\n",
      "@keyframes 'halfef' {\n  to {\n  border-inline-style: solid; animation-play-state: paused; contain: strict;\n}\n}\n:scope { color: darkorchid; all: initial; outline-offset: 30.3474em; }\n::selection { hanging-punctuation: none; margin-top: 86%; border-block-style: double; writing-mode: horizontal-tb; justify-items: stretch; }\n:nth-last-of-type(1n+4) { grid-auto-flow: dense; text-emphasis: dot; font-variation-settings: normal; scroll-padding-inline: 6%; }\n:enabled { padding-block-start: 55.2955pt; margin-block-end: 48%; font-variant-east-asian: normal; mask: left 65% bottom 601.4996ch / auto url(mamhevi) add luminance repeat-x view-box; }\n:nth-last-child(9n+7 of [ | sutukufek ] ::cap:ebgutir || * . len ::tek:nuhu ( contain )) { border-image: round; inset-inline: auto; text-decoration-style: dotted; scroll-margin-block-end: -635.7857pc; }\n:last-of-type { line-break: loose; }\n:right { overscroll-behavior-inline: none; font-variant-east-asian: normal; border-start-end-radius: 290.1083vmax; }\n:in-range { border-color: #e68be8; border-inline-end-style: groove; clip: auto; animation-delay: 645.1678s; margin: 630.1089px; }\n:last-of-type { background-repeat: repeat-y; font-variant-ligatures: none; }\n:last-of-type { padding-inline: -786.8426ch; border-image: image(rtl url(vifovi)); font-size-adjust: 340791130062848; grid-area: auto / wac; border-block-end: hsla(-1131423192842240 , 35% , 92% , 30%) medium; }\n",
      '@charset "ISO-2022-CN" ;\n@charset "windows-874" ;\n::marker { padding-top: -570.1193in; }\n.ficul { mask-repeat: repeat-x; empty-cells: hide; right: 10%; flex-direction: row; flex-shrink: 4110683201339392; }\n:indeterminate { padding: 60%; grid-column-end: ac; scroll-margin-block-end: -995.3213rem; }\n::selection { align-content: space-between; font: icon; }\n, { text-overflow: \'ori\'; list-style-image: url(uvo); padding-top: 81%; place-self: last baseline unsafe right; inset-inline-end: 22%; }\n:read-only { background-blend-mode: luminosity; outline-width: -911.6692rem; mask-image: url(riohdo); padding-right: -614.802vmin; border-bottom-color: HighlightText; }\n::marker { inline-size: fit-content; shape-margin: 689.0988pc; counter-reset: none; scroll-padding-block-end: 300.3347px; }\n:fullscreen { mask: margin-box; overscroll-behavior-inline: none; }\n:first-of-type { padding-inline-start: -869.2874px; counter-increment: none; margin-bottom: 79%; }\n:optional { page-break-before: right; list-style-image: none; }\n:in-range { text-align-last: start; grid: subgrid [ gij ] / subgrid repeat(100% , [ co ]); border-block-end: medium #dfa94d; clip: auto; }\n:hover { border-block-end-color: hsla(405669672910848 74% 73%); align-content: normal; image-orientation: -405.9943grad; scroll-snap-align: start; }\n:read-write { mask-mode: alpha; color: rgb(8786025539174400); }\n:in-range { font-stretch: condensed; }\n:out-of-range { border-start-start-radius: 95%; }\n:target { break-before: avoid; mask-mode: luminance; width: auto; text-decoration-color: InfoText; }\n:last-child { max-width: fill-available; border-inline-width: medium; word-spacing: normal; border-top-left-radius: 885.4636vmax; opacity: 1940813529481216; }\n:visited { border-bottom-right-radius: -906.1093em; font-stretch: extra-condensed; animation-timing-function: linear; }\n::placeholder { scroll-padding-block-start: auto; scroll-margin-block-end: -884.3147Q; unicode-bidi: embed; text-decoration: auto double hsla(-17.6273rad , 100% , 15% , 46%); }\n',
      ':default { margin-block-start: 185.8799vmin; mask-border-width: auto; border-block-end-color: hsla(-4222574271660032 , 27% , 13%); text-decoration-line: none; }\n::placeholder { shape-margin: 619.0322in; orphans: 87%; margin-left: auto; border-block-width: thin; font-variant-numeric: normal; }\n:focus { break-inside: avoid-column; }\n:required { isolation: isolate; }\n[wrap=vu] { word-spacing: -9.707vmin; }\n:last-child { mask-origin: view-box; scroll-padding-block: 324.224rem; margin-inline: 87%; }\n:empty { text-combine-upright: all; scroll-margin-block-start: 736.3216Q; bottom: auto; border-inline: thick dotted tan; }\n:out-of-range { min-block-size: min-content; }\n:root { border-inline-end: hsla(651.6335deg 13% 82%) dotted medium; }\n::first-letter { -webkit-line-clamp: 11%; }\n:visited { left: -987.2283em; column-fill: auto; min-block-size: auto; width: max-content; }\n:only-child { break-inside: avoid; }\n:only-of-type { margin-bottom: auto; }\n',
      "@font-face {\n  font-stretch:ultra-condensed ; font-family:awvooh ; font-variant:normal ;\n}\n@keyframes 'sij' {\n  from {\n  border: currentcolor; word-spacing: 97%; grid-row-start: baahpu 54%; box-sizing: border-box;\n}\n}\n@font-face {\n  src:local(jevzova) ; unicode-range:U+45f4 ; font-variant:normal ; font-variation-settings:normal ; font-feature-settings:normal ;\n}\n:required { text-indent: hanging  27%; grid-row-end: span zebuwen; shape-margin: -53.5802px; unicode-bidi: normal; border-inline-start-width: 737.2464cm; }\n:scope { right: 85%; }\n:link { animation-delay: 252.4406s; border-color: hsl(841.6957turn 62% 18% / -332863622873088); -webkit-line-clamp: none; mask-repeat: repeat-x; }\n"
    ]);
  });

  it('supports configuring the at-rules', function() {
    expect(
      new CssStylesheetGenerator({
        minAtRules: 1,
        maxAtRules: 1,
        minStyleRules: 0,
        maxStyleRules: 0,
        atRules: { type: '@charset' }
      }).take(10)
    ).toEqualSnapshot([
      '@charset "CP51932" ;\n',
      '@charset "EBCDIC-AT-DE" ;\n',
      '@charset "PT" ;\n',
      '@charset "ISO_646.basic:1983" ;\n',
      '@charset "IBM866" ;\n',
      '@charset "ISO-2022-JP" ;\n',
      '@charset "ISO-8859-5" ;\n',
      '@charset "IBM861" ;\n',
      '@charset "GB_2312-80" ;\n',
      '@charset "windows-1258" ;\n'
    ]);
  });

  it('supports configuring the style rules', function() {
    expect(
      new CssStylesheetGenerator({
        minAtRules: 0,
        maxAtRules: 0,
        minStyleRules: 1,
        maxStyleRules: 1,
        styleRules: { declarationList: { min: 1, max: 1 } }
      }).take(10)
    ).toEqualSnapshot([
      '::placeholder { padding-right: 60%; }\n',
      ':invalid { border-block-start: inset; }\n',
      ':read-write > :optional { background-color: ThreeDDarkShadow; }\n',
      ':checked { border-inline-start-color: ButtonHighlight; }\n',
      ':nth-of-type(even) { grid-column: auto; }\n',
      ':hover { background: padding-box right / contain repeat-x rgb(7965998619557888 , 81%) fixed left border-box; }\n',
      ':invalid { border-bottom-style: groove; }\n',
      '#lef { place-items: stretch; }\n',
      ':not(ziwiwwuh #pakuj ::ene ( -438.131s ):ju ( center ) + . af ::asoojduv ( -338.204cm ):vewip) { text-decoration-line: spelling-error; }\n',
      '::selection ~ :read-write { pointer-events: fill; }\n'
    ]);
  });

  describe('when shrinking', function() {
    it('should shrink', function() {
      const generator = new CssStylesheetGenerator();
      expect(generator).toShrinkTowards(
        '::placeholder { scroll-margin-top: -229.167in; }\n'
      );
    });

    it('should honor the minStyleRules setting of the original generator', function() {
      const generator = new CssStylesheetGenerator({
        minStyleRules: 2,
        minAtRules: 0
      });
      expect(generator).toShrinkTowards(
        'cite { column-count: auto; }\n:hover { clip-path: url(gor); }\n'
      );
    });

    it('should honor the minAtRules setting of the original generator', function() {
      const generator = new CssStylesheetGenerator({
        minAtRules: 2,
        minStyleRules: 0
      });
      expect(generator).toShrinkTowards(
        '@keyframes sidfanu {\n' +
          '  to {\n' +
          '  border-end-end-radius: 65%; animation-delay: -887.1769s; page-break-after: recto; transform-box: border-box;\n' +
          '}\n' +
          '}\n' +
          '@font-face {\n' +
          "  font-style:normal ; src:local('ju'), url(do) format('pu'), local('sof') ;\n" +
          '}\n'
      );
    });
  });
});
