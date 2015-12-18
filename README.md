# fuzzy-date

Like a Date but fuzzy

Returns a Date object +/- the offset milliseconds passed in

## Usage

``` javascript

var FuzzyDate = require('fuzzy-date')(86400 * 1000); // offset 1 day

console.log(new FuzzyDate(2015, 12, 18)); // will either be 17th or 19th of December 2015

```

## Multiple Offsets

``` javascript

var FuzzyDateFunction = require('fuzzy-date'),
    FuzzyDate1 = FuzzyDateFunction(86400 * 1000), // offset 1 day
    FuzzyDate2 = FuzzyDateFunction(86400 * 2000); // offset 2 days

console.log(new FuzzyDate1(2015, 12, 18)); // will either be 17th or 19th of December 2015
console.log(new FuzzyDate2(2015, 12, 18)); // will either be 16th or 20th of December 2015

```

