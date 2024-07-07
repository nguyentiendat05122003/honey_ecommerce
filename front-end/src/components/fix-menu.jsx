import FixMenuItem from "@/components/fix-menuItem";
import { FIX_MENU } from "@/constant";
import React from "react";

export default function FixMenu() {
  return (
    <div className="lg:hidden fixed bottom-0 bg-white left-0 w-full flex z-50 h-5 shadow-shadowFixMenu">
      {FIX_MENU.map((item) => (
        <FixMenuItem
          key={item.id}
          id={item.id}
          title={item.title}
          href={item.href}
          icon={item.icon}
          image={item.image}
          opacityColor={item.opacityColor}
          color={item.color}
          length={FIX_MENU.length}
        />
      ))}
    </div>
  );
}
