import { render } from "react-dom";
// Import to connect the app to the browser's URL. On this page we're configuring our routes.
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import App from "./App";
import Expenses from "./routes/expenses";
import Invoices from "./routes/invoices";
import Invoice from "./routes/invoice"

const rootElement = document.getElementById("root");
render(
  // BrowserRouter component
  <BrowserRouter>
    <Routes>
            /* Here we have our relative route paths with the components contained in the element attribute */
      <Route path="/" element={<App />}>
        <Route path="expenses" element={<Expenses />} />
        <Route path="invoices" element={<Invoices />}>
          /* The index route below fills in the whitespace than previous existed at the invoices route. The index route shares the path of its parent, hence it has no path. */
          <Route
            index
            element={
              <main style={{ padding: "1rem" }}>
                <p>Select an invoice</p>
              </main>
            }
          />
          /* The route below matches urls like "/invoices/1998" and "/invoices/2005" - `:invoiceId` is a URL param- It can match any URL as long as the pattern's the same.*/
          <Route path=":invoiceId" element={<Invoice />} />
        </Route>
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Route>
    </Routes>
    <App />
  </BrowserRouter>,
  rootElement
);