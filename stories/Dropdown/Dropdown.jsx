import { useEffect, useRef, useState } from "react";
import "./dropdown.css";

export function Dropdown({ label = "", options = [] }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItemId, setSelectedItemId] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const triggerRef = useRef(null);
  const menuRef = useRef(null);
  const itemRefs = useRef([]);

  // For list item focus on up/down arrows.
  function setItemRef(index, el) {
    itemRefs.current[index] = el;
  }

  function closeDropdown() {
    setIsOpen(false);
  }

  function openDropdown() {
    setIsOpen(true);
    itemRefs.current[activeIndex].focus();
  }

  function handleEscape(e) {
    if (isOpen && e.key === "Escape") {
      closeDropdown();
    }
  }

  function handleKeyNavigation(e, index) {
    const isMenuFocused = menuRef.current.contains(document.activeElement);

    if (e.key === "ArrowDown" && activeIndex < options.length - 1) {
      setActiveIndex(activeIndex + 1);
    } else if (e.key === "ArrowUp" && index >= 0) {
      setActiveIndex(index - 1);
    }

    if (e.key === "Enter") {
      setSelectedItemId(options[index].id);
      setActiveIndex(index);
      closeDropdown();
    }

    if (isMenuFocused && e.key === "Tab") {
      closeDropdown();
    }
  }

  function handleToggle(e) {
    e.stopPropagation();
    isOpen ? closeDropdown() : openDropdown();
  }

  useEffect(() => {
    if (isOpen) {
      window.addEventListener("keydown", handleEscape);
      window.addEventListener("click", closeDropdown);
    }
    return () => {
      window.removeEventListener("keydown", handleEscape);
      window.removeEventListener("click", closeDropdown);
    };
  }, [isOpen]);

  useEffect(() => {
    if (isOpen && activeIndex !== null && itemRefs.current[activeIndex]) {
      itemRefs.current[activeIndex].focus();
    }
  }, [isOpen, activeIndex]);

  return (
    <div className="rc-dropdown">
      <button
        className="rc-dropdown__trigger"
        type="button"
        onClick={handleToggle}
        ref={triggerRef}
      >
        {selectedItemId !== null ? options[selectedItemId]?.label : label}
      </button>
      <ul
        className="rc-dropdown__menu"
        hidden={!isOpen}
        ref={menuRef}
        onKeyDown={handleEscape}
      >
        {options.map((option, index) => (
          <li
            className="rc-dropdown__menu-item"
            ref={(el) => setItemRef(index, el)}
            key={option.id}
            data-value={option.value}
            tabIndex={isOpen ? (activeIndex === index ? 0 : -1) : undefined}
            onClick={() => {
              setActiveIndex(index);
              setSelectedItemId(option.id);
            }}
            onKeyDown={(e) => handleKeyNavigation(e, index)}
            onMouseEnter={(e) => {
              if (isOpen) {
                e.target.tabIndex = 0;
                e.target.focus();
              }
            }}
            onMouseLeave={(e) => {
              if (isOpen) {
                e.target.tabIndex = -1;
              }
            }}
          >
            {option.label}
          </li>
        ))}
      </ul>
    </div>
  );
}
