import React from 'react'
import { Link } from 'react-router-dom';
import picSrc from '../img/logo_name(x).png'


const Logo = () => {
    return (

        <div>
            {/* ----------- 상단바 ------------ */}

            <header style = {{backgroundColor: '#F0F0F0'}} className="header" >

                <div style={{
                    display: 'flex', 
                    alignItems: 'center',
                    justifyContent: 'space-between', padding: '10px'
                }}>
                    {/* 텍스트 */}
                    <div>
                        <h1 style={{ fontSize: '30px' }} className='puppiettxt'>PUPPIET</h1>
                    </div>

                    {/* 이미지 */}
                    <div style={{ display: 'flex', alignItems: 'center',
                                    marginLeft : '140px'}}>
                        <Link to='/'>
                            <img className='logo' src={picSrc} width='150px' alt="Logo"></img>
                        </Link>
                    </div>
                    
                    <div>
                        <Link to="/petinfo" style={{ marginRight: '30px' }} className='maintext'>반려견 정보</Link>
                        <Link to="/mypage" style={{ marginRight: '30px' }} className='maintext'>마이페이지</Link>
                        <Link to="/" style={{ marginRight: '30px' }} className='maintext'>로그아웃</Link>
                    </div>
                </div>
            </header>

            {/* 타이틀 */}
            <div className='bar-container'>
                <Link to="/information" className='bartext'>정보 보기</Link>
                <Link to="/feed" className='bartext'>사료 추천</Link>
                <Link to="/recipe" className='bartext'>간식 레시피 추천</Link>
                <Link to="/calendar" className='bartext'>캘린더</Link>
            </div>

            {/* ------------------------------------ */}
        </div>


    )
}

export default Logo