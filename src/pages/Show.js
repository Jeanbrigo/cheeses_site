import { useLoaderData, Form } from "react-router-dom";

function Show(props) {
  const cheese = useLoaderData();

  return (
    <div className="cheese">
      <h1>{cheese.name}</h1>
      <h2>{cheese.type}</h2>
      <img src={cheese.image} alt={cheese.name} />

      <h2>Update {cheese.name}</h2>
      <Form action={`/update/${cheese._id}`} method="post">
        <input defaultValue={cheese.name} type="input" name="name" placeholder="cheese's name" />
        <input defaultValue={cheese.image} type="input" name="image" placeholder="cheese's picture" />
        <input defaultValue={cheese.type} type="input" name="type" placeholder="cheese's type" />
        <input type="submit" value={`update ${person.name}`} />
      </Form>
      <h2>Delete Cheese</h2>
      <Form action={`/delete/${cheese._id}`} method="post">
      <input type="submit" value={`delete ${cheese.name}`} />
      </Form>
    </div>
  );
}

export default Show;