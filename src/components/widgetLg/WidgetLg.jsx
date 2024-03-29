import React from "react";
import "./widgetLg.css";

const WidgetLg = () => {

  const Button = ({type})=>{
    return(
      <button className={'widgetLgButton ' + type}>{type}</button>
    )
  }
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest Transactions</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Sedhia Joe</span>
          </td>
          <td className="widgetLgDate">2 Jan 2024</td>
          <td className="widgetLgAmount">$100.00</td>
          <td className="widgetLgStatus"><Button type="Approved"/></td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Sedhia Joe</span>
          </td>
          <td className="widgetLgDate">2 Jan 2024</td>
          <td className="widgetLgAmount">$100.00</td>
          <td className="widgetLgStatus"><Button type="Declined"/></td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Sedhia Joe</span>
          </td>
          <td className="widgetLgDate">2 Jan 2024</td>
          <td className="widgetLgAmount">$100.00</td>
          <td className="widgetLgStatus"><Button type="Pending"/></td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Sedhia Joe</span>
          </td>
          <td className="widgetLgDate">2 Jan 2024</td>
          <td className="widgetLgAmount">$100.00</td>
          <td className="widgetLgStatus"><Button type="Approved"/></td>
        </tr>
      </table>
    </div>
  );
};

export default WidgetLg;
