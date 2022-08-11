

function CountriesStats(props){
    return(

        <div>

            <table>
                <tr>
                    <th>Countries Name</th>
                    <th>Total numbers of Cases</th>
                    <th>Active Cases</th>
                </tr>

{props.countries.map((country) => (
    <tr>
    <td>{country.Country}</td>
    <td>{country.TotalConfirmed}</td>
    <td>{country.NewConfirmed}</td>
    </tr>

))}
                
            </table>

        </div>
    );
}
export default CountriesStats;