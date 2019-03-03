/*<![CDATA[*/

(function () {
  var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
  if (window.ShopifyBuy) {
    if (window.ShopifyBuy.UI) {
      ShopifyBuyInit();
    } else {
      loadScript();
    }
  } else {
    loadScript();
  }

  function loadScript() {
    var script = document.createElement('script');
    script.async = true;
    script.src = scriptURL;
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
    script.onload = ShopifyBuyInit;
  }

  function ShopifyBuyInit() {
    var client = ShopifyBuy.buildClient({
      domain: 'crossingscon.myshopify.com',
      storefrontAccessToken: '4eaef643320d50bb2ac9ac775c79e8b2',
    });

    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent('collection', {
        id: 68863197240,
        node: document.getElementById('collection-component-5160491c5be'),
        moneyFormat: '%24%7B%7Bamount%7D%7D',
        options: {
          "product": {
            "buttonDestination": "modal",
            "variantId": "all",
            "contents": {
              "imgWithCarousel": false,
              "variantTitle": false,
              "options": false,
              "description": false,
              "buttonWithQuantity": false,
              "quantity": false
            },
            "text": {
              "button": "VIEW PRODUCT"
            },
            "styles": {
              "product": {
                "@media (min-width: 601px)": {
                  "max-width": "calc(33.33333% - 30px)",
                  "margin-left": "30px",
                  "margin-bottom": "50px",
                  "width": "calc(33.33333% - 30px)"
                },
                "imgWrapper": {
                  "position": "relative",
                  "height": "0",
                  "padding-top": "calc(75% + 15px)"
                },
                "img": {
                  "height": "calc(100% - 15px)",
                  "position": "absolute",
                  "left": "0",
                  "right": "0",
                  "top": "0"
                }
              },
              "button": {
                "background-color": "#005bab",
                ":hover": {
                  "background-color": "#00529a"
                },
                ":focus": {
                  "background-color": "#00529a"
                }
              }
            }
          },
          "cart": {
            "contents": {
              "button": true
            },
            "text": {
              "notice": ""
            },
            "styles": {
              "button": {
                "background-color": "#005bab",
                ":hover": {
                  "background-color": "#00529a"
                },
                ":focus": {
                  "background-color": "#00529a"
                }
              },
              "footer": {
                "background-color": "#ffffff"
              }
            }
          },
          "modalProduct": {
            "contents": {
              "img": false,
              "imgWithCarousel": true,
              "variantTitle": false,
              "buttonWithQuantity": true,
              "button": false,
              "quantity": false
            },
            "styles": {
              "product": {
                "@media (min-width: 601px)": {
                  "max-width": "100%",
                  "margin-left": "0px",
                  "margin-bottom": "0px"
                }
              },
              "button": {
                "background-color": "#005bab",
                ":hover": {
                  "background-color": "#00529a"
                },
                ":focus": {
                  "background-color": "#00529a"
                }
              }
            }
          },
          "toggle": {
            "styles": {
              "toggle": {
                "background-color": "#005bab",
                ":hover": {
                  "background-color": "#00529a"
                },
                ":focus": {
                  "background-color": "#00529a"
                }
              }
            }
          },
          "productSet": {
            "styles": {
              "products": {
                "@media (min-width: 601px)": {
                  "margin-left": "-30px"
                }
              }
            }
          }
        }
      });
    });
  }
})();
    /*]]>*/