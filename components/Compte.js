import React from 'react';
import { Text, Image, ScrollView } from "react-native";

import Header from "./sections/Header";
import compteStyle from "../styles/compteStyle";
import Style from '../Style';
import Button from "./sections/Button";
import Lien from "./sections/Lien";

const Compte = () => {
    return (
        <ScrollView style={compteStyle.container}>
            <Header />
            <Image style={compteStyle.image} source={require('../assets/compte.png')} />
            <Text style={[Style.h6, Style.m_R10, Style.m_T20]}>Identifiez vous pour suivre vos commandes, valider votre commande.</Text>

            <Button text='Se connecter' arrow={false} />
            <Lien
                svg='<svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.8178 1C6.4922 1.26633 6.27573 1.64294 6.20946 2.05833C6.18219 2.18648 6.12509 2.30639 6.0428 2.40833C5.96401 2.51425 5.86119 2.59994 5.7428 2.65833L5.08446 2.975C4.55617 3.23352 4.08781 3.59969 3.70946 4.05C2.5428 5.44167 2.5428 6.06667 2.5428 8.44167C2.5428 9.51667 1.40113 10.4917 1.10113 11.4583C0.917797 12.0333 0.817797 13.3333 2.33446 13.3333H13.6511C13.8729 13.344 14.0937 13.2982 14.2928 13.2C14.4915 13.101 14.6631 12.9552 14.7928 12.775C14.9161 12.5933 14.9928 12.3842 15.0178 12.1667C15.037 11.9443 14.9997 11.7208 14.9095 11.5167C14.6095 10.6083 13.4178 9.525 13.4178 8.45V6.675" stroke="#999999" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M10.7011 13.334C10.7036 13.6898 10.6386 14.0432 10.5095 14.3757C10.3707 14.7053 10.1698 15.0052 9.9178 15.259C9.66404 15.5142 9.36109 15.7152 9.02733 15.8499C8.69357 15.9845 8.33595 16.05 7.97613 16.0423C7.61565 16.0446 7.25845 15.9737 6.92613 15.834C6.25933 15.5559 5.72925 15.0258 5.45113 14.359C5.32041 14.0333 5.25528 13.6849 5.25947 13.334" stroke="#999999" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M10.701 5.16667C11.8516 5.16667 12.7843 4.23393 12.7843 3.08333C12.7843 1.93274 11.8516 1 10.701 1C9.55042 1 8.61768 1.93274 8.61768 3.08333C8.61768 4.23393 9.55042 5.16667 10.701 5.16667Z" stroke="#999999" stroke-width="1.5"/>
                </svg>'
                text='Notification'
            />
            <Lien
                svg='<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.69616 5.78846L10.2726 4.33692C10.3698 4.09116 10.5408 3.87977 10.7633 3.73043C10.9857 3.5811 11.2492 3.50078 11.5192 3.5H12.6184C12.8885 3.50078 13.152 3.5811 13.3744 3.73043C13.5969 3.87977 13.7679 4.09116 13.8651 4.33692L14.4415 5.78846L16.3986 6.88692L17.9804 6.65154C18.2438 6.61666 18.5119 6.65895 18.7506 6.77305C18.9892 6.88715 19.1877 7.06788 19.3209 7.29231L19.8571 8.20769C19.9945 8.43569 20.0579 8.69897 20.0387 8.96278C20.0195 9.22659 19.9188 9.47855 19.7498 9.68539L18.7712 10.9015V13.0985L19.7766 14.3146C19.9457 14.5215 20.0463 14.7734 20.0655 15.0372C20.0847 15.301 20.0213 15.5643 19.8839 15.7923L19.3477 16.7077C19.2146 16.9321 19.016 17.1128 18.7774 17.227C18.5387 17.341 18.2706 17.3834 18.0072 17.3485L16.4254 17.1131L14.4683 18.2115L13.8919 19.6631C13.7947 19.9088 13.6237 20.1202 13.4012 20.2696C13.1788 20.4189 12.9153 20.4992 12.6452 20.5H11.5192C11.2492 20.4992 10.9857 20.4189 10.7633 20.2696C10.5408 20.1202 10.3698 19.9088 10.2726 19.6631L9.69616 18.2115L7.73904 17.1131L6.15725 17.3485C5.89387 17.3834 5.6258 17.341 5.38711 17.227C5.14844 17.1128 4.94991 16.9321 4.81676 16.7077L4.28056 15.7923C4.14316 15.5643 4.07986 15.301 4.099 15.0372C4.11815 14.7734 4.21884 14.5215 4.3878 14.3146L5.36636 13.0985V10.9015L4.36099 9.68539C4.19203 9.47855 4.09134 9.22659 4.07219 8.96278C4.05305 8.69897 4.11635 8.43569 4.25375 8.20769L4.78995 7.29231C4.9231 7.06788 5.12163 6.88715 5.3603 6.77305C5.59899 6.65895 5.86706 6.61666 6.13044 6.65154L7.71223 6.88692L9.69616 5.78846ZM9.38784 12C9.38784 12.5173 9.54508 13.0229 9.83967 13.453C10.1343 13.8831 10.553 14.2183 11.0429 14.4163C11.5328 14.6142 12.0718 14.666 12.5919 14.5651C13.1119 14.4642 13.5896 14.2151 13.9646 13.8494C14.3395 13.4836 14.5949 13.0176 14.6983 12.5102C14.8018 12.0029 14.7487 11.477 14.5457 10.9991C14.3428 10.5212 13.9992 10.1128 13.5583 9.82539C13.1174 9.53801 12.5991 9.38462 12.0688 9.38462C11.3578 9.38462 10.6759 9.66016 10.1731 10.1506C9.67031 10.6411 9.38784 11.3064 9.38784 12Z" stroke="#999999" stroke-width="1.42857" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>'
                text='Paramètres et confidentialité'
            />
            <Lien
                svg='<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M4.30176 8C4.30176 6.74022 4.77291 5.53204 5.61158 4.64124C6.45024 3.75045 7.58772 3.25 8.77377 3.25H18.1885C19.098 3.25 19.8361 4.034 19.8361 5V20C19.8361 20.4641 19.6625 20.9092 19.3535 21.2374C19.0446 21.5656 18.6255 21.75 18.1885 21.75H7.83229C6.89594 21.75 5.99793 21.3549 5.33583 20.6517C4.67372 19.9484 4.30176 18.9946 4.30176 18V8ZM18.4239 5V14.25H7.83229C7.03769 14.25 6.30428 14.529 5.71397 15V8C5.71397 7.13805 6.03634 6.3114 6.61016 5.7019C7.18399 5.09241 7.96226 4.75 8.77377 4.75H11.794C11.5458 6.73305 11.5683 8.74378 11.8609 10.72L11.9202 11.117C11.9408 11.2562 11.998 11.3864 12.0851 11.4927C12.1722 11.599 12.2857 11.6771 12.4127 11.718C12.5396 11.7589 12.6749 11.761 12.8029 11.7241C12.9309 11.6871 13.0466 11.6126 13.1366 11.509L14.4226 10.029L15.7087 11.509C15.7987 11.6126 15.9143 11.6871 16.0423 11.7241C16.1704 11.761 16.3056 11.7589 16.4326 11.718C16.5595 11.6771 16.6731 11.599 16.7602 11.4927C16.8473 11.3864 16.9044 11.2562 16.9251 11.117L16.9844 10.72C17.277 8.74378 17.2995 6.73305 17.0512 4.75H18.1885C18.2509 4.75 18.3108 4.77634 18.355 4.82322C18.3991 4.87011 18.4239 4.9337 18.4239 5ZM15.6258 4.75H13.2194C13.0151 6.26367 12.981 7.79777 13.1177 9.32L13.7306 8.614C13.8188 8.5125 13.9258 8.43149 14.0449 8.37608C14.164 8.32067 14.2926 8.29207 14.4226 8.29207C14.5526 8.29207 14.6813 8.32067 14.8003 8.37608C14.9194 8.43149 15.0264 8.5125 15.1146 8.614L15.7275 9.32C15.8642 7.79777 15.8301 6.26367 15.6258 4.75ZM7.83229 15.75H18.4239V20C18.4239 20.0663 18.3991 20.1299 18.355 20.1768C18.3108 20.2237 18.2509 20.25 18.1885 20.25H7.83229C7.27048 20.25 6.73168 20.0129 6.33441 19.591C5.93715 19.169 5.71397 18.5967 5.71397 18C5.71397 17.4033 5.93715 16.831 6.33441 16.409C6.73168 15.9871 7.27048 15.75 7.83229 15.75Z" fill="#999999"/>
                    </svg>'
                text='Infos légales'
            />
            <Lien
                svg='<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.0688 5.5L14.2318 9.77865L19.0688 10.469L15.5688 13.7976L16.3948 18.5L12.0688 16.2787L7.74285 18.5L8.56885 13.7976L5.06885 10.469L9.90585 9.77865L12.0688 5.5Z" stroke="#999999" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>'
                text='Noter l’appplication'
            />
        </ScrollView>
    );
}

export default Compte;
