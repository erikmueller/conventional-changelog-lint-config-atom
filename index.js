module.exports = {
  rules: {
  	'body-leading-blank': [2, 'always'],
  	'body-tense': [2, 'always', ['present-imperative']],
  	'footer-leading-blank': [2, 'always'],
  	'footer-tense': [2, 'always', ['present-imperative']],
  	'header-max-length': [2, 'always', 72],
  	'lang': [1,	'always',	'eng'],
    'scope-case': [2,	'always',	'lowerCase'],
    'subject-empty': [2,	'never'],
    'subject-full-stop': [2,	'never',	'.'],
    'subject-tense': [2,	'always',	['present-imperative']],
    'type-case': [2,	'always',	'lowerCase'],
    'type-empty': [2,	'never'],
    'type-enum': [2,	'always',	[
      ':art:',
      ':racehorse:',
      ':non-potable_water:',
      ':memo:',
      ':penguin:',
      ':apple:',
      ':checkered_flag:',
      ':bug:',
      ':fire:',
      ':green_heart:',
      ':white_check_mark:',
      ':lock:',
      ':arrow_up:',
      ':arrow_down:',
      ':shirt:'
		]]
  },
  wildcards: {
  	merge: [ '^(Merge pull request)|(Merge (.*?) into (.*?)|(Merge branch (.*?))$)'],
  	release: ['^\\d+.\\d+.\\d+\n?$'],
  	revert: ['^revert: (.*)']
  }
};
