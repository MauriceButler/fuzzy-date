var test = require('tape'),
    testOffset = 86400 * 1000,
    FuzzyDateFunction = require('../');

test('quacks like a Date', function(t){
    t.plan(4);

    var FuzzyDate = FuzzyDateFunction(testOffset),
        fuzzyDate = new FuzzyDate(2015, 12, 18),
        legitDate = new Date(2015, 12, 18);

    t.ok(fuzzyDate instanceof Date, 'instance of Date');
    t.ok(fuzzyDate instanceof FuzzyDate, 'instance of FuzzyDate');
    t.equal(Object.prototype.toString.call(fuzzyDate), '[object Date]', 'matches Date name');
    t.equal(Math.abs(fuzzyDate - legitDate), testOffset, 'offset is applied');
});

test('allow different offsets', function(t){
    t.plan(2);

    var FuzzyDate = FuzzyDateFunction(testOffset),
        DoubleFuzzyDate = FuzzyDateFunction(testOffset * 2),
        fuzzyDate = new FuzzyDate(2015, 12, 18),
        doubleFuzzyDate = new DoubleFuzzyDate(2015, 12, 18),
        legitDate = new Date(2015, 12, 18);

       t.equal(Math.abs(fuzzyDate - legitDate), testOffset, 'single offset');
       t.equal(Math.abs(doubleFuzzyDate - legitDate), testOffset * 2, 'double offset');
});