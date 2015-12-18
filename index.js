module.exports = function(offset){

    // http://stackoverflow.com/questions/6075231/how-to-extend-the-javascript-date-object/30882416#30882416
    function FuzzyDate(a, b, c, d, e, f, g) {
        var originalDate;

        switch (arguments.length) {
            case 0:
                originalDate = new Date();
                break;
            case 1:
                originalDate = new Date(a);
                break;
            case 2:
                originalDate = new Date(a, b);
                break;
            case 3:
                originalDate = new Date(a, b, c);
                break;
            case 4:
                originalDate = new Date(a, b, c, d);
                break;
            case 5:
                originalDate = new Date(a, b, c, d, e);
                break;
            case 6:
                originalDate = new Date(a, b, c, d, e, f);
                break;
            default:
                originalDate = new Date(a, b, c, d, e, f, g);
        }

        var fuzzyDate = Math.random(Date.now()) > 0.5 ? new Date(+originalDate + offset) : new Date(+originalDate - offset);

        fuzzyDate.__proto__ = FuzzyDate.prototype;

        return fuzzyDate;
    }

    FuzzyDate.prototype.__proto__ = Date.prototype;

    return FuzzyDate;
};