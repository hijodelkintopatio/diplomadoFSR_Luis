
// Select the database to use.
use('Northwind');

// 1. Mostrar los productos de las categorías 1, 3 y 7

db.categories.find(
  {
    CategoryID:
    {
      $in:[1,3,7]
    }
  }
).pretty()


//Mostrar las ventas cuyo id sea el 10248, 10250 y 10253

db.orders.find(
  {
    OrderID:
    {
      $in:[10248,10250,10253]
    }
  }
).pretty()

// Mostrar a los empleados que NO provengan de la
//ciudad de Seattle, Tacoma y Kirkland

db.employees.findOne()

db.employees.find(
  {
    City:
    {
      $nin:["Seattle","Tacoma","Kirkland"]
    }
  }
).pretty()

//Mostrar a los empleados que NO sean representantes  de ventas

db.employees.find(
  {
    Title:
    {
      $nin:["Sales Representative"]
    }
  }
).pretty()

// Mostrar los productos que incluyan el texto Chef Anton’s
db.products.findOne()
db.products.find(
  {
    ProductName:
    /^Chef/
  }
)
