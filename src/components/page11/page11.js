import "./stylepage11.css";

function page11(){
    return(
        <div className="page">
            <div className="header">
                <div>
                    <span className="regular">Berdasarkan </span>
                    <span className="regularItalic">travel.kompas.com</span>
                </div>
                <div style={{fontSize: '18px'}}>
                    <span className="regular">Raga akan didoakan terlebih dahulu oleh guru atau pemain senior sebelum dimainkan. 
                        Hal ini dilakukan untuk menjaga kekompakkan dan keselamatan dari para pemain selama permainan.</span>
                </div>
            </div>
            <div className="isi">
                <div style={{fontSize: '18px', paddingLeft: '60px'}}>
                    <p className="regular">Aturan bermain a'raga sendiri cukup sederhana, yaitu</p>
                </div>
                <div style={{fontSize: '72px', paddingLeft: '155px'}}>
                    <span className="bold">setiap pemain harus mengoper raga dan menjaga agar raga tidak jatuh ke tanah tanpa memegangnya.</span>
                </div>
                <div style={{fontSize: '18px', paddingLeft: '155px', paddingTop: '20px'}}>
                    <p className="regular">Pemain yang menjatuhkan raga dianggap kalah dan tidak boleh melanjutkan permainan.</p>
                </div>
            </div>
            <div className="footer">
                <p className="regular" style={{fontSize: '18px', paddingLeft: '350px'}}>
                    Terdapat unsur olahraga dan seni dalam tata cara bermainnya. Lalu, permainan ini biasanya diiringi oleh
                    alat musik tradisional khas Bugis dan para pemain akan menari mengikuti iringan musik sembari 
                    memantul-mantulkan raga.
                </p>
            </div>
        </div>
    )
}

export default page11;