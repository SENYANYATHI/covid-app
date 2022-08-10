


function GlobalStats (props){

    return(

        <div>
            <h1>Covid-19 Tracker</h1>

            <div className="globalstats">
<div>
    <h2>{props.global.TotalConfirmed}</h2>
    <small>Total Confirmed</small>
</div>

<div>
    <h2>{props.global.TotaldeathConfirmed}</h2>
    <small>Total Death</small>
</div>
            </div>

        </div>
    )
}

export default GlobalStats;