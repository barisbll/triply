import { Fragment } from "react";
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

  // useEffect to fetch all the plans
  const allStages = dummyStages;
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
    const items = allStages.map((stage) => {
      return (
        <StageCard
          dateStart={stage.dateStart}
          dateEnd={stage.dateEnd}
          planId={match.params.planId}
          stageId={stage.stageId}
          country={stage.address.country}
          city={stage.address.city}
          street={stage.address.street}
          postalCode={stage.address.postalCode}
          buildingNumber={stage.address.buildingNumber}
          flatNumber={stage.address.flatNumber}
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
