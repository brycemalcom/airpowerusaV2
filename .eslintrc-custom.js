// Custom ESLint rules to catch HTML entity encoding issues
module.exports = {
  rules: {
    'no-html-entities': {
      create: function(context) {
        return {
          Literal(node) {
            if (typeof node.value === 'string') {
              const htmlEntities = [
                { entity: '&apos;', char: "'" },
                { entity: '&#x27;', char: "'" },
                { entity: '&#39;', char: "'" },
                { entity: '&quot;', char: '"' },
                { entity: '&#x22;', char: '"' },
                { entity: '&#34;', char: '"' }
              ];
              
              htmlEntities.forEach(({ entity, char }) => {
                if (node.value.includes(entity)) {
                  context.report({
                    node,
                    message: `Avoid HTML entity "${entity}". Use "${char}" instead to prevent display issues.`,
                    fix: function(fixer) {
                      const newValue = node.value.replace(new RegExp(entity, 'g'), char);
                      return fixer.replaceText(node, `"${newValue}"`);
                    }
                  });
                }
              });
            }
          }
        };
      }
    }
  }
};
