import React from "react";

const Theme: React.FC = () => {
  return (
    <div>
      <div className="columns">
        <div className="div">
          <div className="column">
            <div className="div-2">
              <div className="heading-for-your-service-or-pr">
                Heading for your service or product
              </div>
              <div className="describe-your-product-value-he">
                Describe your product value here. Also, customise the layout as
                per your brand guidelines.
              </div>
              <div className="div-3" />
              <div className="div-4">
                <div className="div">
                  <div className="column-2">
                    <input
                      type="text"
                      placeholder="Hello there"
                      name="signup"
                      className="form-input"
                      required={false}
                    />
                  </div>
                  <div className="column-3">
                    <button className="button">
                      Click me!
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="column-4">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets%2F481ecd094abe46c49a3ee5256ef72179%2Fe53820b1967645b2add38245588c7bb4"
              className="img"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Theme;
