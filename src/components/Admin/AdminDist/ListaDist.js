import React from 'react';
import { List, Avatar, Spin, Icon} from 'antd';
import InfiniteScroll from 'react-infinite-scroller';
import { showDeleteConfirm } from './DistModals';


export const ListaDist = ({handleInfiniteOnLoad, loading,hasMore,data, lista}) => {  
/* 
    if(this.state.data===undefined)return<Spin size="large" /> */
    return (
      <div className="lista-proveedores">
        <InfiniteScroll
          initialLoad={false}
          pageStart={0}
          loadMore={handleInfiniteOnLoad}
          hasMore={!loading && hasMore}
          useWindow={false}
        >
          <List
            dataSource={lista}
            renderItem={item => (
              <List.Item key={item.id}>
                <List.Item.Meta
                  avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                  title={<a href="/">{item.razonSocial}</a>}
                  description={item.nombreContacto}
                />
                <div>   
                  <Icon className='iconDist' type="edit" /> <span> | </span>
                  <Icon onClick={showDeleteConfirm} type="delete" />
                </div>
              </List.Item>
            )}
          >
            {loading && hasMore && (
              <div className="lista-proveedores-loading">
                <Spin />
              </div>
            )}
          </List>
        </InfiniteScroll>
      </div>
    );
}