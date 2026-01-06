import { BrowserRouter,Routes,Route} from "react-router-dom";

import Crudapp from "../src/pages/crud";
import store from "./redux toolkit/store";
import Addposts from "./component/posts/posts";
import { Provider } from "react-redux";

function App() {
    return (
         <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Crudapp />} />
          <Route path="/allposts" element={<Crudapp />} />
          <Route path="/addposts" element={<Addposts />} />
        </Routes>
      </BrowserRouter>
    </Provider>
    );
}

export default App;