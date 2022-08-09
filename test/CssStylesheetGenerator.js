const expect = require('./expect');
const chanceCache = require('chance-generators/lib/chanceCache');

const CssStylesheetGenerator = require('../lib/CssStylesheetGenerator');

describe('CssStylesheetGenerator', () => {
  beforeEach(() => chanceCache.clear());

  it('should generate a CSS stylesheet', () => {
    expect(new CssStylesheetGenerator().take(10)).toEqualSnapshot([
      "@keyframes 'naci' {\n  from {\n  background-blend-mode: exclusion;\n}\n}\n::first-line { border-inline-start-color: #9c954d; }\n:last-of-type { animation-direction: alternate; font-variant-caps: normal; column-rule: hidden double double medium thin 884.4036vw hsla(-4665270404644864 69% 61%); }\n:visited { text-indent: hanging -584.1167pt each-line; }\n#ziwiwwuh { mask-border-repeat: stretch; }\n* { cursor: url(jitluh) -448.0017cm 604.394cm none; word-break: break-all; font-variant: normal; align-content: normal; border-left-width: medium; }\n:scope { background-size: cover; border-bottom-color: currentcolor; grid-template-areas: none; background-image: none; }\n:first { mask-mode: alpha; mask: url(wic) subtract margin-box; content: none; overscroll-behavior: auto; }\n:default { margin-block-start: 885.7072ch; mask-repeat: repeat; text-underline-offset: -408.7326px; }\n::before ~ :target { gap: -755.8241vmin; }\n:first { clip-path: url(luh); }\ncenter { margin-block: 69%; border-bottom-left-radius: 885.8195cm; counter-set: lahugwi -71; }\n:empty { clear: both; }\n:lang(av) { print-color-adjust: economy; }\n:nth-of-type(odd) { inset-inline: auto; bottom: 8%; pointer-events: visibleStroke; }\n:default { font-feature-settings: normal; width: max-content; margin-block-end: 670.605cm; counter-reset: none; overscroll-behavior: contain; }\n:nth-child(odd) { letter-spacing: -302.668px; border-block-end-color: grey; touch-action: manipulation; overflow-anchor: auto; }\n",
      '::first-letter { overscroll-behavior: contain; outline: medium; caption-side: bottom; border-block-end: #56caa8 ridge thick; font-variant-ligatures: no-historical-ligatures no-contextual common-ligatures no-discretionary-ligatures; }\nembed { column-width: auto; }\n:out-of-range { word-wrap: normal; padding-block: -349.2006em; paint-order: normal; page-break-inside: avoid; }\n:only-of-type { margin-bottom: -264.5684px; caret-color: auto; mask-mode: match-source; }\n:invalid { mix-blend-mode: hue; justify-content: space-evenly; shape-margin: -1.6132ex; mask-border-repeat: stretch; offset-path: none; }\n',
      "@charset \"IBM01140\" ;\n@font-face {\n  font-feature-settings:normal ; font-variation-settings:'devuj' -4428593937514496, 'kov' -6546048205979648, 'reakhup' -7537329128341504, 'tof' -7729241370132480 ; font-stretch:ultra-expanded normal ; size-adjust:3% ; descent-override:84% ; font-weight:normal ; ascent-override:normal ; font-style:oblique -829.3051turn ; font-family:waumo ; src:url(haucmor), url(neragow) ; line-gap-override:44% ; unicode-range:U+90e7-a287 ; font-variant:normal ;\n}\n@font-face {\n  size-adjust:95% ; unicode-range:U+3ea ; font-variation-settings:'tub' 1545195548049408 ; font-family:ditawo ; line-gap-override:19% ; font-stretch:normal ; font-variant:normal ; font-feature-settings:normal ; descent-override:normal ; src:url(uhimo) format('widho'), local(hirzog), url(pitkedeb), local(uzoli), url(de) format('gozzod') ; font-style:normal ; ascent-override:35% ; font-weight:619 839 ;\n}\n:focus-within { background-size: contain; overscroll-behavior-y: contain; }\n:last-child { word-break: keep-all; shape-margin: 23%; }\n::marker { mask-origin: fill-box; padding: 554.2939in; margin-top: auto; box-shadow:   -62.6787pt -887.3935rem -762.3642vh; border-bottom-color: navajowhite; }\n:checked { font-optical-sizing: auto; border-block: none 782.2863cap Window; break-after: right; }\n::placeholder { border-inline-style: groove; grid-template-rows: subgrid [ uzikdo ]; print-color-adjust: economy; }\n:only-child { flex-shrink: 1507014572244992; caret-color: auto; }\n::selection { grid-template-columns: [ vedicozi ] repeat(-16 , minmax(min-content , 555.2046vh)) [ lezenu ] repeat(auto-fill , 82% [ soszujhi ]) 343.4014rem [ vi ]; input-security: none; list-style: none; mask: exclude no-repeat alpha url(mikis) right 47.2045vmax / 77% padding-box margin-box; flex-basis: content; }\n:indeterminate > :nth-child(even of:sabuke ::lelam:por ( titling-caps ):gij ::woba ( write-only ):el ( row )) { border-inline-start-color: hsl(-6849756470968320 89% 59%); overflow-block: hidden; }\n:only-child { border-block-style: ridge; margin-top: auto; grid-column: auto; }\n:first-child { offset-path: url(pu); direction: rtl; border-top-width: -694.2818in; box-decoration-break: slice; scroll-padding-top: auto; }\n:empty { background-blend-mode: saturation; }\n* { animation: 'fo' paused 113.5258s reverse step-start -5413201948704768; justify-self: first baseline; quotes: none; }\n:not([ ruko ] ::nin ( none ):osofa ( 482.2413rem ) | * #tiw ::noiljis ( italic ):igrak) { display: contents; border-end-start-radius: 62%; inset-inline-start: auto; mask-border-slice: 75% -4530816952565760 14% 1259020627214336 fill; inset-inline-end: auto; }\n:visited + :future ~ :indeterminate { font-variant-alternates: character-variant(vimhij) stylistic(kigmiop) styleset(pahas) ornaments(ruawatas) historical-forms swash(co); border-block-start: rgba(16% 84% 18% 12% 84% / -4910803924811776) dashed thin; scroll-margin-block-end: -990.736px; empty-cells: show; }\n:focus-visible { text-rendering: geometricPrecision; hyphens: manual; page-break-after: verso; mask-image: none; text-justify: auto; }\n: { border-inline-style: outset; font: small-caption; print-color-adjust: exact; }\ndd { line-break: auto; transition-timing-function: linear; gap: normal 6%; font-variant-alternates: historical-forms swash(riczo) ornaments(nikro); }\n:: + ::backdrop || ::marker { clip-path: url(abfur); shape-outside: border-box; }\n:optional { mask-position: 305.4922pt; }\n",
      "@keyframes 'ezevafje' {\n  to {\n  scroll-padding-right: auto; border-inline-start-color: #b435d0;\n}\n}\n@keyframes 'ajsa' {\n  to {\n  font: menu; column-rule-color: ThreeDFace; border-image: repeat;\n}\n}\n::cue { grid-auto-flow: column; }\n:required { object-fit: cover; border-start-start-radius: 42%; will-change: auto; text-emphasis-color: navajowhite; }\n",
      "@charset \"UTF-16BE\" ;\n@charset \"EBCDIC-UK\" ;\n@font-face {\n  src:url(majusca) format('lu'), url(wohsul), local(geresu) ; font-variant:none ;\n}\n:nth-last-of-type(even) { background-size: contain; inset-inline-start: auto; }\n:hover { block-size: auto; -webkit-line-clamp: -46; }\nnobr { font: icon; }\n:valid { border-end-end-radius: 45% 8%; margin-bottom: auto; place-self: last baseline right; offset-path: ray(contain closest-side 850.4967turn); border-inline-start-color: hwb(4161752468029440 93% 42% / 85%); }\n:indeterminate { scroll-padding-block-start: 36%; border-top-left-radius: -846.0937vmin 34%; grid-row-end: amape; }\n:required { text-decoration-color: #3ba33b; grid: [ luw ] 'ladibpo' 91.6993fr; list-style-image: none; }\n:checked { hyphens: manual; }\n:empty { padding-block-start: 28%; animation: 899.9224s -482.0347ms 'siwufocek' step-start alternate running none 5876399449571328; }\n:first-of-type { mix-blend-mode: overlay; }\n:last-child { writing-mode: vertical-lr; break-inside: avoid; place-self: baseline normal; }\n:any-link { animation-name: 'legnu', none, omo; border-block-style: dotted; accent-color: auto; }\n:read-write { margin-block: auto; border-block-start-style: none; scroll-padding-top: auto; }\n::cue { text-emphasis-style: 'vinjov'; list-style: image('togavuvi') outside none; border-top-left-radius: 0% 84%; }\n:right { align-content: normal; border-block-color: Menu hsla(-743.1026deg 76% 54%); }\n::placeholder { font-synthesis: small-caps; border-block-start: rgb(3750094927036416 4881619072581632 -7793918687051776 / 2178220417875968) thick groove; }\n:hover { border-collapse: separate; font-size-adjust: none; animation-direction: reverse; inset-block-start: auto; }\n:optional { border-inline-end: solid; grid-template-areas: 'areec'; right: auto; }\n:only-child { shape-outside: image('ukonume' , hsl(2732186637697024 37% 87%)); inline-size: fit-content(737.2464ch); }\n:scope { grid-template-columns: subgrid repeat(4 , [ alba ]); border-bottom-style: groove; grid-column: auto; border-inline-end: dotted; }\n",
      "@font-face {\n  src:local('dagun'), url(tekis), local('ijbu'), url(fugor) format('fo'), url(wusu) format('joworo') ; font-family:imi ; font-variation-settings:normal ; descent-override:normal ; font-stretch:ultra-condensed ultra-expanded ; font-variant:none ;\n}\n@keyframes 'raveh' {\n  to {\n  font-variant-ligatures: common-ligatures;\n}\n}\n@font-face {\n  unicode-range:U+ddf5 ; ascent-override:normal ; descent-override:normal ; font-weight:bold bold ; font-variant:normal ; font-variation-settings:'um' -1566691175694336 ; size-adjust:9% ;\n}\n:focus-visible { line-break: normal; outline-color: invert; border-inline-color: hsl(-981.9392grad 78% 13%) hsl(-115.9513deg 52% 34% / -4526761232564224); }\n:nth-child(odd) { float: left; }\n#lomzu { scroll-margin-bottom: 170.7087vmax; shape-outside: inset(62.3391em 3% 22% 867.7501ch); border-block-start: outset 903.6236ic; offset: center center; }\n:enabled > :read-only { padding-right: 97%; border-left: rgba(97% 17% 25% 69% 66% / -8691659160158208); }\n:lang(ng) { tab-size: 537.0388cap; border-bottom: #f0dd35 inset medium; border-block-start-color: rgba(32% 98% 87%); word-wrap: break-word; scrollbar-color: auto; }\n:empty { text-align-last: right; }\n:root { outline-style: auto; text-emphasis-color: currentcolor; content-visibility: auto; scroll-margin-right: -759.5819ic; margin-inline: -350.8284px 40%; }\n:link { font-style: italic; mask-position: center; }\nbase { mask-type: luminance; offset-distance: 50%; font-size: smaller; }\n",
      "@keyframes mihil {\n  to {\n  padding-block-start: 83%; border-left-style: none; offset-path: none; transition-duration: 309.3862s;\n}\n}\n@charset \"ISO-Unicode-IBM-1264\" ;\n@font-face {\n  font-style:italic ; font-variant:none ; font-variation-settings:'dogewmic' 5688021907144704, 'roob' 2485720463704064, 'setto' -1602768544464896 ; unicode-range:U+5??? ; font-stretch:ultra-expanded expanded ; size-adjust:45% ; line-gap-override:normal ;\n}\n::backdrop { margin-block-end: -375.4565px; border-top-left-radius: 275.9216em 264.031px; }\n* { border-image: element(#bujacwen) repeat 19% -2396706238889984 -2612154381369344 fill; list-style: symbols() outside none; border-top-left-radius: -619.3503Q; }\n* { font-variation-settings: 'nijsiuz' 2431224068964352, 'fidias' -2745907279822848; column-rule-width: thick thick -201.3682vw 984.967rem; text-transform: full-width; bottom: auto; list-style: inside; }\n:right { max-block-size: max-content; }\n:read-only || #he { float: right; flex-direction: column-reverse; }\n:link { scroll-padding-block: auto; grid-template: [ pizekeoka ] 'vueru' [ ma ]; }\n:out-of-range { transition-property: fivonfo; text-emphasis: ThreeDLightShadow filled; }\n:lang(ff) { border: #efbb22 inset; print-color-adjust: economy; offset-anchor: auto; animation: none 989.7327s 238.9955s step-start none; border-bottom-right-radius: -797.9084em 6%; }\n:nth-last-of-type(even) { scroll-margin-inline-end: 230.4389em; column-width: 311.4474pc; }\n::after { border-collapse: separate; font-variant-ligatures: none; border-left-style: dashed; gap: 77% normal; }\n",
      ':focus-within { break-inside: avoid-page; overflow-clip-margin: padding-box; counter-set: gucbij; caret-color: hwb(none 49% 87%); }\n:default { input-security: none; max-inline-size: fit-content(912.4444vmin); border-color: rgb(95% 69% 81%) rgb(7751935943770112 -8314971620376576 -4448503791091712 7237500640690176 5065116030599168) currentcolor hwb(-4918566818152448 none 52% / 44%); overflow-clip-margin: content-box; }\n:read-only { scroll-margin-block-end: -789.265cap; }\n#wejjuus { outline-color: invert; flex-wrap: nowrap; border-block-end-style: inset; background-position: left top; user-select: all; }\n:scope { min-inline-size: 20%; align-items: normal; }\n:nth-last-of-type(odd) { transition-timing-function: cubic-bezier(0 , -6751191836917760 , 0 , -6954339100786688); mask-size: cover; perspective: 232.9995Q; border-inline: thick; }\n:checked { font-optical-sizing: auto; grid-row: -52 putuvu; }\n::backdrop { break-inside: avoid-region; box-sizing: border-box; border-style: outset ridge; margin-top: auto; orphans: -65; }\n:first { will-change: auto; margin-block-start: auto; border-block-start-style: ridge; scroll-margin-right: -572.9773pc; }\n:lang(sw) { padding-right: 516.37px; page-break-inside: avoid; }\n',
      '@charset "KOI8-U" ;\n::before { border-inline-end: inset; page-break-before: recto; word-spacing: normal; }\n:: { scroll-margin-block-start: -591.9288ic; margin-right: auto; scroll-margin-left: 229.9565em; overflow-wrap: break-word; scrollbar-color: hwb(none none none) rgba(-2378967923294208 3213387236376576 -3117722892238848 4616453714083840 -6325070620262400 , 36933304582144) Highlight; }\n:indeterminate { scale: 1676137704980480; border-end-start-radius: 0%; overscroll-behavior: contain; animation-fill-mode: none; }\n',
      ':future { mask-image: paint(hir , stretch); mask-repeat: repeat-y; animation-direction: reverse; }\n:nth-of-type(7n+4) { scrollbar-color: rgba(365630641405952 -1077279069306880 -2279495188873216 -6350930681266176) hsl(-5033007551348736 60% 74% / 64%) rgba(50% 79% 18% 11% , 75%) hsla(-631.0475rad , 98% , 16%); overscroll-behavior-inline: contain; scroll-padding-block-end: 93%; column-rule-width: 705.4561mm -246.1717vmax thin thin; }\n:hover { inset-block: -838.797cap auto; inset-inline-start: 73%; align-content: start; border-collapse: collapse; perspective-origin: center; }\n[autofocus=ja] { color: hsl(-257.5858turn , 45% , 78%); background-origin: padding-box; }\n#tu { border-end-start-radius: 41%; right: 90%; border-top-width: medium; }\n:left { mask: repeat-y none no-clip left bottom / 42% alpha intersect view-box; }\n:checked { padding-inline: 415.6702pt 8%; border-top-color: currentcolor; grid-auto-rows: max-content; }\n:any-link { height: fit-content(498.5674pt); }\n:empty { letter-spacing: normal; flex-wrap: wrap; background-attachment: local; border-radius: -670.5873pt 513.503rem / 319.2587vmax; }\n::before || :checked { mask: exclude fill-box none repeat-y border-box luminance; column-fill: balance; place-items: stretch; }\n:target { border-left-style: inset; list-style: outside; }\n: { scroll-snap-stop: normal; text-decoration-thickness: from-font; width: min-content; mask-repeat: repeat-x; }\n:fullscreen { order: -70; content: none; max-inline-size: none; text-decoration: 934.2533vw; }\n:focus-visible { border-bottom-right-radius: 32% 763.8555vw; grid-auto-rows: 53%; animation-fill-mode: both; border-right-width: thin; visibility: visible; }\n::backdrop { text-overflow: ellipsis; padding-block: -57.6642vmin 46%; content: none; inset-inline-end: auto; empty-cells: hide; }\n:default { scroll-padding-block: auto; }\n',
    ]);
  });

  it('supports configuring the at-rules', function () {
    expect(
      new CssStylesheetGenerator({
        minAtRules: 1,
        maxAtRules: 1,
        minStyleRules: 0,
        maxStyleRules: 0,
        atRules: { type: '@charset' },
      }).take(10)
    ).toEqualSnapshot([
      '@charset "EBCDIC-AT-DE" ;\n',
      '@charset "ISO-10646-Unicode-Latin1" ;\n',
      '@charset "Shift_JIS" ;\n',
      '@charset "windows-1258" ;\n',
      '@charset "ISO-8859-5" ;\n',
      '@charset "windows-1254" ;\n',
      '@charset "dk-us" ;\n',
      '@charset "IBM297" ;\n',
      '@charset "DEC-MCS" ;\n',
      '@charset "greek7" ;\n',
    ]);
  });

  it('supports configuring the style rules', function () {
    expect(
      new CssStylesheetGenerator({
        minAtRules: 0,
        maxAtRules: 0,
        minStyleRules: 1,
        maxStyleRules: 1,
        styleRules: { declarationList: { min: 1, max: 1 } },
      }).take(10)
    ).toEqualSnapshot([
      '::marker { scale: -6196617325576192 -975790292336640; }\n',
      '* { shape-outside: content-box M 99,-64 Q -39,22; }\n',
      ':focus-within { list-style-position: outside; }\n',
      ':empty { border-top-right-radius: 236.772em; }\n',
      '::selection { backface-visibility: hidden; }\n',
      ':indeterminate { transform-style: preserve-3d; }\n',
      ':future { border-block-end-style: dotted; }\n',
      ':nth-last-child(odd) { font-synthesis: none; }\n',
      ':enabled { border-right-style: double; }\n',
      '::after { transform: none; }\n',
    ]);
  });

  describe('when shrinking', function () {
    it('should shrink', function () {
      const generator = new CssStylesheetGenerator();
      expect(generator).toShrinkTowards(
        ':link { scroll-margin-inline-start: 620.2268ex; }\n'
      );
    });

    it('should honor the minStyleRules setting of the original generator', function () {
      const generator = new CssStylesheetGenerator({
        minStyleRules: 2,
        minAtRules: 0,
      });
      expect(generator).toShrinkTowards(
        'col { grid-template-areas: none; }\n' +
          '#lef { text-transform: lowercase; }\n'
      );
    });

    it('should honor the minAtRules setting of the original generator', function () {
      const generator = new CssStylesheetGenerator({
        minAtRules: 2,
        minStyleRules: 0,
      });
      expect(generator).toShrinkTowards(
        "@keyframes 'naci' {\n" +
          '  from {\n' +
          '  background-color: teal;\n' +
          '}\n' +
          '}\n' +
          '@font-face {\n' +
          "  src:url(hiapli) format('enfic') ; font-feature-settings:'de' 37 ; unicode-range:U+2??? ; font-variant:none ; font-stretch:78% ; font-family:kanpakuj ; font-style:italic ; font-variation-settings:normal ; font-weight:773 ;\n" +
          '}\n'
      );
    });
  });
});
