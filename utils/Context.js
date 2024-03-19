"use client";
import React, { createContext, useState, useEffect } from "react";
// import Cookies from "js-cookie";
import { setCookie, getCookie } from "cookies-next";

const Context = createContext();

const ContextProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const cookieValue = getCookie("de-car12");
    if (cookieValue) {
      setUserData(JSON.parse(cookieValue));
    }
  }, []);

  useEffect(() => {
    if (userData) {
      setCookie("de-car12", userData, {
        maxAge: 60 * 60 * 24,
        path: "/",
      });
    }
  }, [userData]);

  const logout = () => {
    setUserData(null);
    deleteCookie("de-car12");
  };
  ///////// ******************* Save items *****************

  const [save, setSave] = useState([]);

  useEffect(() => {
    const storedSave = localStorage.getItem("MySavedItems");
    if (storedSave) {
      setSave(JSON.parse(storedSave));
    }
  }, []);

  useEffect(() => {
    if (save.length > 0) {
      localStorage.setItem("MySavedItems", JSON.stringify(save));
    }
  }, [save]);

  const toggleSave = (item) => {
    const isItemInSave = save.some((savedItem) => savedItem._id === item._id);

    if (isItemInSave) {
      // Item found, remove it
      setSave((prevSave) => {
        const newSave = prevSave.filter(
          (savedItem) => savedItem._id !== item._id
        );
        return newSave;
      });
    } else {
      // Item not found, add it at the top
      setSave((prevSave) => [item, ...prevSave.slice(0, 29)]);
    }
  };

  ///////// ******************* recentView *****************
  const [recentView, setRecentView] = useState([]);

  useEffect(() => {
    const storedRecentView = localStorage.getItem("MyRecentView");
    if (storedRecentView) {
      setRecentView(JSON.parse(storedRecentView));
    }
  }, []);

  useEffect(() => {
    if (recentView.length > 0) {
      localStorage.setItem("MyRecentView", JSON.stringify(recentView));
    }
  }, [recentView]);

  const toggleRecentView = (item) => {
    const isItemInRecentView = recentView.some(
      (viewedItem) => viewedItem._id === item._id
    );

    if (isItemInRecentView) {
      // Item found, move it to the top
      setRecentView((prevRecentView) => {
        const updatedRecentView = prevRecentView.filter(
          (viewedItem) => viewedItem._id !== item._id
        );
        return [item, ...updatedRecentView];
      });
    } else {
      // Item not found, add it at the top
      if (recentView.length >= 30) {
        // If the recent view array exceeds 30 items, remove the oldest item
        setRecentView((prevRecentView) => [
          item,
          ...prevRecentView.slice(0, 29),
        ]);
      } else {
        // Otherwise, simply add the item at the top
        setRecentView((prevRecentView) => [item, ...prevRecentView]);
      }
    }
  };

  return (
    <Context.Provider
      value={{
        userData,
        setUserData,
        logout,
        toggleSave,
        toggleRecentView,
        recentView,
        save,
        toggleSave,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export { Context, ContextProvider };
