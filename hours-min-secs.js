function hms(date1, date2) {
    let dateV1 = new Date(date1);
    let dateV2 = new Date(date2);

    let diff = Math.abs(dateV1 - dateV2);
    let hours = Math.floor(diff / (1000 * 60 * 60));
    let minutes = Math.floor(diff / (1000 * 60)) % 60;
    let seconds = Math.floor(diff / (1000)) % 60;

    return { hrs: hours, min: minutes, sec: seconds };
}

console.log(hms('2000/01/01 11:00:00', '2000/01/01 08:45:10'));