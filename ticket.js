
const allSeat = document.getElementsByClassName('kbd');
cnt = 0;
for(const seat of allSeat){
    seat.addEventListener("click",function(e){
        // set click button color
        e.target.classList.add('bg-green-400');
        // seat count
      cnt = cnt+1;
      setElement('ticket-count',cnt);

    //   seat less count
    const seatLess = parseInt(document.getElementById('seat-count').innerText);
    const seatRemaining = seatLess-1;
    setElement('seat-count',seatRemaining);


// seat list update
      const seatName = e.target.innerText;
    const price = document.getElementById('price').innerText;
    const convertedPrice = parseInt(price);
    
    const createList =document.getElementById('create-container');
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
    setElement('total',updatedTotal);

    // grand total

    const grandTotal = parseInt(document.getElementById('grand-total').innerText);
    const updatedGrandTotal = grandTotal + convertedPrice;
    setElement('grand-total',updatedGrandTotal);

    });
}

function setElement(id,value){

    document.getElementById(id).innerText = value;

}