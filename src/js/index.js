/* 

REQUIRED CAT API KEY:
request https://thecatapi.com/signup

REQUIRED INSTALL
download: https://www.postman.com/downloads/


 App Start Up 
   1 Get data needed for initial display
      - save data as models on the client
      - try to minmize number of request wherever possible
      - caching requests
   2 Create the views required for initial display
      - nav
      - page header
      - main content body
   3 Add views to display

*/
const Cat = {
   store: [],
   setCat: (data)=>{
      this.store = [...data]
   },
   getCat: ()=>{
      return this.store;
   }
}

// const temp = {name: "jim", age: 12, crazy: true};
// const [a, b, c] = [1,2,3];
// const {name} = temp;
// const items = Object.keys(temp);
// const vals = Object.values(temp);
// const x = items.map((item)=>{
//    console.log(item);
// })
 