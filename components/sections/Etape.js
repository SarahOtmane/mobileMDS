import React from 'react';
import { View, Text } from 'react-native';
import Svg, { G, Path, Defs, ClipPath, Rect } from 'react-native-svg';

import accueilStyle from '../../styles/accueilStyle';

export default Etape = () => {
    return (
        <View>
            <View style={accueilStyle.etape}>
                <Svg width="72" height="73" viewBox="0 0 72 73" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <Rect width="72" height="73" rx="15" fill="#333333"/>
                    <G clipPath="url(#clip0_1937_21029)">
                        <Path d="M40.3844 25.768V22.845C40.3844 22.0697 40.0764 21.3262 39.5282 20.778C38.98 20.2299 38.2365 19.9219 37.4613 19.9219H34.5382" stroke="#BDDEB4" strokeWidth="1.42857" strokeLinecap="round" strokeLinejoin="round"/>
                        <Path d="M27.2308 46.2296H19.9231C19.1478 46.2296 18.4043 45.9215 17.8561 45.3734C17.308 44.8253 17 44.0817 17 43.3065V22.845C17 22.0697 17.308 21.3262 17.8561 20.778C18.4043 20.2299 19.1478 19.9219 19.9231 19.9219H22.8462" stroke="#BDDEB4" strokeWidth="1.42857" strokeLinecap="round" strokeLinejoin="round"/>
                        <Path d="M52.0767 31.6152H37.4613C35.8469 31.6152 34.5382 32.924 34.5382 34.5383V52.0768C34.5382 53.6912 35.8469 54.9999 37.4613 54.9999H52.0767C53.6911 54.9999 54.9997 53.6912 54.9997 52.0768V34.5383C54.9997 32.924 53.6911 31.6152 52.0767 31.6152Z" stroke="#BDDEB4" strokeWidth="1.42857" strokeLinecap="round" strokeLinejoin="round"/>
                        <Path d="M35.2692 17H22.1154L23.3138 21.7354C23.3868 22.0523 23.5655 22.335 23.8205 22.5369C24.0755 22.7387 24.3916 22.8478 24.7169 22.8462H32.6677C32.9929 22.8478 33.309 22.7387 33.564 22.5369C33.819 22.335 33.9977 22.0523 34.0707 21.7354L35.2692 17Z" stroke="#BDDEB4" strokeWidth="1.42857" strokeLinecap="round" strokeLinejoin="round"/>
                        <Path d="M40.3848 40.3828H49.154" stroke="#BDDEB4" strokeWidth="1.42857" strokeLinecap="round" strokeLinejoin="round"/>
                        <Path d="M40.3848 46.2305H49.154" stroke="#BDDEB4" strokeWidth="1.42857" strokeLinecap="round" strokeLinejoin="round"/>
                    </G>
                    <Defs>
                        <ClipPath id="clip0_1937_21029">
                            <Rect width="40" height="40" fill="white" transform="translate(16 16)"/>
                        </ClipPath>
                    </Defs>
                </Svg>

                <View style={accueilStyle.etapeText}>
                    <Text style={[accueilStyle.h2, accueilStyle.m_B10]}>
                        1 . Obtenez un devis
                    </Text>
                    <Text style={[accueilStyle.p, accueilStyle.m_B20]}>
                        Faites votre devis en ligne pour réparer vos vêtements/accessoires sous 2 minutes environ
                    </Text>
                </View>
            </View>

            <View style={accueilStyle.etape}>
                <Svg width="72" height="73" viewBox="0 0 72 73" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <Rect width="72" height="73" rx="15" fill="#333333"/>
                    <Path d="M25.2308 56H19.0769C18.2609 56 17.4782 55.6757 16.9012 55.0988C16.3242 54.5218 16 53.7391 16 52.9231V28.3077M16 28.3077H56M16 28.3077L22.8 17.5385C23.0631 17.0823 23.439 16.7013 23.8915 16.4319C24.3441 16.1625 24.8582 16.0138 25.3846 16H46.6154C47.1418 16.0138 47.656 16.1625 48.1086 16.4319C48.5609 16.7013 48.9369 17.0823 49.2 17.5385L56 28.3077M56 28.3077V52.9231C56 53.7391 55.6757 54.5218 55.0988 55.0988C54.5218 55.6757 53.7391 56 52.9231 56H46.7692M28.3076 45.2308L35.9999 37.5385M35.9999 37.5385L43.6922 45.2308M35.9999 37.5385L36.0001 56M36.0001 16V28.3077" stroke="#BDDEB4" strokeWidth="1.42857" strokeLinecap="round" strokeLinejoin="round"/>
                </Svg>

                <View style={accueilStyle.etapeText}>
                    <Text style={[accueilStyle.h2, accueilStyle.m_B10]}>
                        2 . Déposez vos articles
                    </Text>
                    <Text style={[accueilStyle.p, accueilStyle.m_B20]}>
                        Déposez vos vêtements/accessoires dans notre point de collecte le plus proche
                    </Text>
                </View>
            </View>

            <View style={accueilStyle.etape}>
                <Svg width="72" height="73" viewBox="0 0 72 73" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <Rect width="72" height="73" rx="15" fill="#333333"/>
                    <G clipPath="url(#clip0_1937_21031)">
                        <Path d="M45.8521 30.1626L34.0628 43.4185L28.1681 38.9999M38.0522 57.8043C37.375 58.0652 36.6248 58.0652 35.9476 57.8043C30.6635 55.7764 26.1191 52.1947 22.9147 47.5314C19.7102 42.8681 17.9966 37.3431 18 31.686V22.9215C18 22.1467 18.308 21.4036 18.8561 20.8557C19.4043 20.3078 20.1478 20 20.9231 20H53.0768C53.852 20 54.5956 20.3078 55.1438 20.8557C55.692 21.4036 56 22.1467 56 22.9215V31.686C56.0032 37.3431 54.2897 42.8681 51.0853 47.5314C47.8807 52.1947 43.3364 55.7764 38.0522 57.8043Z" stroke="#BDDEB4" strokeWidth="1.43" strokeLinecap="round" strokeLinejoin="round"/>
                    </G>
                    <Defs>
                        <ClipPath id="clip0_1937_21031">
                            <Rect width="40" height="40" fill="white" transform="translate(17 19)"/>
                        </ClipPath>
                    </Defs>
                </Svg>

                <View style={accueilStyle.etapeText}>
                    <Text style={[accueilStyle.h2, accueilStyle.m_B10]}>
                        3 . Récupérez vos articles
                    </Text>
                    <Text style={[accueilStyle.p, accueilStyle.m_B20]}>
                        Récupérez vos vêtements/accessoires réparés dans le même point de collecte
                    </Text>
                </View>
            </View>
        </View>
    );
}
