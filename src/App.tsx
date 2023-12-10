import "./App.css";

import { AppProvider } from "./context/AppContext/AppProvider";

import AppRoutes from "./routes";

const providers = [AppProvider];

function App() {
  const ProviderTree = providers.reduce(
    (accumulator, Provider) => <Provider>{accumulator}</Provider>,
    <>
      <AppRoutes />
    </>
  );

  return ProviderTree;
}

export default App;
