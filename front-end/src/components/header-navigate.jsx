import NavLinkHeader from "@/components/nav-link-header";
import { LINK_NAVIGATE_HEADER } from "@/constant";

export default function HeaderNavigate() {
  return (
    <div className="lg:block hidden h-size-hd-sale">
      <div className="h-full">
        <div className="h-full">
          <ul className="h-full  flex items-center justify-between">
            {LINK_NAVIGATE_HEADER.map((item) => (
              <NavLinkHeader
                key={item.id}
                href={item.href}
                content={item.content}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
