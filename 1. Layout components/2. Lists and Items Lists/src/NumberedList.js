export const NumberedList = ({
  items = [],
  resourceName,
  itemComponent: ItemComponent,
}) => {
  return (
    <>
      {items.map((item, i) => (
        <>
          {i + 1}
          <ItemComponent key={i} {...{ [resourceName]: item }} />
        </>
      ))}
    </>
  );
};
