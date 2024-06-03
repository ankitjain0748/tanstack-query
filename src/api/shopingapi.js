import { Component } from 'react'
import ApiTennis from './ApiTennis';
class shopingapi extends Component {

    //Leager
    async shoppingproduct() {
        return ApiTennis.get('/online-shop');
    }


    async rankingplayer(id) {
        return ApiTennis.get(`/online-shop/${id}`)
    };

    render() {
        return (
            <div >
                <></>
            </div>
        )
    }
}

export default shopingapi;