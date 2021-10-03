function getValue(id) {
    document.getElementById(id+"Cost").innerText =0;
}
function updateValue(id,price){
    document.getElementById(id+"Cost").innerText = price;
    totalPrice();
}

function totalPrice(){
    const bestPrice = parseInt(document.getElementById("bestPrice").innerText);
    const memoryCost = parseInt(document.getElementById("memoryCost").innerText);
    const storageCost =parseInt (document.getElementById("storageCost").innerText);
    const deliveryCost = parseInt (document.getElementById("deliveryCost").innerText);
    const totalPrice = bestPrice + memoryCost +storageCost +deliveryCost;
    document.getElementById("totalCost").innerText= totalPrice;
}

document.getElementById("defaultMemory").addEventListener('click', function(){
    getValue("memory");
});
document.getElementById("defaultMemoryTwo").addEventListener('click', function(){
    updateValue("memory",180);
});
document.getElementById("defaultStorage").addEventListener('click', function(){
    getValue("storage");
    
});
document.getElementById("defaultStorageTwo").addEventListener('click', function(){
    updateValue("storage",100);
});
document.getElementById("defaultStorageThree").addEventListener('click', function(){
    updateValue("storage",180);
});
document.getElementById("defaultDelivery").addEventListener('click', function(){
    getValue("delivery");
});
document.getElementById("defaultDeliveryTwo").addEventListener('click', function(){
    updateValue("delivery",20);
});

document.getElementById("btnInput").addEventListener('click', function(){
 const inputBtn = document.getElementById("input").value;
 if( inputBtn == 'puja'){
   const updatePrice = document.getElementById("totalCostTwo");
   const discount = updatePrice * 0.20;
 }
else{
    alert('Give your promo code!')
}
})