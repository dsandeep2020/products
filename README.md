# products

PROBLEM STATEMENT

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

RESOLUTION

Step 1 –  Create Angular project using angular CLI (Product-ratings)
Step 2 – Create a model that defines the product. (/models/product.model.ts)
Step 3 – Define actions. /actions/Product.action.ts
       -	There are 2 major actions
          i.	RANK_PRODUCT 
          ii.	RANDOM_RANK_PRODUCT

Step 4 – Create Reducers. /reducers/product.reducer.ts
    i.	For action RANK_PRODUCT : It finds the product based on product Id and updates the rating and returns all products.
    ii.	For action RANDOM_RANK_PRODUCT : It returns all products. 
        Rating/Ranks are modified in (read-product-component.ts) and then dispatch to store that returns all products.
        
Step 5 – Generate component read.products.component.ts
    i.	It reads all products from Store in the constructor, Store is being initialized by app.componet.ts.
    ii.	sortCollection method in read.products.component.ts is being used to ensure the products are sorted using ratings.
    iii.	onClickToggle method in read.products.component.ts is being invoked from read.products.component.html on click of Random product button. 
        o	It changes the button label and randomly assign rating to each product and then dispatch to store with RANDOM_RANK_PRODUCT actions which returns the state.
        o	If clicked again then it changes the label and invokes the store and brings the default set of products with its existing rank. 

Step 6. Generate component rating.component.ts
      i.	This is triggered for every product from read.product.component.ts with product, then based on rating value it sets the Star Mark. This also allows user to rank product at each product level.
      ii.	 onClick method in rating.component.ts, changes the selected product ratings and then dispatch to store to update the productlist. 
      iii.	This invokes RANK_PRODUCT which finds the product in store by Id and change ratings, then returns the new state.
Step 7. App.component.ts – This initializes default product list.
Step 8. Configure all components in app.module.ts
Step : app.state.ts interface defines the reducer action.
