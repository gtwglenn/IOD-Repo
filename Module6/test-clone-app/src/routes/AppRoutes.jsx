import { Routes, Route } from "react-router-dom";
import Homepage from "../pages/Homepage";
import BitcoinRates from "../components/BitcoinRates";
import LoginForm from "../components/LoginForm";
import PostsPage, { Post, PostList } from "../pages/PostsPage";

import React from "react";

export default function AppRoutes(props) {

    return (
        <Routes>
            <Route index element={<Homepage {...props} />} />
            <Route path="login" element={<LoginForm {...props} />} />
            <Route path="bitcoin" element={<BitcoinRates />} />
            <Route path="posts" element={<PostsPage />}>
                <Route index element={<PostList />} />
                <Route path=":id" element={<Post />} />
            </Route>
        </Routes>
    )
}