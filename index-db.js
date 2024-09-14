const db = [{
        id: 1,
        title: "VALORANT SWAPPER HACK  BEST SKIN CHANGER"
    },
    {
        id: 2,
        title: "VALORANT HACK 2024  UNDETECTED & SAFE CHEAT VALORANT"
    },
    {
        id: 3,
        title: "UNDETECTED SKINCHANGER FOR CS 2"
    },
    {
        id: 4,
        title: "RUST HACK 2024  BEST CHEAT UNDETECTED & SAFE"
    },
    {
        id: 5,
        title: "Roblox Toilet Tower Defense Script"
    },
    {
        id: 6,
        title: "ROBLOX TOILET SCRIPT"
    },
    {
        id: 7,
        title: "ROBLOX PET X SIMULATOR SCRIPT"
    },
    {
        id: 8,
        title: "ROBLOX FRUITS SCRIPT"
    },
    {
        id: 9,
        title: "Roblox Executor - The Ultimate Tool for Dominating Roblox Games"
    },
    {
        id: 10,
        title: "Roblox Executor  Bypass Byfron AntiCheat"
    },
    {
        id: 11,
        title: "ROBLOX CHAMPIONS SCRIPT  PC VERSION"
    },
    {
        id: 12,
        title: "ROBLOX BLADE BALL SCRIPT"
    },
    {
        id: 13,
        title: "Roblox Anime Fighters Script Hack!"
    },
    {
        id: 14,
        title: "Roblox Anime Champions Script"
    },
    {
        id: 15,
        title: "Roblox Anime Adventure Script"
    },
    {
        id: 16,
        title: "GTA 5 MOD MENU  KIDDIONs MENU PC"
    },
    {
        id: 17,
        title: "GENSHIN HACK 2024! UNDETECTED CHEAT GENSHIN IMPACT"
    },
    {
        id: 18,
        title: "FORTNITE SWAPPER HACK! UNDETECTED SKIN CHANGER"
    },
    {
        id: 19,
        title: "FORTNITE HACK 2024  UNDETECTED & SAFE CHEAT FORTNITE"
    },
    {
        id: 20,
        title: "COD WARZONE 2 HACK  BEST WARZONE CHEAT  NEW UPDATE  UNDETECTED AND SAVE"
    },
    {
        id: 21,
        title: "ROBLOX AIMLOCK EXTERNAL HACK 2024"
    },
    {
        id: 22,
        title: "ROBLOX DA HOOD SCRIPT - DESYNC, RESOLVER, AIMLOCK, ANTILOCK 2024"
    }
];

const insert = document.getElementById("insert");

db.forEach(value => {
    insert.innerHTML += `
    <a href="./post-${value.id}">
        
        <img src="./post-${value.id}/1.jpg" style="width: 50%">
        <li><span>${value.title}</span></li>
        
    </a><br>`;
});