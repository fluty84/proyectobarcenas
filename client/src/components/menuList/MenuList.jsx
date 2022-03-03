import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../context/auth.context'
import restaurantService from '../../services/restaurant.services'



import('./MenuList.css')


const MenuList = ({newProduct}) => {

    console.log(useContext(AuthContext))
    const { user } = useContext(AuthContext)
    const [products, setProducts] = useState([])


    useEffect(() => {

        loadMenu()

    }, [])

    useEffect(() => {
    
        loadMenu()
    
    }, [newProduct])

    const loadMenu = () => {

        restaurantService
            .getRestaurant(user)
            .then(response => setProducts(response.data.menu))
            .catch(err => console.log(err))

    }


    return (
        <>
            <ul> Lista de productos
                {
                    products.map(product => {
                        return (<li> <p>{product.name}</p> {product.price}</li>)
                    })
                }
            </ul>
        </>
    )
}



export default MenuList