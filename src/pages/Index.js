import React from "react";
import { Form, Link, useLoaderData } from "react-router-dom";

function Index(props) {
    const cheeses = useLoaderData();
    return (
        <div>
            <h2>Add a Cheese!</h2>
            <Form
                action="/create"
                method="post"
            >
                <input type="input" name="name" placeholder="cheese's name" />
                <input
                    type="text"
                    name="image"
                    placeholder="cheese's picture"
                />
                <input type="input" name="type" placeholder="cheese's type" />

                <input type="submit" value="add cheese" />
            </Form>

            <h2>Cheeses</h2>
            <div className='container'>
                {cheeses.map((cheese) => (
                    <div className="card" key={cheese._id}>
                        <Link to={`/${cheese._id}`} className="cheese">
                            <h1>{cheese.name}</h1>
                        </Link>
                        <img src={cheese.image} alt={cheese.name} />
                        <h3>{cheese.type}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Index;