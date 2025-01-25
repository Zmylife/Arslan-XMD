const {
  cmd,
  commands
} = require('../command');
const {
  fetchJson
} = require("../lib/functions");
cmd({
  'pattern': 'ai',
  'alias': ["chatgpt", 'dj'],
  'react': '🤖',
  'desc': "AI chat.",
  'category': "main",
  'filename': __filename
}, async (_0x555034, _0x5c8948, _0x1f5d2b, {
  from: _0x2b2295,
  quoted: _0x1016f9,
  body: _0x11137d,
  isCmd: _0x2ead61,
  command: _0x1904f0,
  args: _0x557dc4,
  q: _0x4f8a29,
  isGroup: _0x20d3a1,
  sender: _0x5b36be,
  senderNumber: _0x358e7f,
  botNumber2: _0x594115,
  botNumber: _0x1b2c35,
  pushname: _0x146e53,
  isMe: _0x57ffb0,
  isOwner: _0x40b50f,
  groupMetadata: _0x392533,
  groupName: _0x3b06be,
  participants: _0x2fbee4,
  groupAdmins: _0x2eba43,
  isBotAdmins: _0x262d23,
  isAdmins: _0x3759b6,
  reply: _0x2eda62
}) => {
  try {
    if (!_0x4f8a29) {
      return _0x2eda62("Please ask a question or provide input for the AI.");
    }
    const _0x3f0dce = await fetchJson("https://api.davidcyriltech.my.id/ai/gpt4omini?text=" + _0x4f8a29);
    console.log(_0x3f0dce);
    if (!_0x3f0dce.message) {
      return _0x2eda62("No response from the AI.");
    }
    return _0x2eda62('' + _0x3f0dce.message);
  } catch (_0x53ea6e) {
    console.error(_0x53ea6e);
    _0x2eda62("An error occurred: " + _0x53ea6e.message);
  }
});
cmd({
  'pattern': 'mistraai',
  'alias': ["mistra", "zimai"],
  'react': '🪄',
  'desc': "AI chat.",
  'category': 'main',
  'filename': __filename
}, async (_0x519792, _0x81126c, _0x48e821, {
  from: _0x4e7b24,
  quoted: _0x221789,
  body: _0x5b45fd,
  isCmd: _0x2a6e61,
  command: _0x208b7b,
  args: _0x2abcd7,
  q: _0x52a88e,
  isGroup: _0x515629,
  sender: _0x16c800,
  senderNumber: _0xe77652,
  botNumber2: _0x569898,
  botNumber: _0xa8a173,
  pushname: _0x5bde7a,
  isMe: _0x17aa5a,
  isOwner: _0x4de61d,
  groupMetadata: _0x1f1ea1,
  groupName: _0x8e5027,
  participants: _0x11fd8c,
  groupAdmins: _0x418374,
  isBotAdmins: _0x1b4c39,
  isAdmins: _0xbb7ff7,
  reply: _0x42d581
}) => {
  try {
    if (!_0x52a88e) {
      return _0x42d581("Please ask a question or provide input for the AI.");
    }
    const _0x494f3f = await fetchJson("https://pikabotzapi.vercel.app/ai/mistral/?apikey=anya-md&message=" + _0x52a88e);
    console.log(_0x494f3f);
    if (!_0x494f3f.message) {
      return _0x42d581("No response from the AI.");
    }
    return _0x42d581("🤖 *KHAN-MD MISTRA AI:*\n\n" + _0x494f3f.message);
  } catch (_0x3ec10d) {
    console.error(_0x3ec10d);
    _0x42d581("An error occurred: " + _0x3ec10d.message);
  }
});
cmd({
  'pattern': 'gpt3',
  'alias': ["gptturbo", 'chatgpt3'],
  'react': '😇',
  'desc': "AI chat.",
  'category': "main",
  'filename': __filename
}, async (_0x457068, _0x22324e, _0xbe7a0f, {
  from: _0x869998,
  quoted: _0x3a2fc3,
  body: _0x54c97d,
  isCmd: _0x466fd8,
  command: _0x337e75,
  args: _0x150849,
  q: _0x4790fa,
  isGroup: _0x59d8d7,
  sender: _0x30d0b8,
  senderNumber: _0xc80fbb,
  botNumber2: _0x1ca354,
  botNumber: _0x1a1aca,
  pushname: _0xa91a6d,
  isMe: _0x532636,
  isOwner: _0x23bd38,
  groupMetadata: _0x4d6d68,
  groupName: _0x50f7a5,
  participants: _0x3d1c89,
  groupAdmins: _0x472c83,
  isBotAdmins: _0x51ebd4,
  isAdmins: _0x1fa233,
  reply: _0x4b84f1
}) => {
  try {
    if (!_0x4790fa) {
      return _0x4b84f1("Please ask a question or provide input for the AI.");
    }
    const _0x131af5 = await fetchJson("https://api.davidcyriltech.my.id/ai/gpt3?text=" + _0x4790fa);
    console.log(_0x131af5);
    if (!_0x131af5.message) {
      return _0x4b84f1("No response from the AI.");
    }
    return _0x4b84f1("🤖 *KHAN-MD CHATGPT 3:*\n\n" + _0x131af5.message);
  } catch (_0x5d888b) {
    console.error(_0x5d888b);
    _0x4b84f1("An error occurred: " + _0x5d888b.message);
  }
});
cmd({
  'pattern': "gpt4",
  'alias': ['ai4', "chatgpt4"],
  'react': '🪄',
  'desc': "AI chat.",
  'category': "main",
  'filename': __filename
}, async (_0x4a37b8, _0x2f54d0, _0x5af61e, {
  from: _0x342864,
  quoted: _0x8bdc42,
  body: _0x52e507,
  isCmd: _0x3f1e35,
  command: _0x2677f9,
  args: _0x1bb94f,
  q: _0xfc99d5,
  isGroup: _0x5bd79f,
  sender: _0x246401,
  senderNumber: _0x1cca6f,
  botNumber2: _0x45d144,
  botNumber: _0x2af094,
  pushname: _0x26b6a3,
  isMe: _0x1c006d,
  isOwner: _0x4139f9,
  groupMetadata: _0x1335b3,
  groupName: _0x2e0be4,
  participants: _0x4f6f97,
  groupAdmins: _0x30f161,
  isBotAdmins: _0x495ea5,
  isAdmins: _0x19fd05,
  reply: _0x226670
}) => {
  try {
    if (!_0xfc99d5) {
      return _0x226670("Please ask a question or provide input for the AI.");
    }
    const _0x11f93c = await fetchJson("https://api.davidcyriltech.my.id/ai/gpt4omini?text=" + _0xfc99d5);
    console.log(_0x11f93c);
    if (!_0x11f93c.message) {
      return _0x226670("No response from the AI.");
    }
    return _0x226670("🤖 *KHAN-MD CHATGPT 4:*\n\n" + _0x11f93c.message);
  } catch (_0x208093) {
    console.error(_0x208093);
    _0x226670("An error occurred: " + _0x208093.message);
  }
});
cmd({
  'pattern': "llama3",
  'alias': ["llama", 'model3'],
  'react': '✅',
  'desc': "AI chat.",
  'category': "main",
  'filename': __filename
}, async (_0x16756e, _0x2a91ef, _0x3c4388, {
  from: _0x1be644,
  quoted: _0x1ae52c,
  body: _0x3af190,
  isCmd: _0x33f513,
  command: _0x114e6d,
  args: _0x510196,
  q: _0x4b1b0c,
  isGroup: _0xe5da20,
  sender: _0x57602c,
  senderNumber: _0x3406a5,
  botNumber2: _0x42a0f4,
  botNumber: _0x3b741f,
  pushname: _0x40a0c8,
  isMe: _0x339ff1,
  isOwner: _0xa443fe,
  groupMetadata: _0x531eff,
  groupName: _0x3541a1,
  participants: _0x30d4ed,
  groupAdmins: _0x2ce2b5,
  isBotAdmins: _0x54cacb,
  isAdmins: _0x5ecda0,
  reply: _0x49479f
}) => {
  try {
    if (!_0x4b1b0c) {
      return _0x49479f("Please ask a question or provide input for the AI.");
    }
    const _0x547fe9 = await fetchJson("https://api.davidcyriltech.my.id/ai/llama3?text=" + _0x4b1b0c);
    console.log(_0x547fe9);
    if (!_0x547fe9.message) {
      return _0x49479f("No response from the AI.");
    }
    return _0x49479f("🤖 *KHAN-MD LLAM AI:*\n\n" + _0x547fe9.message);
  } catch (_0x564328) {
    console.error(_0x564328);
    _0x49479f("An error occurred: " + _0x564328.message);
  }
});
cmd({
  'pattern': 'metai',
  'alias': ["meta", "bot", 'llama2'],
  'react': '🔄',
  'desc': "AI chat.",
  'category': "main",
  'filename': __filename
}, async (_0x3c8c89, _0x560b22, _0x499cd7, {
  from: _0x1ce4d2,
  quoted: _0x4dad66,
  body: _0x33d5f4,
  isCmd: _0x129907,
  command: _0x11a73c,
  args: _0x387819,
  q: _0xe23c13,
  isGroup: _0x254046,
  sender: _0x203631,
  senderNumber: _0x5cb643,
  botNumber2: _0x28827e,
  botNumber: _0x10883b,
  pushname: _0x224fff,
  isMe: _0x349d75,
  isOwner: _0x457ee7,
  groupMetadata: _0x2179b4,
  groupName: _0x550a39,
  participants: _0x2539ec,
  groupAdmins: _0x1b2441,
  isBotAdmins: _0x222629,
  isAdmins: _0x4ca6c2,
  reply: _0x4babe9
}) => {
  try {
    if (!_0xe23c13) {
      return _0x4babe9("Please ask a question or provide input for the AI.");
    }
    const _0x3cc89d = await fetchJson('https://api.davidcyriltech.my.id/ai/metaai?text=' + _0xe23c13);
    console.log(_0x3cc89d);
    if (!_0x3cc89d.message) {
      return _0x4babe9("No response from the AI.");
    }
    return _0x4babe9("🤖 *KHAN-MD META AI:*\n\n" + _0x3cc89d.message);
  } catch (_0x3ad085) {
    console.error(_0x3ad085);
    _0x4babe9("An error occurred: " + _0x3ad085.message);
  }
});
cmd({
  'pattern': "gpt4o",
  'alias': ["ai4", "chatgpt4"],
  'react': '🟢',
  'desc': "AI chat.",
  'category': "main",
  'filename': __filename
}, async (_0x1e8bac, _0x890310, _0x13bb3a, {
  from: _0x54a76d,
  quoted: _0x2024f7,
  body: _0x45d9d9,
  isCmd: _0x2b4b3a,
  command: _0x28d599,
  args: _0x3708ae,
  q: _0x156fdc,
  isGroup: _0x34ea64,
  sender: _0x5789ce,
  senderNumber: _0xbf1692,
  botNumber2: _0x23f22c,
  botNumber: _0x16a843,
  pushname: _0x55b7eb,
  isMe: _0x5eba88,
  isOwner: _0x3091c2,
  groupMetadata: _0x5532be,
  groupName: _0x47e766,
  participants: _0x21761c,
  groupAdmins: _0x29cbae,
  isBotAdmins: _0x3abff6,
  isAdmins: _0x2ede75,
  reply: _0x2e56e4
}) => {
  try {
    if (!_0x156fdc) {
      return _0x2e56e4("Please ask a question or provide input for the AI.");
    }
    const _0x4864e6 = await fetchJson("https://api.davidcyriltech.my.id/ai/gpt4omini?text=" + _0x156fdc);
    console.log(_0x4864e6);
    if (!_0x4864e6.message) {
      return _0x2e56e4("No response from the AI.");
    }
    return _0x2e56e4("🤖 *KHAN-MD CHATGPT 4o:*\n\n" + _0x4864e6.message);
  } catch (_0x5b623a) {
    console.error(_0x5b623a);
    _0x2e56e4("An error occurred: " + _0x5b623a.message);
  }
});
cmd({
  'pattern': 'gemini',
  'alias': ['bard', "bing"],
  'react': '⏳',
  'desc': "AI chat.",
  'category': "main",
  'filename': __filename
}, async (_0x5bfbdc, _0x2cb38b, _0x4f2ce3, {
  from: _0x22ba31,
  quoted: _0x55558f,
  body: _0x6a3dd5,
  isCmd: _0x33c15a,
  command: _0x5b4c1f,
  args: _0xbec0af,
  q: _0x18ad1c,
  isGroup: _0x359e12,
  sender: _0x5b9575,
  senderNumber: _0xb5d673,
  botNumber2: _0x254f4e,
  botNumber: _0x31fa30,
  pushname: _0x2a6329,
  isMe: _0x2b88da,
  isOwner: _0x122c50,
  groupMetadata: _0x2c83f5,
  groupName: _0x3c76b8,
  participants: _0x5d65f8,
  groupAdmins: _0x10f119,
  isBotAdmins: _0x36050c,
  isAdmins: _0x569208,
  reply: _0x25da82
}) => {
  try {
    if (!_0x18ad1c) {
      return _0x25da82("Please ask a question or provide input for the AI.");
    }
    const _0x59920f = await fetchJson("https://api.davidcyriltech.my.id/ai/gpt4omini?text=" + _0x18ad1c);
    console.log(_0x59920f);
    if (!_0x59920f.message) {
      return _0x25da82("No response from the AI.");
    }
    return _0x25da82("🤖 *Arslan-XMD GOOGLE AI:*\n\n" + _0x59920f.message);
  } catch (_0x4e9059) {
    console.error(_0x4e9059);
    _0x25da82("An error occurred: " + _0x4e9059.message);
  }
});
