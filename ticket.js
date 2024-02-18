
// connect buy ticket to bus seat
function connectTicket() {

  const busPariahan = document.getElementById('paribahan');


}




const allSeat = document.getElementsByClassName('kbd');
let cnt = 0;
for (const seat of allSeat) {
  seat.addEventListener("click", function (e) {
    // set click button color
    e.target.classList.add('bg-green-400');
    // seat count
    cnt = cnt + 1;
    setElement('ticket-count', cnt);

    //   seat less count
    const seatLess = parseInt(document.getElementById('seat-count').innerText);
    const seatRemaining = seatLess - 1;
    setElement('seat-count', seatRemaining);


    // seat list update
    const seatName = e.target.innerText;
    const price = document.getElementById('price').innerText;
    const convertedPrice = parseInt(price);

    const createList = document.getElementById('create-container');
    const li = document.createElement('li');
    const p = document.createElement('p');
    p.innerText = seatName;
    const p2 = document.createElement('p');
    p2.innerText = 'Economyclass';
    const p3 = document.createElement('p');
    p3.innerText = price;
    li.appendChild(p);
    li.appendChild(p2);
    li.appendChild(p3)
    createList.appendChild(li);

    // total count

    const total = document.getElementById('total').innerText;
    const convertedTotal = parseInt(total);

    const updatedTotal = convertedTotal + convertedPrice;
    setElement('total', updatedTotal);

    // grand total

    const grandTotal = parseInt(document.getElementById('grand-total').innerText);
    const updatedGrandTotal = grandTotal + convertedPrice;
    setElement('grand-total', updatedGrandTotal);

    





    

  });
}





function setElement(id, value) {

  document.getElementById(id).innerText = value;

}

// cupon code set

const cuponBtn = document.getElementById('cupon-btn');

cuponBtn.addEventListener('click', function () {

  const cuponCode = document.getElementById('cupon-input').value;
  const cuponCodes = cuponCode.split(" ").join("").toUpperCase();
  console.log(cuponCodes);
  const totalPrice = document.getElementById('total').innerText;
  const grandTotal1 = parseInt(document.getElementById('grand-total').innerText);
  if (cnt >= 4) {
    if (cuponCodes === "NEW15") {
      const createList1 = document.getElementById('create-container1');
      const li = document.createElement('li');
      const p = document.createElement('p');
      p.innerText = "Discount Price";
      const p2 = document.createElement('p');
      const discountPrice = totalPrice * 0.15;
      console.log(discountPrice);
      p2.innerText = discountPrice;
      li.appendChild(p);
      li.appendChild(p2);
      createList1.appendChild(li);
      const restTotal = document.getElementById('grand-total');
      restTotal.innerText = grandTotal1 - discountPrice;
      document.getElementById('cupon-input').value = "";

    }
    else if (cuponCodes === "COUPLE20") {
      const createList1 = document.getElementById('create-container1');
      const li = document.createElement('li');
      const p = document.createElement('p');
      p.innerText = "Discount Price";
      const p2 = document.createElement('p');
      const discountPrice = totalPrice * 0.20;
      console.log(discountPrice);
      p2.innerText = discountPrice;
      li.appendChild(p);
      li.appendChild(p2);
      createList1.appendChild(li);
      const restTotal = document.getElementById('grand-total');
      restTotal.innerText = grandTotal1 - discountPrice;

      document.getElementById('cupon-input').value = "";


    }
    else {
      alert("Invalid Coupon");
      document.getElementById('cupon-input').value = "";
    }
  }
  else {
    alert("Buy 4 Ticket");
  }



});
