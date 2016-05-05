var control = document.getElementById("your-files");
var result = '';

var parser = {


    headers: ['time of operation','time of processing','cart','result','operation sum','valute','write-off sum', 'valute2','type','sum', 'firm'],

    csvJSON (csv) {

        var lines = csv.split("\n");

        var result = [];

        for (var i = 1; i < lines.length; i++) {

            var obj = {};
            var currentline = lines[i].split(";");

            for (var j = 0; j < this.headers.length; j++) {
                obj[this.headers[j]] = currentline[j];
            }

            result.push(obj);

        }

        //return result; //JavaScript object
        return JSON.stringify(result); //JSON
    }

}



data = document.getElementById("fileData");
control.addEventListener("change", function (e) {
    var file = this.files ? this.files[0] : {
            name: this.value
        },
        fileReader = window.FileReader ? new FileReader() : null;

    if (file) {
        if (fileReader) {
            fileReader.addEventListener("loadend", function (e) {
                result = e.target.result;
                var foo = parser.csvJSON(result);
                debugger;
                //data.innerHTML = template.replace("{{Name}}", file.name).replace("{{Size}}", file.size).replace("{{Data}}", e.target.result.substring(0, 100));
            }, false);
            fileReader.readAsText(file);
        } else {
            data.innerHTML = template.replace("{{Name}}", file.name).replace("{{Size}}", "Don't know").replace("{{Data}}", "This browser isn't smart enough!");
        }
    }
}, false);



