"use strict";

const pets = {
    name: '',
    spead: 1,
    dist: 0,
    walk: function (hours) {
        tnis.defAction = action;
        this.dist += hours * this.spead;
    },
    endWalk: function () {
        console.log('Iam' + this.name + 'i end my walk, dist:' +
            this.dist + this.defAction);
    }
}

const dog = [{
    type: 'dog',
    name: 'Dog1',
    spead: 1,
    gav: function () {
        console.log(this.name + "say: GAV");
    }
}, {
    type: 'dog',
    name: 'Dog2',
    spead: 1,
    gav: function () {
        console.log(this.name + "say: GAV");
    }
}];

const cat = [{
    type: 'cat',
    name: 'Cat1',
    spead: 1,
    miay: function () {
        console.log(this.name + "say: MIAY");
    }
}];