import React, {Component} from 'react';
import {Card} from 'antd';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as promosActions from '../../../../redux/actions/productsActions';

const { Meta } = Card;

class AdminPromos extends Component{


  state = {
    promos: []
  };

  render(){
    const {promos} = this.props;
    return(
      <div  style={{ display:'flex', justifyContent:'center', alignItems:'center', width:'90%', flexWrap: 'wrap' }}>
        <Card title='Promociones'>
          <div style={{ display:'flex' }} >
            {promos.map(promo => {
            const precio = '$ ' + promo.promoPrice;
            return(
              <Card key={promo._id} hoverable style={{ width: 240, margin: "10px" }} cover={<img alt={promo._id} src={promo.image} />}>
                <Meta title={promo.promoName} description={precio} />
              </Card>
            )
          })}
          </div>
        </Card>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  promos: state.promos
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(promosActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(AdminPromos);