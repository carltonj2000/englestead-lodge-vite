function App() {
  return (
    <>
      <div className="bg-rose-300 opacity-90 px-1 py-3 flex flex-col items-center">
        <h1 className="text-2xl font-semibold">Enlestead, Orderville And Lodge</h1>
        <h2 className="text-xl font-semibold">Canyons In Zion</h2>
        <p>
          August 22<sup>nd</sup> - 24<sup>th</sup>, 2025
        </p>
      </div>
      <div className="bg-rose-200 opacity-90 flex flex-col items-center pt-4">
        <h2 className="font-semibold mb-2 text-xl">Participants</h2>
        <table className="pt-2 border-collapse border border-blue-800">
          <tbody>
            <tr>
              <td className="border border-blue-400 px-2 py-1">Bruce</td>
              <td className="border border-blue-400 px-2 py-1">Teresa</td>
              <td className="border border-blue-400 px-2 py-1">Sandy</td>
            </tr>
            <tr>
              <td className="border border-blue-400 px-2 py-1">Rebbeca</td>
              <td className="border border-blue-400 px-2 py-1">Maria</td>
              <td className="border border-blue-400 px-2 py-1">Carlton</td>
            </tr>
          </tbody>
        </table>
        <h2 className="font-semibold mb-2 mt-3 text-xl">Plan</h2>
        <table>
          <thead>
            <tr>
              <th className="border border-blue-400 px-2 py-1 font-semibold">
                Day
              </th>
              <th className="border border-blue-400 px-2 py-1">Activity</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-blue-400 px-2 py-1">
                Friday<br/>August 22<sup>nd</sup>
              </td>
              <td className="border border-blue-400 px-2 py-1">
                <ul>
                  <li>noon meet @ Cannery Casion</li>
                  <li>Drive to AirBnB in La Verking</li>
                  <li>Dinner At AirBnB</li>
                  <li>Texas Hold'em Night</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td className="border border-blue-400 px-2 py-1">
                Saturday<br/>August 23<sup>rd</sup>
              </td>
              <td className="border border-blue-400 px-2 py-1">
                <ul>
                  <li>
                    <a href="https://ropewiki.com/Lodge_Canyon" className="underline text-slate-800">
                      Lodge Canyon
                    </a>
                    {" "}6 raps, 200ft
                  </li>
                  <li>Dinner At AirBnB</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td className="border border-blue-400 px-2 py-1">
                Sunday<br/>August 24<sup>th</sup>
              </td>
              <td className="border border-blue-400 px-2 py-1">
                <ul>
                  <li>
                    <a href="https://ropewiki.com/Englestead_Hollow" className="underline text-slate-800">
                    Englestead Canyon 
                    </a>
                    {" "}11-15 raps, 250ft
                  </li>
                  <li>
                    <a href="https://ropewiki.com/Orderville_Canyon" className="underline text-slate-800">
                    Orderville Canyon
                    </a>
                    {" "}2 raps, 30ft
                  </li>
                  <li>Dinner At Oscars</li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
        <h2 className="font-semibold mt-3 mb-2 text-xl">Equipment</h2>
        <table className="pt-2 border-collapse border border-blue-800">
          <tbody>
            <tr>
              <td className="border border-blue-400 px-2 py-1">
                <ul>
                  <li>Large Pack</li>
                  <li>Helment</li>
                  <li>Gloves (neoprene)</li>
                  <li>Harness</li>
                  <li>Rappel gear</li>
                  <li>Rain Jacket</li>
                  <li>Snacks</li>
                  <li>Water</li>
                  <li>Water Shoes</li>
                </ul>
              </td>
              <td className="border border-blue-400 px-2 py-1">
                <ul>
                  <li>Toiletries</li>
                  <li>Lights</li>
                  <li>Dry bags/keg</li>
                  <li>Swimming Suit</li>
                  <li>Puffy Jacket</li>
                  <li>First aid</li>
                  <li className="my-2">Wetsuit<br />(optional)</li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
        <h2 className="font-semibold mt-3 mb-2 text-xl">References</h2>
        <table className="pt-2 border-collapse border border-blue-800">
          <tbody>
            <tr>
              <td className="border border-blue-400 px-2 py-1">
                <ul>
                  <li>
                    <a href="https://www.recreation.gov/account/reservations/upcoming" className="underline text-slate-800">
                      Zion Rec.gov permits 
                    </a>
                  </li>
                  <li>
                    <a href="https://share.google/R7WtXtI8BiZnfbQUR" className="underline text-slate-800">
                    145 270 North, La Verkin, UT 84745
                    </a>
                  </li>
                  <li>
                    wifi: vacation wifi, Vacation123 
                  </li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
        <h2 className="font-semibold mt-3 mb-2 text-xl">Optional Activities</h2>
        <table className="pt-2 border-collapse border border-blue-800">
          <tbody>
            <tr>
              <td className="border border-blue-400 px-2 py-1">
                <ul>
                  <li>
                    <a href="https://www.alltrails.com/trail/us/utah/lady-mountain-trail--2" className="underline text-slate-800">
                    Lady Mountain 
                    </a>
                  </li>
                  <li>
                    <a href="https://www.alltrails.com/trail/us/utah/checkerboard-mesa-canyon-trail" className="underline text-slate-800">
                      Checker Board Mesa 
                    </a>
                  </li>
                  <li>
                    <a href="https://www.peakbagger.com/peak.aspx?pid=3838" className="underline text-slate-800">
                      Tabernacle Dome
                    </a>
                  </li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="bg-rose-200 opacity-90 h-full"></div>
    </>
  );
}

export default App;
