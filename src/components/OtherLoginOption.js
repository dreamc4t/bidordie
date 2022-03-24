import { FaFacebook, FaGoogle, FaTwitter } from "react-icons/fa";

const OtherLoginOption = () => {
  const others = [
    { key: 1, site: "Facebook", logo: <FaFacebook /> },
    { key: 2, site: "Google", logo: <FaGoogle /> },
    { key: 3, site: "Twitter", logo: <FaTwitter /> },
  ];

  return (
    <div className="login-with-other">
      {others.map((x) => (
        <button className="button-element" key={x.key}>
          {x.logo} {x.site}
        </button>
      ))}
      <div></div>
    </div>
  );
};

export default OtherLoginOption;
