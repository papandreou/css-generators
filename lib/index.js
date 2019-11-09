const CssSyntaxGenerator = require('./CssSyntaxGenerator');
const CssNamedSyntaxGenerator = require('./CssNamedSyntaxGenerator');
const CssSelectorGenerator = require('./CssSelectorGenerator');
const CssDeclarationGenerator = require('./CssDeclarationGenerator');
const createGeneratorFacade = require('chance-generators/lib/createGeneratorFacade');

module.exports = {
  syntax: createGeneratorFacade(CssSyntaxGenerator),
  namedSyntax: createGeneratorFacade(CssNamedSyntaxGenerator),
  selector: createGeneratorFacade(CssSelectorGenerator),
  declaration: createGeneratorFacade(CssDeclarationGenerator)
};
