'use strict';

function collect_all_even(collection) {
    var array = [];

    collection.forEach(function (element) {
        if (element % 2 == 0) {
            array.push(element);
        }
    });

    return array;
}

module.exports = collect_all_even;
