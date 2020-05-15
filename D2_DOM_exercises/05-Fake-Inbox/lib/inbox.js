/* eslint-disable no-multiple-empty-lines */

const hasNewMessage = () => {
  // TODO: return true with a probability of 20%.
  // return (newM[Math.floor(Math.random() * newM.length)]);
  return Math.random() < 0.2;
};

const newMessage = () => {
  // TODO: return a random message as an object with two keys, subject and sender
  var message = ["Six important about Covid-19 latest news?", "How to code in a better way?", "Are you improving, good to go?"];
  var send = ["Ruby Monday", "John", "Harry Janes"];
  var samp1 = message[Math.floor(Math.random() * message.length)];
  var send1 = send[Math.floor(Math.random() * send.length)];
  return {
    subject: samp1,
    sender: send1
  };

};

const appendMessageToDom = (message) => {
  // TODO: append the given message to the DOM (as a new row of `#inbox`)
  const markUp = ` 
    <div class="row message unread">
      <div class="col-3">${message.sender}</div>
      <div class="col-9">${message.subject}</div>
    </div>
  `;

  document.getElementById("inbox").insertAdjacentHTML("afterbegin", markUp);

};


function updateUnreadCounter() {

  var count = document.querySelectorAll(".unread").length;
  document.getElementById("count").innerHTML = `(${count})`;

}



const refresh = () => {
  // TODO: Implement the global refresh logic. If there is a new message,
  //       append it to the DOM. Update the unread counter in title as well.
  if (hasNewMessage()) {
    appendMessageToDom(newMessage());
  }
  updateUnreadCounter();
};



// Do not remove these lines:
document.addEventListener("DOMContentLoaded", () => {
  setInterval(refresh, 2000); // Every 1 second, the `refresh` function is called.
});

module.exports = {
  hasNewMessage,
  newMessage
};
