import {useState} from "react"

function Show(props) {

    //grab the id from the url
    const id = props.match.params.id 

    //put the cheese array in its variable
    const people = props.cheese

    //find the individual cheese in cheese
    const cheese = cheese.find((c) => {
        return c._id === id
    })

    //state for from
    const [editForm, setEditForm] = useState(cheese)

    //handlechange function for form
    const handleChange = (event) => {
        setEditForm({
            ...editForm,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        //udpate the cheese
        props.updateCheese(editForm, cheese._id)

        //redirect cheese back to index
        props.history.push('/')
    }

    const removeCheese = () => {
        props.deleteCheese(cheese._id)
        props.history.push('/')
    }

    return <div className='cheese'>
        <h1>{cheese.name}</h1>
        <img src={cheese.image} alt={cheese.name} />
        <h2>{cheese.countryOfOrigin}</h2>
        
        <button onClick={removeCheese} id="delete">Delete</button>

        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                value={editForm.name}
                name="name"
                placeholder='name'
                onChange={handleChange}
            />
            <input 
                type="text"
                value={editForm.countryOfOrigin}
                name="countryOfOrigin"
                placeholder='Country of Origin'
                onChange={handleChange}
            />
            <input 
                type="text"
                value={editForm.image}
                name="image"
                placeholder='image URL'
                onChange={handleChange}
            />
            <input type="submit" value="Update Cheese"/>
            
        
        </form>

    </div> 
}

export default Show