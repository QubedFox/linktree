//
//  Code by Nicholas Taplin
//  GitHub: https://github.com/QubedFox
//


const LINKS = [
    ["header", "Media"],
    ["My Favourite YouTube Videos", "https://www.youtube.com/playlist?list=PL3TrYp5kWedmqkx37Tm1ULePLOW3Zeql-"],
    ["Spotify", "https://open.spotify.com/user/qb_fox?si=7349642b1f844663"],
    ["Spotify Blend", "https://open.spotify.com/blend/taste-match/965483c8cbfce21b?si=BOLWrpuwRRG3LLUJ3PzIjg&fallback=getapp&blendDecoration=5f9c38d2"],
    ["header", "Coding"],
    ["GitHub", "https://github.com/QubedFox"],
    ["Money Calculator", "https://qubedfox.github.io/money_calculator"],
    ["Ciphers - WIP", "https://qubedfox.github.io/supreme-train/"]
]

function getLinks() {
    let output = []

    for (i = 0; i < LINKS.length; i++){
        output[i] = [LINKS[i][0], LINKS[i][1]]
    }
    return output
}
