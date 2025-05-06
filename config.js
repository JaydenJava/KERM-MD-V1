/*
_  ______   _____ _____ _____ _   _
| |/ / ___| |_   _| ____/___ | | | |
| ' / |  _    | | |  _|| |   | |_| |
| . \ |_| |   | | | |__| |___|  _  |
|_|\_\____|   |_| |_____\____|_| |_|

ANYWAY, YOU MUST GIVE CREDIT TO MY CODE WHEN COPY IT
CONTACT ME HERE +237656520674
YT: KermHackTools
Github: Kgtech-cmr
*/


const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "KERM-MD-V1~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTU1odlIvWjNBY0RkSVU0cjUrdUNpU1NZTTdnQUc3Ukt1V2NuaVFoblhGST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWTh3YXF1VzlSM05ndktsTG5zR1k5dFdqcHp1aWo3Qng3S1VHSG1HdktqMD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1SFIxQzlrUDhIOWtXTGZJT2cxZFR4VFZwdVk3MVMrRTliRjNEdTlyV2xJPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjb01qTzM5YWZaK2g3R2dCTUJYVmZhZTNVTEsraEYxeDNtWVhlazJhNDA0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImNMRGpUVFk1cFh5dnBHR3p2YWM2RDlHTzBUcXM4d0FxblhFZklYblJIMjQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImlkbVpYeUQ3bDBRTWtCL0dtQWxqcnh5T0NSd08yS3o1TVdoZUdpc0ZPa3M9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib0cvc2hlbGdaM1hvd0ErZ3pDdHc1by9zMVhwM0tPdTN6MjBRbGErbEZWRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRXNyOWJvcmxWTkxIMk1FOWl1ekhlTDJQR2FpY1NFc0ZXUndlZjlITXVoND0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlNOTTQwVFMvV1ZNNG5tT1hzbWtzSytzdmRtcmNlU053ZjVOTUErcEoyVzVKZERNOTlDNzRKcHJFNjk3emdvZm5TbEpNT0c0ZzZXeVBLVHpoRXZBZ2d3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjA3LCJhZHZTZWNyZXRLZXkiOiJpTmxxeUpxSG81VnFmVjlubm1XVlJiclVGeW0wVUhkaDFZcExDRzZyNUI4PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJxRXF",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
MODE: process.env.MODE || "private",
AUTO_VOICE: process.env.AUTO_VOICE || "false",
AUTO_STICKER: process.env.AUTO_STICKER || "false",
AUTO_REPLY: process.env.AUTO_REPLY || "false",
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/yw2ty2.jpeg",
ALIVE_MSG: process.env.ALIVE_MSG || "_Hi 💁🏽 How Can I Assist You. Am alive Now._",
ANTI_LINK: process.env.ANTI_LINK || "true",
ANTI_BAD: process.env.ANTI_BAD || "true",
PREFIX: process.env.PREFIX || ".",
FAKE_RECORDING: process.env.FAKE_RECORDING || "false",
FAKE_TYPING: process.env.FAKE_TYPING || "false",
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "true",
CURRENT_STATUS: process.env.CURRENT_STATUS || "true",
AUTO_REACT: process.env.AUTO_REACT || "false",
HEART_REACT: process.env.HEART_REACT || "false",
OWNER_REACT: process.env.OWNER_REACT || "false",
BOT_NAME: process.env.BOT_NAME || "『𝗞𝗘𝗥𝗠 𝗠𝗗 𝗩1』",
OMDB_API_KEY: process.env.OMDB_API_KEY || "76cb7f39", // omdbapi.com
};
