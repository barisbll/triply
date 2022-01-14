import { useEffect, useState } from "react";
import { useRouteMatch } from "react-router-dom";

import DetailsCard from "../components/UI/DetailsCard";

const dayInMili = 86400000;

const dummyRestaurants = [
  {
    name: "Restaurant 1",
    dateStart: new Date().toISOString(),
    dateEnd: new Date(Date.now() + dayInMili * 7).toISOString(),
    restaurantId: 1,
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
    name: "Restaurant 2",
    dateStart: new Date().toISOString(),
    dateEnd: new Date(Date.now() + dayInMili * 7).toISOString(),
    restaurantId: 1,
    address: {
      country: "Italy",
      city: "Rome",
      street: "street 1",
      postalCode: 42890,
      buildingNumber: 3,
      flatNumber: 8,
    },
  },
];

const dummyAccomadation = [
  {
    name: "Accomadation 1",
    dateStart: new Date().toISOString(),
    dateEnd: new Date(Date.now() + dayInMili * 7).toISOString(),
    accomadationId: 1,
    address: {
      country: "Italy",
      city: "Rome",
      street: "street 1",
      postalCode: 42890,
      buildingNumber: 3,
      flatNumber: 8,
    },
  },
];

const dummyTouristicPlace = [
  {
    name: "TouristicPlace 1",
    dateStart: new Date().toISOString(),
    dateEnd: new Date(Date.now() + dayInMili * 7).toISOString(),
    touristicPlaceId: 1,
    address: {
      country: "Italy",
      city: "Rome",
      street: "street 1",
      postalCode: 42890,
      buildingNumber: 3,
      flatNumber: 8,
    },
  },
];

const dummyTransportation = [
  {
    departureAddress: {
      country: "Italy",
      city: "Rome",
      street: "street 1",
      postalCode: 42890,
      buildingNumber: 3,
      flatNumber: 8,
    },
    arrivalAddress: {
      country: "China",
      city: "Pekin",
      street: "street 1",
      postalCode: 42890,
      buildingNumber: 3,
      flatNumber: 8,
    },
    transportationId: 1,
    transportationMean: "Bus",
    dateStart: new Date().toISOString(),
    dateEnd: new Date(Date.now() + dayInMili * 7).toISOString(),
  },
  {
    departureAddress: {
      country: "Italy",
      city: "Rome",
      street: "street 1",
      postalCode: 42890,
      buildingNumber: 3,
      flatNumber: 8,
    },
    arrivalAddress: {
      country: "Japan",
      city: "Tokyo",
      street: "street 1",
      postalCode: 42890,
      buildingNumber: 3,
      flatNumber: 8,
    },
    transportationId: 2,
    transportationMean: "Plane",
    dateStart: new Date().toISOString(),
    dateEnd: new Date(Date.now() + dayInMili * 7).toISOString(),
  },
  {
    departureAddress: {
      country: "Italy",
      city: "Rome",
      street: "street 1",
      postalCode: 42890,
      buildingNumber: 3,
      flatNumber: 8,
    },
    arrivalAddress: {
      country: "Portugal",
      city: "Lisbon",
      street: "street 1",
      postalCode: 42890,
      buildingNumber: 3,
      flatNumber: 8,
    },
    transportationId: 3,
    transportationMean: "Ship",
    dateStart: new Date().toISOString(),
    dateEnd: new Date(Date.now() + dayInMili * 7).toISOString(),
  },
];

const Details = () => {
  const [planId, setPlanId] = useState(null);
  const [stageId, setStageId] = useState(null);

  const match = useRouteMatch();

  useEffect(() => {
    setPlanId(match.params.planId);
    setStageId(match.params.stageId);
  }, []);

  return (
    <div className="row w-100 align-items-start justify-content-around">
      <DetailsCard
        dataArray={dummyRestaurants}
        title="Add a Restaurant"
        type={1}
      />
      <DetailsCard
        dataArray={dummyAccomadation}
        title="Add Accomadation"
        type={2}
      />
      <DetailsCard
        dataArray={dummyTransportation}
        title="Add Transport"
        type={3}
      />
      <DetailsCard
        dataArray={dummyTouristicPlace}
        title="Add a Touristic Place"
        type={4}
      />
    </div>
  );
};

export default Details;
