import React from 'react';
import { 
  View, 
  Text,  
  StyleSheet, 
  ScrollView, 
  Image} from 'react-native';


let ContentSayHai = 'Hi, Please Choose Food Or Drink';

const DinamisData = props => {
  return (
    <View>
      <Image source={{
        uri: props.contentImg
      }} style={styles.contentImg}>
      </Image>
      <Text>{props.contentText}</Text>
      <Text style={{
        fontSize: 15,
        fontWeight: 'bold'
      }}>{props.contentTextTitle}</Text>
      <Text style={
        {
          fontSize:16,
          color: '#F08A5D'
        }
      }>{props.harga}</Text>
       <Image source={{
        uri: props.icon
      }} style={{
        width: 70,
        height: 15,
        marginTop: 5
      }}></Image>
    </View>
  )
}



const MenampilkanText = () => {
  return (
    <View style={styles.container}>
      <View style={styles.boxHead}>
        <Text style={styles.heading}>{ContentSayHai}</Text>
      </View>
        <Text style={styles.childHeading}>Makanan dan Minuman Khas Indonesia</Text>

    <View style={styles.content}>
      <ScrollView showsHorizontalScrollIndicator={false}>
        <View style= {{
          flexDirection: 'row',
          alignItems: 'center',
          }}>
          <DinamisData
                contentText = 'Nasi Sehat'
                contentImg = 'https://images.unsplash.com/photo-1559603739-f9d7d50360a2?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8aW5kb25lc2lhJTIwZm9vZHxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=500&q=60'
                contentTextTitle = 'Paket Lengkap A+'
                harga = 'IDR 150.000'
                icon = 'https://static.thenounproject.com/png/766721-200.png'
                
         />
          <DinamisData 
                contentText = 'Sandwich'
                contentImg = 'https://images.unsplash.com/photo-1591972619306-0a13c4ab5c1a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzB8fGluZG9uZXNpYSUyMGZvb2R8ZW58MHx8MHw%3D&auto=format&fit=crop&w=500&q=60'
                contentTextTitle = 'Beef Cheese'
                harga = 'IDR 75.000'
                icon = 'https://static.thenounproject.com/png/766721-200.png'
          />
          <DinamisData 
                contentText = 'Kentang Goreng'
                contentImg = 'https://images.unsplash.com/photo-1584378868074-1ebfd5a636c7?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mzd8fGluZG9uZXNpYSUyMGZvb2R8ZW58MHx8MHw%3D&auto=format&fit=crop&w=500&q=60'
                contentTextTitle = 'Cheese Premium'
                harga = 'IDR 25.000'
                icon = 'https://static.thenounproject.com/png/766721-200.png'
          />
        
        </View>
      </ScrollView>
      

      <View style= {{
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 20}}>
       <DinamisData 
            contentText = 'Es Cendol'
            contentImg = 'https://images.unsplash.com/photo-1592039017841-65201402f522?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjF8fGluZG9uZXNpYSUyMGZvb2R8ZW58MHx8MHw%3D&auto=format&fit=crop&w=500&q=60'
            contentTextTitle = 'Nangka Manis'
            harga = 'IDR 10.000'
            icon = 'https://static.thenounproject.com/png/766721-200.png'
      />
       <DinamisData 
            contentText = 'Surabi'
            contentImg = 'https://images.unsplash.com/photo-1587652813868-6988baecfc90?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8NjB8fGluZG9uZXNpYSUyMGZvb2R8ZW58MHx8MHw%3D&auto=format&fit=crop&w=500&q=60'
            contentTextTitle = 'Saus Gula Merah'
            harga = 'IDR 7.000'
            icon = 'https://static.thenounproject.com/png/766721-200.png'
      />
       <DinamisData 
            contentText = 'Es teh'
            contentImg = 'https://images.unsplash.com/photo-1539184136665-c6493aaaedf0?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTF8fGljZSUyMHRlYXxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=500&q=60'
            contentTextTitle = 'Melati aroma'
            harga = 'IDR 9.000'
            icon = 'https://static.thenounproject.com/png/766721-200.png'
      />
      </View>
    
    </View>
    </View>

 
  )
}



/* 
  Bagian untuk styling
*/
const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  boxHead: {
    width: 200,
    marginLeft: 55
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  childHeading: {
    fontSize: 15,
    flexDirection: 'column',
    alignContent: 'center',
    alignSelf: 'center',
    paddingTop: 5,
    marginRight: 10,
    color: '#aaaaaa'
  },
  // content

  contentImg: {
    width: 100,
    height: 150,
    borderRadius: 10,
    marginRight: 10,
  },

  content: {
    marginTop: 40,
    
  }
})


export default MenampilkanText; 
