import {test, expect} from "@playwright/test";
test("Valid Login @smoke @regression",async({page})=>{

});
test("Invalid Login @regression",async({page})=>{

});
test("Search product @sanity",async({page})=>{

});
//single tag
test("Search",
    {
        tag: "@sanity"
    }, async({page}) =>{
        
    }
);
//multiple tag
//tag: ["@sanity", "@regression"]

//group tags 
test.describe(
    "Auth",{tag: "@smoke"}, ()=>{
        test("Login1",async({page}) =>{

        });
        test("Logout1",async({page}) =>{

        });
    }
)
//multiple tag
/*"Auth",
  {
    tag: ["@smoke", "@regression"]
  },
  */