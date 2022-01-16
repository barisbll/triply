import { Fragment, useEffect, useState } from "react";
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

const Plans = (props) => {
  // useEffect to fetch all the plans
  const [allPlans, setAllPlans] = useState(null);

  const userId = props.userId;
  let cards;
  useEffect(() => {
    fetch(`http://192.168.43.93:8080/pts/user/${userId}/plans`)
      .then((res) => {
        return res.json();
      })
      .then((resData) => {
        setAllPlans(resData.Results);
      });
  }, []);

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
      console.log(plan);
      return (
        <PlanCard
          planName={plan.Name}
          dateStart={plan.TripStartDate}
          dateEnd={plan.TripEndDate}
          numOfPeople={plan.NumberOfTravelers}
          planId={plan.PlanId}
          key={plan.PlanId}
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
