export const concatDocs = {
  name: 'concat',
  category: 'Matrix',
  syntax: [
    'concat(A, B, C, ...)',
    'concat(A, B, C, ..., dim)',
    'concat(str1, str2, ...)'
  ],
  description: 'Concatenate matrices or strings. By default, matrices are concatenated by the last dimension. The dimension on which to concatenate matrices can be provided as the last argument. Strings are joined in order and do not accept a dimension argument.',
  examples: [
    'A = [1, 2; 5, 6]',
    'B = [3, 4; 7, 8]',
    'concat(A, B)',
    'concat(A, B, 1)',
    'concat(A, B, 2)',
    'concat("hello", " ", "world")'
  ],
  seealso: [
    'det', 'diag', 'identity', 'inv', 'ones', 'range', 'size', 'squeeze', 'subset', 'trace', 'transpose', 'zeros'
  ]
}
