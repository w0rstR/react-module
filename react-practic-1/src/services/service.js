async function getData(){
    const data = await fetch('https://api.spacexdata.com/v3/launches/').then(result=>result.json())
    return data
}


async function getFlightDetails(id){
    const data = await fetch(`https://api.spacexdata.com/v3/launches/${id}`).then(response=>response.json())
        .then(res=>{
            const {rocket: { rocket_name}, launch_date_utc, launch_date_local,launch_site: {site_id} }=res;
            const obj={
                name:rocket_name,
                launch_utc:launch_date_utc,
                launch_local:launch_date_local,
                siteId:site_id
            }
            return obj
        })
    return data

}

export {
    getData,
    getFlightDetails
}