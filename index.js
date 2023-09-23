const randomColor = () => {
  const hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

let intervalId;
const startChangingMe = () => {
  const changeBg = () => {
    document.body.style.backgroundColor = randomColor();
  };
  if (!intervalId) {
    intervalId = setInterval(changeBg, 1000);
  }
};

const stopChangingMe = () => {
  clearInterval(intervalId);
  intervalId = null;
};

const start = document.querySelector("#start");
start.addEventListener("click", () => {
  startChangingMe();
});

const stop = document.querySelector("#stop");
stop.addEventListener("click", () => {
  stopChangingMe();
});
