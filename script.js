var newArr = [];
function sayHello(){
    var name = document.getElementById('input').value;
    newArr.push(name);
    for(i=0; i<newArr.length;i++){
        var firstLetter = newArr.join("").charAt(0).toLowerCase();

        if(firstLetter === "j"){
            document.getElementById('empty').textContent = 'goodbye '+ name;
            newArr.pop();
        }else{
            document.getElementById('empty').textContent = 'Hello '+ name;
            newArr.pop();
        }

    }

};