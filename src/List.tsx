import React from "react";

interface Props {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  children: Required<React.ReactElement[]>;
}

const List: React.FC<Props> = ({ children, onChange }) => {
  return (
    <fieldset className="list-container">
      <legend className="visually-hidden">Select multiple items</legend>
      <div className="list-header list-grid">
        <span className="list-header-column">Info</span>
      </div>
      <ul className="list">
        {React.Children.map(children, (child, index) => {
          return (
            <li key={index} className="list-item">
              <label className="list-grid">
                <input
                  type="checkbox"
                  value={index}
                  onChange={onChange}
                  className="list-checkbox"
                  data-testid="checkbox"
                />
                {React.cloneElement(child)}
              </label>
            </li>
          );
        })}
      </ul>
    </fieldset>
  );
};

export default List;
