import React from 'react'

class MainComponent extends React.Component {


    render(){
        return(
            
                <main className="main-area">
                <section className="cards">
                        <article className="card">
                            <a href="#">
                                <picture className="thumbnail">
                                    <img src="images/cropped/banana-wide.jpg" alt="A banana that looks like a bird" />
                                </picture>
                                <div className="card-content">
                                    <h2>The Banana Bird</h2>
                                    <p>This banana looks a lot like a bird, doesn't it? When originally posted there was some debate whether it was a hummingbird, a seagull, or a crow. I stand by my earlier statement that it is a banana.</p>
                                </div>
                            </a>
                        </article>

                        <article className="card">
                            <a href="#">
                                <picture className="thumbnail">
                                    <img src="images/cropped/boller.jpg" alt="Norwegian boller" />
                                </picture>
                                <div className="card-content">
                                    <h2>Norwegian Boller</h2>
                                    <p>Boller - or sweet wheat buns - is a favored snack and comfort food for Norwegians, especially enjoyed for childrens' birthdays or on a cold and rainy/snowy day coupled with hot cocoa.</p>
                                    <p>One of the key ingredients of boller is cardamom - something that gives them a distinct aroma and gives them the more lengthy name "cardamom boller".</p>
                                </div>
                            </a>
                        </article>
                    </section>
                </main>
        );
    }

}
export default MainComponent;