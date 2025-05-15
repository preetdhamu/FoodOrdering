import { View , FlatList} from 'react-native';

import products from '../../../assets/data/products';
import ProductListItem from '../../components/ProductListItem';

export default function MenuScreen() {
  return (
    <FlatList 
     
      
      numColumns={2}  
      data={products} 
      renderItem={({ item }) => {
        return <ProductListItem product={ item }/>
      }}
    />
  );
}
