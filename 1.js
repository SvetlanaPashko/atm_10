let a = 1;
let b = 3;
let d = 18;

function test (number) {

    switch (number) {
        case (a | b):
            console.log('hello');
            break
        case d:
            console.log('mug');
            break
        default:
            console.log('hhh')
    }
}

test(a)

