import "./mailBox.css"
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
const MailBox = () => {
    return (
        <div className="newsLetterBanner">
            <SendIcon/>
                <input type="text" placeholder="Your email adress"/>
            <Button className="">Subscribe</Button>
       </div>
    );
};

export default MailBox;