export default function Game() {
  return (
    <>
      <p>Hello</p>
      <PrincessCard name="Ariel" image="ariel.png" />
      <PrincessCard name="Mulan" image="mulan.png" />
      <PrincessCard name="Cinderella" image="cinderella.png" />
    </>
  );
}

function PrincessCard({ name, image }) {
  return (
    <div className="card ">
      <p>
        <a href={name + ".html"}>{name}</a>
      </p>
      <img src="{{image}}" alt="{name}" />
    </div>
  );
}
