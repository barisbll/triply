import { Fragment } from "react";
import NoItemsCard from "../components/UI/NoItemsCard";
import PlanCard from "../components/UI/PlanCard";
import CreateCard from "../components/UI/CreateCard";

const dayInMili = 86400000;

const dummyPlans = [
  {
    planName: "Plan1",
    dateStart: new Date().toISOString(),
    dateEnd: new Date(Date.now() + dayInMili * 7).toISOString(),
    numOfPeople: 3,
    planId: 1,
  },
  {
    planName: "Plan2",
    dateStart: new Date(Date.now() + dayInMili * 10).toISOString(),
    dateEnd: new Date(Date.now() + dayInMili * 15).toISOString(),
    numOfPeople: 8,
    planId: 2,
  },
  {
    planName: "Plan3",
    dateStart: new Date(Date.now() + dayInMili * 10).toISOString(),
    dateEnd: new Date(Date.now() + dayInMili * 15).toISOString(),
    numOfPeople: 8,
    planId: 3,
  },
];

const Plans = () => {
  // useEffect to fetch all the plans
  const allPlans = dummyPlans;
  let cards;

  if (!allPlans) {
    cards = (
      <Fragment>
        <p className="text-center mt-5">You have no plans :(</p>
        <div className="d-flex justify-content-center row ">
          <NoItemsCard title="Create a Plan!" linkTo="/create-a-plan" />
        </div>
      </Fragment>
    );
  } else {
    const items = allPlans.map((plan) => {
      return (
        <PlanCard
          planName={plan.planName}
          dateStart={plan.dateStart}
          dateEnd={plan.dateEnd}
          numOfPeople={plan.numOfPeople}
          planId={plan.planId}
          key={plan.planName}
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

  return (
    // <div className="card-columns">
    //   {cards}
    //   <CreateCard title="Create a Plan" />
    // </div>
    { ...cards }
  );
};

export default Plans;
