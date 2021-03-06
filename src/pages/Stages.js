import { Fragment, useEffect, useState } from "react";
import { useRouteMatch } from "react-router-dom";

import NoItemsCard from "../components/UI/NoItemsCard";
import StageCard from "../components/UI/StageCard";
import CreateCard from "../components/UI/CreateCard";

const dayInMili = 86400000;

const dummyStages = [
  {
    dateStart: new Date().toISOString(),
    dateEnd: new Date(Date.now() + dayInMili * 7).toISOString(),
    stageId: 1,
    address: {
      country: "Italy",
      city: "Rome",
      street: "street 1",
      postalCode: 42890,
      buildingNumber: 3,
      flatNumber: 8,
    },
  },
  {
    dateStart: new Date(Date.now() + dayInMili * 10).toISOString(),
    dateEnd: new Date(Date.now() + dayInMili * 15).toISOString(),
    stageId: 2,
    address: {
      country: "Kenya",
      city: "Naurobi",
      street: "street 6",
      postalCode: 42896,
      buildingNumber: 9,
      flatNumber: 3,
    },
  },
  {
    dateStart: new Date(Date.now() + dayInMili * 10).toISOString(),
    dateEnd: new Date(Date.now() + dayInMili * 15).toISOString(),
    stageId: 3,
    address: {
      country: "Iran",
      city: "Tahran",
      street: "street 3",
      postalCode: 42578,
      buildingNumber: 4,
      flatNumber: 9,
    },
  },
  {
    dateStart: new Date(Date.now() + dayInMili * 10).toISOString(),
    dateEnd: new Date(Date.now() + dayInMili * 15).toISOString(),
    stageId: 4,
    address: {
      country: "United States",
      city: "Washington",
      street: "street 12",
      postalCode: 42578,
      buildingNumber: 4,
      flatNumber: 9,
    },
  },
];

const Stages = () => {
  const match = useRouteMatch();
  let planId = match.params.planId;
  // In planId 3 we have user with stages

  // useEffect to fetch all the plans
  const [allStages, setAllStages] = useState(null);

  // Take the user from login state with props
  const userId = 4;

  useEffect(() => {
    fetch(`http://192.168.43.93:8080/pts/user/${userId}/plans/${planId}/stages`)
      .then((res) => {
        return res.json();
      })
      .then((resData) => {
        if (resData.Success) {
          setAllStages(resData.Results);
        }
      });
  }, []);

  // setAllStages(dummyStages);
  let cards;

  if (!allStages) {
    cards = (
      <Fragment>
        <p className="text-center mt-5">You have no stages :(</p>
        <div className="d-flex justify-content-center row ">
          <NoItemsCard
            title="Create a Stage!"
            linkTo={`${match.url}/create-a-stage`}
          />
        </div>
      </Fragment>
    );
  } else {
    const items = allStages?.map((stage) => {
      return (
        <StageCard
          dateStart={stage.StageStartDate}
          dateEnd={stage.StageEndDate}
          planId={stage.Plan}
          stageId={stage.StageId}
          country={stage.Address.Country}
          city={stage.Address.City}
          street={stage.Address.Street}
          postalCode={stage.Address.PostalCode}
          buildingNumber={stage.Address.BuildingNumber}
          flatNumber={stage.Address.FlatNumber}
          key={stage.stageId}
        />
      );
    });
    cards = (
      <div className="card-columns">
        {items}
        <CreateCard title="Create a Plan" />
      </div>
    );
  }

  return { ...cards };
};
export default Stages;
