let i = 1
var values = [["40%","100%"],["40vh","100vh"],["15vh","0vh"]]
var prev = $("#content").html()

function back(){
    $("#content").css("width",values[0][i])
    $("#content").css("height",values[1][i])
    $("#content").css("margin-top",values[2][i])
    $("#content").html(prev)
    i = i ^ 1
}
function change(){
    var value = $("#txt").prop("value")
    var url = "https://googledictionaryapi.eu-gb.mybluemix.net/?define=<"+ value +">&lang=en"
    $.getJSON(url,function(json){                      
        var word = json.word   
        var meaning = json.meaning
        $("#content").addClass("animated pulse")
        console.log(json)
        var str = "<div class = 'row'><div class = 'col-4 offset-4'><button id = 'agn' class = 'btn btn-dark' onclick='back()'><i class='fa fa-3x fa-arrow-left'></i></button> </div></div>"
        str += "<div class = 'row'>"
        str += "<div id='head' class='col-12'>"
        str += "<p>" + word + "</p></div></div>" 
        for(k in meaning){
            str += "<div class = 'row'>"
            str += "<div class = 'col-12 p-2'>" + k + ":</div></div>"
            for(l in meaning[k]){
                for(x in meaning[k][l]){
                    str += "<div class = 'row'>"
                    str += "<div class = 'col-12'>"
                    str += "<b id='key'>"+ x + "</b>" + ": " + meaning[k][l][x]                   
                    str += "</div></div>"
                }
            }
            str += "</div>"
        }
        back()
        $("#content").html(str)
    })
}