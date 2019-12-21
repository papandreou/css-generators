const expect = require('./expect');
const chanceCache = require('chance-generators/lib/chanceCache');

const CssStylesheetGenerator = require('../lib/CssStylesheetGenerator');

describe('CssStylesheetGenerator', () => {
  beforeEach(() => chanceCache.clear());

  it('should generate a CSS stylesheet', () => {
    expect(new CssStylesheetGenerator().take(10)).toEqualSnapshot([
      '@keyframes sidfanu {\n  to {\n  border-end-end-radius: 65%; animation-delay: -887.1769s; page-break-after: recto; transform-box: border-box;\n}\n}\ncite { border-inline-end-style: groove; column-count: auto; inset-inline-start: -136.11ch; clip: auto; mask-origin: fill-box; }\n#lel > , { mask-size: 99%; margin-top: 4%; tab-size: 360.6151em; grid-auto-columns: 95%; }\n::placeholder { scroll-margin-top: -229.167in; animation: step-start; gap: 219.9933pt normal; }\n::first-letter || :hover { border-inline-end-style: groove; right: -149.6883pt; }\n:checked { margin-block-end: -937.3735vw; scroll-snap-align: center; grid-auto-columns: fit-content(789.6547vmin); }\n:nth-last-of-type(odd) { column-width: 140.888em; inset-inline-end: 922.3441in; scroll-snap-align: start; position: relative; left: auto; }\n:nth-last-of-type(even) { caption-side: block-end; letter-spacing: normal; border-end-end-radius: 604.394em; background-size: auto; font-variant-caps: unicase; }\n:hover { clip-path: url(gor); }\n:required { scrollbar-width: thin; background-size: contain; flex: auto; mask-type: luminance; }\n:first-child { background-origin: padding-box; }\n:first { column-span: all; perspective: 275.115in; text-decoration-thickness: from-font; grid-row-start: wus; }\n:required { border-style: ridge; border-top-width: thin; animation-timing-function: ease-in-out; }\n:in-range { animation-duration: -121.327ms; }\n:checked { text-emphasis-position: right under; }\n:left { text-orientation: mixed; border-top-right-radius: 41%; left: auto; border-left-color: rgba(-7620452432216064 , 3508933461278720); }\n::before ::first-line { scroll-margin-top: -408.7326Q; border-block-start: hidden hsla(78.6845grad , 81% , 12% , -3278558025744384) thick; border-block-start-color: hsl(-145.7844deg 82% 35% / -8881960801796096); border-inline: dotted medium; }\n',
      ':first-of-type { transform-origin: left; border-right-color: #8edfc5; }\n:read-write { flex-basis: content; visibility: visible; translate: none; }\n:disabled { image-orientation: flip; border-image: stretch; box-shadow:  -933.8986in ; text-orientation: upright; }\n:dir(rtl) { justify-content: space-around; }\n::slotted(heajiupe | dovki #envewi ::ta ( round ):pufoj ( -581.8568vmin )) { text-decoration: wavy grammar-error from-font; inset-inline: 26%; border-top-color: AppWorkspace; }\n::placeholder { list-style-type: none; text-decoration-line: spelling-error; border-inline-start: medium currentcolor; text-emphasis-position: right under; text-decoration-thickness: from-font; }\n',
      '@keyframes vonlavub {\n  from {\n  column-fill: balance;\n}\n}\n@charset "IBM424" ;\n@charset "IBM277" ;\n::slotted(#higoto ::kimpejeg ( auto ):iwmoj ( 1385377248051200 )) { height: auto; border-inline-start-style: dotted; page-break-before: left; caption-side: block-end; }\n.caznuhijo { transition-duration: 856.6372ms; }\n',
      "@keyframes 'ecelajel' {\n  from {\n  list-style-position: inside; transform: scale3d(7746494559944704 , 1262109857939456 , -7738694970638336);\n}\n}\n, { mask-repeat: no-repeat; flex: none; }\n:disabled { clip-path: none; column-span: all; scroll-snap-type: x proximity; }\n:fullscreen { clip-path: url(agtucbip); scroll-margin-inline-end: -611.4521Q; background-repeat: space; }\n:target { text-emphasis: open triangle rgb(-619730931023872); }\n:not(* | ba:demzef ::cugi ( right ):waumo ( hsla(-1099393134493696 75% 7%) ):wocafig ::waoho:vikwib ( center top )) { border-bottom-color: rgb(-6916220410396672); background: none padding-box local hsla(-636379948122112 43% 65%) none padding-box center center; animation: obututven -6692342744481792 running alternate-reverse 91.2336s step-end; font-family: fantasy, sans-serif, 'de', 'vec', sans-serif; }\n:hover { overflow-x: visible; counter-set: none; bottom: -7.9251cm; padding-block-end: 35%; max-width: fill-available; }\n::before { place-content: last baseline; }\n:not(. anumajzi ::rugvozec:pitkedeb | * . oru ::tade:ves ( left under )) { hyphens: auto; background-color: InfoBackground; background-clip: padding-box; place-content: unsafe flex-start; vertical-align: sub; }\n:read-only { scroll-padding-right: 10%; scroll-padding-right: auto; font-variant-east-asian: jis90; scroll-padding-bottom: 14%; }\n[readonly=un] { table-layout: auto; text-decoration-color: currentcolor; }\n:dir(rtl) { word-break: keep-all; resize: horizontal; flex-wrap: wrap-reverse; border-block: khaki 812.7088in; border-block-start-style: solid; }\n:last-of-type { align-self: stretch; grid-row-end: -77% tos; }\n",
      "@font-face {\n  font-variant:no-common-ligatures full-width simplified ornaments(up) ruby stylistic(lusohocu) lining-nums ordinal styleset(tefa) annotation(lese) slashed-zero swash(ug) tabular-nums discretionary-ligatures no-contextual historical-forms diagonal-fractions ; unicode-range:U+893d-ae00 ; font-style:italic ; src:url(ic) format('monokaivi'), url(me) format('uzlilez'), local(cibfe), url(er) format('zuwsos') ; font-family:leggaog ; font-stretch:expanded ; font-variation-settings:normal ; font-feature-settings:normal ; font-weight:3093084518744064 ;\n}\n@keyframes 'ja' {\n  from {\n  image-orientation: -47.5786turn; scroll-padding-inline-end: 704.363vmax; list-style: outside 'pazo' none; min-width: min-content;\n}\n}\n:valid { text-indent: 35% hanging each-line; min-inline-size: auto; }\n:nth-child(even) { page-break-inside: auto; line-height: -98.1791vh; text-overflow: ellipsis; color: #860acc; tab-size: 899.0413vh; }\n:lang(uk) > ::after { scrollbar-color: dark; background-position: left 49%; direction: ltr; }\n:checked { margin-inline-end: -316.8736cm; justify-self: auto; grid-column-end: auto; margin-inline-start: -199.399em; }\n:read-only { border-inline-end-color: rgba(34%); text-emphasis-position: left under; visibility: visible; mask-composite: add; }\n:default { scroll-padding-bottom: auto; }\n:first-of-type { direction: ltr; animation-iteration-count: infinite; }\n:not([ lam ] ::baporpu:caetzi | holilzab #wo ::zibelre ( none ):gakufki) { border-start-start-radius: 34%; }\n:nth-last-of-type(even) { empty-cells: hide; object-position: center; margin-inline-start: 74%; margin-left: 75%; }\n:nth-last-of-type(even) { border-bottom-right-radius: -432.4482mm; flex-basis: max-content; mask-mode: luminance; }\n:dir(ltr) { word-break: break-all; mask-image: url(de); border-image-repeat: repeat; }\n:dir(ltr) { shape-image-threshold: -7423956478853120; }\n",
      '@font-face {\n  font-style:oblique -839.5325deg ;\n}\n:link { font-style: oblique 994.5111deg; }\n::cue { vertical-align: 731.0143ch; scroll-padding-block-start: -18.5024em; page-break-before: right; }\n:visited { padding-top: 54%; margin-block-start: 28%; scroll-padding-right: -625.9125vw; column-span: all; font-variant-east-asian: normal; }\n:left { border-top-color: #1d65f2; padding-inline-end: 77%; clear: none; margin-inline-end: 15%; }\n::first-line { column-rule-width: medium; margin-top: -261.5391mm; grid-auto-rows: min-content; }\n* { word-spacing: normal; column-rule-width: medium; scroll-padding: auto; }\n:disabled { overflow-x: visible; }\n:root { mask: view-box match-source no-repeat subtract; }\n::first-line ~ :required { transform-box: border-box; border-inline-end-color: hsla(482.2413rad 58% 4% / 14%); scroll-padding-inline-start: 20%; scroll-margin-inline-end: -672.6881vmax; border-inline: rgba(64% , 36%); }\n:first { margin-right: 68%; scroll-padding-block-start: auto; gap: 799.3349pc normal; left: auto; font-weight: bolder; }\n:nth-last-child(4n+9) { justify-items: right; border-spacing: 248.476px; }\n:in-range { content: none; perspective: none; padding-block-end: -666.5385vh; text-decoration-color: #7ed415; justify-items: legacy; }\n::cue(:target) { border-image-outset: -3391713796161536; padding-inline-end: 557.1439vh; border-end-end-radius: -590.9109px; padding-right: 49%; text-decoration: solid overline underline blink line-through from-font currentcolor; }\n:not(. wo ::son ( 25% ):guwse ( inline-axis ):sam ( none ) ::inu:wowwo) { scrollbar-width: thin; }\n:focus { background-repeat: repeat-y; block-size: fit-content; border-block-end-width: thick; scroll-padding-top: 45%; }\n:dir(rtl) + ::after :active ~ ::after ~ ::first-line { text-align-last: end; inset-inline: 182.5509Q; }\n:hover { background-clip: content-box; counter-increment: bojmiewu; }\n',
      '@charset "IBM868" ;\n::first-line { margin-left: -934.3067pc; text-overflow: clip; border-top-right-radius: 155.2639pt; }\n:in-range #lojofgo { border-inline-width: thick; transition-timing-function: ease; list-style-position: inside; }\n::backdrop { justify-self: left; }\n:enabled { column-gap: normal; font-optical-sizing: none; font-variant-east-asian: normal; }\n:target { display:   list-item; grid-row-start: 55% span; padding-right: 55.2955pt; justify-self: stretch; grid-template-columns: repeat(77% , 723.5713cm [ jetikbud ]) [ vibhegvi ]; }\n.kogup { border-style: ridge; border-block-end-style: inset; border-top-color: ThreeDDarkShadow; }\n:nth-of-type(odd) { scroll-padding-inline-end: 888.8195rem; border-end-end-radius: -187.2154in; column-span: all; border-block-style: none; min-height: 471.8092ex; }\n',
      "@font-face {\n  font-weight:bold ; font-feature-settings:normal ;\n}\n@font-face {\n  font-variant:character-variant(perop) swash(haeku) ordinal historical-forms contextual stacked-fractions tabular-nums ornaments(job) oldstyle-nums no-discretionary-ligatures annotation(anja) ruby ; unicode-range:U+8dde-d837 ; font-feature-settings:'ba' ; font-family:'ishoppan' ; src:local('zice'), url(gaczeceh), url(wenoleowa) format('jajan'), local('onkonaj'), url(mirsil) ; font-style:normal ; font-stretch:ultra-expanded ; font-variation-settings:normal ;\n}\n@keyframes janleaw {\n  13% {\n  transition-delay: 381.1205ms; inset-inline-end: -826.5896px; transition-property: asovovhul; object-fit: contain;\n}\n}\n:read-only { background-blend-mode: luminosity; outline-style: auto; backface-visibility: hidden; margin-right: auto; z-index: auto; }\n",
      "@charset \"IBM01148\" ;\n@font-face {\n  src:local('duk'), local(ebuki), local(seg), local('irkis') ;\n}\n:indeterminate { margin-block-start: 607.954px; }\n:not(* [ hibiz | if | = cubcoma ] ::iguza:rohac . jog ::bu ( auto ):mo) { border-right-color: WindowFrame; }\n:target { border-width: 177.1085pc; will-change: nupfozhi; transform-origin: center right -759.3225ex; background: space left 93% bottom -479.5333mm / contain fixed border-box lightslategrey repeat-x; }\n:nth-last-of-type(odd) { tab-size: -9%; text-decoration: wavy none; transition-property: kow; }\n:nth-child(odd) { font-stretch: extra-condensed; flex-grow: -8915647576670208; }\n:disabled { page-break-before: auto; image-orientation: -837.9076turn; border-right-color: rgb(90%); word-wrap: break-word; }\n* { text-decoration-line: line-through blink overline; direction: rtl; overflow-wrap: break-word; }\n:nth-child(odd) { text-decoration-color: #cc241c; text-align: center; border-top-left-radius: 15%; text-align: end; }\n:read-write { scroll-padding-right: auto; padding-block-start: 68%; }\n:only-child + :read-only { border-inline-start: WindowFrame; text-combine-upright: all; animation-fill-mode: both; scroll-padding-inline: auto; }\n:visited ~ :first-of-type { pointer-events: all; border-image-source: none; }\n:visited { scroll-padding-inline-end: 26%; align-items: normal; clear: none; }\n",
      "@keyframes 'hebit' {\n  12% {\n  caption-side: inline-start;\n}\n}\n@font-face {\n  font-variant:normal ; font-weight:7876408198037504 ; font-variation-settings:normal ; unicode-range:U+b01? ; src:url(conkacav) format('vultanlac'), url(lizerna) ;\n}\n:last-child { transform-style: flat; border-block-end-width: thin; shape-margin: 54.0482vh; scroll-padding-inline: -558.4608vmax; border-block: rgba(6630277120000000 / 15%) -135.3304rem outset; }\n::first-letter { shape-outside: padding-box polygon(788.1984rem 491.674ex, -937.7319vmin 72%, 125.5006vmax -53.5802px); vertical-align: sub; border-inline-end-width: 737.2464cm; }\n:scope { scrollbar-width: thin; }\n::after { rotate: none; max-height: fit-content; border-bottom-style: dotted; }\n.upanibsa { overflow-y: hidden; font-variant-numeric: tabular-nums slashed-zero; column-width: 180.5279vh; font-variant-position: normal; }\n::slotted(#co ::unjor:zubpocha ( scroll-position )) { image-rendering: crisp-edges; }\n:only-child { padding-inline: 119.2974vh; align-self: center; }\n"
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
      '::placeholder { perspective-origin: top -688.011cm left 732.3523mm; }\n',
      ':read-write { animation-delay: -887.1769s; }\n',
      '::marker { -webkit-line-clamp: none; }\n',
      ':only-child { mask-origin: stroke-box; }\n',
      '.ted { clip: auto; }\n',
      ':lang(bi) { mask-size: 99%; }\n',
      '#valbuunu { column-fill: auto; }\n',
      ':read-only { gap: 219.9933pt normal; }\n',
      ':hover { border-inline-end-style: groove; }\n',
      ':in-range { border-left-style: double; }\n'
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
