import "../globals.css";
import Nav from "../header-seller";
import Footer from "../footer";

export default function Terms() {
  return (
    <div>

      <Nav />
      
      <div class="md:w-9/12 mx-auto mt-4">
        <section className="mb-16">
          <div className="p-6">

            <h2 className="text-2xl font-bold mb-3">Terms of Use</h2>
            <div className="mb-6 text-gray-500">Please read with understanding before using our services.</div>
            <div className="mb-6 text-gray-500 text-sm">eFOODi allows its users to order from restaurants and stores online through its application “Platform”. eFOODi provides you with an easy way to communicate your orders to restaurants displayed on the Platform. The purpose of this site is to provide a simple and convenient service to consumers, linking them to restaurants in their area that offer takeaway food. Interactive menus and products allow customers to select their favourite orders and meals and submit orders at the click of a button. We have created the website to serve as a food court online market. eFOODi is a commercial Platform offers service for food delivery online.e does not sell or interfere in any way in the production of any food produced at the restaurants. But what this online Platform offers to the users is only providing the ability to search for and find local restaurants that deliver or make food available to their addresses and enables ordering this food through this website. The restaurants are obligated to comply with country local laws, rules, regulations, and standards pertaining to food preparation, processing, sale, marketing, and safety.
              <br /><br />
              However, it is important for users to understand that eFOODi does not in any way independently verify the products of Restaurants, the ingredients or the quality of their products, or that a restaurant is in compliance with applicable laws and regulations pertaining to food processing as the restaurant is solely liable for such responsibility. Users (Customers) must make themselves comfortable through information provided by restaurants on the Platform and website or as requested by buyers directly from the restaurants as to the quality and reliability of the restaurants, as well as to their compliance with applicable laws and regulations. eFOODi does not in any way guarantee the quality of any food or product or that any food complies with the applicable laws and regulations. eFOODi does not further guarantee matching the menu displayed on the site of what is actually provided to the users. In addition, a restaurant may represent that food preparation is in accordance with special standards such as “organic,” “macrobiotic”. </div>

          </div>
          
        </section>
      </div>

      <Footer />
    </div>
  );
}
