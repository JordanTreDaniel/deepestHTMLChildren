function deepestChild(elArr) {
    //all child nodes pulled out in current iteration
    var babies = [],
        parents = [];
    //loop over all elements returned
    for (var i = 0;i < elArr.length; i++) {
        parents.push(elArr[i]);
        //if the element has children
        if (elArr[i].children.length > 0) {
            //convert the returned (children) HTMLCollection to array 
            for (var x = 0; x < elArr[i].children.length; x++) {
                //pushing each baby onto babiesArray
                babies.push(elArr[i].children.item(x));
            }
        }
    }
    if (babies.length > 0) {
        return deepestChild(babies);
    } else {
        return parents;
    }

}





console.log("These are the children for 'first': ", deepestChild([document.getElementById("first")]));
console.log("These are the children for 'second': ", deepestChild([document.getElementById("second")]));

// console.log(document)


//grab collection
//filter/test each element for children
//return item if it is the only one left
//recurse

