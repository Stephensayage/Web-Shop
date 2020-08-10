## App Title: The WEBshop
## App Description: 
- An ecommerce site that will allow you to add items to your cart and checkout.
- I will be incorporating Marvel comics as the products available on the app.

## API: https://developer.marvel.com/
## API Snippet:
```{
    "code": 200,
    "status": "Ok",
    "copyright": "© 2020 MARVEL",
    "attributionText": "Data provided by Marvel. © 2020 MARVEL",
    "attributionHTML": "<a href=\"http://marvel.com\">Data provided by Marvel. © 2020 MARVEL</a>",
    "etag": "51d18fa780292b5c7fe02443d3a051e7d502af40",
    "data": {
        "offset": 0,
        "limit": 20,
        "total": 7,
        "count": 7,
        "results": [
            {
                "id": 41129,
                "digitalId": 0,
                "title": "New Avengers (2010) #17 (Mc 50th Anniversary Variant)",
                "issueNumber": 17,
                "variantDescription": "Mc 50th Anniversary Variant",
                "description": "The New Avengers are about to face their biggest threat...the revitalized, the resurrected, the rejuvenated H.A.M.M.E.R...led by none other than Norman Osborn.  What insanity is about to be unleashed on the world and what can the Avengers do to stop it?!",
                "modified": "2011-10-05T16:51:51-0400",
                "isbn": "",
                "upc": "5960607247-01721",
                "diamondCode": "",
                "ean": "",
                "issn": "0274-5240",
                "format": "Comic",
                "pageCount": 32,
                "textObjects": [
                    {
                        "type": "issue_solicit_text",
                        "language": "en-us",
                        "text": "The New Avengers are about to face their biggest threat...the revitalized, the resurrected, the rejuvenated H.A.M.M.E.R...led by none other than Norman Osborn.  What insanity is about to be unleashed on the world and what can the Avengers do to stop it?!"
                    }
],
```

## Wireframes: 
Home Page: https://wireframe.cc/546Sei 
Comics Page: https://wireframe.cc/gr0q5v 
Mobile view: https://wireframe.cc/LhVJKL

#### MVP:
- List ten superheros to choose from. The images will link to comics available for sale.
- Display comic name, date and price.
- Add to cart function and screen
#### Post-MVP:
- Checkout functionality
- Login
- Search field

## Goals

| Day | Deliverable | Status
|---|---| ---|
|Monday, 6/29| Map out project - Project approval | Completed
|Tuesday, 6/30| Create all my components | Completed
|Wednesday, 7/1| Set up Api. Creat code for generating comic and character information | Completed
|Thursday, 7/2| Advanced CSS and clean up code to ensure functionaily | Completed
|Friday, 7/3| Debugging | Completed

## SWOT Analysis:
- Strengths: I'm starting to understand hooks much better, I think I will try and stick to them throughout the project 
- Weaknesses: I'm not the fastest coder, so this may be more time consuming than I'm budgeting for.
- Opportunities: Trying something new with a checkout functionality.
- Threats: Creating the cart will be difficult but I have found some helpful resources.

## Timeframes

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: | :---: | :---: | :---: |
| Set up API functionaily | H | 6hr| 6hrs | 6hrs |
| Create components | H | 2hrs| 2hrs | 2hrs |
| Set up cart functionality | H | 6hrs| 8hrs | 8hrs |
| Incorporate API info into components  | H | 4hrs | 5hrs | 5hrs |
| Link components | M | 2hrs | 1hr | 1hr |
| Set parameters to comics | M | 2hrs | 1hr | 1hr |
| Style results | M | 3hrs | 4hr | 4hrs |
| Advanced CSS | L | 4hrs | 4hrs | 4hrs |
| Style mobile view | L | 4hrs | 3hrs | 3hrs |
| Total | H | 33hrs| 34hrs | 34hrs |

## Code Snippet
```
 function addToCart(item) {
    updateCart([...cart, item])
  }

  function removeItem(comic) {
    let index = cart.indexOf(comic)
    cart.splice(index, 1)
    updateCart([...cart])
  }
```

## Change Log
- Changed characters to only variations of spider-man/spider-girl
