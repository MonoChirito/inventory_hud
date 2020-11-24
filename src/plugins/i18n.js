import Vue from 'vue';
import VueI18n from 'vue-i18n';
Vue.use(VueI18n);

const messages = {
    'en': {
        loadout: 'Waffen',
        items: 'Items',
        actions: {
            drop: 'Ablegen',
            cancel: 'Abbrechen',
        },
        weaponInfo: {
            stats: {
                range: 'Reichweite',
                accuracy: 'Genaugkeit',
                ammoCapacity: 'Kapazität',
                damage: 'Schaden',
                fireRate: 'Feuerrate',
            }
        },
        notifications:{
            moreThanOneWeaponSelect: 'Du kannst nur 1 Waffe auswählen!',
            needWeaponSelect: 'Du musst eine Waffe auswählen',
            onlyWeaponCanBeBinding: 'Es können nur Waffen auf Quick Switch gelegt werden!',
            thisItemCannotBeGivem: 'Du kannst dieses Item nicht loswerden!',
            thereIsNoPlayersClosest: 'Es ist kein Spieler in der Nähe :/',
            thereIsNoPlayersSelected: 'Es ist kein ausgewählter Spieler ind er Nähe :/',
            youAlreadyHaveAWeaponWhitThisBind: 'Auf diesem Quick Switch Slot ist bereits eine Waffe',
            areYouSure: 'Bist du sicher, dass du diese Waffe ablegen willst?'
        }
    },
    'pt-br': {
        loadout: 'Armamentos',
        items: 'Equipamentos',
        actions: {
            drop: 'Dropar',
            cancel: 'Cancelar',
        },
        weaponInfo: {
            stats: {
                range: 'Distância',
                accuracy: 'Precisão',
                ammoCapacity: 'Capacidade',
                damage: 'Dano',
                fireRate: 'Velocidade de tiro',
            }
        },
        notifications:{
            moreThanOneWeaponSelect: 'Você só pode selecionar uma arma!',
            needWeaponSelect: 'Você precisa ter uma arma selecionada',
            onlyWeaponCanBeBinding: 'Somente armas podem ser bindadas',
            thisItemCannotBeGivem: 'Esse item não pode ser dado como presente',
            thereIsNoPlayersClosest: 'Não tem nenhum player próximo a você :/',
            thereIsNoPlayersSelected: 'Você precisa selecionar um player',
            youAlreadyHaveAWeaponWhitThisBind: 'Você já tem uma arma com esse numero de bind',
            areYouSure: 'Você tem certeza que você quer <b>dropar</b> sua arma? Essa ação não pode ser desfeita'
        }
    }
};

const i18n = new VueI18n({ 
    locale: 'en', // set locale 
    fallbackLocale: 'en',
    messages
});

export default i18n;
