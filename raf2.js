// function budgetCalculator(watch, phone, laptop) {
//     let watchPrice = 50;
//     phonePrice = 100;
//     laptopPrice = 500;
//     var totalPrice = (watch*watchPrice) + (phone*phonePrice) + (laptop*laptopPrice);
//     return totalPrice ;
// }

// * partThree(hotelCost)

function hotelCost(Day) {
    var totalCost = 0;
    if (Day <= 10) {
        totalCost = Day * 100;
    }
    else if (Day <= 20) {
        let firstTenDays = 10 * 100;
        remainingDays = Day - 10;
        secendTenDays = remainingDays * 80;
        totalCost = firstTenDays + secendTenDays;
    }
    else{
        let firstTenDays = 10 * 100;
        secendTenDays = 10 * 80;
        remainingDays = Day - 20;
        nextDays = remainingDays * 50;
        totalCost = firstTenDays + secendTenDays + nextDays;
    }
    return totalCost;
}
var count = hotelCost(12);
console.log(count)