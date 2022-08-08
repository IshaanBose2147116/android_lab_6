const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
});

const container = document.getElementById("container")

var punishmentString = ""
const punishmentAssigned = !(params.jail_time === null && params.fine_amount === null)

if (punishmentAssigned) {
    punishmentString = "<div><span><b>Punishment:</b></span></div>"

    if (params.jail_time !== null) {
        punishmentString += `
        <div>
            <span>Jail Time:</span>
            <span>${ params.jail_time }</span>
        </div>
        `
    }

    if (params.fine_amount !== null) {
        punishmentString += `
        <div>
            <span>Fine Amount:</span>
            <span>${ params.fine_amount }</span>
        </div>
        `
    }
} else {
    punishmentString = `
        <div>
            <span><b>Punishment:</b></span>
            <span>Not Assigned Yet</span>
        </div>
    `
}

container.innerHTML = `
<div>
    <span><b>Nature of Crime:</b></span>
    <span>${ params.nature_of_theft }</span>
</div>
<div>
    <span><b>Victim's Name:</b></span>
    <span>${ params.victim_name }</span>
</div>
<div>
    <span><b>Victim Gender:</b></span>
    <span>${ params.victim_gender }</span>
</div>
<div>
    <span><b>Officer In-Charge:</b></span>
    <span>${ params.officer_incharge }</span>
</div>
<div>
    <span><b>Sovled:</b></span>
    <span>${ params.solved === "true" ? "Yes" : "No" }</span>
</div>
${ 
    params.solved === "true"
    ?
        `
            <div>
                <span><b>Perpetrator's Name:</b></span>
                <span>${ params.perp_name }</span>
            </div>
            ${ punishmentString }
        `
    :
        ""
 }
`

console.log(params.ho)