import 'zone.js'

const b1 = document.getElementById('b1')
const b2 = document.getElementById('b2')

function main () {
    b1.addEventListener('click', bindSecondButton);
}

function bindSecondButton () {
    b2.addEventListener('click', throwError);
}

function throwError () {
    throw new Error('aw shucks');
}

Zone.current.fork(
    {
        name: 'basic',
        onHandleError: function (parentZoneDelegate, currentZone, targetZone, error) {
            console.log(error.stack);
            return true;
        }
    }
).run(main);
