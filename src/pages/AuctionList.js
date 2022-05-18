//import ImASneakyLittleStar from ImASneakyLittleStar;
import SortBar from "../components/SortBar";
import Auction from "../components/Auction";
import { useState, useEffect } from "react";
import useFetch from "../customHooks/useFetch";
import { Link, Navigate } from "react-router-dom";
import AuctionService from "../services/AuctionService";
import UserService from "../services/UserService";

const AuctionList = () => {

  const [users, setUsers] = useState([]);
  const [checked, setChecked] = useState([]);
  const [filteredUsers, setFilteredUsers]= useState([]); 

  useEffect(() => {
    getUsers()
  }, [])

  useEffect(() =>{
    getFilteredUsers()
  }, [users])

  useEffect(()=>{
    getFilteredUsers()
  }, [checked])

  const getUsers= () => {
    UserService.getAllUsers().then(function(response){
      setUsers(response.data)
    }).catch(function(response){
      console.log(response)
    })
  }


  const getFilteredUsers= () =>{
    if(checked.length===0){ 
      setFilteredUsers(users)
    }else{
      setFilteredUsers([])
      for(const user of users){
        let userPassesFilter = false  
        for(const userCompetence of user.competence){
          for(const competence of checked){
            if(competence===userCompetence){
              userPassesFilter=true
            }
          }
        }
        if(userPassesFilter===true){
          setFilteredUsers(filteredUsers =>[...filteredUsers,user])
            
          
        }
      }
    }   
  }

    return (
      (filteredUsers.length>0) ?
      <div className="auction-list" >
        <SortBar setChecked={setChecked} checked={checked}/>
        <div className="auction-container">
          {filteredUsers &&
            filteredUsers.map((user) => (
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
      : <div className="auction-list">
          <SortBar setChecked={setChecked} checked={checked}/>
        </div>
    );



};

export default AuctionList;


/*

              <Auction
                key={auction.id}
                auction={auction}
              />

              */