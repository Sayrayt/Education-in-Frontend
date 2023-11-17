import { Route, Routes } from 'react-router-dom';

import router from "./routes/router";

function App() {
  const routeComponents = router.map(({ path, element }, key) => <Route path={path} element={element} key={key} />);
  return (
    <div className="App">
      <Routes>
        {routeComponents}
      </Routes>
    </div>
  );
}

export default App;