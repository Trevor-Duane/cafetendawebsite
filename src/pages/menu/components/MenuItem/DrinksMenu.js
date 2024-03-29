import React from 'react'
import { Col, Row } from 'react-bootstrap'
import './Itemstyles.css'
import SingleItem from './SingleItem'
import { breakfastCombos, breakfastSandwiches } from '../../Data'
import { FaChevronDown } from 'react-icons/fa'

export default function DrinksMenu() {
    const [isActive, setIsActive] = React.useState({})

    React.useEffect(() => {
        setIsActive("breakfastSandwiches")
    }, [])
  return (
    <Row className='menuItemRow'>
        <Col sm={12}>
            <div className="menuItemsHeader">
                <span>Breakfast Combos</span>
                {/* <FaChevronDown size={20} color="#84449a"/> */}
            </div>

        {
            breakfastCombos.map((item) => (
                <SingleItem
                key={item.id}
                name={item.name}
                price={item.price}
                description={item.description}
            />
            ))
        }
        </Col>
    </Row>
  )
}
