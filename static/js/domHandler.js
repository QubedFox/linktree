function updateLinks(links){
    let html = ""

    for (i = 0; i < links.length; i++){
        html += '<div class="row justify-content-center">'
        html += '<button type="button" class="btn btn-outline-light btn-lg"><a href="' + links[i][1] + '">' + links[i][0] + '</a></button>'
        html += '</div>'
    }

    $('.links').html(html)
}