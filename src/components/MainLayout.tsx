import { Layout, theme } from "antd";
import React from "react";
import SideBar from "./SideBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "../screens/dashboard/Dashboard";
import PlayerList from "../screens/players/PlayerList";

export default function MainLayout() {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    return (
        <Layout style={{ minHeight: "100vh", margin: -8 }}>
            <SideBar />
            <Layout>
                <Layout.Header
                    style={{ padding: 0, background: colorBgContainer }}
                ></Layout.Header>
                <Layout>
                    <Layout.Content style={{ padding: 24 }}>
                        <BrowserRouter basename="/">
                            <Routes>
                                <Route path="/" element={<Dashboard />} />
                                <Route path="/players" element={<PlayerList />} />
                            </Routes>
                        </BrowserRouter>
                    </Layout.Content>
                </Layout>
            </Layout>
        </Layout>
    );
}
