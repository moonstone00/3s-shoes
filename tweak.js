console.log("tweak");

// const intro = document.getElementById('intro')
const container = document.getElementById("container");
const cta = document.getElementById("cta");
const product1 = document.getElementById("product1");
const wrapper = document.getElementById("wrapper");
const newBox = document.getElementById("newBox");
const productBox1 = document.getElementById("productBox1");
const productBox2 = document.getElementById("productBox2");
const productBox3 = document.getElementById("productBox3");
const productBox4 = document.getElementById("productBox4");
const productBox5 = document.getElementById("productBox5");
const productBox6 = document.getElementById("productBox6");
const footer = document.getElementById("footer");

// function callButton() {
//   console.log(intro)
//   intro.style.display = "none"
//   console.log('calling a button')
// }

function callBack() {
  newBox.style.display = "none";
  productBox1.style.display = "none";
  productBox2.style.display = "none";
  productBox3.style.display = "none";
  productBox4.style.display = "none";
  productBox5.style.display = "none";
  productBox6.style.display = "none";
  wrapper.style.display = "";
  footer.style.display = "";
}

function getDetail(nomor) {
  console.log("product:", nomor);
  newBox.style.display = "block";
  wrapper.style.display = "none";

  if (nomor === 1) {
    productBox1.style.display = "flex";
    cta.style.display = "none";
    footer.style.display = "none";
  } else if (nomor === 2) {
    productBox2.style.display = "flex";
    cta.style.display = "none";
    footer.style.display = "none";
  } else if (nomor === 3) {
    productBox3.style.display = "flex";
    cta.style.display = "none";
    footer.style.display = "none";
  } else if (nomor === 4) {
    productBox4.style.display = "flex";
    cta.style.display = "none";
    footer.style.display = "none";
  } else if (nomor === 5) {
    productBox5.style.display = "flex";
    cta.style.display = "none";
    footer.style.display = "none";
  } else if (nomor === 6) {
    productBox6.style.display = "flex";
    cta.style.display = "none";
    footer.style.display = "none";
  }
}
