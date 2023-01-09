export const formFields = [
    {
        label: "First Name",
        placeholder: "Enter your first name",
        value: "firstName"
    },
    {
        label: "Last Name",
        placeholder: "Enter your last name",
        value: "lastName"
    },
    {
        label: "Mobile Number",
        placeholder: "Enter your mobile number",
        value: "mobileNumber"
    },
    {
        label: "Email Id",
        placeholder: "Enter your email id",
        value: "email"
    },
    {
        label: "Company name",
        placeholder: "Enter your company name",
        value: "companyName"
    },
    {
        label: "Company website",
        placeholder: "Enter your company website",
        value: "companyWebsite"
    }
];

export const mandatoryFields = ["firstName", "mobileNumber", "email", "companyName", "companyWebsite"];

export const growthStages = [
    {
        heading: "Finding Opportunities",
        description: 'Discover powerful growth opportunities based on your data'
    },
    {
        heading: "Execute Growth",
        description: 'Execute full-services including inbound, paid and other channels'
    },
    {
        heading: "Adjust and scale",
        description: 'Review data and adjust for real business impact'
    }
]

export const mobileNumberRegex = new RegExp("^([+][9][1]|[9][1]|[0]){0,1}([ ]{0,1})([0-9]{1})([0-9]{9})$");

export const emailRegex = new RegExp("^\\S+@\\S+\\.\\S+$");
