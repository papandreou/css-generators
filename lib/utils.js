class InvalidSyntaxError extends Error {
  constructor(node) {
    super(
      `Don't know how to generate ${JSON.stringify(node, undefined, '  ')}`
    );
  }
}

module.exports = { InvalidSyntaxError };
