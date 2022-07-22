import { ReactComponent as Mail } from './SVG/Mail.svg'
import { ReactComponent as Github } from './SVG/Github_line.svg'
import { ReactComponent as LinkedIn } from './SVG/Linkedin.svg'



export const connectlinks = [
    {
        id:1,
        text:"Resume",
        url:'https://1drv.ms/w/s!AocPESICraLAgZBq3QTBzuC0wHdmsw?e=tMVoBP',
        class:"neon-buttonViolet",
        icon: "",

    },
    {
        id:2,
        text:"Git",
        url:'https://github.com/Doujie625',
        class:"Connect_Icon",
        icon: <Github />,


    },
    {
        id:3,
        text:"LinkedIn",
        url:'https://linkedin.com/in/devinjansa',
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
