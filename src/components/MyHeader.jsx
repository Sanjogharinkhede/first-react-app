
/**
 *
 *Header as separate file
 * @param {*} prop
 * @returns
 */
export default function MyHeader(prop) {
    // prop.name = "ram";
    return (
      // parent element is needed ,if not a parent then use <> </>
      <>
        <h4>Separate JSX for component</h4>
        <hr />
        <h5>-----------------</h5>
        <li>{prop.name !== "Sanjog" ? "d" : "e"}</li>
        <li>{prop.email}</li>
        <li>{prop.phone}</li>
      </>
    );
  }