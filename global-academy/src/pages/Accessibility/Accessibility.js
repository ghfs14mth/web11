import React from "react";
import "./Accessibility.css";

const AccessibilityPage = () => {
  return (
    <div className="accessibility-container">
      <h2>
        Accessibility Statement for{" "}
        <span className="website-name">Global Academy</span>
      </h2>
      <p>
        This is an accessibility statement from{" "}
        <span className="organization-name">Global Academy Public School</span>.
      </p>
      <h3>Conformance Status</h3>
      <p>
        The{" "}
        <a className="accessibility-links" href="https://www.w3.org/WAI/standards-guidelines/wcag/" target="_blank" rel="noopener noreferrer">
          Web Content Accessibility Guidelines (WCAG)
        </a>{" "}
        defines requirements for designers and developers to improve accessibility for people with disabilities. It defines three levels of conformance: Level A, Level AA, and Level AAA.{" "}
        <span className="website-name">Global Academy</span> is{" "}
        <span className="conformance-status">fully conformant</span> with{" "}
        <span className="conformance-standard">WCAG 2.1 level AA</span>. Fully conformant means that the content fully conforms to the accessibility standard without any exceptions.
      </p>
      <h3>Feedback</h3>
      <p>
        We welcome your feedback on the accessibility of{" "}
        <span className="website-name">Global Academy</span>. Please let us know if you encounter accessibility barriers on{" "}
        <span className="website-name">Global Academy</span>:
      </p>
      <ul className="feedback-list">
        <li>
          Phone: <span className="phone-number">+91 94180-86224</span>
        </li>
        <li>
          E-mail: <a href="mailto:lola@gmail.com" className="accessibility-links email">globalacademy.paonta@gmail.com</a>
        </li>
        <li>
          Visitor Address: <span className="visitor-address">Himuda Colony, Shubh Khera, Paonta Sahib, (H.P)</span>
        </li>
        <li className="contact-other">Instagram: globalacademy_paontasahib</li>
      </ul>
      <p>We try to respond to feedback within <span className="response-time">2 business days</span>.</p>
      <h3>Technical Specifications</h3>
      <p>
        Accessibility of <span className="website-name">Global Academy</span> relies on the following technologies to work with the particular combination of web browser and any assistive technologies or plugins installed on your computer:
      </p>
      <ul className="technologies-used">
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
      </ul>
      <h3>Limitations and Alternatives</h3>
      <p>
        Despite our best efforts to ensure accessibility of{" "}
        <span className="website-name">Global Academy</span>, there may be some limitations. Below is a description of known limitations, and potential solutions. Please contact us if you observe an issue not listed below.
      </p>
      <ol className="limitations-list">
        <li>No limitations reported yet. Please use the ‘report issue’ button if you encounter an issue.</li>
      </ol>
      <h3>Assessment Approach</h3>
      <p>
        <span className="organization-name">Global Academy Public School</span> assessed the accessibility of{" "}
        <span className="website-name">Global Academy</span> by the following approaches:
      </p>
      <ul className="assessment-approaches">
        <li>Self-evaluation</li>
      </ul>
      <hr />
      <h3>Date</h3>
      <p>
        This statement was created on <span className="statement-created-date">13 December 2024</span> using the{" "}
        <a className="accessibility-links" href="https://www.w3.org/WAI/planning/statements/" target="_blank" rel="noopener noreferrer">
          W3C Accessibility Statement Generator Tool
        </a>.
      </p>
    </div>
  );
};

export default AccessibilityPage;
