const expect = require('./expect');
const chanceCache = require('chance-generators/lib/chanceCache');

const CssStylesheetGenerator = require('../lib/CssStylesheetGenerator');

describe('CssStylesheetGenerator', () => {
  beforeEach(() => chanceCache.clear());

  it('should generate a CSS stylesheet', () => {
    expect(new CssStylesheetGenerator().take(10)).toEqualSnapshot([
      "@keyframes 'naci' {\n  from {\n  background-color: teal;\n}\n}\ncite { border-inline-start-style: groove; align-items: stretch; column-rule: dashed solid ridge hidden thin thick medium; grid-template-areas: none; transform-style: preserve-3d; }\n:nth-last-child(even) { border-top-left-radius: 366.5271cm 84%; }\n#lef { place-items: stretch; margin-inline-end: 939.1693vmax; rotate: -209.6995turn; text-transform: lowercase; }\n::first-line { mask-border-repeat: stretch; }\n#ejjitluh { margin-inline: 604.394em; block-size: fit-content(20%); column-rule-color: rgb(71% 73% 79% 77% 61%); text-transform: uppercase; }\n::first-letter ~ ::backdrop { display: run-in; outline-style: dotted double dashed; vertical-align: bottom; }\n:scope { border-top-style: dotted; backdrop-filter: blur(-596.5616ch); text-decoration-thickness: -371.2881px; }\n:link { border-image:  60%; overscroll-behavior-block: contain; text-underline-offset: -408.7326Q; border-block-start-style: inset; border-inline-start-width: thick; }\n:first-child { text-decoration-thickness: from-font; }\n::first-letter { border-top-color: hsla(-986.0958deg , 53% , 48%); overscroll-behavior: contain; }\n:first-of-type { border-inline-width: medium; overscroll-behavior-y: none; background-position: -5.503rem; column-rule-width: thick thin; white-space: pre-wrap; }\n* { color: ButtonShadow; }\n:not(aji | * . femwaser ::dawmem ( 351.3803mm ):hepazpig:je ( invert ) ::fow ( normal ):fe ( bel, erosi, 'hi', sans-serif )) > ::first-letter { scroll-margin-block: 5.2742Q; mask-border-source: repeating-linear-gradient(darkgreen 766.9881mm 96% 57%, currentcolor, currentcolor , #efa7d6 9% 342.287vw); float: left; }\n:link { counter-set: none; overscroll-behavior-inline: contain; padding-block: 29%; scroll-margin-inline-start: 620.2268ex; shape-outside: margin-box inset(80%); }\n::cue-region(.dinbel) { margin-inline: 181.6665vmax -925.3037ch; }\n::after { margin-block-start: 655.738vh; clip: rect(-85.4697cm , -896.6366em , -177.2922px , 274.8598em); }\n",
      "@keyframes 'mek' {\n  from {\n  border-block-color: indianred InactiveBorder; border-top-width: -634.268Q; top: 909.7306pt; page-break-before: right; grid-column-end: 13 ;\n}\n}\n@font-face {\n  font-family:'pul' ; unicode-range:U+6604-c4d9 ;\n}\n#bo { justify-self: stretch; margin-bottom: 16%; max-width: auto; offset-distance: 171.5512Q; transform: skew(0); }\n:visited { transform: perspective(-586.6313em); clip-path: url(bavec); orphans: -23; scroll-padding-left: -478.611in; isolation: auto; }\n:read-write { touch-action: manipulation; page-break-after: avoid; unicode-bidi: embed; border-inline-start: cornsilk double; }\n",
      "@charset \"IBM297\" ;\n@keyframes pukju {\n  from {\n  border-block-end-color: MenuText; inset-block-end: 8%; grid-template: none; mask-type: luminance; overflow: hidden;\n}\n}\n@keyframes 'puc' {\n  to {\n  flex-shrink: -6898307427205120; unicode-bidi: normal; pointer-events: all;\n}\n}\n::before { border-block-style: dotted; font-variant-alternates: swash(itowsoj) stylistic(ze) ornaments(ihmi) styleset(sadod) annotation(vigmelcu) character-variant(aburah) historical-forms; backface-visibility: hidden; word-wrap: break-word; box-sizing: border-box; }\n::selection { border-inline-width: medium; grid-template-columns: subgrid [ uzikdo ]; color: rgba(-2641771330797568 -4874790854721536 1507014572244992 -4216487392837632); }\n:fullscreen { word-break: break-all; animation-name: none, none, cuw; }\n::marker { mask-clip: no-clip, view-box, no-clip, fill-box; row-gap: 15%; font-variation-settings: 'evicib' -6595933756194816, 'cu' 5636723467878400, 'uwizozeje' -890917628149760, 'og' -5274117821431808; border-top-color: mediumseagreen; }\n:fullscreen { animation-duration: -3.6696s; }\n:last-of-type { list-style-image: url(unaakipa); grid-area: buj 18 span / limawjo; list-style-position: outside; transform-style: preserve-3d; hanging-punctuation: force-end last first; }\n:only-child { display:  inline list-item; border-image-source: none; }\n:read-write { border-inline-start-color: hsla(946.2208deg , 19% , 4% , -2745048181506048); }\n.dil || :fullscreen { font-family: fantasy; backdrop-filter: none; inset-block-end: auto; line-break: anywhere; text-rendering: optimizeSpeed; }\ndt { scroll-margin-inline: 496.5194px; border-inline-start-style: double; text-shadow: none; min-block-size: 46%; padding-inline: -704.5218ex 374.331vmin; }\n::backdrop { margin-block: -105.1753mm; margin-block: -461.5136vh; font-variation-settings: normal; mask-border-mode: luminance; }\n:checked { margin-block-end: -314.1463px; inline-size: 65%; }\n:left { mask-composite: intersect; }\n:nth-last-child(even of [ oga = 'efju' ] ::uzamiz:pavuwrin ( rgba(3800181975810048 -1343217660329984 -5413201948704768 , -6938482966528000) ) + * [ ufe ] ::sisilaw:osofa ( railed )) { background-attachment: local; scroll-padding-block-start: -672.6881vmax; border-inline-style: dotted; }\n:only-of-type { float: right; mask-image: url(luljis); grid-column-start: -22 ; margin-block: -541.9493Q 43%; transform: none; }\n:right { border-image: round; margin-block-end: auto; scroll-behavior: smooth; place-content: stretch; }\n#wol { place-items: normal baseline; mask-type: luminance; scroll-margin-block-start: -700.1652pt; border-top-color: orangered; offset-distance: 54%; }\n:required { flex-flow: row-reverse wrap; height: 229.9005em; text-justify: inter-word; }\n:left { break-after: auto; table-layout: fixed; border-block-start-color: steelblue; padding-block: 152.5767mm 42%; }\n",
      "::first-line + ::first-line { border-bottom-style: dotted; border-inline-style: hidden; text-rendering: optimizeSpeed; }\n:first { mask-origin: fill-box; background-clip: padding-box; }\n:valid { mask-type: luminance; }\n:indeterminate { shape-margin: 47%; flex-flow: wrap; border-top: hidden; }\n:nth-last-of-type(1n+10) || :first { mask-clip: no-clip, stroke-box; border-inline-start: currentcolor -400.8082px dashed; grid-auto-flow: dense; flex-grow: -572284406333440; }\n:active { font-variation-settings: normal; }\n:nth-last-child(8n+8) { list-style-position: outside; inset-block-end: 77%; border-inline: 506.4925mm; }\n:empty { offset-path: M 96,-69 L 43,74 Q -18,-95 Q -56,-49 M -61,35 Q -97,19 M -32,60 Q -65,78 Q 11,-53 L -81,61 M 98,45 Q 71,62 L 93,-21 L 34,-72 M -19,-42 M 80,-83 M 27,-83; page-break-after: always; animation-fill-mode: none; mask-composite: subtract; text-decoration-style: wavy; }\n:only-of-type { break-before: column; font-family: zinu, favpuwaf, 'rop'; }\n:indeterminate { border-image: round paint(dunjamol , -978.0084ms); border-end-start-radius: 88%; }\n:right { mask-size: cover; border-inline-end-width: thick; }\n:indeterminate { list-style: none url(cejijwoh); max-height: min-content; inset: 94% -32.4901ex; clear: none; }\n:disabled { scroll-padding-inline-end: auto; isolation: isolate; border-image-width: 4880320440565760; }\n:last-child { border: lavender -844.4694vh; -webkit-line-clamp: -46; }\nnextid { font: icon; }\n",
      "@keyframes 'gamiso' {\n  to {\n  scroll-padding-top: 65%; border-style: outset outset none; padding: 100%; border-inline-start-color: hsla(4161752468029440 19% 11% / 75%);\n}\n}\n@keyframes taplen {\n  53% {\n  padding-inline-start: -369.4193vmax; margin-bottom: 66%; counter-reset: none;\n}\n}\n@charset \"IBM00858\" ;\n.ubagij { text-underline-position: left; background-clip: border-box; animation-timing-function: ease-out; clip: auto; resize: none; }\n:first-of-type { page-break-before: recto; align-content: normal; flex-wrap: nowrap; }\n::before { border-top-right-radius: -964.2522vmin 43%; border-block-start-width: medium; border-start-start-radius: 79% 177.1085pc; width: fit-content(47%); }\n::first-letter { border-inline-width: -196.8395vw; scroll-padding-inline-start: 51%; border-bottom-right-radius: -231.8188ex; animation-timing-function: steps(60); mix-blend-mode: overlay; }\n:link { writing-mode: vertical-lr; break-inside: avoid; place-self: baseline normal; }\n:default { animation-play-state: paused; shape-image-threshold: -1960511142887424; caret-color: auto; }\n:last-of-type { transition-delay: 724.2553ms; }\n:visited { text-underline-position: from-font; border-block-width: thin; align-content: first baseline; border-block-color: rgb(8853632480968704 6326781367812096 -7899007024103424) hsla(-304.3816rad , 54% , 87%); }\n:right { scroll-margin-block-start: 316.9037ex; scroll-padding-top: auto; border-inline-color: currentcolor AppWorkspace; }\n:read-write { border-inline-end: ActiveBorder dotted 112.3635vmax; }\n:scope { align-items: normal; border-block-style: outset; }\n:only-of-type { font-variation-settings: 'dahbikeje' -5773663005573120; text-underline-position: right; }\n:read-only { transform-origin: 71%; }\n:nth-last-of-type(even) { border: MenuText; grid-row-start: -23 ; background-position: center top; grid-row-start: malfitvef; }\n::backdrop { overflow-inline: hidden; border-color: currentcolor ActiveBorder; padding-right: 42%; scroll-snap-type: both mandatory; }\n::slotted([ livni = 'fol' s ] ::golbador:fa) { mask-clip: view-box, fill-box; all: inherit; overflow-inline: hidden; inset-block: 29% 76%; }\n::before { text-emphasis-style: none; inset-block: -515.91cm auto; border-image-outset: -35.2872Q; border-right-width: thin; }\n:target { direction: ltr; margin-block-end: auto; border-block-color: rgb(-6616404899921920 8601269702754304 1216707754459136); overflow-y: scroll; scroll-padding: auto; }\n:out-of-range || ::placeholder { padding: 60%; }\n",
      "@font-face {\n  unicode-range:U+1482 ; font-variation-settings:normal ; font-stretch:semi-condensed extra-expanded ; font-weight:220 ; font-feature-settings:'vafiwo' ;\n}\n@keyframes mo {\n  from {\n  height: 921.5611rem; gap: 74%; quotes: 'emi' 'wesu'; mask-repeat: space; color: #e990a4;\n}\n}\n@charset \"ISO-10646-J-1\" ;\n:right { rotate: z -524.9134grad; }\n::selection { font-weight: lighter; }\n:left { border-block-end-width: thin; line-height: 325.2426px; }\n, { font-synthesis: none; font-variant-caps: small-caps; orphans: -35; mask-mode: luminance; }\n:indeterminate { grid-template-columns: none; text-decoration: double; }\n:lang(om) { border-image-repeat: repeat; box-shadow:  -664.7616mm -926.6572Q 472.8041mm inset; inline-size: fit-content(59%); shape-margin: 54%; border-bottom: 62.3391ex; }\n::marker { offset-anchor: auto; }\n:lang(ur) { counter-increment: vaul -100; }\n.tusigpij { margin-block: -734.5707in; border-image-outset: -5370930788302848; padding-top: 97%; border-left: rgba(97% 17% 25% 69% 66% / -8691659160158208); }\n:left { scroll-padding-block-end: 3%; border-bottom: #f0dd35 inset medium; border-block-start-style: hidden; mask-type: luminance; }\n::selection { word-wrap: break-word; scrollbar-color: auto; column-gap: 40%; }\n:scope { outline-style: auto; text-emphasis-color: CaptionText; tab-size: -759.5819in; margin-inline-end: -350.8284Q; font-feature-settings: 'liselig'; }\n[required=vozim] { margin-inline: auto auto; text-justify: auto; }\n",
      '@charset "IBM-Symbols" ;\n:last-of-type { position: absolute; perspective: 911.0474pt; }\n.matawhow { background-image: image-set(paint(kut , 435.2716rem 98%) 823.1741dpcm); list-style-position: inside; }\n:read-only { scroll-margin-block-end: -630.8298rem; }\n',
      "@keyframes paamero {\n  to {\n  text-decoration-color: rgba(61% 17% 41% 36% / 56%); border-top-style: ridge; clip-path: none;\n}\n}\n::backdrop { outline-style: groove solid double hidden; page-break-after: verso; inline-size: min-content; border-inline-start: medium; }\n:nth-child(4n+7 of [ vazduso * = 'ina' ] ::ecocep:rehka ||:raz ::mak ( hsl(854.3557grad , 12% , 98%) rgb(77% 54% 24% 85% 67% , 9%) ):zarbahe ( -824.7145mm 107.6045pt )) { font-variant-alternates: normal; transform-box: stroke-box; line-height: normal; scrollbar-width: thin; word-wrap: break-word; }\n:hover { text-underline-offset: 79.4652vmax; mix-blend-mode: difference; margin-block: auto -576.035in; }\n",
      "@font-face {\n  src:local(salkunfo), local(oku) ;\n}\n@charset \"ISO-Unicode-IBM-1276\" ;\n@font-face {\n  font-family:'bebsojla' ; font-feature-settings:normal ; font-variation-settings:'hacajec' 3461670957481984, 'poz' 5655985590894592, 'kaviv' 4040944345153536, 'miplemit' 4208422513803264 ; font-stretch:semi-condensed ; font-style:normal ; src:local('tuacbij'), url(nivda), url(honujmul) ; font-variant:ordinal oldstyle-nums historical-forms ; font-weight:bold ; unicode-range:U+7??? ;\n}\n, { outline: 913.0028pt; page-break-after: avoid; height: -300.5936vw; rotate: -290.3173deg y; }\n:nth-child(odd) { grid-auto-columns: min-content; text-emphasis: #61c6cb; }\n",
      "@font-face {\n  font-variation-settings:'dolosi' 2098672548446208 ; unicode-range:U+1c5d ; font-style:italic ;\n}\n@charset \"greek7\" ;\n:read-only { text-decoration-line: none; word-wrap: normal; scroll-margin-right: 722.74vmin; }\n::backdrop { margin-inline: 22%; hanging-punctuation: last force-end first; border-inline-start: dotted; margin-bottom: -670.3704cm; border-color: red rgba(84% 34% 74%) #972106; }\n:root { column-rule-style: hidden none double; text-align-last: center; border-inline-end: inset; page-break-inside: avoid; }\n::slotted(: wupgoj ( left ) ::gozerza ( repeat fill 39% / -666.2298mm ):pipcan) { mask-border: round none -7619040671432704 3520295415578624 / 52%; font-optical-sizing: auto; }\n:first-of-type { border-top-style: dashed; background-origin: content-box; quotes: 'tatoaf' 'uvlonsef'; }\n",
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
      ':invalid { list-style-position: outside; }\n',
      ':enabled { border-top-right-radius: 236.772em; }\n',
      '::selection { background: content-box none center content-box content-box rgba(3% 97% 85% , 90%) padding-box repeat-x; }\n',
      ':link { cursor: url(jitluh) -448.0017em 604.394em none; }\n',
      ':target { column-rule-color: rgb(71% 73% 79% 77% 61%); }\n',
      ':optional { shape-margin: 33%; }\n',
      ':focus { cursor: url(tevnedwus) -528.0302vh -12.4088ch n-resize; }\n',
      '.gatih { letter-spacing: -721.3371ex; }\n',
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
        'cite { grid-template-areas: none; }\n' +
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
