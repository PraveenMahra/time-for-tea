import { Link } from "react-router-dom";
import { footerLinks } from "./footerLinksData";

function FooterLinks() {
  return (
    <div className="flex justify-around text-sm">
      {footerLinks.map((section, index) => (
        <div key={index}>
          <h2 className="uppercase font-semibold mb-2">{section.heading}</h2>
          <ul className="flex flex-col gap-2">
            {section.links.map((link, linkIndex) => (
              <li key={linkIndex}>
                <Link to={link.url} className="hover:underline">
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default FooterLinks;
