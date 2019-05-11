function jumpingOnClouds(c) {
    let stepCount = 0;
    for (let i = 0; i <= c.length; ) {
        if (c[i + 2] === 0) {
            i += 2;
            stepCount++;
        } else if (c[i + 1] === 0) {
            i += 1;
            stepCount++;
        } else {
            i += 1;
        }
    }
    return console.log(stepCount);
}

jumpingOnClouds([0, 1, 0, 1, 1, 1, 1, 0, 1]);
