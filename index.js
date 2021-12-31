let collection = [1,2,3,4,5] 

 function myEach(collection, callback){
    for (let number in collection){
        callback(collection[number])
    }
    return collection
}

function myMap(collection, callback){
    let newCollection = []
    for (let number in collection){
    newCollection.push(callback(collection[number]))
    }
    return newCollection
}

function myReduce(collection, callback, acc){
    let copy = Object.values(collection)
    acc = acc || copy.shift()
    for (let number in copy){
        acc = callback(acc, copy[number], copy)
    }
    return acc
}

function myFind(collection, predicate){
    for(let number in collection){
        let int = collection[number]
        if (predicate(int)){
            return int            
        }
    }
}

function myFilter(collection, predicate){
    let newArr = []
    for(let number in collection){
        let int = collection[number]
        if (predicate(int)){
        newArr.push(int)            
        }    
    }
    return newArr
}

function mySize(collection){
    return Object.keys(collection).length
}

function myFirst(collection, n=0){
    return n>0? collection.slice(0,n): collection[0]
}


function myLast(collection, n=1){
    let start =collection.length-n
    return n>1? collection.slice(start): collection[start]
}


function myKeys(object){
    let array = []
    for (let key in object) {
      array.push(key)   
        
     }
    return array
}

function myValues(object){
    let array = []
    for (let [key, value] of Object.entries(object)) {
      array.push(value)           
     }
    return array
}