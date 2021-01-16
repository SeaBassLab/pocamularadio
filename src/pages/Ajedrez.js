import React from 'react'


class Ajedrez extends React.Component {
    render() {
        return (               
                <div className="section">
                    <div className="section_content_turismo">
                        <div className="fix_content_t">
                            <iframe src="https://play.chessbase.com?room=" frameborder="0" title="Pocamula ajedrez"></iframe>
                        </div>                    
                    </div>
                </div> 
        )
    }
}

export default Ajedrez