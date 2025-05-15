import { StyleSheet , Text ,View , Image } from 'react-native';
import Colors from '@/contatns/Colors';
import { Product } from '../types';

type ProductListItemProps = {
    product : Product;
};

export const defaultImageUrl = "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/default.png";  
const ProductListItem = ({product}: ProductListItemProps)=>{
    console.log(">>>>>>>>>",product);
    return (
      <View style={styles.container}>
      <Image 
      source={{uri:product.image || defaultImageUrl }} 
      style={styles.image}
      resizeMode='contain'
      /> 
       <Text style={styles.title }>{product.name}</Text>
       <Text style = {styles.prize}>${product.price}</Text>
      </View>
    )
  }



export default ProductListItem;


  
const styles = StyleSheet.create({
    container: {
     backgroundColor: 'white',
     padding: 10,
     margin: 5,
     borderRadius: 10,
     flex:1,
     maxWidth: '50%',
     justifyContent: 'flex-start',
     flexDirection:'column',
    },
    title: { fontSize: 18 , fontWeight: '600' , marginVertical:10},
    prize: { color:Colors.light.tint},
    image:{
      width:'100%',
      aspectRatio: 1 ,
      borderRadius: 10,
      padding: 12,
    }
   
  });
  