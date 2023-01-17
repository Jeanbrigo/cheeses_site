import { redirect } from "react-router-dom"

const URL = "https://cheese-backendd.onrender.com"

export const createAction = async ({request}) => {
  // get data from form
  const formData = await request.formData()
  // set up our new cheese to match schema
  const newCheese = {
      name: formData.get("name"),
      image: formData.get("image"),
      type: formData.get("type")
  }
  // Send new cheese to  API
  await fetch(URL + "/cheeses", {
      method: "post",
      headers: {
          "Content-Type":"application/json"
      },
      body: JSON.stringify(newCheese)
  })
  // redirect to index
  return redirect("/")
}

export const updateAction = async ({request, params}) => {
  // get data from form
  const formData = await request.formData()
  // set up our new cheese to match schema
  const updatedCheese = {
      name: formData.get("name"),
      image: formData.get("image"),
      type: formData.get("type")
  }
  // Send new cheese to API
  await fetch(URL + "/cheeses/" + params.id, {
      method: "put",
      headers: {
          "Content-Type":"application/json"
      },
      body: JSON.stringify(updatedCheese)
  })
  // redirect to index
  return redirect("/")
}

export const deleteAction = async ({params}) => {
  // delete cheese from API
  await fetch(URL + "/cheeses/" + params.id, {
      method: "delete"
  })
  // redirect to index
  return redirect("/")
}