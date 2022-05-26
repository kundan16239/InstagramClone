import React from 'react'

export default function Card(Props) {
  return (
    <>
    <div className="all">
      <div className="header">
        <div className='header-1'>
          <div>{Props.details.name}</div>
          <div>{Props.details.location}</div>
        </div>
        <img className='card-postImg1' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAeFBMVEX///8AAADKysrY2Nj5+fnQ0NDV1dXm5ub29vbHx8fDw8Px8fFDQ0MJCQlUVFR/f39KSkqLi4u6urp1dXVVVVWmpqbd3d2Tk5Oenp6tra0bGxttbW0zMzM+Pj4QEBBPT0+IiIgjIyO0tLRiYmIiIiIXFxc3NzcsLCzZzPGiAAAEVUlEQVR4nO3baXPaMBCAYQSBYAiEKyEXR2iO//8PG3OFYnsvnOm08z7ftWNhWVpJS6MBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAf0q/0242262rmqO2tlG7NYa8CoTsTqY36WAwHLfreZLe7egYNa3WzRpitsfDwTHkYt2zvY/JLBXc3l/6LNmvYtRp56KQrdtiyFmmNrtbFpvlRhe9yM1redQP/YGqNG/KQ74/is0m5a22VtfRh8kq+pdbtEIh70fVIdOkstlVyUg6dRfr4FSOOg+EfJBDziqmnUxu9mUUmANbatSPvjNkf6HGLP2mlN9lxz1SpXF/5Bup95aQJeNtbGmXknNSvbNF9awcbVvIwuCf29o53+KjNap93dBH/d5D8FFScnw1PXtU6w93bQ+5OW3XsbdLH+YOOp4mPRljPjlinnxRV45mXwmOtYefnqi/TCGfPSGfgu0qpuKikqRKUr1Of3MM+9zxXXjGaO7T1EHPGM0tDTEHepg/HMbph7NdklO/vZIEXqYnN+YJ/2C1a+d89V/eDR00z+rftL2Pb7rY2q1CFUm6xPDNKDlumQclpDF9OLWdv7zfS26kdrAfiPqqxHwPxMxXb2O6VmxY9++t5afeCXErz09fow1FgaGf0lgMuY6EvIkN0q8dmNLBbiiqvAy9hGJ2bdubIqWH+l6zlDT4I192yrctoc9QzZTdK9eOlC01YyEfIrN6rif30JkHHkipRGjuyjM3V3pse5ZGIE3aWQshnWnuwbARa6elWN4Ecu9ZCKkcaFX5jPZQ2UIFo0pbqODAX0afZfoj71DKlYLvMEWfRelhJMFK+UdTew8HjbdYQ2WUBucvaZQGZ5q3WHqlzjTDWFRpZASX2FH05Sv7p+APLu2fgsnX1HbUXaQcUweXZymPCG0t8h/Nv8PfUvbjxoPpc1IuGEvmUxZMaNUtcCiqfGgamzH6wU2JduDgP4fKyRN0aKpZRBuqh/COa4Jv8gWN6c7pXP4qIltg/WQ/8tVoJ6aRRXa741z5222UZ2mE0kjtwDR61hbYWg70DkbGlHrD7A+5v7XTL43PmC703VvrtRrSvXbvz7zdx9OWI+/AuYqh3KeiFKbS8X7NmbkZ76Sdk7TlMsR5wHWy+ri2UOb7Q9dKq51P7rjexdtJQ0/O92LtoGsdWhpLBD2bvT8W7f/xHv8sjf/LtRj2qjnzcCtM+P9bPU1J5mxZbAbumqiN5Wl+oCaqdGbWp+JVoK5NH1XuuraunqJU/GZdZcsTrE1UMtRIbaIyawgHy9KYmoXrS3tCmc9NrPr4XtgOv8lluVVf4+qiGuHHij4u4sXeWcVQfdFrDCYlu6nL67x7ZXXesfrgg05JgvNsKwHsbqbfP9ByNq+pVn9yezK0huM6avU785PXMZwrV35n+u0sy5q1/9+i/n9xdFs/8ccQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/LTfNsU45QIOoRYAAAAASUVORK5CYII=" alt="" />
      </div>  
    
        <div className="post">
          <img className='card-postImg2' src={"https://instagram-backend333.herokuapp.com/"+Props.details.PostImage} alt="" />
        </div>
        <div className='header-3'>
          <div>
            <img className='card-postImg3' src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Love_Heart_symbol.svg/2250px-Love_Heart_symbol.svg.png" alt="" />
            <img className='card-postImg3' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGrYlFVRZ9D13i-_PIRiotOBfMVbraV4dFPw&usqp=CAU" alt="" />
          </div>
          <h3>{(new Date(Props.details.createdAt)).toLocaleDateString()}</h3>
        </div>
        <div className="likes">
          <h4>{Props.details.likes} likes</h4>
        </div>
        <div>
          <h3>{Props.details.description}</h3>
        </div>
      </div>
    
  </>
  )
}
