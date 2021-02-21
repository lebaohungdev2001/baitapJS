window.onload = function () {
    //bài tập 1
    var names = ['Lê Văn A',
        'Bùi Văn B',
        'Nguyễn Thị C',
        'Trương Tuấn D'
    ];

    names.forEach(name => {
        var listName = document.getElementById('listName');
        var li = document.createElement('li');
        listName.appendChild(li);
        li.innerHTML = name;
    })

    //bài tập 2
    var counts = document.getElementById('count');
    count = 0;
    counts.innerHTML = count;
    var listTag = document.querySelectorAll('.content');
    listTag.forEach(list => {
        list.onclick = function () {
            if (this.classList.contains('choose')) {
                this.classList.remove('choose')
                count--;
                counts.innerHTML = count;
            }
            else {
                this.classList.add('choose')
                count++;
                counts.innerHTML = count;
            }
        }
    })

    //bài tập 3
    var selectId1=document.getElementById('select1');
    var selectId2=document.getElementById('select2');
    var btnAddId=document.getElementById('btnAdd');
    var btnDescId=document.getElementById('btnDec');
    btnAddId.onclick=function(){
        let options= document.createElement('option');
        options=selectId1.selectedOptions[0];
        selectId2.add(options);
    }
    btnDescId.onclick=function(){
        let options= document.createElement('option');
        options=selectId2.selectedOptions[0];
        selectId1.add(options);
    }
};