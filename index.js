// Code your solution in this file!
const returnFirstTwoDrivers = function (drivers)
{
return drivers.slice(0,2);
};

const returnLastTwoDrivers = function (driver){
return driver.slice(-2);
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier= function (integer)
{
    return function (fare){
    return fare *integer;
}
}

const fareDoubler = function (createFareMultiplier){
    return createFareMultiplier*2;
}

const fareTripler = function (createFareMultiplier){
    return createFareMultiplier*3;
}

const selectDifferentDrivers = function (drivers,driver)
{
    return driver(drivers);
}
BeforeAll((done)=>{
    done();
} ,1000);