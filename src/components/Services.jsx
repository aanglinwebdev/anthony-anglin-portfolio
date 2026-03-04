import { useState } from "react";
import ServiceItem from "./ServiceItem";
import "../data/servicesData.jsx"
import servicesData from "../data/servicesData.jsx";

function Services() {
const [selectedServiceId, setSelectedServiceId] = useState(null);

  // DATA: list of services
  
function handleToggle(id) {

  if (selectedServiceId === id) {
    setSelectedServiceId(null);
  } else {
    setSelectedServiceId(id);
  }

}



  // RETURN: display services
  return (
    <section id = "services">

      <h2>Services</h2>

      {servicesData.map(service => (

  <ServiceItem
    key={service.id}
    name={service.name}
    shortDescription={service.shortDescription}
    detailedDescription={service.detailedDescription}
    isExpanded={selectedServiceId === service.id}
    onToggle={() => handleToggle(service.id)}
  />

    ))}


    </section>
  );
}

export default Services;
