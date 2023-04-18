import Section from "./components/Section";
import PhysiciansDashboard from './images/mindvitals/physicians-dashboard.png';
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
lorem ipsum dolor sit amet, consectetur adipiscing elit.
Nullam auctor, nisl eget ultricies tincidunt, nunc nisl
aliquam nisl, eu aliquam nisl nunc vel nisl. Sed euismod
nunc eu nunc aliquam, nec ultricies nisl aliquam. Sed
euismod nunc eu nunc aliquam, nec ultricies nisl aliquam.
Sed euismod nunc eu nunc aliquam, nec ultricies nisl aliquam.
        `,
        imgSrc: PhysiciansDashboard
    },
    {
        type: 'right-image',
        title: 'Assessment Interface',
        body: `
lorem ipsum dolor sit amet, consectetur adipiscing elit.
Nullam auctor, nisl eget ultricies tincidunt, nunc nisl
aliquam nisl, eu aliquam nisl nunc vel nisl. Sed euismod
nunc eu nunc aliquam, nec ultricies nisl aliquam. Sed
euismod nunc eu nunc aliquam, nec ultricies nisl aliquam.
Sed euismod nunc eu nunc aliquam, nec ultricies nisl aliquam.
        `,
        imgSrc: PhysiciansDashboard
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