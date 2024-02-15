import React, { lazy,Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../Components/Layout/index.js";
import { Helmet } from "react-helmet";
import { Center, Spinner } from "@chakra-ui/react";

function AppRoutes() {
  return (
    <Routes>
      {publicRoutes.map((route, index) => {
        const { path, Component,pageTitle } = route;
        return <Route key={index} path={path} element={
            <>
            <Helmet>
                <title>{`${pageTitle && `${pageTitle} - `}NFT`}</title>
            </Helmet>
            <Layout>
                <Suspense 
                fallback={
                    <Center h={window.innerHeight} w={"full"} flex={1}>
                        <Spinner
                        thickness="4px"
                        speed="0.60s"
                        emptyColor="gray.200"
                        color="red.700"
                        size="xl"
                        />
                    </Center>
                }
                >
                    <Component/>
                </Suspense>
            </Layout>
            </>
        } />;
      })}
      
    </Routes>
  );
}

const publicRoutes = [
  {
    path: "/",
    Component: lazy(() => import("../Pages/Home.jsx")),
    pageTitle: "",
  },
  {
    path: "/profile",
    Component: lazy(() => import("../Pages/Profile.jsx")),
    pageTitle: "Profile",
  },
  {
    path: "*",
    Component: lazy(() => import("../Pages/NotFound.jsx")),
    pageTitle: "Not Found",
  },
  {
    path: "/artistProfilePage",
    Component: lazy(() => import("../Pages/ArtistProfilePage.jsx")),
    pageTitle: "Artist Profile",
  },
  {
    path: "/artworkPage",
    Component: lazy(() => import("../Pages/ArtworkPage.jsx")),
    pageTitle: "Artwork Page",
  },
  {
    path: "/checkout",
    Component: lazy(() => import("../Pages/Checkout.jsx")),
    pageTitle: "Checkout",
  },
  {
    path: "/connectedDapps",
    Component: lazy(() => import("../Pages/ConnectedDapps.jsx")),
    pageTitle: "ConnectedDapps",
  },
  {
    path: "/connectWallet",
    Component: lazy(() => import("../Pages/ConnectWallet.jsx")),
    pageTitle: "ConnectWallet", 
  },
  {
    path: "/cryptoWalletDescription",
    Component: lazy(() => import("../Pages/CryptoWalletDescription.jsx")),
    pageTitle: "ConnectWalletDescription",
  },
  {
    path: "/FAQ",
    Component: lazy(() => import("../Pages/FAQ.jsx")),
    pageTitle: "FAQ",
  },
  {
    path: "/featuredProjects",
    Component: lazy(() => import("../Pages/FeaturedProjects.jsx")),
    pageTitle: "FeaturedProjects",
  },
  {
    path: "/howItWorks",
    Component: lazy(() => import("../Pages/HowItWorks.jsx")),
    pageTitle: "HowItWorks",
  },
  {
    path: "/artists",
    Component: lazy(() => import("../Pages/MikoArtists.jsx")),
    pageTitle: "MikoArtists",
  },
  {
    path: "/featuredArtists",
    Component: lazy(() => import("../Pages/MikoFeaturedArtistis.jsx")),
    pageTitle: "mikoFeaturedArtists",
  },
  {
    path: "/mintArtwork",
    Component: lazy(() => import("../Pages/MintArtwork.jsx")),
    pageTitle: "mintArtwork",
  },
  {
    path: "/recharge",
    Component: lazy(() => import("../Pages/Recharge.jsx")),
    pageTitle: "recharge",
  },
  {
    path: "/settings",
    Component: lazy(() => import("../Pages/Settings.jsx")),
    pageTitle: "settings",
  },
  {
    path: "/successPage",
    Component: lazy(() => import("../Pages/SuccessPage.jsx")),
    pageTitle: "successPage",
  },
  {
    path: "/transferMatic",
    Component: lazy(() => import("../Pages/TransferMatic.jsx")),
    pageTitle: "transferMatic",
  },
];

export default AppRoutes;
