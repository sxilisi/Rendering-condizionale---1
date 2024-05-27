import Age from "./Age";

export default function Welcome({ name = "simone", age }) {
  return (
    <div>
      <p>Hello, {name}!</p>
      {age > 18 && <Age age={age} />}
      {age && <Age age={age} />}
      {age > 18 && age < 65 && <Age age={age} />}
      {age > 18 && age < 65 && name === "john" && <Age age={age} />}
      {age > 30 && <Age age={age} />}
    </div>
  );
}
