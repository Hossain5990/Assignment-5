


const allSeat = document.getElementsByClassName('kbd');
let cnt = 0;
for (const seat of allSeat) {
  seat.addEventListener("click", function (e) {
    if( cnt < 4 && !seat.classList.contains('booked')){

      
      // set click button color
    e.target.classList.add('bg-green-400');
    // seat count
    seat.classList.add('booked');
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
    p2.innerText = 'Economy';
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

    // disable button on off
    if(cnt >= 4){
      cuponBtn.disabled = false;
  
    }
    else{
      cuponBtn.disabled = true;
    }
  
  }

  else{
    alert("1 person only 4 Seat Booked");
  }


    

  });
}




// set function
function setElement(id, value) {

  document.getElementById(id).innerText = value;

}

// cupon code set

const cuponBtn = document.getElementById('cupon-btn');

cuponBtn.addEventListener('click', function () {

  const cuponCode = document.getElementById('cupon-input').value;
  const totalPrice = document.getElementById('total').innerText;
  const grandTotal1 = parseInt(document.getElementById('grand-total').innerText);
  if (cnt >= 4) {
    if (cuponCode === "NEW15") {
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
      const cuponInput = document.getElementById('cupon-input1');
      cuponInput.classList.add('hidden');

    }
    else if(cuponCode === "Couple 20"){
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
      const cuponInput = document.getElementById('cupon-input1');
      cuponInput.classList.add('hidden');

    }
    else {
      alert("Invalid Coupon Code");
      document.getElementById('cupon-input').value = "";
    }
  }
  else {
    alert("Buy 4 Ticket");
  }

  


});
