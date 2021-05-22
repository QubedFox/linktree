function updateLinks(links){
    let html = ""

    for (i = 0; i < links.length; i++){
        html += '<div class="row justify-content-center">'
        html += '<a type="button" class="btn btn-outline-light btn-lg" href="' + links[i][1] + '">' + links[i][0] + '</a>'
        html += '</div>'
    }

    $('.links').html(html)
}