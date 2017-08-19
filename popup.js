

var PinyinToZhuyin = {
  'b': '\u3105',
  'p': '\u3106',
  'm': '\u3107',
  'f': '\u3108',
  'd': '\u3109',
  't': '\u310A',
  'n': '\u310B',
  'l': '\u310C',
  'g': '\u310D',
  'k': '\u310E',
  'h': '\u310F',
  'j': '\u3110',
  'q': '\u3111',
  'x': '\u3112',
  'zh': '\u3113',
  'ch': '\u3114',
  'sh': '\u3115',
  'r': '\u3116',
  'z': '\u3117',
  'c': '\u3118',
  's': '\u3119',
  'a': '\u311A',
  'o': '\u311B',
  'e': '\u311C',
  'eh': '\u311D',
  'ai': '\u311E',
  'ei': '\u311F',
  'au': '\u3120',
  'ou': '\u3121',
  'an': '\u3122',
  'en': '\u3123',
  'ang': '\u3124',
  'eng': '\u3125',
  'er': '\u3126',
  'i': '\u3127',
  'u': '\u3128',
  'iu': '\u3129',

}


document.addEventListener('DOMContentLoaded', function () {
      document.getElementById('convert_button').addEventListener('click', main);
});

function main() {
    var pinyin = document.getElementById("pinyin").value;
    var zhuyin = ConvertPinyinToZhuyin(pinyin);
    document.getElementById("zhuyin").value = zhuyin;

}

function ConvertPinyinToZhuyin(pinyinStr){
  zhuyinStr = "";
  for (var i = 0, len = pinyinStr.length; i < len; i++)
  {
    if (pinyinStr[i] != 'a' && pinyinStr[i] != 'e' && pinyinStr[i] != 'i' && pinyinStr[i] != 'o' && pinyinStr[i] != 'z' && pinyinStr[i] != 'c' && pinyinStr[i] != 's'){
      zhuyinStr += PinyinToZhuyin[pinyinStr[i]];
    }
    else{
      if (pinyinStr.substring(i, i+3) === 'ang' || pinyinStr.substring(i, i+3) === 'eng')
      {
        zhuyinStr += PinyinToZhuyin[pinyinStr.substring(i,i+3)];
        i += 2;
      }
      else if(pinyinStr.substring(i, i+2) === 'an' ||
              pinyinStr.substring(i, i+2) === 'en' ||
              pinyinStr.substring(i, i+2) === 'er' ||
              pinyinStr.substring(i, i+2) === 'zh' ||
              pinyinStr.substring(i, i+2) === 'iu' ||
              pinyinStr.substring(i, i+2) === 'ou' ||
              pinyinStr.substring(i, i+2) === 'zh' ||
              pinyinStr.substring(i, i+2) === 'ch' ||
              pinyinStr.substring(i, i+2) === 'sh' ||
              pinyinStr.substring(i, i+2) === 'au' ||
              pinyinStr.substring(i, i+2) === 'ei' ||
              pinyinStr.substring(i, i+2) === 'ai' ||
              pinyinStr.substring(i, i+2) === 'eh')
      {
        zhuyinStr += PinyinToZhuyin[pinyinStr.substring(i,i+2)];
        i++;
      }
      else{
        zhuyinStr += PinyinToZhuyin[pinyinStr[i]];
      }
    }
  }
  return zhuyinStr;
}
