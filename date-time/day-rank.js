function getRankOfDay (testDate) {
    let myDate = new Date(testDate);
    let yearDate = new Date(myDate.getFullYear(), 0, 0);

    let milli = myDate - yearDate;
    let day = milli / (1000 * 60 * 60 * 24);
    return Math.floor(day);
}

console.log(getRankOfDay('02/02/2019'));