function countDown(number) {
    if (number <= 0) {
        console.log('Countdown complete!');
        return;
    }
    console.log(number);
    countDown(number - 1)
}

countDown(10);