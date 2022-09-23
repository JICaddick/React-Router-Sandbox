import {
  NavLink,
  Outlet,
  useSearchParams,
  useLocation,
} from "react-router-dom";
import { getInvoices } from "../data";
// Add comments for custom behavior and additives
function QueryNavLink({ to, ...props }) {
  let location = useLocation();
  return <NavLink to={to + location.search} {...props} />;
}
export default function Invoices() {
  let invoices = getInvoices();
  // The variable below is like React's useState but it works by storing and setting state in the URL search params. 
  let [searchParams, setSearchParams] = useSearchParams();
  return (
    <div style={{ display: "flex" }}>
      <nav
        style={{
          borderRight: "solid 1px",
          padding: "1rem",
        }}
      >
        <input
          value={searchParams.get("filter") || ""}
          onChange={(e) => {
            let filter = e.target.value;
            // if (filter) because if there's a user interaction and an event recorded it will filter, else it returns nothing. 
            if (filter) {
              setSearchParams({ filter });
            } else {
              setSearchParams({});
            }
          }}
        />
        {/* Here we're mapping over our invoices and returning the lot of them.*/}
        {invoices
          .filter((invoice) => {
            let filter = searchParams.get("filter");
            // Why if there's no filter return 'true'?
            if (!filter) return true;
            let name = invoice.name.toLowerCase();
            return name.startsWith(filter.toLowerCase());
          })
          .map((invoice) => (
            <QueryNavLink
              /* isActive changes the simple object that preeceeded it to a function that returns an object*/
              style={({ isActive }) => {
              /* The Link element's 'to' prop means we link to the path that follows it- we'll get the number of our invoics returned to us*/
                return {
                  display: "block",
                  margin: "1rem 0",
                  color: isActive ? "red" : "blue",
                };
              }}
              to={`/invoices/${invoice.number}`}
              key={invoice.number}
            >
            {invoice.name}
          </QueryNavLink>
        ))}
      </nav>
      <Outlet />
    </div>
  );
}