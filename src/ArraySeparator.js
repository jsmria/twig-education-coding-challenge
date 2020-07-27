/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from "react";
const ArraySeparator = () => {
  const [divideBy, setDivideBy] = useState(null);
  const [displayDivideBy, setDisplayDivideBy] = useState(null);
  const [isValid, setIsValid] = useState(false);

  const validate = value => {
    const regEx = /^[1-5]+$/;
    if (!value) {
      setIsValid(false);
    } else if (!regEx.test(value)) {
      setIsValid(false);
    } else {
      setIsValid(true);
      setDivideBy(value);
    }
  };

  const splitArray = value => {
    let array = [1, 2, 3, 4, 5];
    let result = [];

    while (array.length > 0) {
      const size = Math.ceil(array.length / value--);
      const chunk = array.slice(0, size);
      result.push(chunk);
      array = array.slice(size);
    }

    setDisplayDivideBy(result);
    setDivideBy(null);
  };

  return (
    <div className="container">
      <form
        id="contact"
        onSubmit={e => {
          e.preventDefault();
        }}
      >
        <h3>Twig Education Coding Challenge</h3>
        <h4>
          The Array has 5 objects in it. Please choose a number between 1-5 to
          split it by
        </h4>
        <input
          id="split"
          type="text"
          value={divideBy}
          onChange={e => validate(e.target.value)}
        />
        {displayDivideBy && !displayDivideBy.isEmpty && (
          <>
            <h4>Results: </h4>
            <h4>
              {displayDivideBy.map(display => (
                // eslint-disable-next-line react/jsx-key
                <p>[{display.join(",")}]</p>
              ))}
            </h4>
          </>
        )}
        {!isValid && (
          <small>
            <bold>Input is invalid - please try again.</bold>
          </small>
        )}
        <button
          name="submit"
          type="button"
          id="submit"
          disabled={!isValid}
          onClick={() => {
            splitArray(divideBy);
          }}
        >
          Submit
        </button>
        <p className="copyright">
          Designed by{" "}
          <a href="https://colorlib.com" title="Colorlib">
            Colorlib
          </a>
        </p>
      </form>
    </div>
  );
};

export default ArraySeparator;
/* eslint-enable jsx-a11y/label-has-associated-control */
