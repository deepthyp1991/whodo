import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Navigation from './components/Navigation';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Answer from './components/Answer';
import Submit from './components/Submit';
//import Item from './components/Item';
import ListItems from './components/ListItems';
import ListTopics from './components/ListTopics';
//import users from '../../server/src/routes/users';
//import Account from './components/Account';

export default function App() {

  /*const adminUser = {
    email : 'test@test.com',
    password : 'test'
  }
*/

  const [topics,setTopics] = useState(null);
/*
  const chooseTopics = topics => {
    axios.post("http://localhost:8001/topics",{ 
        topic: topics.topic
  })
  .then( res =>
    {
        console.log(res.data);
        setTopics([...topic]);
    }
    )
  }
  const generateRandomTopics = () => {
    let arrayTopicIds =[];
    for (const i = 0 ; i <4 ; i++) {
        arrayTopicIds.push (Math.floor(Math.random() * 10));
    }
    return arrayTopicIds;
}
*/
    const[currentItem,setCurrentItem] = useState("");
    const[items, setItems] = useState([])
  
  
    useEffect(() => {

      Promise.all([
          axios.get('http://localhost:8001/topics'), 
          axios.get('http://localhost:8001/'),
        ]
      ).then(all => {
        setTopics(all[0].data);
        setItems(all[1].data);
      })
  
    }, []);
  
      
  
  const [error, setError] = useState(null);
  //const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({
    id:0,
    name: '',
    lastName:'',     
    birthDate: '',
    gender:'',
    email: '',
    password: '',
    profilePic : '',
    country: '',
    region: '',
    city: '',
    referrer: '',
    type: '' || 'anonymous',
    relationship: '',
    family: '' 
  })

  const login = details => {
    axios.post('http://localhost:8001/login',{ email:details.email, password:details.password })
    .then(res =>
      {
       if(res.data === 'Email does not exist' || res.data === 'Password is incorrect') {
            setError ('Informations do not match!');
        } else {
          console.log('details in function login', details)
          console.log('login request data', res.data)
          setError(null);
          setUser(res.data);
          console.log('Logged in');
          console.log(user.email)
        }
      })
  };
  const Logout = () => {
    console.log('Logout');
    setUser({
      id:0,
      name: '',
      lastName:'',     
      birthDate:Date(),
      gender:'',
      email: '',
      password: '',
      profilePic : '',
      country: '',
      region: '',
      city: '',
      referrer: '',
      type: '',
      relationship: '',
      family: '' 
    })
  };

  const signup = details => {
    axios.post('http://localhost:8001/signup',{ 
      name: details.name, 
      lastName: details.lastName, 
      birthDate: details.birthDate, 
      gender:details.gender, 
      email: details.email, 
      password: details.password, 
      profilePic: details.profilePic, 
      country: details.country, 
      region: details.region, 
      city: details.city, 
      referrer: details.referrer, 
      type: details.type, 
      relationship: details.relationship, 
      family: details.family
    })
    .then(res =>
      {
        console.log(res.data)
        if(res.data === 'An account with this email exist') {
            setError ('An account with this email exist');
        } else {
          console.log(res.data);
          setError(null);
          setUser(res.data);
          console.log('Signed up');
          console.log(user.email)
        }
      })
  };

 

  const submitItem  = (submittedItem) => {
    const re = /#([a-zA-Z0-9])+/gm
    console.log("submittedItem",submittedItem)
  const submittedTopics = submittedItem instanceof String ? submittedItem.matches(re) : [];
  //submittedTopics = Array.from(submittedTopics); 
  console.log(submittedTopics)
   

  //  while ((topics = re.exec(submitteditem)) != null) {
  //   if (topics.index === re.lastIndex) {
  //   re.lastIndex++;
  //   topics.push(topics)
  //   }
  // }
    let time = new Date();
  axios.post("http://localhost:8001/items",{creator:1, item:submittedItem, time:time, approved:false, topics:['Family', 'Testing']})
  .then(res => {
    console.log("submittedItem",res.data);
  })
 }


  return ( 
  
  <div >  
    <Router>
      <Navigation />
      <Switch>
        <Route path="/login">
          {!user.email && <Login login={login} /> }
        </Route>
        <Route path="/signup">
          {!user.email && <SignUp signup={signup} />}
        </Route>
        <Route path="/" exact>
        <ListItems email={user.email} items={items} setCurrentItem={setCurrentItem}/>
       </Route>
       <Route path="/answer">
         <Answer item ={currentItem}/>
       </Route>
       <Route path="/submit">
         <Submit  submitItem ={submitItem}/>
       </Route>
      </Switch>
      
    </Router>

 {/*

       <Navigation />   
      
  
      {(user.email !== '') ? (<div>
        <h1> Welcome <span>{user.email}</span></h1>
          <button onClick={Logout}>Logout</button>  
        </div>
          ) : <div>
            <Login login={login} error={error}/> 
            <SignUp signup={signup} error={error} />
            </div>}
            <ListTopics topics={topics} />
            <ListItems email={user.email} items={items} answerItem={answerItem}/>
             */}
    </div>
  );
}


