import { useSelector, useDispatch } from "react-redux"
import { addToCart } from "../services/actions/action"
import { cardDataItems } from "../carddata"
function Home() {
    const link = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXUk2zTFYFUeBsShabZsFnc7m6eBHBcbB9VQ&usqp=CAU"
    const state = useSelector(state => state.cardItem)
    const dispatch = useDispatch()
    console.log(state)
    const addItems = (item) => {
        dispatch(addToCart(item))
        alert(`your ${item.name} has been added to cart.`)
    }
    return (
        <>
            <span className="items_in_cart">{state.items}</span>
            <div className="cart_icon">
                <i className="fa fa-shopping-cart" aria-hidden="true"></i>
            </div>
            <h1>
                Iphones
            </h1>
            {
                cardDataItems.map(item => {
                    return (
                        <div className="item">
                            <div className="image_wraper">
                                <img src={link} alt="" />
                            </div>
                            <div className="price">
                                <span>Price:</span>
                                <span>{item.price}</span>
                            </div>
                            <div className="btn">
                                <button onClick={() => { addItems(item) }}>Add To Cart</button>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}

export default Home