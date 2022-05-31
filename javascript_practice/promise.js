let examPass = false;

// let parentPromise = new Promise(function (resolve, rejects) {
//   setTimeout(function () {
//     if (examPass) {
//       resolve("Laptop");
//     } else {
//       rejects("Nothing");
//     }
//   }, 5000);
// });
// console.log("pending");

// parentPromise.then(function (resolve) {
//   console.log("resolve:", resolve);
// });

// parentPromise.catch(function (reject) {
//   console.log("reject:", reject);
// });

async function parentPromise() {
  let passExam = true;
  try {
    let response = await fetch(passExam);
    let data = await response.json();
    console.log(data);
  } catch (e) {
    console.log("err:", e);
  }
}
parentPromise();

// // async function data() {
//     let url = "https://randomuser.me/api";
//     try {
//       let response = await fetch(url);
//       let data = await response.json();
//       showData(data.results);
//       console.log("data:", data);
//     } catch (e) {
//       console.log("err:", e);
//     }

//     // expected output: "resolved"
//   }
//   data();
