//
//  Code by Nicholas Taplin
//  GitHub: https://github.com/QubedFox
//


function updateLinks(links){
    let html = ""

    for (i = 0; i < links.length; i++){
        html += '<div class="row justify-content-center">'
        html += '<a href="' + links[i][1] + '" class="btn btn-lg btn-outline-light" role="button">' + links[i][0] + '</a>'
        html += '</div>'
    }

    $('.links').html(html)
}