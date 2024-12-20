import "./Footer.css";
import { Button } from "../Button/Button.js";

export const Footer = () =>{ return`

<h2>Contact</h2>
<div>
${Button("/icons/twitter.jpg", "Twitter")}
${Button("/icons/github.jpg", "GitHub")}
${Button("/icons/linkedin.jpg", "LinkedIn")}
${Button("/icons/telegram.jpg", "Telegram")}
</div>
`}