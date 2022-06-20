import React from "react";

const Header: React.FC<{ selected: number[] }> = ({ selected }) => {
  return (
    <header>
      <div role="status" aria-live="polite" aria-atomic="true">
        {selected.length === 0 ? (
          "No items selected"
        ) : (
          <>
            Selected items:{" "}
            {selected.map((item) => (
              <span key={item} className="selected">
                {item}
              </span>
            ))}
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
