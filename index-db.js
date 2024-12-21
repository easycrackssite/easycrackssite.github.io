const db = [{
        id: 1,
        title: "ROBLOX Fastest Fisch Script – NEW Instant Catch, Auto Farm & Shake 2024"
    },
    {
        id: 2,
        title: "PET SIMULATOR 99 Script Pastebin UPDATE STANDING IN LINE AUTO FARM 2024"
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
        id: 21,
        title: "ROBLOX AIMLOCK EXTERNAL HACK 2024"
    },
    {
        id: 22,
        title: "FREE ROBLOX DA HOOD SCRIPT - DESYNC, RESOLVER, AIMLOCK, ANTILOCK 2024"
    },
    {
        id: 23,
        title: "ROBLOX PETS GO Jelly UPDATE SCRIPT FREE NO KEY 2024"
    },
    {
        id: 24,
        title: "ROBLOX PETS GO TRADE SCAM SCRIPT FREE 2024"
    },
    {
        id: 25,
        title: "ROBLOX MM2 SCRIPT [CANDY FARM, GODMODE, ESP + MORE] Roblox MM2 Hack GUI"
    },

];

const insert = document.getElementById("insert");

db.forEach(value => {
    insert.innerHTML += `
    <a href="./post-${value.id}">
        
        <img src="./post-${value.id}/1.jpg" style="width: 50%">
        <li><span>${value.title}</span></li>
        
    </a><br>`;
});