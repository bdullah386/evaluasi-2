for(let y = 1; y <10; y++){
    for(let x = 1; x <10; x++){
        if(x + y == 10 || x == y){
            document.write('+');
        }else if (x == 5 || y == 5){
            document.write('+')
        }else{
            document.write('~')
        }
    }
    document.write('<br>')
}

document.write('<br>')

for(let y = 1; y <10; y++){
    for(let x = 1; x <10; x++){
        if(x + y >= 10){
            document.write('+')
        }else{
            document.write('~')
        }
    }
    document.write('<br>')
}

document.write('<br>')

for(let y = 1; y <10; y++){
    for(let x = 1; x <10; x++){
        if(x <= y && x + y <= 10 || x + y >= 10 && x >= y){
            document.write('+')
        }else{
            document.write('~')
        }
    }
    document.write('<br>')
}


document.write('<br>')

for(let y = 1; y <10; y++){
    for(let x = 1; x <10; x++){
        if(y ==1 || y == 4 || x == 1 ){
            document.write('+')
        }else{
            document.write('')
        }
    }
    document.write('<br>')
}

document.write('<br>')


for(let y = 1; y <10; y++){
    for(let x = 1; x <10; x++){
        if(y == 1 ||y == 4 ||x == 1 ||x ==9){
            document.write('+');
        }else{
            document.write('~')
        }
    }
    document.write('<br>')
}


document.write('<br>')


for(let y = 1; y <10; y++){
    for(let x = 1; x <10; x++){
        if(y == 1 || y == 9 ||  x == 5){
            document.write('+')
        }else{
            document.write('~')
        }
    }
    document.write('<br>')
}


document.write('<br>')


for(let y = 1; y <10; y++){
    for(let x = 1; x <10; x++){
        if(y == 1 || x + y == 10 || y == 9){
            document.write('+')
        }else{
            document.write('~')
        }
    }
    document.write('<br>')
}







