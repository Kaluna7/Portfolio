export default function About(){
    return(
        <main className="h-auto ">
            <h1 className="lg:text-5xl font-bold text-center mb-52">About Me</h1>
            <div className="flex flex-col gap-60">
                <div className="grid grid-cols-2 gap-60">
                    <div className="flex flex-col gap-10">
                        <h1 className="font-bold text-3xl">Background</h1>
                        <p>I am from Bali, Indonesia, currently studying at <br/>
                            the Institute of Technology and Business STIKOM Bali,<br />
                            majoring in Information Technology,<br/>
                            while working as a software engineer.
                        </p>
                    </div>
                    <img src="/assets/back-card.jpg" className="h-auto max-h-96"></img>
                </div>

                 <div className="grid grid-cols-2 gap-60">
                    <div className="flex flex-col gap-10">
                        <h1 className="font-bold text-3xl">Who I am ?</h1>
                        <p><span className="font-bold">I Made Kaluna Gadyanga</span>, <br/>
                            and I also have several links below <br/>
                            where you can contact me.
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
}