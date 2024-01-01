"use client"; //this is a client side component

import { decrement, increment, reset } from "@/redux/home/homeSlice";
import { RootState } from "@/redux/store";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from 'antd';


const HomeComponent = () => {

  const count = useSelector((state:RootState) => state.counter.value);
  const dispatch = useDispatch();

  // console.log(count,"count")
  
  return (
    <div>
      <div className="div">
        <div className="div-2">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/e788af17945f065604c060a96c5358a970ca6b311c65b4721a43740395d28cbe?"
            className="img"
          />
          <div className="div-3">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/63c2bde7d4bf38590f8f7fc09a13f5ca5a7b8c848b0fc13664e327e6df66328a?"
              className="img-2"
            />
          </div>
        </div>
        <div className="div-4">
          <div className="div-5">
            <div className="div-6">
              <div className="div-7">
                <div className="div-8">
                  <div className="div-9" />
                  <div className="div-10" />
                </div>                                                                    
                <div className="div-11">Welcome to Avi's World</div>                                                                                                                                                                                                                                                                                                                      
                <div className="div-12">
                  <div className="div-13" />
                  <div className="div-14" />                                                                                                                          
                </div>                                                                                                
              </div>
            </div>
            <div className="div-15">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/59be211bf0109b30bd4695cdd7a1cc572c79f265b1983e80a088599b62076786?"
                className="img-3"
              />
            </div>
          </div>
          <div className="div-16">
            <div className="div-17">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/37acdeac86b546c0547be35e5a16540c21831f3348ca303712bf237abdb4de76?"
                className="img-4"
              />
            </div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/bbd921073564d8c34d4e320771d1167da01a066f3a2f937381d97984b8779660?"
              className="img-5"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeComponent;
