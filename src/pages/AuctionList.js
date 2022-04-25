//import ImASneakyLittleStar from ImASneakyLittleStar;
import SortBar from "../components/SortBar";
import Auction from "../components/Auction";
import { useState, useEffect } from "react";
import useFetch from "../customHooks/useFetch";
import { Link, Navigate } from "react-router-dom";
import AuctionService from "../services/AuctionService";
import UserService from "../services/UserService";

const AuctionList = () => {

    useEffect(() => {
      getUsers()
    }, [])

  const [users, setUsers] = useState();


  const getUsers= () => {
    UserService.getAllUsers().then(function(response){
      setUsers(response.data)
      console.log(response.data)
    }).catch(function(response){
      console.log(response)
    })
  }

    return (
      (users) ?
      <div className="auction-list" >
        <SortBar />
        <div className="auction-container">
          {users &&
            users.map((user) => (
              user.auctions &&
                user.auctions.map((auction) =>(
                  <div className="auction-kort" key={auction.auctionId}>
                    <Link to={"/auction-page/" + auction.auctionId + "/" + user.id}>
                      <Auction auction={auction} user={user}/>
                    </Link> 

                </div>
                ))

            ))}
        </div>
      </div>
      : null
    );



};

export default AuctionList;


/*

              <Auction
                key={auction.id}
                auction={auction}
              />

              */