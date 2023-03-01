const URL = process.argv[2],
    location = process.argv[3];
if (!URL || !location) {
    console.error('nije dodat URL ili lokacija');
}
console.log(URL);
console.log(location);