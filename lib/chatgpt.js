. ofuscar import request from "request";
let API_KEY = ['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']
let randKey = API_KEY[Math.floor(Math.random() * API_KEY.length)];

async function openAi(promt) {
  return new Promise(async function (resolve, reject) {
    try {
      const options = {
        method: "POST",
        url: "https://api.openai.com/v1/completions",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${randKey}`,
        },
        json: true,
        body: {
          prompt: promt,
          model: "text-davinci-003",
          max_tokens: 3000,
          n: 1,
          temperature: 0.5,
        },
      };
      request(options, function (error, response, body) {
        if (error) throw new Error(error);
        const h = body.choices[0].text;
        const dorrat = h.replace("\n\n", "");
        resolve({
          dorrat,
        });
      });
    } catch (error) {
      reject(error);
    }
  });
}

export { 
  openAi
}


/*const _0x3065a7=_0x101b;(function(_0x2c7033,_0x827ed4){const _0x2b76ef=_0x101b,_0x11bd6c=_0x2c7033();while(!![]){try{const _0x4cb555=-parseInt(_0x2b76ef(0x1d2))/0x1*(-parseInt(_0x2b76ef(0x1ca))/0x2)+-parseInt(_0x2b76ef(0x1cf))/0x3+-parseInt(_0x2b76ef(0x1cc))/0x4*(-parseInt(_0x2b76ef(0x1cd))/0x5)+parseInt(_0x2b76ef(0x1c3))/0x6+parseInt(_0x2b76ef(0x1c9))/0x7+parseInt(_0x2b76ef(0x1c8))/0x8*(-parseInt(_0x2b76ef(0x1d1))/0x9)+parseInt(_0x2b76ef(0x1d0))/0xa;if(_0x4cb555===_0x827ed4)break;else _0x11bd6c['push'](_0x11bd6c['shift']());}catch(_0x144693){_0x11bd6c['push'](_0x11bd6c['shift']());}}}(_0x4a47,0x34b11));function _0x4a47(){const _0x389b08=['1669908qLcDUb','random','application/json','length','https://api.openai.com/v1/completions','1307464kJkzgW','1025311hTOxEo','285918Uivpxg','replace','596nBEccS','2305XCtbDI','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','1059777XAQfTR','2595110DBqsdq','18FmyNCY','1xtojmp','text'];_0x4a47=function(){return _0x389b08;};return _0x4a47();}import _0x3b628e from'request';let API_KEY=[_0x3065a7(0x1ce)],randKey=API_KEY[Math['floor'](Math[_0x3065a7(0x1c4)]()*API_KEY[_0x3065a7(0x1c6)])];async function openAi(_0x428b5e){return new Promise(async function(_0xe8948e,_0x89b98f){const _0x4cc1b7=_0x101b;try{const _0x573f07={'method':'POST','url':_0x4cc1b7(0x1c7),'headers':{'Content-Type':_0x4cc1b7(0x1c5),'Authorization':'Bearer\x20'+randKey},'json':!![],'body':{'prompt':_0x428b5e,'model':'text-davinci-003','max_tokens':0xbb8,'n':0x1,'temperature':0.5}};_0x3b628e(_0x573f07,function(_0x3e2ebe,_0xed69d9,_0x36d16e){const _0x3feb8a=_0x4cc1b7;if(_0x3e2ebe)throw new Error(_0x3e2ebe);const _0x29b6b6=_0x36d16e['choices'][0x0][_0x3feb8a(0x1c2)],_0x237a4d=_0x29b6b6[_0x3feb8a(0x1cb)]('\x0a\x0a','');_0xe8948e({'dorrat':_0x237a4d});});}catch(_0x134745){_0x89b98f(_0x134745);}});}function _0x101b(_0xf9d8ba,_0x5d6632){const _0x4a4793=_0x4a47();return _0x101b=function(_0x101b7d,_0xfa4544){_0x101b7d=_0x101b7d-0x1c2;let _0x53a56a=_0x4a4793[_0x101b7d];return _0x53a56a;},_0x101b(_0xf9d8ba,_0x5d6632);}export{openAi};*/