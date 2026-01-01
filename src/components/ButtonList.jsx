import React from 'react'
import Button from './Button'

   
    
    const ButtonList = () => {
      const list=["All","sports","news","Movies","Fruits","Cartoons","Plane","oranges","pies","Grapes","Benten"]
      return (
        <div className="w-full overflow-x-auto scrollbar-hide py-2">
          <div className="flex gap-3">
          {list.map((e)=><Button key={e} name={e} />)}
          <Button name={"All"}/>
          <Button name={"All"}/>
          <Button name={"All"}/>
          <Button name={"All"}/>
          <Button name={"All"}/>
          </div>
          </div>
       
      )
    }
    
    export default ButtonList
    
