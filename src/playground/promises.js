const promise = new Promise((res, rej) => {
  setTimeout(() => {
    res({
      firstName: "Gavin",
      age: 20,
    });
    // rej("Something went wrong!!!");
  }, 5000);
});

console.log("before");

promise
  .then((data) => {
    console.log("1", data);
    return new Promise((res, rej) => {
      setTimeout(() => {
        res("This is my other promise");
      }, 5000);
    });
  })
  .then((str) => {
    console.log("Does this run?", str);
  })
  .catch((err) => {
    console.log("err:", err);
  });

console.log("after");
