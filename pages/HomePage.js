import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,FlatList ,Image, TouchableOpacity,TouchableWithoutFeedback,ToastAndroid, Alert
} from 'react-native';


class HomeActivity extends React.Component {

   static navigationOptions = {
    title: 'Home',
      headerStyle: {
            backgroundColor: '#03A9F4',
          },
      headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
      
        }; 
 
  constructor(props) {
    super(props);
    console.log('success');
    const { navigate } = props.navigation;
  } 


   navigateToDetails = (item) => {  
    this.props.navigation.navigate('Detail',JSON.stringify(item));
   
}  



  state = {
    data:[
      {
        "popularity": 447.023,
        "vote_count": 69,
        "video": false,
        "poster_path": "https://image.tmdb.org/t/p/w500/w6e0XZreiyW4mGlLRHEG8ipff7b.jpg",
        "id": 722603,
        "adult": false,
        "backdrop_path": "https://image.tmdb.org/t/p/w500/m7QpUAeI2xTCJyAVl9J9z5dBTSb.jpg",
        "original_language": "en",
        "original_title": "Battlefield 2025",
        "genre_ids": [
          28,
          27,
          878
        ],
        "title": "Battlefield 2025",
        "vote_average": 5.7,
        "overview": "Weekend campers, an escaped convict, young lovers and a police officer experience a night of terror when a hostile visitor from another world descends on a small Arizona town.",
        "release_date": "2020-07-07"
      },
      {
        "popularity": 406.163,
        "vote_count": 49,
        "video": false,
        "poster_path": "https://image.tmdb.org/t/p/w500/hIkKM1nlzk8DThFT4vxgW1KoofL.jpg",
        "id": 715658,
        "adult": false,
        "backdrop_path": "https://image.tmdb.org/t/p/w500/ovwN1JDPvllWZaH3xtKp7txRWDj.jpg",
        "original_language": "en",
        "original_title": "The Scientist",
        "genre_ids": [
          27
        ],
        "title": "The Scientist",
        "vote_average": 6.5,
        "overview": "An unconventional scientist, struggling to care for his terminally-ill wife, embarks on a journey to develop a cure for her. However, his methods of treatment and tampering with human DNA, could lead to the extinction of humanity.",
        "release_date": "2020-09-21"
      },
      {
        "popularity": 583.932,
        "vote_count": 141,
        "video": false,
        "poster_path": "https://image.tmdb.org/t/p/w500/eDnHgozW8vfOaLHzfpHluf1GZCW.jpg",
        "id": 606234,
        "adult": false,
        "backdrop_path": "https://image.tmdb.org/t/p/w500/u9YEh2xVAPVTKoaMNlB5tH6pXkm.jpg",
        "original_language": "en",
        "original_title": "Archive",
        "genre_ids": [
          18,
          878,
          53
        ],
        "title": "Archive",
        "vote_average": 5.6,
        "overview": "2038: George Almore is working on a true human-equivalent AI, and his latest prototype is almost ready. This sensitive phase is also the riskiest as he has a goal that must be hidden at all costs—being reunited with his dead wife.",
        "release_date": "2020-08-13"
      },
      {
        "popularity": 372.522,
        "vote_count": 85,
        "video": false,
        "poster_path": "https://image.tmdb.org/t/p/w500/bhNHCeJDFDaB00A46AoCw2mggdE.jpg",
        "id": 601165,
        "adult": false,
        "backdrop_path": "https://image.tmdb.org/t/p/w500/nxxODhq9I05Ze9uLONGvfDrzaUO.jpg",
        "original_language": "en",
        "original_title": "Legacy of Lies",
        "genre_ids": [
          28,
          53
        ],
        "title": "Legacy of Lies",
        "vote_average": 5.9,
        "overview": "An ex-MI6 agent is thrown back into the world of espionage and high stakes to uncover the shocking truth about operations conducted by unknown secret services.",
        "release_date": "2020-08-06"
      },
      {
        "popularity": 379.981,
        "vote_count": 116,
        "video": false,
        "poster_path": "https://image.tmdb.org/t/p/w500/sDi6wKgECUjDug2gn4uODSqZ3yC.jpg",
        "id": 632618,
        "adult": false,
        "backdrop_path": "https://image.tmdb.org/t/p/w500/cVdYaAQmd5DZNdo0KFJruz7JpUs.jpg",
        "original_language": "es",
        "original_title": "Crímenes de familia",
        "genre_ids": [
          80,
          18,
          53
        ],
        "title": "The Crimes That Bind",
        "vote_average": 6.5,
        "overview": "When her son is accused of raping and trying to murder his ex-wife, Alicia embarks on a journey that will change her life forever.",
        "release_date": "2020-08-20"
      },
      {
        "popularity": 501.638,
        "vote_count": 458,
        "video": false,
        "poster_path": "https://image.tmdb.org/t/p/w500/dbhC6qRydXyRmpUdcl9bL9rARya.jpg",
        "id": 617505,
        "adult": false,
        "backdrop_path": "https://image.tmdb.org/t/p/w500/aOeshAxAhiDVIiHsXVFmF6bgclh.jpg",
        "original_language": "en",
        "original_title": "Hubie Halloween",
        "genre_ids": [
          35,
          27,
          9648
        ],
        "title": "Hubie Halloween",
        "vote_average": 6.4,
        "overview": "Hubie Dubois who, despite his devotion to his hometown of Salem, Massachusetts (and its legendary Halloween celebration), is a figure of mockery for kids and adults alike. But this year, something really is going bump in the night, and it’s up to Hubie to save Halloween.",
        "release_date": "2020-10-07"
      },
      {
        "popularity": 382.864,
        "vote_count": 45,
        "video": false,
        "poster_path": "https://image.tmdb.org/t/p/w500/q2lkJf1TAjImTHCEO7XvbqPtnPb.jpg",
        "id": 703134,
        "adult": false,
        "backdrop_path": "https://image.tmdb.org/t/p/w500/j57oUw8LIYvjOl0zs3A1A1UqwKH.jpg",
        "original_language": "en",
        "original_title": "Infamous",
        "genre_ids": [
          80,
          18,
          53
        ],
        "title": "Infamous",
        "vote_average": 5.6,
        "overview": "Two young lovers rob their way across the southland, posting their exploits to social media, and gaining fame and followers as a result.",
        "release_date": "2020-06-12"
      },
      {
        "popularity": 495.204,
        "id": 532067,
        "video": false,
        "vote_count": 170,
        "vote_average": 8.6,
        "title": "KonoSuba: God's Blessing on this Wonderful World! Legend of Crimson",
        "release_date": "2019-08-30",
        "original_language": "ja",
        "original_title": "この素晴らしい世界に祝福を！紅伝説",
        "genre_ids": [
          12,
          35,
          16,
          14
        ],
        "backdrop_path": "https://image.tmdb.org/t/p/w500/m5HPKCi7GdhKmxPTcOQmcLfEmZ9.jpg",
        "adult": false,
        "overview": "It is not strange that the Demon Lord's forces fear the Crimson Demons, the clan from which Megumin and Yunyun originate. Even if the Demon Lord's generals attack their village, the Crimson Demons can just easily brush them off with their supreme mastery of advanced and overpowered magic.  When Yunyun receives a seemingly serious letter regarding a potential disaster coming to her hometown, she immediately informs Kazuma Satou and the rest of his party. After a series of wacky misunderstandings, it turns out to be a mere prank by her fellow demon who wants to be an author. Even so, Megumin becomes worried about her family and sets out toward the Crimson Demons' village with the gang.  There, Kazuma and the others decide to sightsee the wonders of Megumin's birthplace. However, they soon come to realize that the nonsense threat they received might have been more than just a joke.",
        "poster_path": "https://image.tmdb.org/t/p/w500/j73LuQcA21KvkVFcroWWMN8tTJv.jpg"
      },
      {
        "popularity": 493.577,
        "vote_count": 73,
        "video": false,
        "poster_path": "https://image.tmdb.org/t/p/w500/4BgSWFMW2MJ0dT5metLzsRWO7IJ.jpg",
        "id": 726739,
        "adult": false,
        "backdrop_path": "https://image.tmdb.org/t/p/w500/t22fWbzdnThPseipsdpwgdPOPCR.jpg",
        "original_language": "en",
        "original_title": "Cats & Dogs 3: Paws Unite",
        "genre_ids": [
          28,
          35
        ],
        "title": "Cats & Dogs 3: Paws Unite",
        "vote_average": 6.6,
        "overview": "It's been ten years since the creation of the Great Truce, an elaborate joint-species surveillance system designed and monitored by cats and dogs to keep the peace when conflicts arise. But when a tech-savvy villain hacks into wireless networks to use frequencies only heard by cats and dogs, he manipulates them into conflict and the worldwide battle between cats and dogs is BACK ON. Now, a team of inexperienced and untested agents will have to use their old-school animal instincts to restore order and peace between cats and dogs everywhere.",
        "release_date": "2020-10-02"
      },
      {
        "popularity": 356.663,
        "vote_count": 131,
        "video": false,
        "poster_path": "https://image.tmdb.org/t/p/w500/dnN1ncxEOO1TY0gYL2FWxJqlhlL.jpg",
        "id": 603119,
        "adult": false,
        "backdrop_path": "https://image.tmdb.org/t/p/w500/aRyTzHXl9A0vHsd3zd8w2IJxezn.jpg",
        "original_language": "en",
        "original_title": "The Silencing",
        "genre_ids": [
          28,
          80,
          53
        ],
        "title": "The Silencing",
        "vote_average": 6.7,
        "overview": "A reformed hunter becomes involved in a deadly game of cat and mouse when he and the local sheriff set out to track a vicious killer who may have kidnapped his daughter years ago.",
        "release_date": "2020-07-18"
      },
      {
        "popularity": 463.702,
        "vote_count": 6055,
        "video": false,
        "poster_path": "https://image.tmdb.org/t/p/w500/h4VB6m0RwcicVEZvzftYZyKXs6K.jpg",
        "id": 495764,
        "adult": false,
        "backdrop_path": "https://image.tmdb.org/t/p/w500/9xNOiv6DZZjH7ABoUUDP0ZynouU.jpg",
        "original_language": "en",
        "original_title": "Birds of Prey (and the Fantabulous Emancipation of One Harley Quinn)",
        "genre_ids": [
          28,
          35,
          80
        ],
        "title": "Birds of Prey (and the Fantabulous Emancipation of One Harley Quinn)",
        "vote_average": 7.2,
        "overview": "Harley Quinn joins forces with a singer, an assassin and a police detective to help a young girl who had a hit placed on her after she stole a rare diamond from a crime lord.",
        "release_date": "2020-02-05"
      },
      {
        "popularity": 343.214,
        "vote_count": 633,
        "video": false,
        "poster_path": "https://image.tmdb.org/t/p/w500/4VlXER3FImHeFuUjBShFamhIp9M.jpg",
        "id": 664767,
        "adult": false,
        "backdrop_path": "https://image.tmdb.org/t/p/w500/9xeEGUZjgiKlI69jwIOi0hjKUIk.jpg",
        "original_language": "en",
        "original_title": "Mortal Kombat Legends: Scorpion's Revenge",
        "genre_ids": [
          28,
          12,
          16,
          14
        ],
        "title": "Mortal Kombat Legends: Scorpion's Revenge",
        "vote_average": 8.4,
        "overview": "After the vicious slaughter of his family by stone-cold mercenary Sub-Zero, Hanzo Hasashi is exiled to the torturous Netherrealm. There, in exchange for his servitude to the sinister Quan Chi, he’s given a chance to avenge his family – and is resurrected as Scorpion, a lost soul bent on revenge. Back on Earthrealm, Lord Raiden gathers a team of elite warriors – Shaolin monk Liu Kang, Special Forces officer Sonya Blade and action star Johnny Cage – an unlikely band of heroes with one chance to save humanity. To do this, they must defeat Shang Tsung’s horde of Outworld gladiators and reign over the Mortal Kombat tournament.",
        "release_date": "2020-04-12"
      },
      {
        "popularity": 434.909,
        "vote_count": 15180,
        "video": false,
        "poster_path": "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
        "id": 475557,
        "adult": false,
        "backdrop_path": "https://image.tmdb.org/t/p/w500/n6bUvigpRFqSwmPp1m2YADdbRBc.jpg",
        "original_language": "en",
        "original_title": "Joker",
        "genre_ids": [
          80,
          18,
          53
        ],
        "title": "Joker",
        "vote_average": 8.2,
        "overview": "During the 1980s, a failed stand-up comedian is driven insane and turns to a life of crime and chaos in Gotham City while becoming an infamous psychopathic crime figure.",
        "release_date": "2019-10-02"
      },
      {
        "popularity": 431.479,
        "vote_count": 119,
        "video": false,
        "poster_path": "https://image.tmdb.org/t/p/w500/n6hptKS7Y0ZjkYwbqKOK3jz9XAC.jpg",
        "id": 594328,
        "adult": false,
        "backdrop_path": "https://image.tmdb.org/t/p/w500/lkeBhXGJFRlhI7cBWn8LQQAdZqK.jpg",
        "original_language": "en",
        "original_title": "Phineas and Ferb The Movie: Candace Against the Universe",
        "genre_ids": [
          16,
          35,
          10402,
          878,
          10751,
          10770
        ],
        "title": "Phineas and Ferb The Movie: Candace Against the Universe",
        "vote_average": 7.2,
        "overview": "Phineas and Ferb travel across the galaxy to rescue their older sister Candace, who has been abducted by aliens and taken to a utopia in a far-off planet, free of her pesky little brothers.",
        "release_date": "2020-08-28"
      },
      {
        "popularity": 426.524,
        "vote_count": 129,
        "video": false,
        "poster_path": "https://image.tmdb.org/t/p/w500/2bN7DbfJHrgOAnGLRuQUmImDaqY.jpg",
        "id": 746957,
        "adult": false,
        "backdrop_path": "https://image.tmdb.org/t/p/w500/3elhhPDPSD3m0T0SQDJN00O6WhQ.jpg",
        "original_language": "es",
        "original_title": "Ahí te encargo",
        "genre_ids": [
          35,
          10749
        ],
        "title": "You've Got This",
        "vote_average": 8.3,
        "overview": "An ad creative and a successful exec have a great marriage — until he wants to be a dad just as her star is rising. Then he brings someone new home.",
        "release_date": "2020-10-02"
      },
      {
        "popularity": 418.052,
        "vote_count": 2168,
        "video": false,
        "poster_path": "https://image.tmdb.org/t/p/w500/cjr4NWURcVN3gW5FlHeabgBHLrY.jpg",
        "id": 547016,
        "adult": false,
        "backdrop_path": "https://image.tmdb.org/t/p/w500/m0ObOaJBerZ3Unc74l471ar8Iiy.jpg",
        "original_language": "en",
        "original_title": "The Old Guard",
        "genre_ids": [
          28,
          14
        ],
        "title": "The Old Guard",
        "vote_average": 7.3,
        "overview": "Four undying warriors who've secretly protected humanity for centuries become targeted for their mysterious powers just as they discover a new immortal.",
        "release_date": "2020-07-10"
      },
      {
        "popularity": 308.963,
        "vote_count": 6,
        "video": false,
        "poster_path": "https://image.tmdb.org/t/p/w500/pXv4qbWyj6ycMaWkK2LzlizZQjf.jpg",
        "id": 713825,
        "adult": false,
        "backdrop_path": "https://image.tmdb.org/t/p/w500/tWxCVe4rQZa3BvR3tMT3t74oVTT.jpg",
        "original_language": "en",
        "original_title": "Robot Riot",
        "genre_ids": [
          28,
          878
        ],
        "title": "Robot Riot",
        "vote_average": 5.1,
        "overview": "Unconscious soldiers are dropped into a testing site only to discover their memories have been wiped and that once docile machines are the new intelligence.",
        "release_date": "2020-06-12"
      },
      {
        "popularity": 314.525,
        "vote_count": 69,
        "video": false,
        "poster_path": "https://image.tmdb.org/t/p/w500/AwkmMTKJBAatbeAVhTwhcU3Pyp4.jpg",
        "id": 738215,
        "adult": false,
        "backdrop_path": "https://image.tmdb.org/t/p/w500/cmZVWuXM1hpP2GKFABCUkoscKu4.jpg",
        "original_language": "en",
        "original_title": "Barbie: Princess Adventure",
        "genre_ids": [
          16,
          10402
        ],
        "title": "Barbie: Princess Adventure",
        "vote_average": 7.7,
        "overview": "With new friends in a new kingdom, Barbie learns what it means to be herself when she trades places with a royal lookalike in this musical adventure.",
        "release_date": "2020-09-01"
      },
      {
        "popularity": 411.226,
        "vote_count": 45,
        "video": false,
        "poster_path": "https://image.tmdb.org/t/p/w500/c3SbZPZPOfGMHq7DB7FnTIMQKuY.jpg",
        "id": 667141,
        "adult": false,
        "backdrop_path": "https://image.tmdb.org/t/p/w500/2LL1jHtNKJhTDc3tA1difsAnLui.jpg",
        "original_language": "en",
        "original_title": "12 Hour Shift",
        "genre_ids": [
          35,
          80,
          27,
          53
        ],
        "title": "12 Hour Shift",
        "vote_average": 4.8,
        "overview": "It's 1998 and over the course of one 12-hour shift at an Arkansas hospital, a junkie nurse, her scheming cousin and a group of black market organ-trading criminals start a heist that could lead to their collective demise.",
        "release_date": "2020-10-02"
      },
      {
        "popularity": 285.598,
        "vote_count": 15,
        "video": false,
        "poster_path": "https://image.tmdb.org/t/p/w500/dKSN0oZCUSNcEd39MnySLYmpUiJ.jpg",
        "id": 735110,
        "adult": false,
        "backdrop_path": "https://image.tmdb.org/t/p/w500/aahbYclKYfms6Utm5YHQOywsj9N.jpg",
        "original_language": "es",
        "original_title": "Fuego negro",
        "genre_ids": [
          28,
          27,
          9648,
          53
        ],
        "title": "Dark Forces",
        "vote_average": 4.8,
        "overview": "In search of his sister, a renegade criminal seeks answers at a sordid hotel where he encounters a sinister guest and romances a mysterious waitress.",
        "release_date": "2020-08-21"
      }
    ]
  }
   render(){
    return (
      <View style={styles.container}>
        <FlatList
          style={{flex:1}}
          data={this.state.data}
          keyExtractor={item => item.id}
          renderItem={({ item }) => 
          <TouchableOpacity onPress={this.navigateToDetails.bind(this, item)}>
          <View style={styles.listItem} >
            <Image source={{uri:item.poster_path}}  style={{width:100, height:100}} />
            <View style={{alignItems:"flex-start",flex:1,marginLeft:10}}>
              <Text style={{fontWeight:"bold"}} >{item.name}</Text>
              <Text numberOfLines={5}>{item.overview} </Text>
            </View>
            
          </View>     
        </TouchableOpacity>
         }
          keyExtractor={item => item.email}
          contentContainerStyle={{
            paddingBottom: 10
          }}
        />
      </View>
    );
  }

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    marginTop:10,
    marginBottom:10
  },
  listItem:{
    margin:10,
    padding:10,
    backgroundColor:"#FFF",
    width:"100%",
    flex:1,
    alignSelf:"center",
    flexDirection:"row",
    borderRadius:5
  }
});
export default HomeActivity;