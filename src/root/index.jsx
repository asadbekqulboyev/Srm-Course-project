import React from 'react'
import { Container } from './style';
import sidebar from '../utils/sidebar';
import { Navigate, Route,Routes } from 'react-router-dom';
import Sidebar from '../components/Sidebar';

function Root() {
    return (
        <Container>
            <Routes>
                <Route element={<Sidebar/>}>
                {sidebar.map((parent) => {
                    const ElementParent = parent.element
                    if (parent?.children?.length) {

                      return  parent.children.map((child)=>{
                         const ElementChild = child.element
                            return(
                            <Route key={child.id} path={child.path} element={<ElementChild/>}/>
                            )
                          })  
                        }else
                    return !parent.hidden&& (
                        <Route key={parent.id} path={parent.path} element={<ElementParent/>}/>
                    )
                })}
                </Route>
                <Route path='*' element={<Navigate to={'/analitika'}/>}/>
                <Route path='*' element={<h1>404</h1>} /> 
            </Routes>
        </Container>
    )
}

export default Root;