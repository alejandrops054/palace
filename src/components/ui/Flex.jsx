export default function Flex(props) {
  const { title = "", color = "#9BA2C6" } = props;

  return (
    <h5
      className="p-2 bd-highlight"
      style={!color ? color : { color: `${color}` }}
    >
      {title}
    </h5>
  );
}
