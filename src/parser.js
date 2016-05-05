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

export default parser;
