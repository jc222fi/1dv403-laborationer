"use strict";

var makePerson = function(persArr) {
    function Person(name, age){
        this.getName = function(){return name;};
        this.getAge = function(){return age;};
        this.setName = function(_name){name = _name;};
        this.setAge = function(_age){age = _age;};
        this.setName(name);
        this.setAge(age);
    }
    
    var ages = [];
    var sumOfAges = 0;
    var namesUnsorted = [];
    var i = 0;
    
    for(i=0;i<persArr.length;i++){
        ages.push(persArr[i].age);
    }
    for(i=0;i<persArr.length;i++){
        namesUnsorted.push(persArr[i].name);
    }
    for(i=0;i<persArr.length;i++){
        sumOfAges+=persArr[i].age;
    }
    var names = namesUnsorted.sort(function (a, b) {
        return a.localeCompare(b);
    });
    persArr.names = names.join(", ");
    persArr.minAge = Math.min.apply(Math,ages);
    persArr.maxAge = Math.max.apply(Math,ages);
    persArr.averageAge = Math.round(sumOfAges/3);
    var result = {minAge:persArr.minAge,maxAge:persArr.maxAge, averageAge:persArr.averageAge, names:persArr.names};

    return result; 
    
} 
var data = [{name: "John Häggerud", age: 37}, {name: "Johan Leitet", age: 36}, {name: "Mats Loock", age: 46}];

var result = makePerson(data);

console.log(result);