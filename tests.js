

QUnit.test( 'Pinyin to Zhuyin', function( assert ) {
  assert.equal(ConvertPinyinToZhuyin('t'),'\u310A');
  assert.equal(ConvertPinyinToZhuyin('n'),'\u310B');
  assert.equal(ConvertPinyinToZhuyin('a'),'\u311A');
  assert.equal(ConvertPinyinToZhuyin('o'),'\u311B');
  assert.equal(ConvertPinyinToZhuyin('e'),'\u311C');
  assert.equal(ConvertPinyinToZhuyin('b'),'\u3105');
  assert.equal(ConvertPinyinToZhuyin('i'),'\u3127');
  assert.equal(ConvertPinyinToZhuyin('u'),'\u3128');
  assert.equal(ConvertPinyinToZhuyin('z'),'\u3117');
  assert.equal(ConvertPinyinToZhuyin('ang'), '\u3124');
  assert.equal(ConvertPinyinToZhuyin('eng'), '\u3125');
  assert.equal(ConvertPinyinToZhuyin('an'), '\u3122');
  assert.equal(ConvertPinyinToZhuyin('en'), '\u3123');
  assert.equal(ConvertPinyinToZhuyin('zh'), '\u3113');
  assert.equal(ConvertPinyinToZhuyin('ch'), '\u3114');
  assert.equal(ConvertPinyinToZhuyin('sh'), '\u3115');
  assert.equal(ConvertPinyinToZhuyin('iu'), '\u3129');
  assert.equal(ConvertPinyinToZhuyin('ei'), '\u311F');
  assert.equal(ConvertPinyinToZhuyin('ai'), '\u311E');
  assert.equal(ConvertPinyinToZhuyin('au'), '\u3120');
  assert.equal(ConvertPinyinToZhuyin('ou'), '\u3121');
  assert.equal(ConvertPinyinToZhuyin('eh'), '\u311D');
  assert.equal(ConvertPinyinToZhuyin('er'), '\u3126');
  assert.equal(ConvertPinyinToZhuyin('kau'), '\u310E\u3120');
});



//console.log(ConvertPinyinToZhuyin("ang"));
