import React from "react";
import styled from "styled-components";

import PageHeader from "../dashboard/components/PageHeader/PageHeaderComponent";
import LoginSignupFormsComponent from "./components/LoginSignupForm/LoginSignupFormsComponent";
import WavesComponent from "./components/Waves/WavesComponent";

const ViewContainer = styled.div`
  height: 90vh;
  padding: 5vh 10vw;
  overflow-x: hidden;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const LoginSignupViewComponent = ({
  profile,
  logInUser,
  signUpUser,
  getDashboardInfo,
  dispatchUpdateDashboardInfo,
  validationSchemas,
  errorTable
}) => (
  <ViewContainer>
    <PageHeader
      logoClickHandler={() => window.open("https://equithon.org", "_self")}
    />
    <LoginSignupFormsComponent
      logIn={logInUser}
      signUp={signUpUser}
      profile={profile}
      getDashboardInfo={getDashboardInfo}
      dispatchUpdateDashboardInfo={dispatchUpdateDashboardInfo}
      validationSchemas={validationSchemas}
      errorTable={errorTable}
    />
    <WavesComponent />
  </ViewContainer>
);

export default LoginSignupViewComponent;
