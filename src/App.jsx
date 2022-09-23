// Importing the link component and adding some global navigation
import { Outlet, Link } from "react-router-dom";

export default function App() {
  
  return (
    <div>
      <h1>Bookkeeper!</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/invoices">Invoices</Link> |{" "}
        <Link to="/expenses">Expenses</Link>
      </nav>
      {/*Outlet works at any level of route hierarchy and is very powerful- The outlet swaps between the 2 child routes but the parent route persists. */} 
      <Outlet />
      
    </div>
  );
}
