import React from "react";
import { useParams } from "react-router-dom";
import "./Parents.css";
import Registration from "../../components/Registration/Registration";
import Notices from "../../components/Notices/Notices";
import Transportation from "../../components/Transportation/Transportation";

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
        transportation: (
            <div>
                <Transportation />
            </div>
        )
    };

    return (
        <div className="parents-option">
            {content[option] || <p>Content not found.</p>}
        </div>
    );
};

export default ParentsOption;
