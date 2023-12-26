import FooterLogo from "../assets/footer-logo.png";

export const Footer = () => {
  return (
    <footer className="bg-[#252525] text-white flex px-12 pt-8 pb-4 justify-center gap-10 text-[16px]">
      <img src={FooterLogo} alt="" className="h-fit w-[20%]" />
      <nav className="flex gap-4 w-full">
        <ul className="border-r-[.5px] border-gray-100 w-fit pr-4 text-nowrap">
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Cataract Correction</a>
          </li>
          <li>
            <a href="#">Laser Vision Correction</a>
          </li>
          <li>
            <a href="#">LASIK Alternatives</a>
          </li>
          <li>
            <a href="#">Resources</a>
          </li>
          <li>
            <a href="#">Giving Back</a>
          </li>
        </ul>

        <div className="flex flex-col justify-between gap-8 ">
          <div className="[&>ul>li]:flex [&>ul>li]:flex-col">
            <p>Locations</p>
            <ul className="flex gap-4 [&>li>a]:ml-2 [&>li>b]:uppercase">
              <li>
                <b>Alaska</b>
                <a href="">Anchorage</a>
                <b>Idaho</b>
                <a href="">Lewiston</a>
              </li>

              <li>
                <b>Montana</b>
                <a href="">Great Falls</a>
                <b>New Mexico</b>
                <a href="">Albuquerque</a>
                <b>Oregon</b>
                <a href="">Portland</a>
                <a href="">Tualatin</a>
              </li>

              <li>
                <b>Washington</b>
                <a href="">Bellevue</a>
                <a href="">Bellingham</a>
                <a href="">Chehalis</a>
                <a href="">Kennewick</a>
                <a href="">Olympia</a>
              </li>

              <li>
                <b>&zwnj;</b>
                <a href="">Silverdale</a>
                <a href="">Spokane</a>
                <a href="">Takoma</a>
                <a href="">Vancouver</a>
                <a href="">Yakama</a>
              </li>
            </ul>
          </div>

          <p className="text-nowrap text-[8px]">
            Copyright © 2022 Pacific Cataract and Laser Institute. All rights
            reserved. Privacy Policy
          </p>
        </div>
      </nav>

      <div className="text-right">
        <button className="ml-auto bg-[#00ABC8] p-2 mb-6">Contact Us</button>
        <div>
          <p>Call 800-224-7254</p>
          <p className="text-nowrap">In Alaska, 800-557-7254 </p>
        </div>
      </div>
    </footer>
  );
};
