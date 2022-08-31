const expect = require('./expect');
const chanceCache = require('chance-generators/lib/chanceCache');

const CssStylesheetGenerator = require('../lib/CssStylesheetGenerator');

describe('CssStylesheetGenerator', () => {
  beforeEach(() => chanceCache.clear());

  it('should generate a CSS stylesheet', () => {
    expect(new CssStylesheetGenerator().take(10)).toEqualSnapshot([
      "@keyframes 'naci' {\n  from {\n  background-blend-mode: exclusion;\n}\n}\n::first-line { border-inline-start-color: lch(-8879903957057536 -3760881468964864 none); }\n* :empty { border-top-right-radius: 236.772em; font-size-adjust: ch-width from-font; }\n:nth-last-child(1n+1 of #notibaw ::ginbu ( 90% ):gib ( medium ) + bu:gor ::duvtih ( -378.0354Q ):rij ( 56% )) { inset-inline-end: 43%; border-block-start-width: -937.1417vmin; }\n:nth-of-type(6n+7) { border-end-start-radius: 54%; place-items: normal; mask-repeat: repeat; text-underline-offset: -408.7326px; border-block-start-color: darkgrey; }\n::cue(:first) { text-decoration-thickness: from-font; }\n::cue-region { offset-path: Q 73,-39 M -67,2 Q -17,-3 M 39,-76 M -33,-51 L -67,-36 M 4,12 L -19,-27 M 95,-49 L -51,-50 L -1,43 M -71,-43 L -93,-47 Q 96,1 Q -90,-94 M -31,82 Q -52,36; border-image-outset: -940654909718528; }\n::slotted([ notemdov = 'ser' ] ::or:vedewire) { outline: medium; caption-side: bottom; }\n::placeholder + :link { object-fit: fill; print-color-adjust: economy; padding-inline-start: 89%; font-variant-ligatures: no-historical-ligatures no-contextual common-ligatures no-discretionary-ligatures; accent-color: auto; }\n:enabled { overflow-y: clip; word-wrap: normal; padding-block: -349.2006em; }\n:right { page-break-inside: avoid; orphans: 14; margin-bottom: -264.5684px; caret-color: auto; }\n:nth-child(odd) { text-emphasis-style: circle; offset-distance: 87%; border-left-style: ridge; color-scheme: dark ; word-wrap: break-word; }\n::marker { text-decoration: lch(8652884564508672 none 6325515988238336) overline; font-variant: tabular-nums jis83 annotation(epcibtof) discretionary-ligatures slashed-zero contextual swash(sa) ruby all-petite-caps diagonal-fractions ordinal no-historical-ligatures stylistic(haahra) oldstyle-nums historical-forms ornaments(navgiro) styleset(uzwebmek); grid-row: auto; border-inline-start-style: inset; overscroll-behavior: auto; }\n* { text-orientation: mixed; }\n:default { border-block-end: thick double bisque; mask-border-mode: luminance; place-items: normal; }\n* + #ura + :in-range { pointer-events: visible; }\n:in-range { hyphenate-character: auto; }\n",
      '@charset "ISO_6937-2-add" ;\n.pivvod { background-repeat: repeat-y; animation-duration: 171.5512s; transform: skew(0); scroll-margin-inline-start: 641.279vw; }\n',
      '@keyframes \'ce\' {\n  from {\n  filter: none; counter-increment: ag; inset-inline-start: auto; flex-flow: wrap-reverse column-reverse;\n}\n}\n@charset "PC8-Danish-Norwegian" ;\n::slotted(. onumo ::pitkedeb:ku ( right top )) { mask-type: luminance; overflow: hidden; }\n::marker { scrollbar-width: auto; text-underline-position: from-font; background-clip: padding-box; grid-row-end: 38 ecumoce span; }\n::cue(,) { border-top-right-radius: 87% 625.5992ex; }\n::marker { mask-origin: fill-box; padding: 554.2939in; margin-top: auto; box-shadow:   -62.6787pt -887.3935rem -762.3642vh; border-bottom-color: navajowhite; }\n:checked { font-optical-sizing: auto; border-block: none 782.2863cap Window; break-after: right; }\n::placeholder { border-inline-style: groove; grid-template-rows: subgrid [ uzikdo ]; print-color-adjust: economy; }\n:only-child { flex-shrink: 1507014572244992; caret-color: auto; }\n::selection { grid-template-columns: [ vedicozi ] repeat(-16 , minmax(max-content , 555.2046vh)) [ lezenu ] repeat(auto-fill , 82% [ soszujhi ]) 343.4014rem [ vi ]; input-security: none; list-style: none; mask: exclude no-repeat alpha url(mikis) right 47.2045vmax / 77% padding-box margin-box; flex-basis: content; }\n',
      ":nth-child(even of:sabuke ::lelam:por ( titling-caps ):gij ::woba ( write-only ):el ( row )) > :future { mask-border: luminance none; }\n:in-range { scrollbar-width: thin; inset: 74%; }\n:nth-child(odd) { border-bottom-width: thin; font-family: cursive, hacfe, 'ju', ra, miz; text-overflow: 'hifvuwrin'; }\n:in-range { resize: both; user-select: text; grid-auto-flow: dense; bottom: 71%; max-height: fit-content; }\n, { border-image-width: auto; counter-reset: none; background-attachment: fixed; }\n:left :left { counter-reset: none; border-block-style: groove; }\n:right { inline-size: max-content; scroll-margin: -786.6015vmin 701.4549vmax; paint-order: fill stroke; }\n:active { background-origin: content-box; mask-border-slice: 14% fill; }\n:right { border-inline-color: hsl(815.7323grad 88% 39% / -2216772153376768) lab(75% 1395868531949568 90%); font-size-adjust: ex-height from-font; margin-bottom: 879.6643ic; min-width: fit-content; }\n:out-of-range { scroll-margin: 240.1455pc 66.9222rem 787.7852pt 577.1944vw; }\n",
      ':enabled { row-gap: 139.7794rem; pointer-events: visible; }\n:right { scroll-margin-top: -778.7366in; }\n::after { mask-type: luminance; }\n:target { inset-block-end: 77%; }\n:read-write { mask-repeat: repeat-y; padding-block-start: 83%; border-inline-start-color: hsla(-3820320423149568 62% 92% / -4395233441742848); animation: alternate paused 213.4301ms -845.3579s 7666360750440448 fuf step-start; }\n:enabled { mask-mode: luminance; background-blend-mode: lighten; }\n:target { mask-type: luminance; }\n:focus { shape-margin: 47%; flex-flow: wrap; border-top: hidden; }\n: { border-inline-style: outset; font: small-caption; print-color-adjust: exact; }\ndd { line-break: auto; transition-timing-function: linear; gap: normal 6%; font-variant-alternates: historical-forms swash(riczo) ornaments(nikro); }\n:: + ::backdrop || ::marker { clip-path: url(abfur); shape-outside: border-box; }\n:optional { mask-position: 305.4922pt; }\n:read-write { bottom: auto; mask-type: alpha; scroll-padding-block-start: 14%; border-right-color: hsla(-7466814577573888 , 20% , 2%); border-inline-start-color: #b435d0; }\n::cue(:nth-last-of-type(even)) { font-size: larger; scroll-padding-block-end: 104.0944in; grid-column-start: zodenuw; image-rendering: pixelated; grid-auto-flow: column; }\n:required { object-fit: cover; border-start-start-radius: 42%; will-change: auto; text-emphasis-color: #aee523; }\n.ratpecmol { padding-bottom: -978.0084cm; border-end-end-radius: 88%; padding-right: 60%; object-fit: none; border-inline-end-width: thick; }\n',
      '@keyframes wac {\n  from {\n  column-gap: normal; text-orientation: sideways; column-rule-style: outset dashed outset; border-end-end-radius: -460.1776cap 16%; mask-position: center center;\n}\n}\n:root { flex-direction: row; }\n:read-write { overscroll-behavior-y: auto; grid-column-end: auto; scroll-margin-right: 598.8318cap; }\n:out-of-range { accent-color: hsla(-726.3628turn 69% 52%); border-block-style: inset; }\n:required { place-self: last baseline last baseline; outline-width: 176.5275vmin; z-index: auto; mask-border-outset: -374.2903cap; border-bottom-left-radius: 19% 98%; }\n:focus-within { inline-size: fit-content(32%); list-style-image: none; animation-play-state: paused; border-top-left-radius: -846.0937vmin 34%; }\n:hover { background-origin: border-box; margin-block-start: auto; counter-increment: none; }\n:last-child { max-width: fit-content(-76.1143vmax); word-spacing: normal; text-align: end; }\n:future { scroll-margin-block-start: 995.8683cap; flex-grow: 4813236423622656; border-block-style: solid; min-width: max-content; clip-path: none; }\n',
      '@charset "IBM868" ;\n@font-face {\n  font-feature-settings:normal ; font-variant:ordinal stylistic(ema) discretionary-ligatures annotation(ut) styleset(tuimsum) diagonal-fractions oldstyle-nums unicase tabular-nums ruby proportional-width swash(inu) ornaments(jenuov) slashed-zero simplified no-contextual ; descent-override:normal ; font-style:normal ; unicode-range:U+aee? ; font-variation-settings:normal ; src:local(wuavoed), local(wudorgav) ;\n}\n@keyframes duhofat {\n  to {\n  column-fill: auto;\n}\n}\n:first { object-fit: fill; font-variation-settings: \'dahbikeje\' -5773663005573120; text-underline-position: right; }\n:out-of-range { transform-style: flat; }\n',
      "@font-face {\n  font-stretch:extra-expanded normal ; font-feature-settings:normal ; font-family:'uw' ; line-gap-override:normal ; ascent-override:normal ; font-style:italic ; font-variation-settings:normal ; size-adjust:86% ;\n}\n@keyframes mewesga {\n  to {\n  inline-size: fit-content(737.2464ch); rotate: none; grid-template-columns: subgrid repeat(4 , [ alba ]);\n}\n}\n:nth-last-child(6n+3) > :invalid { opacity: 1626050463268864; }\n:target { will-change: auto; align-self: stretch; }\n:optional { inset: 29% 76% auto auto; animation-timing-function: ease; }\n:default { mask-border-repeat: stretch; isolation: auto; border-right-width: thin; rotate: none; cursor: url(dujbu) alias; }\n:first { mask-border-outset: 386.3879vh; scroll-margin-top: -917.6331cm; outline-width: thick; border-bottom-style: inset; mask-position: left center; }\n::first-line { padding-block-end: 34%; max-height: fit-content; border: lemonchiffon none; border-inline-style: none; background-color: hsl(-561.572grad 47% 75%); }\n::before { outline: groove dashed double; inset-inline-end: -193.4773Q; border-style: solid; }\n:active { hyphenate-character: auto; transition-timing-function: cubic-bezier(1 , 4239694132936704 , 1 , 87277741015040); animation-timing-function: step-end; grid-row: 75 vesewge / saplu span; border-inline-start-color: rgb(-7252715897880576 6678836527759360 -1710993117806592); }\n:nth-child(even of:so ::ic ( repeat-y ):sowef ( 67%, center ) || * #re ::ocdi ( rgba(8378833556209664 3350097014292480 -8918208429948928 -8694112794443776 , 87%) ):vida) { columns: 35; }\n::placeholder || :read-write + :hover || ::before { break-after: verso; }\n::after { font-optical-sizing: none; inset-inline-start: 87%; shape-margin: 11%; text-underline-position: right under; outline: auto thick currentcolor; }\n::slotted(tis:ahiajaro ::vejnig ( -853.6082pt ):peezipub ( dashed )) { margin-block: 77%; margin-inline-start: auto; }\n:read-only { animation: -7921518436679680 868.8721ms; flex-grow: -7180164052025344; border-inline-style: dotted; }\n:empty { text-underline-offset: 54%; mask-clip: stroke-box, view-box; }\n:visited { border-inline-start-color: currentcolor; scroll-margin-block-start: -630.8298rem; column-rule-color: darkgrey; }\n::first-letter { inset-block: auto; margin-inline-start: 266.3028ch; transition: linear 293.2118s -177.9431ms; }\n",
      "@keyframes 'jes' {\n  81% {\n  min-inline-size: min-content; mask-image: none; page-break-after: verso; image-rendering: auto;\n}\n}\n@font-face {\n  font-feature-settings:normal ;\n}\n@font-face {\n  font-style:oblique ; font-weight:bold ; font-family:tu ; font-feature-settings:normal ; src:local('hojunvig'), url(va) format('runij'), url(uzto) format('mak') ; descent-override:normal ;\n}\n::selection { text-transform: uppercase; border-bottom-left-radius: 2%; word-wrap: break-word; }\n:root { scroll-padding-inline-end: -485.9055ch; scrollbar-width: none; }\n:nth-last-child(even) > :read-only { border-bottom-color: hsl(7871532432883712 55% 30% / 1812146304319488); }\n::before { text-rendering: geometricPrecision; }\n:not([ | wudget ] ::uz:puon ( menulist-text ) + #na ::dinomnec ( 239.1759px ):gifpu) { background-clip: content-box; width: min-content; border-inline-end-color: rgba(-7186919695843328 -5804844770131968 3461670957481984 / 100%); border-top-left-radius: -558.3948ic 311.4474pc; }\n::after { border-collapse: separate; font-variant-ligatures: none; border-left-style: dashed; gap: 77% normal; }\n:invalid > .sofamgeb { border-width: thick thick thick; inset-block-start: 95.919px; grid-template-rows: minmax(474.7142Q , auto) [ owadop ]; transform-box: stroke-box; grid-column-start: bewnupve; }\n::cue { max-inline-size: none; line-height: 10%; }\n:required { grid-row-end: auto; animation-timing-function: step-end; scroll-margin-block-end: -789.265cap; }\n#wejjuus { outline-color: invert; flex-wrap: nowrap; border-block-end-style: inset; background-position: left top; user-select: all; }\n:scope { min-inline-size: 20%; align-items: normal; }\n:nth-last-of-type(odd) { transition-timing-function: cubic-bezier(0 , -6751191836917760 , 0 , -6954339100786688); mask-size: cover; perspective: 232.9995Q; border-inline: thick; }\n:checked { font-optical-sizing: auto; grid-row: -52 putuvu; }\n::backdrop { break-inside: avoid-region; box-sizing: border-box; border-style: outset ridge; margin-top: auto; orphans: -65; }\n:first { will-change: auto; margin-block-start: auto; border-block-start-style: ridge; scroll-margin-right: -572.9773pc; }\n:lang(sw) { padding-right: 516.37px; page-break-inside: avoid; }\n:empty { border-image-source: repeating-radial-gradient(circle , currentcolor, currentcolor 74% -289.2309in , lch(76% none none)); perspective: -264.1185Q; cursor: url(kiv) -750.5719in -102.7787px ew-resize; }\n::cue { font-synthesis: weight style; }\n:nth-last-of-type(even) { font-style: normal; mask-image: paint(hir , stretch); mask-repeat: repeat-y; animation-direction: reverse; }\n",
      "@font-face {\n  font-feature-settings:normal ; font-style:italic ; descent-override:64% ; size-adjust:79% ; font-stretch:ultra-expanded condensed ; src:local(wa) ; font-variation-settings:'oce' -1267190183493632, 'elpunu' 3711308499255296, 'copuk' 4134452791869440 ; line-gap-override:normal ; unicode-range:U+a82e-fc30 ; ascent-override:normal ;\n}\n@font-face {\n  ascent-override:normal ; unicode-range:U+884c-b982 ; line-gap-override:55% ; descent-override:5% ; font-variant:none ; font-stretch:expanded ; font-style:italic ; size-adjust:18% ; font-feature-settings:normal ; font-weight:bold 228 ; font-family:'rocnuma' ; font-variation-settings:normal ;\n}\n:indeterminate { height: max-content; margin-inline: 25.0053ch; scroll-margin-bottom: -81.5203vw; }\n* { scrollbar-gutter: auto; flex: none; border-inline-style: ridge; place-content: normal; }\n",
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
        ':nth-of-type(6n+7) { place-items: normal; }\n'
      );
    });

    it('should honor the minStyleRules setting of the original generator', function () {
      const generator = new CssStylesheetGenerator({
        minStyleRules: 2,
        minAtRules: 0,
      });
      expect(generator).toShrinkTowards(
        ':nth-last-child(1n+1 of #notibaw ::ginbu ( 90% ):gib ( medium ) + bu:gor ::duvtih ( -378.0354Q ):rij ( 56% )) { border-block-start-width: -937.1417vmin; }\n' +
          ':nth-child(odd) { border-left-style: ridge; }\n'
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
          '  background-blend-mode: exclusion;\n' +
          '}\n' +
          '}\n' +
          '@keyframes jom {\n' +
          '  from {\n' +
          '  border-end-start-radius: -267.2763em; grid-template-rows: none;\n' +
          '}\n' +
          '}\n'
      );
    });
  });
});
