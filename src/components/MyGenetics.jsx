import React from 'react';
import { Grid } from "@material-ui/core";
import { Page } from "./Home";
import PageNoButton from './PageNoButton';
import PatientName from "./Patient/PatientName";
import FhirClientProvider from "./FhirClientProvider";
import Popout from "./Popout/Popout";
import PatientDOB from './Patient/PatientDOB';

function myGenetics() {
    return (
        <FhirClientProvider>
            <div style={{ marginRight: 24, marginLeft: 24, marginTop: 10, marginBottom: 20 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={12}>
                        <PageNoButton subject={<PatientName/>} content={["Age: 39, DOB: 05/06/1977, Gender: Male", <br/>,
                            "Patient ID: 69432132, Phone: 561-321-1513", <br />, "PCP: Dr. Yuan, Phone: 671-456-7841",
                            <br/>, "Insurance: Aetna Better Health", <Popout name={"Danae Kshlerin"} medications={["Abrexane - 50ml", 
                                <br/>, "Zoloft - 50mg"]} family={[<strong>Mother</strong>, <br/>, "Type of cancer: Breast", 
                                <br/>, "Lineage: Mother", <br/>, "Ethnicity: Asian", <br/>, "Genetic Mutation: BRCA1"]}
                                careTeam={["Christina Mellin, MD: Physician", <br/>, "Alex Berger: Registered Nurse", <br/>]}
                            />]}
                        />
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <Page buttonMessage="View All Results" subject={["Test Results", <br />, <strong>Results Available</strong>]}
                            content={["Report Type: ", <strong>Blood Test</strong>, <br />, "Date of Collection: 05/21/2021", <br />,
                                "Date of Results: 05/24/2021", <br/>, <a>View Report</a>]}
                        />
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <PageNoButton subject={["Specialists", <br />]} content={[<strong>Oncologists</strong>, <br />, "Name: Dr. Khosravy",
                            , <br />, "Location: Woodbridge, VA", <br />, <br />, <strong>Gastroenterologist</strong>, <br />, "Name: Dr. Jasovitz", <br />,
                            "Location: Woodbridge, VA"]}
                        />
                    </Grid>
                    {/* <Grid item xs={12} sm={3}>
                        <Page buttonMessage="View Order History" subject={["Test Orders", <br/>]} content={[<strong>Pending Orders</strong>,
                        <br />, "Blood Test", <br/>, <a>View/Print</a>, <br />, <br />, <strong>Completed Orders</strong>, <br />,
                            "Genetic Test", <br/>, <a>View/Print</a>, <br />]}
                        />
                    </Grid> */}
                    <Grid item xs={12} sm={6}>
                        <PageNoButton subject={["Informational Resources", <br/>]} content={[<a href="https://www.cancer.gov/about-cancer/causes-prevention/genetics/brca-fact-sheet">MBRCA Gene Mutations: Cancer Risk and Genetic Testing Fact Sheet - National Cancer Institute</a>, <br/>,
                            <a href="https://www.cdc.gov/cancer/breast/young_women/bringyourbrave/hereditary_breast_cancer/brca_gene_mutations.htm">BRCA Gene Mutations | Bring Your Brave | CDC</a>, <br/>,
                            <a href="https://www.nationalbreastcancer.org/what-to-do-if-youve-tested-positive">What To Do If You've Tested Positive - National Breast Cancer Foundation</a>, <br/>,
                            <a href="https://www.facingourrisk.org/info/hereditary-cancer-and-genetic-testing/hereditary-cancer-genes-and-risk/genes-by-name/brca1/overview">Overview of BRCA1 gene mutations (facingourrisk.org)</a>, <br/>,
                            <a href="https://www.facingourrisk.org/info/hereditary-cancer-and-genetic-testing/hereditary-cancer-genes-and-risk/genes-by-name/brca2/overview">Overview of BRCA2 gene mutations (facingourrisk.org)</a>, <br />]}
                        />
                    </Grid>
                </Grid>
            </div>
         </FhirClientProvider>
    );
}
export default myGenetics;