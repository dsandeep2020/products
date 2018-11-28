# products

CLICK BELOW LINK TO ACCESS THE APP. Its deployed in # FIREBASE.

https://productratings-6bd97.firebaseapp.com/

# PROBLEM STATEMENT

Pick your top 10+ fav books, movies, video games, food, or whatever you
wish. Build an Angular + ngrx/store or react-redux app that lists these
items. Initial list of any of these item can be stored in json file no
need to write a backend service.
2. Create a rating system where you can rate each item. Order the list by
the highest rated item to lowest rated item. Re-order the list, if needed,
when user ranks an item.
3. Using RxJS or any other library, randomly rate items at random times,
also re-ordering the list as necessary. To elaborate this more put a
button called RANDOM RATING and on click of this button code will start
rating random item at random time with random rating. And on same button
press again it will stop random rating.
4. Feel free to use any UI elements or library.
5. Focus on test driven approach while coding this assignment.
6. Git repo with commit messages will be a plus.

# TECHNOLOGIES
   1. Angular 7
   2. Nodejs
   3. ngrx store
   4. Firebase hosting

# INSTALATION
   1. Download node from (https://nodejs.org/en/download/) Install Node 
   2. Install angular CLI latest (https://github.com/angular/angular-cli/wiki)
   3. Get inside product-ratings folder.
   4. Type ng serve -o
   
# RESOLUTION

Step 1 –  Create Angular project using angular CLI (Product-ratings)

Step 2 – Create a model that defines the product. (/models/product.model.ts)

Step 3 – Define actions. /actions/Product.action.ts
       -	There are 2 major actions
          i.	RANK_PRODUCT (select any one product and give it a rank/rating)
          ii.	RANDOM_RANK_PRODUCT (randomly rank/rating all products)

Step 4 – Create Reducers. /reducers/product.reducer.ts
    The store is initialized by App.component.ts by reading JSON from a json file.
    
    i.	For action RANK_PRODUCT : 
      User clicks on star that gives rating to one product. It Changes the rating property rating.component.ts. 
      Then it passes the updated product to Store.
      This Updated product is modified in the store. Then it returns the updated State of Store.
      
    ii.	For action RANDOM_RANK_PRODUCT : It returns all products. 
         User Clicks on the Ranom Order button. It changes all rating/rank property of all product in read.products.component.ts.
         Then it passes the updated product collections to Store.
         This dispatch to store that simply returns the current state of store (Updated products).
        
Step 5 – Generate component read.products.component.ts
    i.	It reads curent state all products from Store in the constructor.
    ii.	sortCollection method  - It is used to ensure the products are sorted using ratings/rank.
    iii.	onClickToggle method   - User clicks on Random product button. 
        o	It changes the button label and randomly assign rating to each product and then dispatch to store with RANDOM_RANK_PRODUCT               actions which returns the state of the store with updated collection of products.
        
        o	If clicked again then it changes the label and invokes the store and brings the default set of products with its existing               rank/ratings. 

Step 6. Generate component rating.component.ts
      i.	This is triggered for every product from read.product.component.ts , then based on rating value it sets the Star Mark. This also allows user to rank product at each product level.
      ii.	 onClick method in rating.component.ts, changes the selected product ratings and then dispatch to store to update the productlist. 
      iii.	This invokes RANK_PRODUCT which finds the product in store by Id and change ratings, then returns the new state.

Step 7. App.component.ts – This initializes default product list.

Step 8. Configure all components in app.module.ts

Step 9: app.state.ts interface defines the reducer action.

#TEST CASES
  1. AppComponent
      -  should create the app
         : Component got created successfully.
      -  Store have been called.
          : Mock the Store and it checks Store called or not.
      -  Store have been called only once.
          : Mock the Store and it checks Store called only once or not.
      -  Store have been called with product JSON.
          : Mock the Store and it checks Store called with the given Product collections or not.
          
  2. read-products component
      - should create
          : Component got created successfully.
      - sort collection
          : sortCollection method, takes an array and verifies it is sorting items based on rating/rank or not.
      - on click toggle - Enable random order
          : On click if random order,it checks status changed or not.
      - on click toggle - Disable random order
          : On click if random order,it checks status changed or not.
      - on click toggle - Enable Random order - Random Order for ratings.
          : sortProductsRandomly Method It checks ratings are assigned randomly or not.
      - on click toggle - Disable Random order - Random Order for ratings.
          : resetRandomSorting Method It check ratings/rank are default back to the initial state or not.
          
    3. rating Component
      
      - should create
           : Component got created successfully.
      - Rank Product on clicking on Star.
           : onClick Method veifies the passed in product rating modified or not.
      - Set input name
           : ngOnInit Method veifies the Changed input name values.
     4. Reducer
      
       - empty state products
           : reducer constructor returns the default state of the Store.
       - Rank products
           : reducer constructor takes one product as input. It verifies the returnd product list has input product or not. IT chakes  via rating attribute value.
       - Random Rank products
            : reducer constructor takes one product collection as input. It verifies the returnd product collection is same or not.
           
       
