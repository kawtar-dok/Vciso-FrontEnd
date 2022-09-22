import React from "react";
// components
import CardPlans from "../Cards/CardPlans";
import CardPlansPopular from "../Cards/CardPlansPopular";
import CardVip from "../Cards/CardVip";
//import '../Header/HeaderPlans.css';

export default function HeaderPlans() {
  return (
    <>
      {/* Header */}

 
        
            <div className="HeaderPlans">
              <div  className="HeaderPlans__plan1" >
 
                  <CardPlans
                    statTitleModel="Basic Vciso"
                    statMarque="Get First Month Free, Then"
                    statPrice="$600.99"
                    statDescripiron="This plan lets you use exclusive services, and an instantly answers without wasting your time."
                  />
              </div>
              <div   className="HeaderPlans__plan2">
                
                  <CardPlansPopular
                  
                    statTitleModel="Vciso"
                    statMarque="Get First Month Free, Then"
                    statPrice="$300.99"
                    statDescripiron="This plan lets you use a specific services."
                  />
              </div>
              <div className="HeaderPlans__plan3">
               
                  <CardVip
                    statTitleModel="Vciso  + Vip tool "
                    statMarque="Get Your Own Expert"
                    statPrice="$1000.99"
                    statDescripiron="Full access to any service, Unlimited tools, endless and having Your private expert"
                 />
              </div>
            </div>
       
    </>
  );
}