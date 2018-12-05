const express = require('express');
const app = express();

//three additional URL parameters: /peek, /enqueue, and /dequeue.
// the end of the array will represent the front of the queue.
let resp1 = {
 status: "success",
 data: `${lastPersonInArr}`
};
app.get("/queue/peek", (req, res) => {
  req.peek = resp1;
});

let resp2 = { //Adding another person into the array.
  status: "success",
  enqueued: "elle"
};
app.get("/queue/enqueue", (req, res) => {
  req.enqueue = resp2; //end of the query and top of the arr
  res.json(res.query)
});

let resp3 = { //deleting the person (last person in the array)
  status: "success",
  dequeued: `${lastPersonInArr}`
};
app.get("/queue/dequeue", (req, res) => {
  req.dequeue = resp3;
  res.json(res.query)
});

app.listen(3000, () => {
  console.log("listening to QueueManager, port 3000");
});
