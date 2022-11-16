import onlineImg from "../Assets/icon-online.svg";
import budgetImg from "../Assets/icon-budgeting.svg"
import onboardingImg from "../Assets/icon-onboarding.svg"
import apiImg from "../Assets/icon-api.svg";

const details = [
    {
        img: {onlineImg},
        alt: "icon of hand holding credit cards",
        heading: "Online Banking",
        description: "Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world."
    },
    {
        img: {budgetImg},
        alt: "smartphone icon with dollar sign on a chat bubble",
        heading: "Simple Budgeting",
        description: "See exactly where your money goes each month. Received notifications when you're close to hitting your limits."
    },
    {
        img: {onboardingImg},
        alt: "icon with people",
        heading: "icon with people",
        description: " We don't do branches. Open your account in minutes online and start taking control of your finances right away."
    },
    {
        img: {apiImg},
        alt: "icon of computer chip",
        heading: "Open API",
        description: " Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier."
    }
]

export default details;