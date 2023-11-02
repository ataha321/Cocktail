cocktails = [
    {
        cocktails_name: "The Henessy G Code",
        dificulty_level: 1,
        ingredient: "Hennessy V.S, Lychee Juice (canned juice), St.Germaine™, Lime Juice", 
        info: "Lychee adds a floral pop to the smooth spice of Hennessy V.S for warm summer days. Craft your own and join us in a toast to excellence!",
        message: "Click for recipe!",
    },
    {
        cocktails_name: "HENNESSY NEGRONI",
        dificulty_level: 1,
        ingredient: "Hennessy V.S, Campari™, Sweet vermouth", 
        info: "An easy to make cocktail, Hennessy V.S.O.P is a novel twist on the beloved classic negroni by adding a touch of sweet spice to round out and elevate this go-to cocktail.",
        message: "Click for recipe!",
    },
    {
        cocktails_name: "BRAMBLE COCKTAIL",
        dificulty_level: 2,
        ingredient: "Hennessy V.S.O.P Privilège, Fresh Lemon Juice, 4 Blackberries or any other berry, Simple syrup, Chambord™", 
        info: "Enjoy a Hennessy V.S.O.P Privilège spin on this fresh springtime cocktail. It adds a gourmet twist to an already fresh, zesty concoction. Fresh berries add that certain je ne sais quoi.",
        message: "Click for recipe!",
    },
    {
        cocktails_name: "HENNESSY COLA COCKTAIL",
        dificulty_level: 1,
        ingredient: "Hennessy V.S, oz Cola, Lime Juice", 
        info: "High end lounge or cocktail bar that is not taking itself too seriously. This cocktail will surprise and delight, it is whimsical in its approach but has some serious flavor.",
        message: "Click for recipe!",
    },
    {
        cocktails_name: "HOT TODDY COCKTAIL",
        dificulty_level: 2,
        ingredient: "Hennessy V.S, Squeeze of one lemon wedge, Honey to taste, Boiling water", 
        info: "The traditional warm drink for a cold winter day. Hennessy V.S plays perfectly with the spice of cinnamon, the tang of citrus, and the sweet touch of honey.",
        message: "Click for recipe!",
    },
    {
        cocktails_name: "THE NORTH STAR COCKTAIL",
        dificulty_level: 2,
        ingredient: "Hennessy V.S.O.P Privilège, maple syrup,  fee brothers black walnut bitters, Angostura bitters™", 
        info: "True north in a world of woody, warming cocktails, the North Star is an aromatic, herbal concoction with complex aromas to fill the palate.",
        message: "Click for recipe!",
    },
    {
        cocktails_name: "ZOBOHITO ON HENNY COCKTAIL",
        dificulty_level: 2,
        ingredient: "Hennessy V.S, Cane Syrup,  Lemon Juice, Hibiscus water", 
        info: "Long sipper, this drink fights back the heat with a vengeance. Combining classical flavors of cane and hibiscus, it echoes the highballs of old with a new twist.",
        message: "Click for recipe!",
    },
    {
        cocktails_name: "BETWEEN THE SHEETS COCKTAIL",
        dificulty_level: 2,
        ingredient: "Hennessy V.S, Rum, Orange Curacao™, Fresh Lemon Juice", 
        info: "Inspired in 1930 by Harry MacElhone, head bartender at the eponymous Harry’s New York Bar in Paris. The rum adds to the complexity and elegant balance.",
        message: "Click for recipe!",
    },

    {
        cocktails_name: "HENNYGINGER COCKTAIL",
        dificulty_level: 2,
        ingredient: "Hennessy V.S, Fresh mintleaf ,  Fresh Ginger slices, Ginger beer", 
        info: "Spicy and bright, the combination of ginger and mint is a proven combination that has a tangy bite with the freshness of the mint.",
        message: "Click for recipe!",
    },

    {
        cocktails_name: "HENNESSY GUAVA COCKTAIL",
        dificulty_level: 2,
        ingredient: "Hennessy V.S, Strawberry slices, Lime wedge, Guava Juicer", 
        info: "Muddle strawberries and lime wedge together. Add with Hennessy Very Special and ice to a cocktail shaker and shake. Strain into a Rocks glass. Garnish with a strawberry slice.",
        message: "Click for recipe!",
    },

  ];
  
  
  
  const establishCocktailsName = (index) => {
    console.log(cocktails[index].cocktails_name);
    $(".card-header").eq(index).text(cocktails[index].cocktails_name);
  };
  
  const showInformation = () => {
    // Display the feed times for each dog
    // using the JSON data, with function establishFeedTimes
    jQuery.each($(".card"), establishCocktailsName);
  
    // Add an event handler for when the element of
    // class box gets a click event,anonymous function here

    $(".card").on("click", function () {
      // Find the box clicked using the index method
      let indexOfCocktails = $(".card").index(this);
  
      // Find the paragraph of class p and set the text
      $(this).find("p.card-text").text(cocktails[indexOfCocktails].ingredient);
    });
  
    // Add an event handler for when the element
    // of class box gets a mouseover event
    $(".card").on("mouseover", function () {
      let indexOfCocktails = $(".card").index(this);
  
      $(this)
        .find("p.card-text")
        .text(
           cocktails[indexOfCocktails].message
        );
    });
  
    // Add an event handler for when the
    // element of class box gets a mouseout event
    $(".card").on("mouseout", function () {
        let indexOfCocktails = $(".card").index(this);
  
      $(this).find("p.card-text").text(cocktails[indexOfCocktails].info);
      
    });
  };
  
  $(document).ready(showInformation);