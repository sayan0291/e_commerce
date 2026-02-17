import './First.css'

export default function First(){

    const firstarray = [
        {categories:"Woman's Fashion"},
        {categories:"Man's Fashion"},
        {categories:"Electronics"},
        {categories:"Home & Lifestyle"},
        {categories:"Medicine"},
        {categories:"Sports & Outdoor"},
        {categories:"Baby's & Toys"},
        {categories:"Groceries & Pets"},
        {categories:"Health & Beauty"}
    ]

    return(
        <div className="first">
            <div className='blacksection'>
                <div className='firstarraysection'>
                    {firstarray.map((obj,index) => (<p key={index}>{obj.categories}</p>))}
                </div>
                <hr className='dividor' />
                <div className="iphone">
                    <div className='iphone-section'>
                    <div className='text-start'>
                        <div>
                            <img src="/src/Images/apple.png" className='apple-icon' alt="apple icon" />
                            <small>iPhone 14 series</small>
                        </div>
                        <p className='voucher'>Up to 10% of Voucher</p>
                        <a href="#">Shop Now</a>
                    </div>
                    <div>
                        <img src="/src/Images/iphone.jpg" className='iphone-icon' alt="iPhone 14" />
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}