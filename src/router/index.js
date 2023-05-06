import React from 'react'
import {
    Route,
    Routes,
    useLocation,
    Navigate,
    useNavigate,
} from 'react-router-dom'
import { useEffect, useContext } from 'react'

import Resume from '../pages/resume'
import About from '../pages/about'
import Msg from '../pages/msg'
import Editor from '../pages/editor'
import Login from '../pages/login'
import ErrPage from '../pages/errPage'

import { Context } from '../store/index'

const AppRouter = () => {
    const location = useLocation()
    const { isLogin } = useContext(Context)
    const navigate = useNavigate()

    const { pathname } = location

    const redirectMain = () => {
        if (isLogin) {
            navigate('/resume/edit')
        }
    }

    useEffect(redirectMain, [isLogin])

    // 路由統一管理與攔截器撰寫
    const routes = [
        {
            path: '/',
            auth: false,
            element: <Resume />,
        },
        {
            path: '/about',
            auth: false,
            element: <About />,
        },
        {
            path: '/msg',
            auth: false,
            element: <Msg />,
        },
        {
            path: '/resume/login',
            auth: false,
            element: <Login />,
        },
        {
            path: '/resume/edit',
            auth: true,
            element: <Editor />,
        },
        {
            path: '/errPage',
            auth: false,
            element: <ErrPage />,
        },
        {
            path: '/*',
            auth: false,
            element: <Navigate to='/errPage' replace={true}></Navigate>,
        },
    ]

    //请求页面路径需要验证 && 没有登录 -> 跳转登录页 ， 后续考虑登录后是否自动跳转被拦截路径
    const RouteNav = param => {
        return param.map(item => {
            return (
                <Route
                    path={item.path}
                    element={
                        item.path === pathname && item.auth && !isLogin ? (
                            <Navigate
                                to='/resume/login'
                                replace={false}
                            ></Navigate>
                        ) : (
                            item.element
                        )
                    }
                    key={item.path}
                >
                    {item?.child && RouteNav(item.child)}
                </Route>
            )
        })
    }

    return <Routes>{RouteNav(routes)}</Routes>
}

export default AppRouter
