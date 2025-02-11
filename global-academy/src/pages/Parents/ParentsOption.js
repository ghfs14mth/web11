import React from "react";
import { useParams } from "react-router-dom";
import "./Parents.css";
import Registration from "../../components/Registration/Registration";
import Notices from "../../components/Notices/Notices";

const ParentsOption = () => {
    const { option } = useParams();

    const content = {
        registration: (
            <div>
                <Registration />
            </div>
        ),
        notices: (
            <div>
                <Notices />
            </div>
        ),
    };

    return (
        <div className="parents-option">
            {content[option] || <p>Content not found.</p>}
        </div>
    );
};

export default ParentsOption;
