import React from "react";

export default function Alert() {
  const [showAlert, setShowAlert] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setShowAlert(false);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  if (!showAlert) {
    return null;
  }
  return (
    <div className="blocks hidden md:block absolute bottom-[70px] right-7 w-[300px] h-[100px] parallax_html">
      <div className="bg-gradient-to-r from-indigo-500 to-purple-500 text-sm text-slate-200 p-4 rounded shadow">
        <p>
          You can navigate thru the sections with the respective Keys. <br />
          E.g.: H for Home.
        </p>
      </div>
    </div>
  );
}
