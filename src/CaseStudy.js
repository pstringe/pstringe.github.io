import Section from "./components/Section";
import PhysiciansDashboard from './images/mindvitals/physicians-dashboard.png';
import SurveyInterface from './images/mindvitals/survey-interface.png';
import { Box } from "@mui/system";

const caseData = [
    {
        type: 'full',
        title: 'Synopsis',
        body: `
Mindvitals is a a B2B Saas designed to help primary care physicians monitor the psychiatric vital signs of their patient population.

The platform consists of 3 applications:
* An API written in typescript using nest.js
* An interface for taking assessments
* A dashboard for administering and reviewing assessments as well as managing PHI.

Assessments can be administered via, email, text, or QR code. Each clinic stores assessment data and PHI in a separate database. There is a central auth database that associates users with the correct clinic.

The application was built using Google Cloud Build with GitHub triggers. And hosted in app engine.

You can find the code for it here:

[https://github.com/pstringe/mindvitals](https://github.com/pstringe/mindvitals)
        `
    },
    {
        type: 'left-image',
        title: `Physician's Dashboard`,
        body: `
* View and manage patient records
* Construct and send assessment requests via email, SMS, and QR code
* View and analyze patient assessment results
* Intuitive scoring indicators of severity level
* Data secured and isolated per clinic
        `,
        imgSrc: PhysiciansDashboard
    },
    {
        type: 'right-image',
        title: 'Assessment Interface',
        body: `
As we advance through the survey, so too does the progress bar showing the user where they are in the process. This survey is a combination of two questionnaires but the user does not require this information. There are combinations whereby a scoring condition on one assessment will determine whether the following assessment is administered. 

When the user finishes the assessment, they're shown their scores and given the option to share or request follow-up services. Back in the dashboard, authorized clinic personnel can view the results for each of the assessments included in the patient's questionnaire.

* Patient may be administered assessments via email, text or QR code
* Assessments constructed from any of GAD-7, PHQ-9 or EPDS.
* Support for conditional assessments (Example: Only administer GAD-7 if PHQ-2 passes)
* Patients may share their results or request follow-up services



# Stack
* **React** (typescript)
* **node.js** API (nest.js typescript framework)
* **MonogDB**
* **GCP** (CI/CD and hosting)
* **AWS** (email and sms services)
        `,
        imgSrc: SurveyInterface
    },
]

const CaseStudy = () => {
    return ( 
        <Box className="case-study">
            {caseData.map((section, index) => {
                console.log(section);
                return <Section key={index} {...section}/>
            })}
        </Box>
    );
}
 
export default CaseStudy;