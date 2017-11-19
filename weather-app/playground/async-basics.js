console.log('Starting app');
setTimeout(() => {
    console.log('Event')
}, 2000);

setTimeout(() => {
    console.log('Event 2')
}, 0);
console.log('Fisihing app');