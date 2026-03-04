function ServiceItem(props) {

  return (
    <div>

      <h3>{props.name}</h3>

      <p>{props.shortDescription}</p>

      <button onClick={props.onToggle}>
        {props.isExpanded ? "Hide Details" : "Show Details"}
      </button>

      {props.isExpanded && (
        <p style={{ color: "blue" }}>
          {props.detailedDescription}
        </p>
      )}

    </div>
  );

}

export default ServiceItem;
