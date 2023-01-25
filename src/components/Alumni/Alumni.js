import React from "react";

const Alumni = () => {
  const alumnis = [
    {
      id: 1,
      alumniName: "Asfak Mahbub Mahi",
      alumniPhotoUrl: "https://i.ibb.co/rd3yqdL/FB-IMG-1674452956232.jpg",
      alumniCurrentPosition: "SupportEnginner",
      alumniDescription:
        "Mahi was an Ex Student of CSE Department and Former Vice President of Leading University Photographic Society and after completing B.Sc in CSE from Leading University, Mahi joined on a well known IT farm which is Darik as a Support Engineer and currently his experience and activities are muchbetter which help him on future.",
    },
    {
      id: 2,
      alumniName: "Md.Mujammal Ahmed",
      alumniPhotoUrl: "https://tinyurl.com/sjv77nkd",
      alumniCurrentPosition: "Trainee",
      alumniDescription:
        "Mujammal was a ex student of Depertment CSE, who Completed his Bechelor in 2022 and after completing the degree he joined on a IT Firms which is known as Technext Limited as a Trainee and he is works as a devloper & expert in Front END developing",
    },
    {
      id: 3,
      alumniName: "Abu Sufian Fuad",
      alumniPhotoUrl: "https://i.ibb.co/fN6SGqZ/FB-IMG-1674453459513.jpg",
      alumniCurrentPosition: "Developer",
      alumniDescription:
        "Abu Sufian Fuad, known as Fuad is an EX-Student of Batch 47 om CSE Department who completed his Bachelor Degree in 2022 and currently he is working with a ICT Based Firm known as Staff Asia as a develover and he is expert on Front end with core Java Scripts.",
    },
  ];
  return (
    <div className="h-full overflow-auto w-[80%] mx-auto">
      <h1 className="font-bold text-center text-4xl font-pacifico my-10">
        Our Respected Alumni's
      </h1>
      <div className="my-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {alumnis.map((u) => (
          <AlumniBox
            alumniName={u.alumniName}
            alumniPhotoUrl={u.alumniPhotoUrl}
            alumniCurrentPosition={u.alumniCurrentPosition}
            alumniDescription={u.alumniDescription}
          ></AlumniBox>
        ))}
      </div>
    </div>
  );
};

const AlumniBox = ({
  alumniName,
  alumniPhotoUrl,
  alumniCurrentPosition,
  alumniDescription,
}) => {
  return (
    <div className="bg-white scale-95 hover:scale-100 duration-200">
      <img
        className="h-[200px] sm:h-[250px] md:h-[350px] w-full"
        src={alumniPhotoUrl}
      />
      <div className="p-5">
        <h3 className="font-bold text-lg mb-4">{alumniName}</h3>
        <h3 className="font-bold text-base mb-2">{alumniCurrentPosition}</h3>
        <p>{alumniDescription}</p>
      </div>
    </div>
  );
};

export default Alumni;
