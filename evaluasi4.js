var capitalize = function (string) {
    if (arguments.length === 1) {
        return string.toUpperCase();
    } else {
        return arguments.map(function (el) { return el.toUpperCase(); });
    }
}

document.write(capitalize('hello'))


document.write('<br>')
document.write('===SOAL 5 ===')
document.write('<br>')