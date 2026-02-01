module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    // Tipo do commit é obrigatório
    'type-enum': [
      2,
      'always',
      [
        'feat',     // Nova funcionalidade
        'fix',      // Correção de bug
        'docs',     // Documentação
        'style',    // Formatação (não afeta código)
        'refactor', // Refatoração de código
        'perf',     // Melhorias de performance
        'test',     // Adição/correção de testes
        'build',    // Mudanças no build/dependências
        'ci',       // Mudanças em CI/CD
        'chore',    // Tarefas gerais
        'revert',   // Reverter commits
      ],
    ],
    // Tipo em minúsculo
    'type-case': [2, 'always', 'lower-case'],
    // Tipo não pode estar vazio
    'type-empty': [2, 'never'],
    // Escopo em minúsculo
    'scope-case': [2, 'always', 'lower-case'],
    // Assunto não pode estar vazio
    'subject-empty': [2, 'never'],
    // Assunto não termina com ponto
    'subject-full-stop': [2, 'never', '.'],
    // Header máximo de 100 caracteres
    'header-max-length': [2, 'always', 100],
  },
};
