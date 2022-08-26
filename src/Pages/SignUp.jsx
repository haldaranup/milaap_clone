import "../Styles/signup.css";
export const SignUP = () => {
  return (
    <div className="sign-up-container">
      <div className="user-management-block">
        {/* <div className="right back-button"></div> */}
        <div className="row-main-frame">
          <div className="left-sider-block">
            <div className="user-management_Image">
              <div className="center-align">
                <div className="logo-wrapper">
                  <img
                    alt="Milaap logo"
                    className="milaap-logo"
                    src="https://assets.milaap.org/assets/milaap-trasparent-logo-25f6253e0156e2f82e2c3daf85575d169864e35ffffd21033ac59da0b4dd88e0.png"
                  />
                </div>
                <div className="block-title">Welcome to Milaap,</div>
                <div className="block-subtitle">
                  India’s largest crowdfunding site
                </div>
              </div>
            </div>
          </div>
          <div className="right-sider-block">
            <div
              class="user-management__block--dynamic sign-up--dynamic"
              id="sign-up-container"
            >
              <div class="sign-up-component">
                <div class="">
                  <div class="sign-up-title">
                    Sign up &amp; manage fundraisers, donations &amp; more
                  </div>
                  <form novalidate="">
                    <div>
                      <div class="input-component">
                        <div class="input-field col s12">
                          <input type="text" />
                        </div>
                      </div>
                    </div>
                    <div>
                      <div class="input-component">
                        <div class="input-field col s12">
                          <input id="email" type="email" />
                        </div>
                      </div>
                    </div>
                    <div>
                      <div class="password-otp-input-component">
                        <div class="input-field col s12">
                          <input
                            id="password"
                            type="password"
                            class="validate "
                            required=""
                            minlength="6"
                            value=""
                          />
                          {/* <label for="password">Password</label> */}
                        </div>
                      </div>
                    </div>
                    <div>
                      <button class="btn btn-primary btn-login">Sign up</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};
