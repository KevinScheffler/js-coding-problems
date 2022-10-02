var getInitials = function(name) {
    var strSplit = name.split(' ')
    return strSplit[0][0].concat('.'+strSplit[1][0]).toUpperCase();
}

console.log(getInitials("Aaron Jack"));
console.log(getInitials("Jan Frey"));
console.log(getInitials("harry potter"));