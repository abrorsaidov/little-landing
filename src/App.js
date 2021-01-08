import Header from './Header';
import Services from './Services';
import PostHero from './PostHero';
import Footer from './Footer';
import News from './News';
import Cards from './Cards';
import Cards2 from './Cards2';
import Price from './Price';
import WhatTheySay from './WhatTheySay';
import './App.css';

function App() {
    let text1 =
        'Become the artist you dreamed of. Find your fans. Next Door gives you this opportunity';
    let text2 =
        'Start your career sitting at home. Spread your music right from the studio';
    let text3 =
        'Making music is much fun when you collaborate. Next Door helps you approach fellow artists, producers, songwriters and vocalists';
    let imgUrl =
        'https://images.pexels.com/photos/1694900/pexels-photo-1694900.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500';
    let imgUrl2 =
        'https://images.pexels.com/photos/3355365/pexels-photo-3355365.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940';
    let imgUrl3 =
        'https://images.pexels.com/photos/4089499/pexels-photo-4089499.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940';
    return (
        <div className='App'>
            <Header />
            <PostHero title='Title 2' text={text2} order={0} imgUrl={imgUrl2} />
            <PostHero title='Title' text={text1} order={1} imgUrl={imgUrl} />
            <Services />
            <Cards />
            <Price />
            <News />
            <Cards2 />
            <WhatTheySay />

            <Footer />
        </div>
    );
}

export default App;
