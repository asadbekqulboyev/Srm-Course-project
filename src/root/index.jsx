import React from 'react'
import { Container } from './style';
import sidebar from '../utils/sidebar';
import { Navigate, Route, Routes } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Checking from '../components/Guruhlar/Guruhlar/Checking';
import UmumiySidebar from '../components/Sozlamalar/Umumiy/Sidebar';
import { sozlamalar } from '../utils/sozlamalar';

function Root() {
    return (
        <Container>
            <Routes>
                <Route element={<Sidebar />}>
                {/* Sozlamalar Umumiy */}
                    <Route element={<UmumiySidebar />}>
                        {sozlamalar.map((item) => {
                            const { element: Element } = item
                            return (
                                <Route key={item.id} path={`sozlamalar/umumiy/${item.path}`} element={<Element />} />
                            )

                        })

                        }
                    </Route>
                    <Route path={'/guruhlar/guruhlar/checking'} element={<Checking />} />
                    {sidebar.map((parent) => {
                        const ElementParent = parent.element
                        if (parent?.children?.length) {
                            return parent.children.map((child) => {
                                const ElementChild = child.element
                                return (
                                    <Route key={child.id} path={child.path} element={<ElementChild />} />
                                )
                            })
                        } else
                            return !parent.hidden && (
                                <Route key={parent.id} path={parent.path} element={<ElementParent />} />
                            )
                    })}
                </Route>
                {sidebar.map((parent) => {
                    const ElementParent = parent.element
                    return (
                        parent?.hidden && (
                            <Route key={parent.id} path={parent.path} element={<ElementParent />} />
                        )
                    )
                })}
                <Route path="/" element={<Navigate to={"/analitika"} />} />
                <Route path="*" element={<h1>404 not found</h1>} />
            </Routes>
        </Container>
    )
}

export default Root;