/*
setTimeout(()=>{
  process.stdout.write('\r|   ');
}, 100)

setTimeout(()=>{
  process.stdout.write('\r/   ');
}, 300);

setTimeout(()=>{
  process.stdout.write('\r-   ');
}, 500);

setTimeout(()=>{
  process.stdout.write('\r\\   ');
}, 700);

setTimeout(()=>{
  process.stdout.write('\r|   ');
}, 900)

setTimeout(()=>{
  process.stdout.write('\n');
}, 1000)
*/

const arr = ['\r|   ', '\r/   ', '\r-   ','\r\\   ', '\r|   ', '\n'];

for (let i = 0; i < arr.length; i++){
  setTimeout(()=>{
    process.stdout.write(arr[i]);
  }, (i*200+100));
}