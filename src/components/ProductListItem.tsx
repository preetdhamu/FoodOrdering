import { StyleSheet , Text ,View , Image } from 'react-native';
import Colors from '@/src/constants/Colors';


interface Product {
    image: string;
    name: string;
    price: number;
  }

  
const ProductListItem = ({product}: {product: Product})=>{
    console.log(">>>>>>>>>",product);
    return (
      <View style={styles.container}>
      <Image source={{uri:product.image}} style={styles.image}/> 
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
     borderRadius: 10,
     display: 'flex',
      
    },
    title: { fontSize: 18 , fontWeight: '600' , marginVertical:10},
    prize: { color:Colors.light.tint},
    image:{
      width:'100%',
      aspectRatio: 1 ,
      borderRadius: 10,
      
    }
   
  });
  