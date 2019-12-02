const expect = require('unexpected')
  .clone()
  .use(require('unexpected-snapshot'))
  .use(require('magicpen-prism'));
const chanceCache = require('chance-generators/lib/chanceCache');

const CssStylesheetGenerator = require('../lib/CssStylesheetGenerator');

describe('CssStylesheetGenerator', () => {
  beforeEach(() => chanceCache.clear());

  it('should generate a CSS stylesheet', () => {
    expect(new CssStylesheetGenerator().take(10), 'to equal snapshot', [
      '@keyframes sidfanu {\n  to {\n  border-end-end-radius: 65%; animation-delay: -887.1769s; padding-top: 94%; border-left-width: -636.3501vw;\n}\n}\n:active { column-count: auto; inset-inline-end: -136.11ch; clear: both; mask-mode: luminance; }\n#lel > , { mask-position: bottom; margin-right: 4%; shape-margin: 68%; border-inline-end: thick InfoBackground; }\n:valid { column-count: -81%; border-spacing: 368.4661ex; }\n:out-of-range { mask-mode: luminance; }\n:visited { border-inline-color: Highlight; }\n:disabled { orphans: 51%; }\n:first { inset-inline: 93.4206px; border-inline-end-style: none; vertical-align: 78%; }\n:invalid { font-kerning: none; text-underline-position: left under; margin-block: 41.6685ch; translate: none; scroll-padding-top: auto; }\n:right { justify-self: unsafe right; break-inside: avoid-column; }\n:not(#fab ::mahbu ( space-evenly ):sawtaevo ( strict ) . kos ::inla ( isolate-override ):respawic ( none, none, none )) { min-block-size: max-content; column-rule: hidden rgba(41% , 20%); border-spacing: 885.7072cm -420.4971rem; border-image-source: repeating-radial-gradient(closest-side at -626.8599pc 32% , rgb(-2588707953573888) -455.7355ex -998.9593vmax, hsl(-8881960801796096 , 16% , 51% , -273278849515520) -461.1754mm, rgba(-5975537289789440) 71%, hsla(8498870480797696 25% 97%) 424.5412in, rgba(8966495543492608) 50% , hsla(-3987550834262016 34% 91% / 3255300119330816)); isolation: auto; }\n:invalid { list-style: outside; border: ridge thick hsl(966.8463rad 40% 54% / 5374507925635072); scroll-padding-inline-end: auto; column-rule-style: double; border-inline-end-width: medium; }\n#kofwihep { border-inline-style: outset; }\n:read-only { font: menu; transform: translateX(34%); }\n:right { border-left-style: outset; }\n:not(* #azpig ::uwivoke:ewumovecu * | * #opbed ::viuga:pe ( space )) { object-fit: none; scroll-snap-align: end; }\n:optional { margin-block: 9%; inset: 64%; }\n',
      '@font-face {\n  font-style:italic ; font-weight:bold ; unicode-range:U+a525 ; font-stretch:ultra-expanded ; font-feature-settings:normal ; font-variant:normal ;\n}\n:required { break-inside: avoid-page; animation-duration: 537.1081s; backface-visibility: visible; }\n::slotted(| lobohiunu:ke ( currentcolor ) ::fe:erucaf ( 99% )) { border-color: hsl(6798148865359872 , 32% , 74% , 13%); padding-block-start: 36%; }\n:nth-child(3n+9) { border-top-width: thick; mask-mode: match-source; border-block: thick hidden; object-fit: fill; padding-block-start: 591.5854ch; }\n::cue(:first-of-type) { flex-shrink: 1420703647662080; }\n, { margin-bottom: auto; animation-name: none, none; left: auto; }\n:enabled { margin-left: auto; animation-iteration-count: infinite; animation-play-state: running; scroll-padding-block-start: auto; filter: drop-shadow(44.4865vmax hsl(245.781grad 8% 85%)); }\n',
      ':indeterminate { padding-block-end: 13%; page-break-after: auto; white-space: pre-line; }\n:left { column-rule-width: 590.3724mm; box-sizing: content-box; font-weight: lighter; border: 925.2969cm; }\n::after { padding-block: 41%; background-color: rgba(-6189080085790720); border-top-right-radius: 98.4533cm; }\n:read-write { order: 87%; }\n:empty { transition-duration: 33.3925s; opacity: 979155629899776; font-variant-position: sub; page-break-inside: auto; }\n#las { all: inherit; }\n, + #ku { padding-bottom: -51.6523ch; border-block-end-color: currentcolor; hanging-punctuation: force-end first; object-fit: contain; background-attachment: fixed; }\n::marker { text-decoration-line: none; border-width: thin; animation: obututven -6692342744481792 running alternate-reverse 91.2336s step-end; font: small-caption; }\n::placeholder { text-indent: -570.8218cm  ; animation-play-state: running; mask-position: right -229.2068vmax bottom -318.7509vmax; border-width: thin; }\n:last-of-type { padding: 35%; }\n:only-child { text-combine-upright: none; perspective: none; scroll-margin-inline-end: 935.1612in; line-break: auto; font-variant-caps: unicase; }\n',
      "@charset \"windows-1258\" ;\n@keyframes ho {\n  to {\n  tab-size: 123.7334vmax; border-style: solid;\n}\n}\n:out-of-range { place-content: center; text-emphasis-style: filled circle; color: AppWorkspace; font-family: dehorusi; }\n:only-child { grid-area: auto / rozu; }\n:target { scroll-margin-block-start: -773.0708cm; top: 98%; background-color: InfoBackground; background-clip: padding-box; }\n:right { letter-spacing: normal; padding-inline: 937.3039em; overflow-y: scroll; scroll-padding-inline-end: 10%; scroll-padding-left: auto; }\n:in-range { border-right-style: none; font-language-override: 'famhuluj'; text-decoration: blink overline underline solid hsla(1052117422833664 , 71% , 42%); text-indent: -492.6357ch  ; }\n:nth-last-child(8n+2 of:vigmelcu ( normal ) ::uzbewru ( break-word ):vuc > | tonis #uzikdo ::go:hice) { border-width: thick; grid-auto-columns: fit-content(72.1927in); column-gap: normal; scroll-margin-top: 205.5638rem; box-sizing: content-box; }\n::first-letter ~ [colspan=monokaivi] { border-image-width: -247.0733vh; }\n:valid { word-break: break-word; border-image-outset: 188.2614vh; flex-wrap: wrap; }\n::selection { scroll-padding-right: 6%; grid-row: auto; border-bottom-width: thin; all: initial; block-size: auto; }\n:read-only { justify-content: safe right; list-style: none outside; flex-shrink: -4551371944624128; border-top: thick hsl(-4888336636313600 , 88% , 67% , 4%); filter: none; }\n.piemeamu + :nth-child(9n+8) { border-bottom-width: thin; animation-fill-mode: forwards; quotes: 'wuffob' 'simikis'; }\n:first-of-type { inset-block-end: 79%; text-orientation: upright; color: #860acc; }\n::backdrop { transition-delay: 592.9436ms; grid-auto-rows: fit-content(49%); scale: none; background-position: left 49%; }\n:first-of-type { border-left-style: groove; margin-inline: -316.8736cm; }\n:not(. fid ::gomu ( start ):fofbuke ( hidden ) [ | ijpe ] ::do ( 2304048594157568 ):idu ( -994.81in )) { scroll-margin-left: -830.966vh; margin-top: 972.514ex; justify-items: first baseline; border-start-start-radius: 76%; flex-direction: column; }\n:lang(rm) { background-image: none; border-image: paint(pomduli); border-top: medium; flex-shrink: -5723464715468800; }\n.efki { border-start-end-radius: 34%; }\n",
      '@keyframes picronzik {\n  to {\n  flex-wrap: nowrap;\n}\n}\n@charset "ISO_10367-box" ;\n::cue(:nth-of-type(even)) { empty-cells: show; word-break: break-all; }\n:nth-of-type(odd) { align-items: normal; border-right-width: -269.2864ex; }\n:last-of-type { scroll-snap-stop: normal; }\n, { scroll-margin-left: -653.2528ch; text-emphasis-color: currentcolor; }\n[draggable=moudu] { margin-block-start: auto; text-rendering: geometricPrecision; }\nspan { border-top-width: thin; border-inline-end: lightyellow double medium; grid-row-start: gazwipo; border-top: thick dotted; border-block-style: double; }\n:left { touch-action: none; }\n:first-child { margin-right: -261.5391mm; grid-auto-flow: dense; background-origin: padding-box; }\n::slotted(. dedbodnin ::duesudu:gajossav ( 655.8818vh )) { border-left: 629.1495ex groove lightseagreen; text-justify: inter-character; column-rule-color: InfoText; font-feature-settings: \'noiljis\'; }\n:left { border-start-end-radius: 799.1492mm; float: none; letter-spacing: normal; }\n',
      '@charset "ISO-8859-9-Windows-Latin-5" ;\n@font-face {\n  font-style:oblique 240.1455grad ; unicode-range:U+8890 ; font-feature-settings:\'zehosbe\' off ; font-stretch:extra-expanded ;\n}\n@charset "IBM00858" ;\n:root { border-block-end-width: thick; justify-items: normal; }\n:focus { grid-auto-rows: max-content; font-language-override: \'figwobon\'; padding-block: 54%; padding-left: 198.0587mm; scroll-padding-bottom: auto; }\n::placeholder { counter-set: none; border-right-width: thin; font-variant-caps: petite-caps; caret-color: #274209; text-orientation: upright; }\n:left > :nth-of-type(1n+8) + ::before { touch-action: auto; margin: auto; padding-block: 93%; }\n.fonsaco { transform: rotateZ(0); }\n',
      "@font-face {\n  font-style:normal ; src:url(mebket) format('kak'), url(oweki) format('senuha'), local('bu') ; font-variation-settings:normal ;\n}\n:fullscreen { margin-inline: 264.5286ex; all: initial; orphans: 3%; border-inline-width: thick; }\n::placeholder { border-image:  30% / 499.921pc stretch; scroll-margin-inline-start: 796.1086mm; border-left-color: hsla(-926.9007grad 47% 84% / 6%); }\n:enabled { padding-inline-start: 55.2955pt; justify-content: space-around; font-optical-sizing: auto; list-style-position: outside; }\n",
      ':first-of-type || ::backdrop { transition: 287.9991s none step-start 957.8629ms; }\n::after { tab-size: -184.031ch; line-height: normal; border-top-style: dotted; border-inline-start-style: groove; }\n:left { margin-top: -321.4575vh; }\n',
      "@keyframes 'wahus' {\n  to {\n  scroll-margin-left: 660.4398vw; font-language-override: 'gikubo'; border-block-color: darkolivegreen; scroll-snap-align: none; border-bottom-color: rgba(1495943698448384 , 3673966904344576);\n}\n}\n@keyframes 'keglenju' {\n  to {\n  font-stretch: extra-expanded; line-height: -1150642269716480;\n}\n}\n::backdrop { border-right-color: WindowText; rotate: 1184926300897280 -25.1376turn; }\n::cue { border-inline-end-color: hsla(224417208598528 27% 74% / 63%); font-size: x-small; border-color: saddlebrown; font-variant-alternates: character-variant(vebuwdun); }\n:last-of-type { background-position: center bottom; hyphens: auto; }\n:required { border-block-start: -472.6324vmin; box-decoration-break: clone; }\n",
      "@font-face {\n  font-variation-settings:normal ; font-style:oblique 37.8354grad ; font-variant:normal ; src:url(gaczeceh), url(wenoleowa) format('jajan') ; unicode-range:U+d76e-f9c4 ; font-stretch:semi-expanded ;\n}\n@font-face {\n  font-variation-settings:normal ; font-stretch:extra-expanded ; font-variant:swash(ori) ruby stylistic(ciiso) no-discretionary-ligatures tabular-nums slashed-zero unicase no-common-ligatures proportional-width annotation(ezepofubu) no-historical-ligatures lining-nums ; font-family:'ozasiwba' ;\n}\n:read-only { color: rgba(-6930463083986944 , 8003193564823552); scroll-margin-bottom: -51.5716vh; shape-outside: none; scroll-padding-top: auto; }\n:first-child { scroll-padding-inline: 300.3347px; flex-basis: content; list-style-position: inside; }\n:last-child { text-decoration-color: lightslategray; }\n:first-of-type { page-break-after: avoid; background-origin: padding-box; column-rule: groove hsl(40.3362turn , 43% , 62% , -1486078276009984) -76.1143vmin; }\n::slotted(#reotabeb ::bi ( 2296934249267200 ):ukdijro ( -522.4457ch )) { grid-column-start: eh; }\n:read-write { margin-left: -445.4687ch; text-orientation: sideways; }\n#ledez { scroll-margin-inline: 572.6901ex; border-block-style: double; font-variant: jis78 ruby annotation(ge) character-variant(gu) stacked-fractions ornaments(acufuonu) tabular-nums historical-ligatures swash(po) full-width no-common-ligatures oldstyle-nums contextual styleset(nepzisu) historical-forms slashed-zero ordinal no-discretionary-ligatures; shape-margin: -85.1358vmin; font-feature-settings: normal; }\n:empty { grid-row-start: span vuwahhe -99%; }\n:disabled { padding-top: -8.2485pt; border: thick rgb(6326781367812096) solid; text-decoration-color: hsla(813.0275turn , 57% , 35% , 54%); margin: auto; }\n:empty { text-combine-upright: all; scroll-margin-inline: 736.3216Q; border-top-color: currentcolor; border-image-slice: fill 6071092410056704; }\n:dir(rtl) { overflow: visible; mask-position: top 88% right 47%; animation-fill-mode: both; scroll-padding-block-end: auto; border-bottom-right-radius: 33%; }\n:default { text-justify: auto; -webkit-line-clamp: 11%; scroll-padding-inline-start: 26%; align-items: normal; }\n"
    ]);
  });
});
