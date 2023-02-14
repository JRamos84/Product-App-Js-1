class Product {
  constructor(name, price, year) {
    (this.name = name),
     (this.price = price),
      (this.year = year);
  }
  
}

class UI {
    addProduct(product){
      const productList = document.getElementById('product-list');
      const element = document.createElement('div');
      element.innerHTML = `
        <div class ='card text-center mb-4'>
          <div class ="card-body">
              <strong>Product:</strong> ${product.name}
              <strong>Product Price:</strong> ${product.price}
              <strong>Product Year:</strong> ${product.year}
              <a href = "#" name = "delete" class = "btn btn-danger">delete</a>
          </div>
          
        </div>
      `;
      productList.appendChild(element);
    }

    resetForm(){
      document.getElementById('product-form').reset();
    }

    deleteProduct(element){
      console.log(element.name)
      if(element.name === 'delete'){
        
        element.parentElement.parentElement.parentElement.remove();
      }

    }
    showMessage(message, ){
        
    }
}

//DOM events
document.getElementById('product-form')
  .addEventListener('submit',(e)=>{
    const name = document.getElementById('name').value;
    const price =  document.getElementById('price').value;
    const year =  document.getElementById('year').value;

    const product=new Product(name, price, year);
    const ui =  new UI();
    ui.addProduct(product);
    ui.resetForm();
    e.preventDefault();      

})

document.getElementById('product-list').addEventListener('click',(e)=>{
  const ui = new UI();
  ui.deleteProduct(e.target);
})