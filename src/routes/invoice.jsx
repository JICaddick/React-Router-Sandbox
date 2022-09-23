//passing in getInvoice from data.js to get the rest of the information behind the invoice number
import {
  useParams,
  useNavigate,
  useLocation,
} from "react-router-dom";
import { getInvoice, deleteInvoice } from "../data";
    
export default function Invoice() {
    let params = useParams();
    // We use parseInt because URL params are always strings. The numbers rendered are part of the string. 
    let navigate = useNavigate();
    let location = useLocation();
    let invoice = getInvoice(parseInt(params.invoiceId, 10));
    return(
    <main style={{ padding: "1rem" }}>
      <h2>Total Due: {invoice.amount}</h2>
      <p>
        {invoice.name}: {invoice.number}
      </p>
      <p>Due Date: {invoice.due}</p>
      <p>
        <button
          onClick={() => {
            deleteInvoice(invoice.number);
            navigate("/invoices" + location.search);
          }}
        >
          Delete
          </button>
          </p>
    </main>
  );
}