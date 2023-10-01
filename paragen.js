const input = document.getElementById("numOfwords");
const container = document.querySelector(".container");

const getWords = (n) => {
  const alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let text = "";

  for (let i = 0; i < n; i++) {
    const random = (Math.random() * (alpha.length - 1)).toFixed(0);

    text += alpha[random];
  }
  return text;
};

let numOfwords;

const getData = () => {
  numOfwords = Number(input.value);
  if (numOfwords > 0) {
    let text = "";
    for (let i = 0; i < numOfwords; i++) {
      const random = (Math.random() * 15).toFixed(0);

      text += getWords(random);
      text += " ";
    }

    const para = document.createElement("p");
    para.innerText = text;
    para.setAttribute("class", "paras");
    container.append(para);
  } else {
    alert("Enter value Greater Than 0");
  }
};
