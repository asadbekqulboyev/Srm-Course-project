import React from 'react'
import { Container } from './style';
import sidebar from '../utils/sidebar';
import { Navigate, Route,Routes } from 'react-router-dom';

function Root() {
    return (
        <Container>
            <Routes>
                {sidebar.map((parent) => {
                    const ElementParent = parent.element
                    if (parent?.children?.length) {
                      return  parent.children.map((child)=>{
                         const ElementChild = child.element
                            return(
                            <Route key={parent.id} path={parent.path} element={<ElementChild/>}/>
                            )
                          })  
                        }else
                    return (
                        <Route key={parent.id} path={parent.path} element={<ElementParent/>}/>
                    )
                })}
                <Route path='*' element={<Navigate to={'/analitika'}/>}/>
                 <Route path='*' element={<h1>404</h1>} />



            </Routes>
        </Container>
    )
}

export default Root;