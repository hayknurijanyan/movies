import { useState } from "react";
import { MENU_DATA } from "../../data/menuData";
import Avatar from "../Avatar/Avatar";
import "./styles.css";

const MainMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItemId, setActiveItemId] = useState(2);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div
      className={`main-menu ${isOpen ? "open" : ""}`}
      onMouseEnter={toggleMenu}
      onMouseLeave={toggleMenu}
    >
      {isOpen && (
        <div className="profile">
          <Avatar />
          <div className="profile-text">Daniel</div>
        </div>
      )}
      <div className="menu-items">
        {MENU_DATA.map((menuItem) => (
          <div
            key={menuItem.id}
            onClick={() => setActiveItemId(menuItem.id)}
            className={`menu-item ${
              menuItem.id === activeItemId ? "active" : ""
            }`}
          >
            <div className="menu-icon-container">
              <img
                src={menuItem.icon}
                alt={menuItem.title}
                className="menu-icon"
              />
            </div>
            <div className={isOpen ? "menu-text visible" : "menu-text"}>
              {menuItem.title}
            </div>
          </div>
        ))}
      </div>
      {isOpen && (
        <div className="additional-items">
          <div className="additional-item">LANGUAGES</div>
          <div className="additional-item">GET HELP</div>
          <div className="additional-item">EXIT</div>
        </div>
      )}
    </div>
  );
};

export default MainMenu;
