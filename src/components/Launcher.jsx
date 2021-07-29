import React from "react";
import { oauth2 as SMART } from "fhirclient";

/**
 * Typically the launch page is an empty page with a `SMART.authorize`
 * call in it.
 *
 * This example demonstrates that the call to authorize can be postponed
 * and called manually. In this case we use ReactRouter which will match
 * the `/launch` path and render our component. Then, after our page is
 * rendered we start the auth flow.
 */

// export default function Launch(){
//     return(
//         SMART.authorize({
//             clientId: "127afa4e-286f-47ae-ac19-ecc3d7f4ddac",
//             scope: "launch patient/Patient.read online_access openid profile",
//             redirectUri: "./Home",
//             // iss: "https://launch.smarthealthit.org/v/r4/sim/eyJrIjoiMSIsImIiOiI4N2EzMzlkMC04Y2FlLTQxOGUtODljNy04NjUxZTZhYWIzYzYifQ/fhir"
            // iss: "https://fhir-open.cerner.com/r4/ec2458f2-1e24-41c8-b71b-0e701af7583d",
//             iss: "https://launch.smarthealthit.org/v/r4/sim/eyJrIjoiMSJ9/fhir",
//             // launch: "https://fhir-react.herokuapp.com"
//             // launch: "http://localhost:3000"
//         })
//     );
// }


export default class Launcher extends React.Component {
    /**
     * This is configured to make a Standalone Launch, just in case it
     * is loaded directly. An EHR can still launch it by passing `iss`
     * and `launch` url parameters
     */
    componentDidMount() {
        SMART.authorize({
            clientId: "127afa4e-286f-47ae-ac19-ecc3d7f4ddac",
            // clientId: "cea79e43-d84e-4a3d-aa95-dc96dd68cecd",
            scope: "launch patient/launch online_access openid profile patient/Patient.read",
            redirectUri: "./Home",
            // patientID: 87a339d0-8cae-418e-89c7-8651e6aab3c6
            // iss: "https://launch.smarthealthit.org/v/r4/sim/eyJrIjoiMSIsImIiOiI4N2EzMzlkMC04Y2FlLTQxOGUtODljNy04NjUxZTZhYWIzYzYifQ/fhir"
            iss: "https://fhir-myrecord.cerner.com/r4/ec2458f2-1e24-41c8-b71b-0e701af7583d",
            // iss: "https://launch.smarthealthit.org/v/r4/sim/eyJrIjoiMSJ9/fhir/",
            launch: "https://fhir-react.herokuapp.com/",
            // launch: "https://launch.smarthealthit.org/v/r4/sim/eyJrIjoiMSJ9/fhir/"
        });
    }
    /**
     * Could also return `null` for empty page
     */
    render = () => null;
}