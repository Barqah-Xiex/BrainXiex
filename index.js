/**
 * Fungsi utama untuk menginisialisasi modul dengan konfigurasi tertentu.
 *
 * @param {Object} [config={}] - Objek konfigurasi opsional.
 * @param {string} [config.apikey="BarqahGantengBangetGilaGantengnyaBikinTergilaGilaBangetSumpah"] - Kunci API untuk autentikasi.
 * @param {string} [config.BASE="http://xiex.my.id"] - URL dasar yang digunakan sebagai endpoint API.
 * @param {boolean} [config.session_local=false] - Apakah menggunakan sesi lokal atau tidak.
 *
 * @returns {Object} Objek yang dihasilkan dari modul `./lib` dengan konfigurasi yang disediakan.
 */
module.exports = function(config = {}) {
    config.apikey = config.apikey || `BarqahGantengBangetGilaGantengnyaBikinTergilaGilaBangetSumpah`;
    config.BASE = config.BASE || `http://xiex.my.id`;
    config.session_local = config.session_local || false;

    if(config.session_local && Boolean(global)){
        global.brainxiex = global.brainxiex || {};
        global.brainxiex.session = global.brainxiex.session || {};
    }

    return {
        version: require("./package.json").version,
        ...require("./lib")(config),
    };
};
