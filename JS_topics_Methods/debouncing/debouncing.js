// Debouncing
// Debouncing is a technique where you delay the execution of a function until after a certain amount of time has passed. This is useful if you have a frequently used function—say, a scroll or resize event listener—and don’t want to trigger it too frequently because that might slow down the browser.

// No matter how many times the user fires the event, the connected function will only run once the user stops firing the event, according to the Debouncing approach. Ex: Imagine that a user clicks a button five times in the space of 100 milliseconds. That function won’t be called during debouncing. If the debouncing time is 2000 milliseconds after the user has ceased clicking, the function will be called 2000 milliseconds later.

// Advantages:
// Decreases the frequency with which a function is invoked, which can enhance performance and avoid pointless effort.
// Prevents pointless network and API requests, which can conserve resources and cut expenses.
// This can be utilized to handle frequent occurrences, such as scrolling or resizing, without taxing the system.
// Disadvantages:
// This may cause a function to take longer to complete, which might be problematic when a quick answer is needed. The result can in missed events if the debounce time is too long.
// Implement of Debouncing :
// function debounce(func, delay) {
//     let timerId;
//     return function () {
//         const context = this;
//         const args = arguments;
//         clearTimeout(timerId);
//         timerId = setTimeout(function () {
//             func.apply(context, args);
//         }, delay);
//     };
// }
// Example: In this example, we will use debouncing approach.

function delayFuncExec() {
  console.log('I AM GFG ');
}

let timerId = setTimeout(delayFuncExec, 1000);

console.log('Timer Id: ' + timerId);
