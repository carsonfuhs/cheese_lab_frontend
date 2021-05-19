import {useState} from 'react'
import {Link} from 'react-router-dom'

function Index(props) {

    const [newForm, setNewForm] = useState({
        name: "",
        countryOfOrigin: "",
        image: ""
    })

    const handleChange = (event) => {
        setNewForm({...newForm, [event.target.name]: event.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        props.createCheese(newForm);
        setNewForm({
            name: "",
            countryOfOrigin: "",
            image: ""
        })
    }

    const loaded = () => {
        return props.cheese.map((oneCheese) => (
            <div key={oneCheese._id} className='oneCheese'>
                <Link to={`/cheese/${oneCheese._id}`}>
                    <h1>{oneCheese.name}</h1>
                </Link>
                <h3>{oneCheese.countryOfOrigin}</h3>
                <img src={oneCheese.image} alt={oneCheese.name} />
            </div>
        ))
    }

    const loading = () => {
        return <h1>loading...</h1>
    }

    return <section>
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                value={newForm.name}
                name='name'
                placeholder='name'
                onChange={handleChange}
                />
            <input 
                type="text"
                value={newForm.countryOfOrigin}
                name='countryOfOrigin'
                placeholder='Where is this cheese from'
                onChange={handleChange}
                />
            <input 
                type="text"
                value={newForm.image}
                name='image'
                placeholder='Image URL'
                onChange={handleChange}
                />
            <input type="submit" value="Create Cheese"/>

        </form>
        {props.cheese ? loaded() : loading()}
    </section>
}

export default Index