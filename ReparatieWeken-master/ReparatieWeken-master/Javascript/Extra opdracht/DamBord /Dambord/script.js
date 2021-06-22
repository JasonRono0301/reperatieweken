var container = document.getElementById('container');

function makeBoardfunctie(rijen,kollommen){
    for(a=0; a<rijen; a++){//Create rows.
        var row = document.createElement('div');
        row.id = 'row' + a;
        container.appendChild(row);
        for(i=0; i < kollommen; i++){//Create collums.
            var blocks = document.createElement('div');
            blocks.id = 'blokje ' + i;
            row.appendChild(blocks);//Output in the container.
        }
    }
}

function id(e){
    e.innerHTML = e.id;
}

makeBoardfunctie(8,8);
