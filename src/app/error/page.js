import "../globals.css";
import Nav from "../header-seller";
import Footer from "../footer";

export default function Error() {
  return (
    <div>

      <Nav />
      
      <div class="md:w-5/12 mx-auto mb-28 py-12 text-center">
        <div className="w-1/2 mx-auto"><img class=" " alt="image" src="/error.webp" /></div>
        <h2 className="text-2xl font-bold mb-3">404 Page not found.</h2>
        <div className="mb-6 text-gray-500">Sorry we coudn't find the page you were looking for. <br /> We sugguest you to return to homepage.</div>
        <button type="submit" class="text-white bg-myorange font-medium rounded-full text-sm py-2.5 text-center w-5/12">Go to Homepage</button>
      </div>

      <Footer />
    </div>
  );
}
