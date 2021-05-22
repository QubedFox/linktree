const LINKS = [
    ["Github", "https://github.com/QubedFox"],
    ["Money Calculator", "https://qubedfox.github.io/money_calculator"]
]

function getLinks() {
    let output = []

    for (i = 0; i < LINKS.length; i++){
        output[i] = [LINKS[i][0], LINKS[i][1]]
    }
    console.log(output)
    return output
}