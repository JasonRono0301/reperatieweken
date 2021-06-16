var container = document.getElementById('container');

function makeBoardfuctie(rijen,kollommen){

    for(kollommen = 0; kollommen < 10; kollommen++){//Create collums.
        for(rijen = 0; rijen < 10; rijen++){//Create rows.
            
        }
        var divs = document.createElement('div');
        container.appendChild(divs);
        divs.style.backgroundColor = 'red';
        divs.style.width = '80px';
        divs.style.height = '80px';
    }
  

}

makeBoardfuctie();