const branduri = [
  {},

  {
    Id: "2",
    Titlu: "Alpina",
    Image: "logo_categorii/alpina.png",
    Href: "masini/alpina/alpina.html",
  },

  {
    Id: "3",
    Titlu: "Aro",
    Image: "logo_categorii/aro.png",
    Href: "masini/aro/aro.html",
  },

  {
    Id: "4",
    Titlu: "Aston Martin",
    Image: "logo_categorii/aston.png",
    Href: "masini/aston_martin/aston.html",
  },
];

function branduri2() {
  output += `
    <!-- Alfa Romeo -->
    <a id="alfa" href="masini/alfa_romeo/alfa_romeo.html">  
     <img
       class="m-3 logomasini"
       src="logo_categorii/alfa.png"
       
     />
   </a>
 <!-- Alpina -->
   <a id="alpina" href="masini/alpina/alpina.html">  
     <img
       class="m-3 logomasini"
       src="logo_categorii/alpina.png"
       
   />
 </a>
 <!-- Aro -->
   <a id="aro" href="masini/aro/aro.html">  
     <img
       class="m-3 logomasini"
       src="logo_categorii/aro.png"
       
   />
 </a>
 <!-- Aston Martin -->
   <a id="aston" href="masini/aston_martin/aston.html">  
     <img
       id="aston"
       class="m-3 logomasini"
       src="logo_categorii/aston.png"
       
   />
 </a>
 <!-- Audi -->
   <a id="audi" href="masini/audi/audi.html">
     <img
       class="m-3 logomasini"
       src="logo_categorii/audi.png"
       
   />
   </a>
   <!-- Bentley -->
     <a id="bentley" href="masini/bentley/bentley.html">  
       <img
         class="m-3 logomasini"
         src="logo_categorii/bentley.png"
         
     />
   </a>
 <!-- BMW -->
   <a id="bmw" href="masini/bmw/bmw.html">
     <img
       class="m-3 logomasini"
       src="logo_categorii/bmw.png"
       
   />
   </a>
   <!-- Bugatti -->
     <a id="bugatti" href="masini/bugatti/bugatti.html">
       <img
         class="m-3 logomasini"
         src="logo_categorii/bugatti.png"
         
     />
     </a>
 <!-- Chevrolet -->
   <a id="chevrolet" href="masini/chevrolet/chevrolet.html">
     <img
       class="m-3 logomasini"
       src="logo_categorii/chevrolet.png"
       
   />
   </a>
 <!-- Citroen -->
   <a id="citroen" href="masini/citroen/citroen.html">
     <img
       class="m-3 logomasini"
       src="logo_categorii/citroen.png"
       
   />
   </a>
 <!-- Dacia -->
 <a id="dacia" href="masini/dacia/dacia.html">
   <img
     class="m-3 logomasini"
     src="logo_categorii/dacia.png"
     
   />
 </a>
  <!-- Dodge -->
  <a id="dodge" href="masini/dodge/dodge.html">  
   <img
     class="m-3 logomasini"
     src="logo_categorii/dodge.png"
     
   />
 </a>
 <!-- Ferrari -->
   <a id="ferrari"f href="masini/ferrari/ferrari.html">
     <img
       class="m-3 logomasini"
       src="logo_categorii/ferrari.png"
       
   />
   </a>
 <!-- Fiat -->
 <a id="fiat" href="masini/fiat/fiat.html">
   <img
     class="m-3 logomasini"
     src="logo_categorii/fiat.png "
     
   />
 </a>
 <!-- Ford -->
 <a id="ford" href="masini/ford/ford.html">
   <img
     class="m-3 logomasini"
     src="logo_categorii/ford.png"
     
   />
 </a>
 <!-- Honda -->
 <a id="honda" href="masini/honda/honda.html">
   <img
     class="m-3 logomasini"
     src="logo_categorii/honda.png"
     
   />
 </a>
 <!-- Hummer -->
 <a id="hummer" href="masini/hummer/hummer.html">
   <img
     class="m-3 logomasini"
     src="logo_categorii/hummer.png"
     
   />
 </a>
 <!-- Infiniti -->
 <a id="infiniti" href="masini/infiniti/infiniti.html">
   <img
     class="m-3 logomasini"
     src="logo_categorii/infiniti.png"
     
   />
 </a>
    `;
}

document.getElementById("test").innerHTML = output;
