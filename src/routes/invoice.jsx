import { useParams } from "react-router-dom";
//passing in getInvoice from data.js to get the rest of the information behind the invoice number
import { getInvoice } from "../data"
    
export default function Invoice() {
    let params = useParams();
    // We use parseInt because URL params are always strings. The numbers rendered are part of the string. 
    let invoice = getInvoice(parseInt(params.invoiceId, 10));
    return(
    <main style={{ padding: "1rem" }}>
      <h2>Total Due: {invoice.amount}</h2>
      <p>
        {invoice.name}: {invoice.number}
      </p>
      <p>Due Date: {invoice.due}</p>
    </main>
  );
}