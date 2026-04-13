function varTest() {
    if (true) {
        var a = 10;
        console.log('Inside Block: ', a);  // Yes
    }
    console.log('Outside Block: ', a);  // Yes
}
varTest();

// even though a is declared inside a block, its scope is not restricted to a block