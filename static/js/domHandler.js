//
//  Code by Nicholas Taplin
//  GitHub: https://github.com/QubedFox
//


function updateLinks(links){
    let html = ""

    for (i = 0; i < links.length; i++){
        if (links[i][0] == "header") {
            html += '<div class="row text-center">'
            html += '<p class="section-title">' + links[i][1] + '</p>'
            html += '</div>'
        }
        else {
            html += '<div class="row justify-content-center">'
            html += '<a href="' + links[i][1] + '" class="btn btn-lg btn-outline-light" role="button" target="_blank" rel="noopener noreferrer">' + links[i][0] + '</a>'
            html += '</div>'
        }
    }

    $('.links').html(html)
}