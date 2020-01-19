import React from 'react'
import {Button} from 'react-bootstrap'
// así puedes importar elementos de Bootstrap si quieres agregar otro por ejemplo
// 'Nav' puedes agregarlo al import así: import{Button,Nav} from 'reacr-bootstrap'
// y en el html de abajo usarlo así: <Nav></Nav>

export default function Menu() {
  return (
    <div>
      <p>Menu</p>
      <Button className="info">Hi</Button>  
      {/* las clases de css se escriben 'className' y esta clase de 'info' es de bootstrap */}
    </div>
  )
}
