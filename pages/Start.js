// import Link from 'next/link';
import Image from 'next/image'
const Start = () => {
    return (
        <div className='container-fluid'>
            <div className="row">
                <div className="col-lg-6 ">
                    <h2 className="main">First Website</h2>
                    <h4 className="text1">A simple & basic layout. It helps you in learning; how to structure your webpage.</h4>
                    <div className='btn1'>
                        <button type="button" className="btn btn-primary"
                            style={{
                                backgroundColor: 'rgb(51, 195, 240)',
                                borderRadius: '30px',
                                width: '150px',
                                borderColor: 'rgb(51, 195, 240)',
                                
                            }}>GET STARTED</button>
                    </div>
                </div>
                <div className="col-lg-6"><Image
                    src="/one.png"
                    width={410}
                    height={700}
                    className='imagesetting' 
                    style={{}}
                    alt="Picture of the author"
                /></div>

            </div>
            <div className='background'>
                <div className='row'>
                    <div className='col-lg-4'>
                        <h2 className='head1a'>67%</h2>
                        <h5 className='title1a'>Purchase Increase</h5>
                        <p className='descr1a'>Percentage of users more likely to<br/> purchase on mobile friendly site.</p>
                    </div>
                    <div className='col-lg-4'>
                        <h2 className='head1b'>90%</h2>
                        <h5 className='title1b'>Multi-device Users</h5>
                        <p className='descr1b'>Most of the world accesses the internet on<br/> multiple devices.</p>
                    </div>
                    <div className='col-lg-4'>
                        <h2 className='head1c'>66%</h2>
                        <h5 className='title1c'>Sad Users</h5>
                        <p className='descr1c'>Percentage of users that are frustrated <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;with page load times.</p>
                    </div>


                </div>
            </div>
            <div className='container'>
                <h3 className='head2'>Our Mission</h3>
                <p className='descr2'>To spread technology & produce skilled developers in Pakistan. Techna took an
                    initiative to provide Free or Low-Cost technology education; this will help to solve unemployment issues of
                    youngsters and boost I.T. Exports of Pakistan.</p>

                <div className='btn2'>
                    <button type="button" className="btn btn-primary"
                        style={{
                            backgroundColor: 'rgb(51, 195, 240)',
                            borderRadius: '30px',
                            width: '120px',
                            borderColor: 'rgb(51, 195, 240)'
                        }}>VISIT US</button>
                </div>


            </div>
            <div className='foot'>
                <div className='data'>
                    <h3>Responsive Images</h3>
                    <p>Responsive images looks beautiful. I suggest exploring<br /> solution to serving
                        different images based on device size.</p>
                </div>

                <div className='row'>
                    <div className='col-lg-6' style={{ textAlign: 'right', paddingRight: '20px' }}><Image
                        src="/three.png"
                        width={500}
                        height={250}
                        alt="Picture of the author"
                    /></div>
                    <div className='col-lg-6' style={{ paddingLeft: '20px' }}><Image
                        src="/three.png"
                        width={500}
                        height={250}
                        alt="Picture of the author"
                    /></div>
                </div>

                <div>
                    <p className='last'>
                        © HTML Website. Made with ❤️ by Ali Hamza<br />
                        Powered by Techna.
                    </p>
                </div>
            </div>
        </div>


    )


}
export default Start;