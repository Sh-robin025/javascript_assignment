
// * partOne(kilometarToMetar)

function kilometarToMetar(kilometar) {
    var metar = kilometar*1000;
    return metar;
}

// * partTwo(budgetCalculator)

function budgetCalculator(watch, phone, laptop) {
    var watchPrice = 50;
    var phonePrice = 100;
    var laptopPrice = 500;
    var totalPrice = (watch*watchPrice) + (phone*phonePrice) + (laptop*laptopPrice);
    return totalPrice ;
}

// * partThree(hotelCost)

function hotelCost(Day) {
    var totalCost = 0;
    if (Day <= 10) {
        totalCost = Day * 100;
    }
    else if (Day <= 20) {
        var firstTenDays = 10 * 100;
        var remainingDays = Day - 10;
        var secendTenDays = remainingDays * 80;
        var totalCost = firstTenDays + secendTenDays;
    }
    else{
        var firstTenDays = 10 * 100;
        var secendTenDays = 10 * 80;
        var remainingDays = Day - 20;
        var nextDays = remainingDays * 50;
        var totalCost = firstTenDays + secendTenDays + nextDays;
    }
    return totalCost;
}

// partFour(megaFriend)

function megaFriend(friends){
var length = 0;
var longestFriend;
for ( i = 0; i < friends.length; i++){
    if (friends[i].length>length) {
        var length = friends[i].length;
        longestFriend = friends[i];
        }
    }
    return longestFriend
}