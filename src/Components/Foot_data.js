import { ReactComponent as Mail } from './SVG/Mail.svg'
import { ReactComponent as Github } from './SVG/Github_line.svg'
import { ReactComponent as LinkedIn } from './SVG/Linkedin.svg'



export const connectlinks = [
    {
        id:1,
        text:"Resume",
        url:'https://docs.google.com/document/d/12Xz0J68timEgOksSCOezmX1ZapGLeR4x-Nnci4BZ8b0/edit',
        class:"neon-buttonViolet",
        icon: "",

    },
    {
        id:2,
        text:"Git",
        url:'https://git.generalassemb.ly/devin',
        class:"Connect_Icon",
        icon: <Github />,


    },
    {
        id:3,
        text:"LinkedIn",
        url:'https://www.linkedin.com/feed/?trk=homepage-basic_signin-form_submit',
        class:"Connect_Icon",
        icon: <LinkedIn />,


    },
    {
        id:4,
        text:"Email",
        url:'mailto:devin_jansa@icloud.com',
        class:"Connect_Icon",
        icon: <Mail />,

    }
]